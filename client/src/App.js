import React,{ useState,useEffect } from 'react';
import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import TabOne from './pages/tabOne/TabOne';
import TabTwo from './pages/tabTwo/TabTwo';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/authRedux';

function App() {
  const user = sessionStorage.getItem('admin');
  const [newUser,setNewUser] = useState(false)
  const isloggedin = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()
useEffect(() => {
const test = async() => {
  console.log(user)
 const res = await axios.get("https://floating-hamlet-71176.herokuapp.com/api/admin/get/"+sessionStorage.getItem("admin"))
   if(res.data === "Not verified"){
     dispatch(authActions.logout())
   }
}
test()
},[user])
useEffect(() => {
  const token = sessionStorage.getItem('token')
  if(token){
dispatch(authActions.login())
  }
},[])
  return (
    
    <Router>
      <Switch>
        
          <Route exact path="/">
            {isloggedin ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!isloggedin ? <Login /> : <Redirect to="/" />}
          </Route>
          <Route path="/tab-one">
            {isloggedin ? <TabOne /> : <Redirect to="/login" />}
          </Route>
          <Route path="/tab-two">
            {isloggedin ? <TabTwo /> : <Redirect to="/login" />}
          </Route>
        
      </Switch>
    </Router>
    
  );
}

export default App;
