import { FC } from "react";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const Header: FC<HeaderProps> = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">Mohammad A. Alassiri</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#hero" className="font-bold hover:underline">HOME</a></li>
            <li><a href="#about" className="font-bold hover:underline">ABOUT</a></li>
            <li><a href="#skills" className="font-bold hover:underline">SKILLS</a></li>
            <li><a href="#projects" className="font-bold hover:underline">PROJECTS</a></li>
            <li><a href="#contact" className="font-bold hover:underline">CONTACT</a></li>
          </ul>
        </nav>
        
        {/* Mobile Navigation Button */}
        <button 
          id="mobile-menu-button" 
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-black`}>
        <div className="container mx-auto px-4 py-2">
          <ul className="space-y-4 py-2">
            <li><a href="#hero" className="block font-bold hover:underline py-2" onClick={closeMenu}>HOME</a></li>
            <li><a href="#about" className="block font-bold hover:underline py-2" onClick={closeMenu}>ABOUT</a></li>
            <li><a href="#skills" className="block font-bold hover:underline py-2" onClick={closeMenu}>SKILLS</a></li>
            <li><a href="#projects" className="block font-bold hover:underline py-2" onClick={closeMenu}>PROJECTS</a></li>
            <li><a href="#contact" className="block font-bold hover:underline py-2" onClick={closeMenu}>CONTACT</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
