
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, Package, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', icon: Home, label: 'Início' },
    { path: '/produtos', icon: Package, label: 'Produtos' },
    { path: '/carrinho', icon: ShoppingCart, label: 'Carrinho' },
    { path: '/pedidos', icon: MapPin, label: 'Pedidos' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-10">
      {navItems.map((item) => {
        const isActive = currentPath === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 h-full transition-colors",
              isActive
                ? "text-bebija-primary"
                : "text-gray-500 hover:text-bebija-primary"
            )}
          >
            <item.icon 
              className={cn(
                "h-6 w-6 mb-1",
                isActive && "fill-bebija-primary/20"
              )} 
            />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
