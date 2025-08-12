import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [{
    label: "Home",
    href: "#home"
  }, {
    label: "Products",
    href: "#products"
  }, {
    label: "Benefits",
    href: "#benefits"
  }, {
    label: "Collaborators",
    href: "/collaborators"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="https://i.postimg.cc/kg8RfHsF/Logo-PNG-1.png" 
              alt="Voltex Solution Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary">Voltex Solution</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => {
              if (item.href.startsWith('#')) {
                return (
                  <Link 
                    key={item.label} 
                    to={`/${item.href}`}
                    className="text-foreground hover:text-primary transition-colors font-medium" 
                    onClick={e => {
                      if (window.location.pathname === '/') {
                        e.preventDefault();
                        document.getElementById(item.href.slice(1))?.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                );
              } else {
                return (
                  <Link 
                    key={item.label} 
                    to={item.href} 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90" 
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                } else {
                  navigate('/', { replace: true });
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }, 100);
                }
              }}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-4">
              {navItems.map(item => {
                if (item.href.startsWith('#')) {
                  return (
                    <Link 
                      key={item.label} 
                      to={`/${item.href}`}
                      className="text-foreground hover:text-primary transition-colors font-medium" 
                      onClick={e => {
                        setIsMenuOpen(false);
                        if (window.location.pathname === '/') {
                          e.preventDefault();
                          document.getElementById(item.href.slice(1))?.scrollIntoView({
                            behavior: 'smooth'
                          });
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                } else {
                  return (
                    <Link 
                      key={item.label} 
                      to={item.href} 
                      className="text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit" onClick={() => {
                setIsMenuOpen(false);
                if (window.location.pathname === '/') {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                } else {
                  navigate('/', { replace: true });
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }, 100);
                }
              }}>
                Get Quote
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;