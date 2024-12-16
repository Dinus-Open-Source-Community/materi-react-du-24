import { X, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    {
      label: "Home",
      route: "#",
    },
    {
      label: "Services",
      route: "#",
    },
    {
      label: "About",
      route: "#",
    },
    {
      label: "Gallery",
      route: "#",
    },
  ];

  const handleNavigate = () => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-amber-950 fixed top-0 w-full z-50">
      <div className="max-7xl max-auto flex justify-between item-center p-4 shadow-xl">
        <div className="flex item-center">
          <h1 className="ml-4 text-white font-bold">Doscom</h1>
        </div>
        <div>
          <div
            className="md:hidden p-0 hover:border-2 rounded-md border-white cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </div>
          <ul className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  key={index}
                  href={item.route}
                  className="text-white hover:text-gray-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showMenu && (
        <ul className="md:hidden">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="bg-yellow-900 p-4 py-2 hover:border-l-4 border-yellow-600"
            >
              <a
                key={index}
                href={item.route}
                className="text-white hover:text-gray-400"
                onClick={handleNavigate}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
