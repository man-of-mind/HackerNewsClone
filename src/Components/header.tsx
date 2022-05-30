import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./home/home.module.scss";

const Header = () => {
    return (
        <div>
            <h1>Hacker News Clone</h1>
            <div className={styles['sections']}>
                <NavLink 
                    to="/top-stories"
                    className={styles['link']}
                    style={isActive => ({
                        fontWeight: isActive ? "900" : "500",
                        
                      })}
                >TOP STORIES</NavLink>
                <NavLink 
                    to="/latest-stories"
                    className={styles['link']}
                    style={isActive => ({
                        fontWeight: isActive ? "900" : "500",
                        
                      })}
                >LATEST STORIES</NavLink>
                <NavLink 
                    to="/best-stories"
                    className={styles['link']}
                    style={isActive => ({
                        fontWeight: isActive ? "900" : "500",
                        
                      })}
                >BEST STORIES</NavLink>
            </div>
        </div>
    );
}

export default Header;