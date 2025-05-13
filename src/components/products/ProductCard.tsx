
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  price, 
  image, 
  category 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <Link to={`/produto/${id}`}>
        <div className="h-40 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-3">
        <span className="text-xs text-bebija-secondary font-medium uppercase">{category}</span>
        <Link to={`/produto/${id}`}>
          <h3 className="font-medium text-gray-800 mb-1 line-clamp-1">{name}</h3>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-gray-900">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          <Button size="sm" className="bg-bebija-primary hover:bg-bebija-secondary">
            <PlusCircle className="h-4 w-4 mr-1" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
