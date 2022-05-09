import { useNavigate } from "react-router-dom"



export const LoginScreen = () => {

  const navigate= useNavigate();

  const handleLogin =() => {
    navigate('/',{replace: true})
  }


    return (
      <div className="container mt-5">
          <h1>Login</h1>
          <hr/>
          <buton 
            className="btn btn-primary"
            onClick={handleLogin}
          >Login</buton>

      </div>
    )
  }
  