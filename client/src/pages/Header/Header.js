import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");

    const location = useLocation();
    useEffect( () => {
        if (location.pathname === "/"){
            setActiveTab("Home");
        } else if (location.pathname === "/register"){
            setActiveTab("AddUser");
        }
    })


    return (
        <div className='header'>
            <p className='logo'>NinjaGo</p>
            <div className='header-right'>
                <Link to='/'>
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>
                        Home
                    </p>
                </Link>
                <Link to='/register'>
                    <p className={`${activeTab === "AddUser" ? "active" : ""}`} onClick={() => setActiveTab("AddUser")}>
                        Add Ninja
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Header