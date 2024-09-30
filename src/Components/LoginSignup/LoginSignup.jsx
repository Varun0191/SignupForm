import "./LoginSignup.css";
import React, { useState ,useEffect} from 'react';
import { ReactComponent as UserIcon } from '../Assests/usericon.svg';
import { ReactComponent as EmailIcon } from '../Assests/emailicon.svg';
import { ReactComponent as PasswordIcon } from '../Assests/passwordicon.svg';
import { ReactComponent as MobileIcon } from '../Assests/mobileicon.svg';
import { ReactComponent as AddressIcon } from '../Assests/addresslocation.svg';

export default function LoginSignup() {
    const [heading, setHeading] = useState("Sign Up");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [activeButton, setActiveButton] = useState('signup'); // Default to 'signup'
    const [reg, setReg] = useState("Register");

    // Function to handle button clicks
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);

        setEmailError("");
    setPasswordError("");
    setNumberError("");
        // Update heading based on the button clicked
        if (buttonId === 'signup') {
            setHeading("Sign Up");
        } else if (buttonId === 'login') {
            setHeading("Login");
        }
    };
// Update 'reg' state based on 'activeButton'
useEffect(() => {
    if (activeButton === 'signup') {
        setReg("Register");
    } else if (activeButton === 'login') {
        setReg("Login");
    }
}, [activeButton]);

    const handleEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue)) {
            setEmailError("Enter Valid Email.");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);

        // Password validation
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(passwordValue)) {
            setPasswordError("Enter Valid Password.");
        } else {
            setPasswordError("");
        }
    };

    const handleNumber = (e) => {
        const numValue = e.target.value;
        setNumber(numValue);

        if (/^[0-9]{10}$/.test(numValue)) {
            setNumberError(""); // Clear error if valid
        } else {
            setNumberError("Enter Valid Phone Number.");
        }
    };

    

    return (
        <div className="container">
            <div className="header">
                {heading}
            </div>

            <div className="inputs">
                {/* Conditionally render fields based on activeButton */}
                
                {activeButton === 'signup' && (
                    <>
                        <div className="input">
                            <UserIcon />
                            <input type="text" placeholder="Enter Name" />
                        </div>
                        <div className="input">
                            <EmailIcon />
                            <input type="text" placeholder="Email" value={email} onChange={handleEmail} />
                        </div>
                        {emailError && (
                            <div className="error">
                                {emailError}
                            </div>
                        )}
                        <div className="input">
                            <PasswordIcon />
                            <input type="text" placeholder="Password" value={password} onChange={handlePassword} />
                        </div>
                        {passwordError && (
                            <div className="error">
                                {passwordError}
                            </div>
                        )}
                        <div className="input">
                            <MobileIcon />
                            <input type="text" placeholder="Phone number" value={number} onChange={handleNumber} />
                        </div>
                        {numberError && (
                            <div className="error">
                                {numberError}
                            </div>
                        )}
                        <div className="input">
                            <AddressIcon />
                            <textarea placeholder="Type Address..."></textarea>
                        </div>
                    </>
                )}

                {activeButton === 'login' && (
                    <>
                        <div className="input">
                            <EmailIcon />
                            <input type="text" placeholder="Email" value={email} onChange={handleEmail} />
                        </div>
                        {emailError && (
                            <div className="error">
                                {emailError}
                            </div>
                        )}
                        <div className="input">
                            <PasswordIcon />
                            <input type="text" placeholder="Password" value={password} onChange={handlePassword} />
                        </div>
                        {passwordError && (
                            <div className="error">
                                {passwordError}
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className="buttons">
                <button type="submit">
                    {reg}
                    </button>
            </div>

            <div className="but">
                <button
                    type="button"
                    className={activeButton === 'signup' ? 'active' : ''}
                    onClick={() => handleButtonClick('signup')}
                >
                    SignUp
                </button>
                <button
                    type="button"
                    className={activeButton === 'login' ? 'active' : ''}
                    onClick={() => handleButtonClick('login')}
                >
                    Login
                </button>
            </div>
        </div>
    );
}
