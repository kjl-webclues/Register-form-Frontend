import React, { useContext } from "react"
import { useFormik } from "formik"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { UserContext } from "../App"



const LoginForm = () => {
    const { dispatch } = useContext(UserContext)
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log("values", values);
            // for employee login
            axios.post(`/signIn`, values)
                .then(() => {
                    dispatch({ type:'user', payload:true })
                    alert('Login Successfull')
                    formik.handleReset();
                    history.push('/dashbord')
                })
                .catch((err) => {
                    window.alert("Invalid Credientials!")
                    console.log(err);
                })            
        }
    })
 
    return (
        <>
            <div>            
                    <h2>Login Form</h2>
                    <form className="loginForm" onSubmit={formik.handleSubmit}>
                        <input type="text"
                            name="email"
                            placeholder='Enter Email Address'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        /><br />
                        
                        <input type="password"
                            name="password"
                            placeholder='Enter Password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        /><br />
                        <button className='login' type='submit'>Login</button>                    
                    </form>
            </div>
        </>
    )
}
export default LoginForm