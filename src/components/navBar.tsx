/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

type NavItemProps = {
  icon: (props: IconProps) => any;
  label: string;
};

/* const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 md:top-0 md:bottom-auto left-0 w-full bg-white border-t md:border-b md:border-t-0 shadow-md z-50">
      <ul className="flex justify-around md:justify-center md:gap-16 p-2">
        <NavItem icon={HomeIcon} label="Accueil" />
        <NavItem icon={SearchIcon} label="Recherche" />
        <NavItem icon={BellIcon} label="Notifications" />
        <NavItem icon={UserIcon} label="Profil" />
      </ul>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label }) => {
  return (
    <li className="group flex flex-col items-center text-gray-600 hover:text-blue-600 transition duration-300">
      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-xs mt-1 hidden md:block">{label}</span>
    </li>
  );
};

// === Icônes SVG inline ===

const HomeIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l9-9 9 9M4 10v10h5v-6h6v6h5V10"
    />
  </svg>
);

const SearchIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
    />
  </svg>
);

const BellIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 7.388 8 8.75v5.408c0 .538-.214 1.055-.595 1.437L6 17h5m0 0v1a3 3 0 006 0v-1m-6 0h6"
    />
  </svg>
);

const UserIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A8.001 8.001 0 0112 15c2.21 0 4.21.896 5.879 2.342M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
); */

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 md:top-0 md:bottom-auto left-0 w-full bg-white border-t md:border-b md:border-t-0 shadow-md z-50">
      <ul className="flex justify-around md:justify-center md:gap-16 p-2 md:mt-auto">
        <NavItem icon={HomeIcon} label="Accueil" />
        <NavItem icon={InfoIcon} label="À propos" />
        <NavItem icon={StarIcon} label="Qualification" />
        <NavItem icon={CodeIcon} label="Skills" />
        <NavItem icon={ServicesIcon} label="Service" />
        <NavItem icon={BriefcaseIcon} label="Réalisation" />
        <NavItem icon={PhoneIcon} label="Contact" />
      </ul>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label }) => {
  return (
    <li className="group flex flex-col items-center text-gray-600 hover:text-blue-600 transition duration-300">
      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-xs mt-1 opacity-0 md:opacity-100 md:block">
        {label}
      </span>
    </li>
  );
};

// === Icônes SVG ===

// Icône Accueil
const HomeIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l9-9 9 9M4 10v10h5v-6h6v6h5V10"
    />
  </svg>
);

// Icône À propos
const InfoIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4m0 4h.01M12 4h.01M3 6h18c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1z"
    />
  </svg>
);

// Icône Qualification
const StarIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 17.75l-5.197 3.373a1 1 0 01-1.45-1.053l1.58-6.143L2.433 8.87a1 1 0 01.557-1.706l6.236-.447L12 .75l2.477 6.522 6.236.447a1 1 0 01.557 1.706l-4.5 5.451 1.58 6.143a1 1 0 01-1.45 1.053L12 17.75z"
    />
  </svg>
);

// Icône Skills
const CodeIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V6h8v1H8zm0 4V9h8v2H8zm0 4v-2h8v2H8z"
    />
  </svg>
);

// Icône Service
const ServicesIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 6h18M4 6l1 10h14l1-10H4z"
    />
  </svg>
);

// Icône Réalisation
const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7h18v14H3zM3 7V3h18v4"
    />
  </svg>
);

// Icône Contact
const PhoneIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 6l4 4-1 4 4 1 4-4 4 1 1-4-4-4M3 6h18"
    />
  </svg>
);

export default Navbar;
