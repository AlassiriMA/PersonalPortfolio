const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">Mohammad A. Alassiri</a>
          </div>
          
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <li><a href="#hero" className="font-bold hover:underline">HOME</a></li>
              <li><a href="#about" className="font-bold hover:underline">ABOUT</a></li>
              <li><a href="#skills" className="font-bold hover:underline">SKILLS</a></li>
              <li><a href="#projects" className="font-bold hover:underline">PROJECTS</a></li>
              <li><a href="#contact" className="font-bold hover:underline">CONTACT</a></li>
            </ul>
          </nav>
          
          <div>
            <p>&copy; {new Date().getFullYear()} ALASSIRI. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
