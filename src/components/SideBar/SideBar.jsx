import React from "react";
import './SideBar.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { NavLink } from 'react-router-dom';

const SideBar = ({ children }) => {

    const navigate = useNavigate();

    const signout = () => {
        navigate('/')
    }





    return (
        <>


            {/* <div> */}
            {/* <div class="area" style={{ width: "200px" }}></div> */}
            <div style={{ width: "display: flex" }}>
                <nav class="main-menu">
                    <ul>
                        <li>
                            {/* <Link to="/home"> */}
                            <NavLink to={'/home'} key={'home'} className="link" activeclassName="active">
                                {/* < a href="#" onClick={() => navigate('home')}> */}
                                <i class="fa fa-home fa-2x"></i>
                                <span class="nav-text">

                                    Home

                                </span>
                                {/* </a> */}
                            </NavLink>
                            {/* </Link> */}
                        </li>

                        <li>
                            <NavLink to={'/documentation'} key={'home'} className="link" activeclassName="active">
                                <i class="fa fa-info fa-2x"></i>
                                <span class="nav-text">
                                    Documentation
                                </span>
                            </NavLink>
                        </li>
                    </ul>

                    <ul class="logout">
                        <li>
                            <a href="/loginregister" onClick={signout}>
                                <i class="fa fa-power-off fa-2x"></i>
                                <span class="nav-text">
                                    Logout
                                </span>
                            </a>
                        </li>
                    </ul>

                </nav>
                <main >{children}</main>
            </div>

            {/* </div> */}


        </>
    )
}

export default SideBar;