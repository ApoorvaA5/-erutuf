import React from 'react';

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <a
      href={href}
      className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium relative group"
    >
      {title}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </a>
  );
};

export default NavLink;