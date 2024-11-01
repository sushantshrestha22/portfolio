import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>Copyright © 2024 Sush</div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookOutlinedIcon className="w-6 h-6 text-white hover:text-gray-400" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="w-6 h-6 text-white hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="w-6 h-6 text-white hover:text-gray-400" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="w-6 h-6 text-white hover:text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default Footer;