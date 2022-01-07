import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const Dashbord = () => {

    const [employee, setEmployee] = useState([])

    // const { _id, name, phone, profession, salary, email, password, confirmpassword } = employee;

    const history = useHistory() 
    
    //For get User after Login for particular token
    useEffect(() => {
        axios.get(`/dashbord`)
            .then((res) => {
                setEmployee(res.data)
            })
            .catch((err) => {
                console.log(err)
                history.push('loginpage')
        })
    }, [])

    //without sign in do not go to dashbord page
    // useEffect(() => {
    //     axios.get('/dashbord')
    //         .then((res) => {
    //             setEmployee(res.data)
    //         })
    //         .catch(() => {
    //             history.push('/LoginForm')               
    //     })
    // }, [])
    
    const deleteUser = (id) => {
        axios.delete(`/deleteUser/${id}`)
            .then((res) => {
                console.log('res', res)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (        
        <>  
            <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 my-5 text-center'>
                            <h1> Welcome to Dashbord</h1>            
                        </div>
                    </div>                    
            </div>                                           

             <div className='col-md-6 mx-auto'>
                        <table className='table table-hover'>
                                <thead className='text-black text-center'>
                                    <tr>                                        
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Phone</th>
                                        <th scope='col'>Profession</th>
                                        <th scope='col'>Salary</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Password</th>
                                        <th scope='col'>Confirmpassword</th>
                                        <th scope='col'>Action</th>                                                        
                                    </tr>
                                </thead>
                                <tbody>
                                        
                                            
                                                
                                                        <tr>
                                                            <td>{employee.name}</td>
                                                            <td>{employee.phone}</td>
                                                            <td>{employee.profession}</td>
                                                            <td>{employee.salary}</td>
                                                            <td>{employee.email}</td>
                                                            <td>{employee.password}</td>
                                                            <td>{employee.confirmpassword}</td>
                                                            <td><NavLink to={`/?id=${employee._id}`}><button className='editbtn'>Edit</button></NavLink></td>
                                                            <td><button className='deletebtn' onClick={() => deleteUser(employee._id)} >Delete</button></td>                                                        
                                                        </tr>    
                                                    
                                            
                                         
                                </tbody>
                        </table>
                </div>
        </>
    )
}
export default Dashbord
