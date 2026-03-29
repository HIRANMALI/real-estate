'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import BrandLogo from '@/components/ui/BrandLogo';

const leftNavLinks = [
  { name: 'Projects', href: '/listings?type=Project' },
  { name: 'Developers', href: '/developers' },
  { name: 'Locations', href: '/locations' },
];

const rightNavLinks = [
  { name: 'About Us', href: '/contact' },
  { name: 'Investment', href: '/investment' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const NavItem = ({ link, scrolled, dark }: { link: any; scrolled: boolean; dark: boolean }) => {
    const isActive = pathname === link.href;
    return (
      <Link
        href={link.href}
        className={cn(
          'relative text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-accent',
          scrolled || dark ? 'text-white' : 'text-white/90',
          isActive && 'text-accent'
        )}
      >
        {link.name}
        {isActive && (
          <motion.div
            layoutId="activeLink"
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  const isDetailPage = pathname.startsWith('/listings/') && pathname !== '/listings';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-[9999] transition-all duration-700',
          isScrolled || isDetailPage
            ? 'bg-black border-b border-white/10 py-3 shadow-2xl' 
            : 'bg-white/10 backdrop-blur-2xl border-b border-white/10 py-5'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {leftNavLinks.map((link) => (
              <NavItem key={link.name} link={link} scrolled={isScrolled} dark={isDetailPage} />
            ))}
          </nav>

          {/* Centered Logo */}
          <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Link href="/" className="flex items-center gap-3 group">
              <BrandLogo size={42} className="transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
              <span className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white">
                SHINE NATIVE
              </span>
            </Link>
          </div>

          {/* Desktop Right Nav */}
          <nav className="hidden lg:flex items-center justify-end gap-8 flex-1">
            {rightNavLinks.map((link) => (
              <NavItem key={link.name} link={link} scrolled={isScrolled} dark={isDetailPage} />
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              className="p-2 -mr-2 text-white hover:bg-white/10 rounded-full transition-colors active:scale-95"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header for absolute top z-index */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-dark flex flex-col"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="flex flex-col h-full bg-dark"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <BrandLogo size={32} />
                  <span className="text-lg font-bold text-white tracking-widest uppercase">SHINE NATIVE</span>
                </div>
                <button
                  className="p-2 -mr-2 text-white hover:bg-white/10 rounded-full transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-grow overflow-y-auto px-6 py-12 flex flex-col gap-6 justify-center">
                {[...leftNavLinks, ...rightNavLinks].map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'text-5xl font-black uppercase tracking-tighter transition-all duration-300 hover:text-accent flex items-center gap-4',
                        pathname === link.href ? 'text-accent' : 'text-white'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-accent/20 text-sm font-mono tracking-normal">0{i + 1}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                  ))}
                </div>

                {/* Menu Footer */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="p-8 border-t border-white/5"
                >
                  <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4">Established 1997</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-white/40 text-[10px] tracking-[0.2em] font-medium uppercase">
                      © 2026 SHINE NATIVE
                    </p>
                    <p className="text-white/20 text-[8px] tracking-[0.1em] font-medium uppercase text-balance">
                      Your One-Stop Real Estate & Property Consultancy
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
}
