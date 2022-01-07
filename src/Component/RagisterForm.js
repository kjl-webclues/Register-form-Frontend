import { useFormik} from 'formik'
import { NavLink, useHistory } from 'react-router-dom'
import {useEffect} from 'react'
import queryString from 'query-string'
import axios from 'axios'
import {useState} from 'react'



const RegForm = () => {
    const { id } = queryString.parse(window.location.search);
    console.log("id", id);
    const history = useHistory();
    const [employee, setEmployee] = useState([])

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            profession: "",
            salary: "",
            email: "",
            password: "",
            confirmpassword: "",
        },
        onSubmit: (values) => { console.log('post method', values);
            if (id) {
                axios.put(`/editUser/${id}`, values)
                    .then(() => {
                        history.push('/dashbord')
                })
                    .catch(err => {
                    console.log(err)
                    })
                // for add new User
            } else {
                axios.post('/signUp', values)
                    .then((res) => {
                        alert("Registration Successful");
                        history.push('/loginpage')
                        formik.handleReset()
                    })
                    .catch(err => {
                        alert("Invalid Registration")
                        console.log(err);
                })
            }            
        }        
    });
    //get selectedEdit object
    useEffect(() => {
        if (id) {
            axios.get(`/editUser/${id}`)
            .then((res) => {
                setEmployee(res.data)
            })
            .catch(error => {
            console.log(error)
        })
        }            
    }, [id])

    //set update values
    useEffect(() => {
        if (id && employee) {
            formik.setValues(employee)
        }
    }, [employee])

    return (
        <>
            <div>
                    <h1>Registration Form</h1>                    
                <form onSubmit={formik.handleSubmit}>                    
                    <input type="text"
                        name="name"
                        placeholder='Enter Employee Name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    /><br />
                    
                    <input type="number"
                        name="phone"
                        placeholder='Enter phone'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    /><br />
                    
                    <input type="text"
                        name='profession'
                        placeholder='Enter Profession'
                        onChange={formik.handleChange}
                        value={formik.values.profession}
                    /><br />
                    
                    <input type="number"
                        name='salary'
                        placeholder='Enter salary'
                        onChange={formik.handleChange}
                        value={formik.values.salary}
                    /><br />
                    
                    <input type="text"
                        name='email'
                        placeholder='Enter Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    /><br />
                    
                    <input type="password"
                        name='password'
                        placeholder='Enter password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    /><br />
                    
                    <input type="password"
                        name='confirmpassword'
                        placeholder='Enter confirm password'
                        onChange={formik.handleChange}
                        value={formik.values.confirmpassword}
                    /><br />

                     {!id ? (
                       <button className='signIn' type='submit'>Submit</button> ) :

                            (<button className='signIn' type='update'>Update</button>)} 
                    
                    <button onClick={formik.handleReset} className='cancel' type='reset'>Cancel</button>
                </form><br/>
                <div className=''>
                    <p>already registered <NavLink to='/loginpage'>Login</NavLink></p>
                    
                </div>
            </div>
        </>
    )
}

export default RegForm



