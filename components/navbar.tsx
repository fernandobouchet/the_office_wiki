import { Link } from "@/i18n/routing";
import NavItem from "./navItem";
import MovileNav from "./mobileNav";
import ThemeToggle from "./themeToggle";
import LanguageToggle from "./languageToggle";

const Navbar = () => {
  return (
    <nav className="bg-background opacity-95 fixed top-0 left-0 right-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="shrink-0">
              <h1 className="font-bold text-xl lg:text-3xl">The Office</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-bold">
            <NavItem href="/">Inicio</NavItem>
            <NavItem href="/temporadas">Temporadas</NavItem>
            <NavItem href="/personajes">Personajes</NavItem>
            <NavItem href="/recomendaciones">Recomendaciones</NavItem>
          </div>
          <div className="flex items-center">
            <ThemeToggle className="hidden md:inline-flex self-center" />
            <LanguageToggle className="hidden md:inline-flex self-center" />
          </div>
          <div className="md:hidden flex items-center">
            <MovileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
