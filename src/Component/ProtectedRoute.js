import React from "react";
import { Redirect, Route } from "react-router-dom";


const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {

    console.log(isAuth);
    console.log(Component);
    console.log(rest);

    return (
        <Route
            {...rest} //get all the props
            render={(props) => {
                if (isAuth) return <Component {...props} />;                
                if (!isAuth)
                    return (
                        <Redirect to={{ path: "/loginpage", state: { from: props.location } },console.log(isAuth,props.location)} />

                    );
            }}
        />
    );
};
export default ProtectedRoute

// const ProtectedRoute = props => {
//     const { isAuth } = useAuth();

//     if (!isAuth) {
//         return <Redirect to="/"></Redirect>
//     }
//     return <Route {...props}></Route>
// };
    
