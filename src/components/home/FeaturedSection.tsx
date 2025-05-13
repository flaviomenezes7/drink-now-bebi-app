
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import ProductCard from '../products/ProductCard';

interface FeaturedSectionProps {
  title: string;
  products: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  }>;
  link?: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ title, products, link }) => {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between mb-3 px-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {link && (
          <Link to={link} className="text-bebija-primary flex items-center text-sm font-medium">
            Ver todos <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
      <ScrollArea className="w-full">
        <div className="flex gap-4 pb-4 px-4">
          {products.map(product => (
            <div key={product.id} className="min-w-[180px] max-w-[180px]">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FeaturedSection;
