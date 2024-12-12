const Navbar = () => {
  return (
    <nav className="bg-blue-700 sm:bg-red-300 md:bg-green-300 lg:bg-gray-300 p-4">
      <div className="max-7xl max-auto flex justify-between item-center">
        <div className="flex item-center">
          <h1 className="ml-4 text-white font-bold">Doscom</h1>
        </div>
        <div className="flex space-x-4">
          <a className="text-white hover:text-gray-400" href="#home">
            Home
          </a>
          <a className="text-white hover:text-gray-400" href="#Home">
            Services
          </a>
          <a className="text-white hover:text-gray-400" href="#Home">
            About
          </a>
          <a className="text-white hover:text-gray-400" href="#Home">
            Gallery
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
