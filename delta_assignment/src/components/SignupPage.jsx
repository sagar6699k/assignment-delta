import "./signupPage.css"
import { useState } from "react";
import axios from "axios";
import { get_token } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const SignupPage = () => {

    const token = useSelector((store) => store.Token);
    const history = useHistory();
    const dispatch = useDispatch();




  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const Signup = () => {
    const { username, email, mobile, password } = user;
    if ((username, email, mobile, password)) {
      axios
        .post("http://localhost:1983/user/signup", user)
        .then((res) => console.log(res.data))
        .then(()=>{dispatch(get_token("#@123"))})
        .then(()=>{
                history.push('/');
        })
    } else {
      alert("Invalid");
    }
  };

  return (
    <div className="signup_div">
      <h1>Signup-Page</h1>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        className="signup_input"
        placeholder="Enter username"
      />

      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        className="signup_input"
        placeholder="Enter email"
      />
      
      <input
        type="number"
        name="mobile"
        value={user.mobile}
        onChange={handleChange}
        className="signup_input"
        placeholder="Enter mobile"
      />
      
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        className="signup_input"
        placeholder="Enter Password"
      />
      
      <button onClick={Signup}>
        Submit
      </button>
    </div>
  );
};

export default SignupPage;
