import React, { useEffect, useState } from "react";
import "./homepage.css";
import delete_icon from "../images/delete_icon.png";
import axios from "axios";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    add_member_error,
    add_member_success,
    del_member_error,
    del_member_loading,
    del_member_success,
    get_member_error,
    get_member_loading,
    get_member_success,
    get_token,
    update_member_success,
} from "../redux/actions";

const Homepage = () => {
    const { loading, data } = useSelector((store) => store.Team_Member.team);
    const token = useSelector((store) => store.Token);
    const dispatch = useDispatch();

    const [modalIsOpen, setmModalIsOpen] = useState(false);
    console.log("data:", data);

    const [member, setMember] = useState({
        name: "",
        company: "",
        status: "",
        notes: "",
    });

    const [status, setStatus] = useState(null);
    const history = useHistory();

    const redirect = () => {
        history.push("/signup");
    };

    useEffect(() => {
        getData();
    }, []);

    // useEffect(() => {
    //     handleStatus()

    // }, [status])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember({
            ...member,
            [name]: value,
        });
    };

    const getData = async () => {
        dispatch(get_member_loading());

        try {
            const Data = await axios.get("http://localhost:3001/members");
            dispatch(get_member_success(Data.data));
        } catch (error) {
            dispatch(get_member_error(error));
        }
    };

    const AddMember = async () => {
        try {
            const data = await axios.post("http://localhost:3001/members", member);

            setmModalIsOpen(false);
            getData();
            dispatch(add_member_success(data));
        } catch (error) {
            dispatch(add_member_error(error));
        }
    };

    const handleDelete = async (element) => {
        dispatch(del_member_loading());

        try {
            const { data } = await axios.delete(
                `http://localhost:3001/members/${element.id}`
            );

            dispatch(del_member_success(data));
            getData();
        } catch (error) {
            dispatch(del_member_error(error));
        }

        getData();
    };

    const handleStatus = async (e) => {
        setStatus(e.target.value);
        const Data = await axios.get("http://localhost:3001/members");
        const updated_member = Data.data.filter(
            (element) => element.status !== status
        );
        console.log(updated_member);
        dispatch(update_member_success(updated_member));
    };

    // const handleCompany = async (e) => {
    //     setStatus(e.target.value);
    //     const Data = await axios.get("http://localhost:3001/members");
    //     const updated_member = Data.data.filter(
    //         (element) => element.company === status
    //     );
    //     console.log(updated_member);
    //     dispatch(update_member_success(updated_member));
    // };

    return (
        <div className="container">
            <div className="heading_div">
                <div>
                    <h2>Team Members</h2>
                    <button
                        onClick={() => {
                            setmModalIsOpen(true);
                        }}
                    >
                        Add Members +
                    </button>
                </div>
                <div>
                    <button onClick={redirect}>Signup</button>
                    <Link to="/login">
                        <button onClick={()=>dispatch(get_token(null))}>{!token ? "Login" : "Logout"}</button>
                    </Link>
                </div>
            </div>

            <div className="fiter_div">
                <select name="company" id="">
                    <option value="none" selected disabled hidden>
                        Company
                    </option>
                    {data.map((element) => (
                        <option value={element.company}>{element.company}</option>
                    ))}
                </select>

                <select onChange={handleStatus} name="Status" id="">
                    <option value="none" selected disabled hidden>
                        Status
                    </option>
                    <option value="active">active</option>
                    <option value="closed">closed</option>
                </select>
            </div>

            <hr />

            {
                !token && <div>
                    <h2>Please Signup or Login</h2>
                    <h3>steps to run this application</h3>
                    <p>step1: for UI , 'npm start' </p>
                    <p>step2: to run backend , 'npm start' </p>
                    <p>step3: to run json server , 'json-server db.json --port 3001 --watch' </p>
                </div>
            }





            {
            
            token &&    <div className="content_div">
            <Modal
                className={"modal"}
                isOpen={modalIsOpen}
                onRequestClose={() => {
                    setmModalIsOpen(false);
                }}
            >
                <h3>Add Members</h3>

                <div>
                    <label>Name</label>
                    <br />
                    <input
                        name="name"
                        type="text"
                        value={member.name}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label>Company</label>
                    <br />
                    <input
                        name="company"
                        type="text"
                        value={member.company}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label>Status</label>
                    <br />
                    <input
                        name="status"
                        type="text"
                        value={member.status}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label>Notes</label>
                    <br />
                    <input
                        name="notes"
                        type="text"
                        value={member.notes}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <div className="button_div">
                        <button
                            id="cancel_btn"
                            onClick={() => {
                                setmModalIsOpen(false);
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                AddMember();
                            }}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </Modal>

            <div className="members_list">
                <div className="member_div">
                    <span className="name_span member_head">Name</span>
                    <span className="name_span member_head">Company</span>
                    <span className="name_span member_head">Status</span>
                    <span className="name_span member_head">Updated Last</span>
                    <span className="name_span member_head">Notes</span>
                </div>

                {!data ? (
                    <h2>Loading..</h2>
                ) : (
                    data.map((element) => (
                        <div key={element.id} className="member_div">
                            <span className="name_span">{element.name}</span>
                            <span className="name_span">{element.company}</span>
                            <span className="name_span">{element.status}</span>
                            <span className="name_span">07/07/2021</span>
                            <span className="name_span">{element.notes}</span>
                            <img
                                onClick={() => {
                                    handleDelete(element);
                                }}
                                className="del_icon"
                                src={delete_icon}
                                alt=""
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
                
                
            }
         
        </div>
    );
};

export default Homepage;
