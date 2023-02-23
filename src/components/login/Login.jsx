import React, { useRef, useState } from "react";
import "../../sass/pages/_login.scss";
import login from "../../assets/images/Login-img.png";
import Validation from "./Validation";

const Login = () => {
    const [lang, setLang] = useState(true);
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const changLang = () => {
        setLang(!lang);
    };
    //handel inputs validation
    // const username = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        // console.log(username);
        // const data = new FormData(e.target);
        // console.log(Object.fromEntries(data.entries()));
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <>
            {lang ? (
                <section className="login" id="content">
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
                                Designed <span className="W-char">vv</span>&nbsp;ith Adobe
                                XD
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
                                            <div className="d-flex justify-content-between">
                                                <h4>
                                                    <span className="We-char">VV</span>
                                                    &nbsp;elcome Back!
                                                </h4>
                                                <span
                                                    className="fw-bold lang"
                                                    onClick={changLang}
                                                >
                                                    {lang ? "AR" : "EN"}
                                                </span>
                                            </div>
                                            <h6>Login to continue</h6>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="login-inputs d-flex flex-column gap-3 mb-3 ">
                                                <div className="input-field d-flex justify-content-center align-items-center">
                                                    <span className="icon-user"></span>
                                                    <input
                                                        autoFocus
                                                        placeholder="Write your Email"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                                <span className="errorMsg">
                                                    {errors.email && (
                                                        <p>{errors.email}</p>
                                                    )}
                                                </span>
                                                <div className="pass-field d-flex justify-content-center align-items-center">
                                                    <span className="icon-lock"></span>
                                                    <input
                                                        type="password"
                                                        placeholder="**************"
                                                        id="password"
                                                        name="password"
                                                        value={values.password}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                                <span className="errorMsg">
                                                    {errors.password && (
                                                        <p>{errors.password}</p>
                                                    )}
                                                </span>
                                            </div>
                                            <div className="d-flex text-center justify-content-between pb-4">
                                                <div className="d-flex align-items-center gap-1">
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id="check-box"
                                                            name="check-box"
                                                        />
                                                    </div>
                                                    <label htmlFor="check-box">
                                                        Remember Me
                                                    </label>
                                                </div>
                                                <span>Forget Password?</span>
                                            </div>
                                            <div className="text-center py-2">
                                                <button
                                                    type="submit"
                                                    className="btn text-center"
                                                >
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
            ) : (
                <section className="login" id="content" dir="rtl">
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
                            <h2>تسجيل الدخول</h2>
                            <span>
                                Adobe XD <span>مصمم باستخدام</span>
                            </span>
                        </div>
                        <div className="login-body">
                            <div className="row justify-content-center">
                                <div className="login-leftSide col-lg-6 col-sm-12">
                                    <h3 className="text-end">شعار</h3>
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
                                            <div className="d-flex justify-content-between">
                                                <h4>مرحبًا بعودتك!</h4>
                                                <span
                                                    className="fw-bold lang"
                                                    onClick={changLang}
                                                >
                                                    {lang ? "AR" : "EN"}
                                                </span>
                                            </div>
                                            <h6 className="text-end">
                                                سجل الدخول للمتابعة
                                            </h6>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="login-inputs d-flex flex-column gap-3 mb-3 ">
                                                <div className="input-field d-flex justify-content-center align-items-center">
                                                    <span className="icon-user"></span>
                                                    <input
                                                        type="email"
                                                        placeholder="اكتب البريد الإلكتروني الخاص بك"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                                <span className="errorMsg">
                                                    {!lang && errors.email ? (
                                                        <p>الحساب مطلوب</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </span>
                                                <div className="pass-field d-flex justify-content-center align-items-center">
                                                    <span className="icon-lock"></span>
                                                    <input
                                                        type="password"
                                                        placeholder="كلمه المرور"
                                                        id="password"
                                                        name="password"
                                                        value={values.password}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                                <span className="errorMsg">
                                                    {!lang && errors.password ? (
                                                        <p>كلمة المرور غير صحيحة</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </span>
                                            </div>
                                            <div className="d-flex text-center justify-content-between pb-4">
                                                <div className="d-flex align-items-center gap-1">
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id="check-box"
                                                            name="check-box"
                                                        />
                                                    </div>
                                                    <label htmlFor="check-box">
                                                        تذكرني
                                                    </label>
                                                </div>
                                                <span>هل نسيت كلمة السر؟</span>
                                            </div>
                                            <div className="text-center py-2">
                                                <button
                                                    type="submit"
                                                    className="btn text-center"
                                                >
                                                    تسجيل الدخول
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="login-newUser text-center">
                                        <a href="#">أنشاء حساب جديد</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer d-flex justify-content-around pb-3">
                            <span>Copyright Reserved&copy;2021</span>
                            <span>Terms and Conditions | Privacy Policy</span>
                        </div>
                    </div>
                    <div className="circle">
                        <div></div>
                    </div>
                </section>
            )}
        </>
    );
};
export default Login;
