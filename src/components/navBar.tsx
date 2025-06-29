/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import MenuIcon from "../assets/logo/menu-burger.png";
import CloseIcon from "../assets/logo/x.png";

type NavItem = {
  id: string;
  label: string;
};

interface NavBarProps {
  items: NavItem[];
}

const NavBar = ({ items }: NavBarProps) => {
  const [showNav, setShowNav] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowNav(heroBottom <= 0);
      }

      let currentId = "";
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentId = item.id;
            break;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } hidden md:block`} // Ajouter hidden md:block ici pour cacher sur mobile
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Titre ou logo */}
        <div className="font-bold text-xl">Mon Portfolio</div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          {items.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeId === item.id
                    ? "text-black"
                    : "text-gray-700 group-hover:text-black"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-500 ease-in-out ${
                    activeId === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
