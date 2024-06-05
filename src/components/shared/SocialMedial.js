import React from "react";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a
                    href="https://www.linkedin.com/in/coderhassan"
                    target="_blank"
                    rel="noreferrer"
                    className="app__flex"
                >
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a
                    href="https://www.facebook.com/coderhassan"
                    target="_blank"
                    rel="noreferrer"
                    className="app__flex"
                >
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="app__flex"
                >
                    <BsInstagram />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
