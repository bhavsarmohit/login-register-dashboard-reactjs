import React from "react";
import './LoginRegister.css'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");

    const [name, setName] = React.useState("");


    const navigate = useNavigate();

    const toggle = () => {
        document.querySelector('.img__btn').addEventListener('click', function () {
            document.querySelector('.cont').classList.toggle('s--signup');
        });
    }

    const signin = () => {
        if (email == 1234 && pass == 'abcd') {
            alert("Success");
            navigate('/dashboard');

        } else {
            alert("Failed");
        }
    }

    const signup = () => {
        alert(name + " " + email + " " + pass);
    }

    const unavailableAlert = () => {
        alert("Currently Unavailable!");
    }

    return (
        <>
            <p class="tip">Authentication System using ReactJs</p>
            <div class="cont">
                <div class="form sign-in">
                    <h2>Welcome back,</h2>
                    <label>
                        <span>Email</span>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
                    </label>
                    <p class="forgot-pass">Forgot password?</p>
                    <button type="button" class="submit" onClick={signin}>Sign In</button>
                    <button type="button" class="fb-btn" onClick={unavailableAlert}>Connect with <span>facebook</span></button>
                </div>
                <div class="sub-cont">
                    <div class="img">
                        <div class="img__text m--up">
                            <h2>New here?</h2>
                            <p>Sign up and discover great amount of new opportunities!</p>
                        </div>
                        <div class="img__text m--in">
                            <h2>One of us?</h2>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                        </div>
                        <div class="img__btn" onClick={toggle}>
                            <span class="m--up">Sign Up</span>
                            <span class="m--in">Sign In</span>
                        </div>
                    </div>
                    <div class="form sign-up">
                        <h2>Time to feel like home,</h2>
                        <label>
                            <span>Name</span>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
                        </label>
                        <button type="button" class="submit" onClick={signup}>Sign Up</button>
                        <button type="button" class="fb-btn" onClick={unavailableAlert}>Join with <span>facebook</span></button>
                    </div>
                </div>
            </div>

            <a href="https://dribbble.com/shots/3306190-Login-Registration-form" target="_blank" class="icon-link">
                <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png" />
            </a>
            <a href="https://twitter.com/NikolayTalanov" target="_blank" class="icon-link icon-link--twitter">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
            </a>

        </>
    )
}

export default Login;