import React, { createContext, useReducer } from 'react'
import {  Switch, Route } from 'react-router-dom'
import RegForm from './Component/RagisterForm'
import LoginForm from './Component/LoginForm'
import Dashbord from './Component/Dashbord'
import Logout from './Component/Logout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar'
import ProtectedRoute from './Component/ProtectedRoute'
import { initialState, reducer } from './Reducer/reducer'
// import useAuth from './useAuth'


export const UserContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>            
        <Navbar />                        
          <Switch>
            <Route exact path='/' component={RegForm}></Route>
            <Route path='editUser/:id' component={RegForm}></Route>
            <ProtectedRoute path='/loginpage' component={LoginForm} isAuth={!state}></ProtectedRoute>        
            <ProtectedRoute exact path='/dashbord' component={Dashbord} isAuth={state} ></ProtectedRoute>
            <ProtectedRoute exact path='/Logout' component={Logout} isAuth={state}></ProtectedRoute>
        </Switch>
      </UserContext.Provider>
      
    </>
  );
};
export default App