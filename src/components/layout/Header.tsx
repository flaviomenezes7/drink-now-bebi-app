
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4 sticky top-0 z-10">
      <div className="bebija-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl text-bebija-primary">
            Bebi<span className="text-bebija-orange">Já</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/notificacoes">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/carrinho">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-bebija-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
