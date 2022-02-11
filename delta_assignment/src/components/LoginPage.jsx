import "./loginPage.css"
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { get_token } from "../redux/actions";


const LoginPage = () => {

    const token = useSelector((store) => store.Token);
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(token);
    const [user, setUser] = useState({
        email: String,
        password: String
    })

    const handleChange = (e) => {
        
        const { name, value } = e.target
        setUser({
            ...user,
            [name] : value
        })

    }



    const Login = () => {
        const {email, password } = user;
      
        if (email ,password) {
            axios.post("http://localhost:1983/user/login", user)
            .then(res=> alert(res.data.message) )
            .then(()=>{dispatch(get_token("#@123"))})
            .then(()=>{
                history.push('/');
            })
        } else {
            alert("Invalid")
           
        }
    }


    return (
    <div className="login_div">
        <h1>Login-Page</h1>
    
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        className="login_input"
        placeholder="Enter email"
      />
      
      
      
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        className="login_input"
        placeholder="Enter Password"
      />
      
      <button onClick={()=>{Login()}}>
        Submit
      </button>
    </div>
       
    );
};

export default LoginPage;
