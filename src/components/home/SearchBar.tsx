
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input 
        type="search" 
        placeholder="Procurar bebidas..." 
        className="pl-10 bg-gray-50 border-gray-100"
      />
    </div>
  );
};

export default SearchBar;
