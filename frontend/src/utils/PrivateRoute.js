import {Route,Navigate} from 'react-router-dom'
import {useContext} from 'react'
import Authcontext from '../context/AuthContext'

const PrivateRoute = ({children,...rest})=>{
    let {user} = useContext(Authcontext)
    return <Route {...rest}>{!user ? <Navigate to="/login"/>:children}</Route>
}


export default PrivateRoute