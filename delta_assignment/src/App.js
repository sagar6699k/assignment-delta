import './App.css';
import Homepage from './components/Homepage';
import { Switch, Route, Link } from "react-router-dom";
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <div className="App">
     <Switch>
				<Route exact path="/">
					<Homepage  />
        </Route>
        
				<Route exact path="/login">
					<LoginPage />
				</Route>

				<Route exact path="/signup">
					<SignupPage />
				</Route>
			
			</Switch>
    </div>
  );
}

export default App;
