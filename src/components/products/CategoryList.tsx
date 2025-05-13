
import React from 'react';
import { Beer, Wine, Package, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Category {
  id: string;
  name: string;
  icon: typeof Beer;
}

const categories: Category[] = [
  { id: 'cervejas', name: 'Cervejas', icon: Beer },
  { id: 'vinhos', name: 'Vinhos', icon: Wine },
  { id: 'destilados', name: 'Destilados', icon: Package },
  { id: 'promocoes', name: 'Promoções', icon: Calendar },
];

interface CategoryListProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-3 px-4 py-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "flex flex-col items-center min-w-[80px] p-3 rounded-lg transition-all",
              selectedCategory === category.id
                ? "bg-bebija-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            <category.icon 
              className={cn(
                "h-6 w-6 mb-1",
                selectedCategory === category.id && "fill-white/20"
              )} 
            />
            <span className="text-xs font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CategoryList;
