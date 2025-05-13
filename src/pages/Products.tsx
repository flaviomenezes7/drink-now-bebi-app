
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SearchBar from '@/components/home/SearchBar';
import CategoryList from '@/components/products/CategoryList';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/mockData';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('cervejas');

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Filter products by selected category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <Layout>
      <div className="bebija-container py-4">
        <div className="px-4 mb-4">
          <SearchBar />
        </div>

        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        <div className="px-4 mt-4">
          <h1 className="text-2xl font-bold mb-4">
            {selectedCategory === 'cervejas' ? 'Cervejas' : 
             selectedCategory === 'vinhos' ? 'Vinhos' : 
             selectedCategory === 'destilados' ? 'Destilados' : 'Promoções'}
          </h1>
          
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">Nenhum produto encontrado</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
