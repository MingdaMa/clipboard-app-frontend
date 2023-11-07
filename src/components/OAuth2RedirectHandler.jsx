import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constants";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OAuth2RedirectHandler = () => {
    const location = useLocation()
    const [token, setToken] = useState('')
    const [error, setError] = useState('')

    const getUrlParameter = (name) => {
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : results[0].split('=')[1];
    }

    useEffect(() => {
        const tokenStr = getUrlParameter('token')
        const errorStr = getUrlParameter('error')
        setToken(tokenStr)
        setError(errorStr)
        localStorage.setItem(ACCESS_TOKEN, tokenStr)
    }, [])

    if (localStorage.getItem(ACCESS_TOKEN)) {
        return <Navigate to='/' replace={true}/>
    } else {
        return <Navigate to='/login' replace={true} state={error}/>
    }
}

export default OAuth2RedirectHandler