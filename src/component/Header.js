import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle("dark-mode");
    };

    // Toggle profile dropdown
    const toggleProfileDropdown = () => {
        setShowProfileDropdown((prevState) => !prevState);
    };

    return (
        <header className="header">
            {/* ------search bar------ */}
            <div className="InputContainer">
                <input
                    placeholder="Search.."
                    id="input"
                    className="input"
                    name="text"
                    type="text"
                />
            </div>

            <div className="header-icons">
                <h2><strong className="header-title">Welcome Admin</strong></h2>
                {/* -----light dark mode-------- */}
                <div className="container" >
                    <input type="checkbox" name="checkbox" id="checkbox" onClick={toggleDarkMode} aria-label="Toggle dark mode" />
                    <label htmlFor="checkbox" className="label">
                        {" "}
                    </label>
                </div>

                {/* Profile Avatar with Dropdown */}
                <div className="icon-container">
                    <button
                        className="profile-avatar"
                        onClick={toggleProfileDropdown}
                        aria-label="Profile menu"
                    >
                        <Image
                            width={32}
                            height={32}
                            src="/default avatar.jpg"
                            alt="Profile Avatar"
                            className="avatar"
                        />
                    </button>
                    {showProfileDropdown && (
                        <ul className="dropdown-menu profile-dropdown">
                            <li><strong>Admin</strong></li>
                            <li><FontAwesomeIcon icon={faUser} /> Profile</li>
                            <li><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}
