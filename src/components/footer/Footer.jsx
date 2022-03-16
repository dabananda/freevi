import React from 'react';
import './footer.scss'

const Footer = () => {
  return (
    <div className="text-center">
      <p className="text-muted m-0">
        Photos and videos provided by{' '}
        <a href="https://www.pexels.com/" target="_blank">
          Pexels
        </a>
      </p>
      <p className="text-muted m-0">
        Copyright &copy; 2022 |{' '}
        <a href="https://dmitra.netlify.app/" target="_blank">
          Dabananda Mitra
        </a>{' '}
        | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
