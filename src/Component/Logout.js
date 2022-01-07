import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import { UserContext } from '../App'

const Logout = () => {
    const history = useHistory()
    
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        axios.get(`/logout`)
            .then(() => {
                dispatch({type: 'user', payload:false})
                history.push('/loginpage')                
            })
            .catch((err) => {
                history.push('/loginpage')
                console.log(err);
            })
    }, [])
 
    return (
        <>

        </>
        
    )
}

export default Logout