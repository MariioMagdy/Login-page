import React from "react";
import "../../sass/pages/_login.scss";
import login from "../../assets/images/Login-img.png";

const Login = () => {
    return (
        <section className="login">
            <div className="login-details">
                <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/1000/svg"
                    fill="#fff"
                    className="svg-left"
                >
                    <circle cx="-20" cy="-35" r="50" />
                </svg>
                <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/1000/svg"
                    fill="#fff"
                    className="svg-right"
                >
                    <circle cx="100" cy="1" r="30" />
                </svg>

                <div className="login-header">
                    <h2>Login Page</h2>
                    <span>
                        Designed <span className="W-char">vv</span>&nbsp;ith Adobe XD
                    </span>
                </div>
                <div className="login-body">
                    <div className="row justify-content-center">
                        <div className="login-leftSide col-lg-6 col-sm-12">
                            <h3 className="text-start">Logo</h3>
                            <picture>
                                <img
                                    className="img-fluid"
                                    src={login}
                                    alt="Login-image"
                                />
                            </picture>
                        </div>
                        <div className="login-rightSide d-flex flex-column justify-content-center text-start col-lg-6 col-sm-12">
                            <div className="p-4">
                                <div>
                                    <h4>
                                        <span className="W-char">VV</span>&nbsp;elcome
                                        Back!
                                    </h4>
                                    <h6>Login to continue</h6>
                                </div>
                                <form onSubmit="">
                                    <div className="login-inputs d-flex flex-column gap-3 mb-3 ">
                                        <div className="input-field d-flex justify-content-center align-items-center">
                                            <span className="icon-user"></span>
                                            <input
                                                type="text"
                                                autoFocus
                                                placeholder="Write your Email"
                                            />
                                        </div>
                                        <div className="pass-field d-flex justify-content-center align-items-center">
                                            <span className="icon-lock"></span>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                id="password"
                                                name="password"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between pb-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    id="check-box"
                                                    name="check-box"
                                                />
                                            </div>
                                            <label htmlFor="check-box">Remember Me</label>
                                        </div>
                                        <span>Forget Password?</span>
                                    </div>
                                    <div className="text-center py-2">
                                        <button type="submit" className="btn text-center">
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="login-newUser text-center">
                                <a href="#">
                                    Ne<span className="W-char">VV</span>
                                    &nbsp;User?&nbsp;Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer d-flex justify-content-around pb-3">
                    <span>Copyright Reserved&copy;2021</span>
                    <span>Terms and Conditions | Privacy Policy</span>
                </div>
            </div>
        </section>
    );
};

export default Login;