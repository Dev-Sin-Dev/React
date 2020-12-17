import React from "react";
import "./navigation.css";
function navigation() {
    return (
        <>
            <nav className="navbar">
                <div className="class-select">
                    <select>
                        <option value="start">Wybierz klasę postaci</option>
                        <option value="bb">Barbarzyńca</option>
                        <option value="ryc">Rycerz</option>
                        <option value="sh">Sheed</option>
                        <option value="dr">Druid</option>
                        <option value="mo">Mag Ognia</option>
                        <option value="uk">Łucznik</option>
                        <option value="vd">VooDoo</option>
                    </select>
                    <span className="arrow"></span>
                </div>
            </nav>
        </>
    )
}

export default navigation
