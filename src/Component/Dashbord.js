import React, { useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {get_User, delete_User} from '../Actions/userAction'


const Dashbord = () => {

    const Apidispatch = useDispatch();

    const userData = useSelector(state => state.userData)
    console.log(userData);


    const history = useHistory() 
    
    //For get User after Login for particular token
    useEffect(() => {
        console.log("getdata");
        Apidispatch(get_User())    
    }, [])
    
    //For Delete User
    const deleteUser = (id) => {        
        Apidispatch(delete_User(id))
        window.location.reload();
        history.push('/registerpage')
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

             <div className='col-md-12  mx-auto'>
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
                                    {userData.map((elem) => {
                                        return (
                                            <tr key={elem._id}>                                        
                                                <td>{elem.name}</td>
                                                <td>{elem.phone}</td>
                                                <td>{elem.profession}</td>
                                                <td>{elem.salary}</td>
                                                <td>{elem.email}</td>
                                                <td>{elem.password}</td>
                                                <td>{elem.confirmpassword}</td>
                                                <td><NavLink to={`/editUser/:?id=${elem._id}`}><button className='editbtn'>Edit</button></NavLink> &nbsp;
                                                <button className='deletebtn' onClick={() => deleteUser(elem._id)} >Delete</button></td>                                                        
                                            </tr> 
                                        )
                                    })}
                                                                                                                                                                                            
                                </tbody>
                        </table>
                </div>
        </>
    )
}
export default Dashbord
