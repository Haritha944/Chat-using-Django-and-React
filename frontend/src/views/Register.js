import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const Register = () => {
  const [email,setEmail]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [password2,setPassword2]=useState('')

  const {registerUser}=useContext(AuthContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    registerUser(email,username,password,password2)
  }
  console.log(registerUser)
  return (
    <div>
      <div>
      <>
        <section className="vh-100" style={{ backgroundColor: "#B2E1F5 " }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ backgroundColor: "#ffffff " }} >
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-flex justify-content-center align-items-center">
                      <img
                        src="https://i.pinimg.com/originals/de/d0/bb/ded0bbdd8485e424327257405a86a884.gif"
                        alt="login form"
                        className="img-fluid px-5"
                        style={{ width: '700px', height: '500px' }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ backgroundColor: "#ffffff " }}>
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={handleSubmit}>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                              className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            />
                            <span className="h2 fw-bold mb-0">
                              Welcome to <b> WeChat👋</b>
                            </span>
                          </div>
                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: 1 }}
                          >
                            Sign Up
                          </h5>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Email Address"
                              onChange={e => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Username"
                              onChange={e => setUsername(e.target.value)}

                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Password"
                              onChange={e => setPassword(e.target.value)}

                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              className="form-control form-control-lg"
                              placeholder="Confirm Password"
                              onChange={e => setPassword2(e.target.value)}

                            />
                          </div>
                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-dark btn-lg btn-block"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>
                          <a className="small text-muted" href="#!">
                            Forgot password?
                          </a>
                          <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                            Already have an account?{" "}
                            <Link to="/login" style={{ color: "#393f81" }}>
                              Login Now
                            </Link>
                          </p>
                          <a href="#!" className="small text-muted">
                            Terms of use.
                          </a>
                          <a href="#!" className="small text-muted">
                            Privacy policy
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-light text-center text-lg-start">
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2019 - till date Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              desphixs.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
    </>

    </div>
    </div>
  )
}

export default Register