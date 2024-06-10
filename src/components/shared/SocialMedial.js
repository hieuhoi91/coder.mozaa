import React from 'react';

import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/h%C3%B3ii-nee-855522259"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/hieuhoi91"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/hieu_hhoii"
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
