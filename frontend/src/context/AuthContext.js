import {createContext,useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
const swal=require('sweetalert2')



const AuthContext = createContext();


export const AuthProvider = ({children}) =>{
    const [authTokens,setAuthTokens] = useState(()=>
    localStorage.getItem("authTokens")
     ? JSON.parse(localStorage.getItem("authTokens"))
    :null
);

    const [user,setUser] = useState(()=>
    localStorage.getItem("authTokens")
? jwtDecode(localStorage.getItem("authTokens"))
      :null
);

    const [loading,setLoading]=useState(true);
    const navigate = useNavigate();

    const loginUser = async (email,password)=>{
        const response = await fetch("http://127.0.0.1:8000/api/token/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        })
    const data = await response.json()
    console.log(data);
    if (response.status===200){
        console.log("Logged In")
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem("authTokens",JSON.stringify(data))
        navigate("/")
        swal.fire({
            title:"Login successfull",
            icon:"Success",
            toast:true,
            timer:6000,
            position:"top-right",
            timerProgressBar:true,
            showConfirmButton:false,

        })
    }
    else{
        console.log(response.status)
        console.log("There was a server issue")
        swal.fire({
            title:"Not valid enters",
            icon:"error",
            toast:true,
            timer:6000,
            timerProgressBar:true,
            showConfirmButton:false
        })
    }
    }
    const registerUser = async (email,username,password,password2)=>{
        const response = await fetch("http://127.0.0.1:8000/api/register/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,username,password,password2
            })
        })
        if (response.status === 201){
            navigate("/login")
            swal.fire({
                title:"Registration Successfull, Login Now",
                icon:"success",
                toast:true,
                timer:6000,
                position:'top-right',
                timerProgressBar:true,
                showConfirmButton:false,
            })
        }
    }
    const logoutUser = ()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        navigate("/login")
        swal.fire({
            title:"You have been logged out",
            icon:"success",
            toast:true,
            timer:6000,
            position:'top-right',
            timerProgressBar:true,
            showConfirmButton:false,
        })
    }
    const contextData={
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
    }

    useEffect(()=>{
        if (authTokens){
            setUser(jwtDecode(authTokens.access))
        }
        setLoading(false)
    },[authTokens,loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null :children}
        </AuthContext.Provider>
    )
}


export default AuthContext;