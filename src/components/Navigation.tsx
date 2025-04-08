
import React, { useState } from 'react';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const navigationItems = [
    { name: 'Awards', href: '#awards' },
    { name: 'Participation', href: '#participation' },
    { name: 'Sponsors', href: '#sponsors' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-smythe">Biohackathon.xyz</a>
        </div>
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
                <ul className="space-y-4">
                  {navigationItems.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href}
                        className="block py-2 text-gray-700 hover:text-black"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Button 
                      asChild
                      className="w-full bg-biohack-primary text-white hover:bg-biohack-dark"
                    >
                      <a href="https://lu.ma/biohacksf25" target="_blank" rel="noopener noreferrer">
                        Register
                      </a>
                    </Button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
              asChild
              className="bg-biohack-primary text-white hover:bg-biohack-dark"
            >
              <a href="https://lu.ma/biohacksf25" target="_blank" rel="noopener noreferrer">
                Register
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
