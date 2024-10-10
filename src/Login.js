import {useState} from "react";

const Login= ()=> {
    const[username,setusername]=useState("")
    const[password,setpassword]=useState("")

    const handleSubmit=(event)=>{
        setusername(event.target.value)
        setpassword(event.target.value)
    }

    const handlechangeusername=(event)=>{
        setusername(event.target.value)
        }
    const handlechangepassword=(event)=>{
        setpassword(event.target.value)
    }

    return(
        <div>
            
            <h1 id="Head">
                Login
            </h1>
            <form onSubmit={handleSubmit}>
            <label>username:</label>
            <input id="Name" type="text" value={username} onchange={(event)=>handlechangeusername(event.target.value)}/>
            <br></br>
            <label>password:</label>
            <input id="Pass" type="password" value={password} onchange={(event)=>handlechangepassword(event.target.value)}/>
            <br></br>
            <button id="Sum" type="submit">
                Login
            </button>
            <p id="para">
                p
            </p>
            </form>
         </div>
    )
}

export default Login;