import React, { useRef, useState } from "react";
import login from "../../assets/images/Login-img.png";
import Validation from "./Validation";
import LoginAr from "./LoginAr";
import LoginEn from "./LoginEn";

const Login = () => {
    const [lang, setLang] = useState(true);
    const [errors, setErrors] = useState({});

    //This Fun swap between AR , EN
    const changLang = () => {
        setLang(!lang);
    };

    //This Fun check to Get the data either arabic or english and validate the inputs
    const handleForm = (arabicValues, englishValues) => {
        englishValues
            ? setErrors(Validation(englishValues))
            : setErrors(Validation(arabicValues));
        // if (englishValues) {
        //     setErrors(Validation(englishValues));
        //     if (Object.keys(errors).length === 0) {
        //         englishValues.email = "";
        //         englishValues.password = "";
        //     }
        // } else if (arabicValues) {
        //     setErrors(Validation(arabicValues));
        //     if (Object.keys(errors).length === 0) {
        //         arabicValues.email = "";
        //         arabicValues.password = "";
        //     }
        // }
    };

    return (
        <>
            {lang ? (
                <LoginEn
                    login={login}
                    changLang={changLang}
                    lang={lang}
                    handleForm={handleForm}
                    errors={errors}
                />
            ) : (
                <LoginAr
                    login={login}
                    changLang={changLang}
                    lang={lang}
                    handleForm={handleForm}
                    errors={errors}
                />
            )}
        </>
    );
};
export default Login;
