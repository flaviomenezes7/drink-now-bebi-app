
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import SearchBar from '@/components/home/SearchBar';
import CategoryList from '@/components/products/CategoryList';
import FeaturedSection from '@/components/home/FeaturedSection';
import { heroSlides, products } from '@/data/mockData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('cervejas');

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Filter products for "on sale" section
  const onSaleProducts = products.slice(0, 4);
  
  // Filter products by selected category
  const categoryProducts = products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      <div className="bebija-container py-4">
        <div className="mb-4">
          <SearchBar />
        </div>
        
        <div className="mb-6 px-4">
          <HeroSlider slides={heroSlides} />
        </div>
        
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
        
        <FeaturedSection 
          title="Promoções"
          products={onSaleProducts}
          link="/promocoes"
        />
        
        <div className="mt-2">
          <FeaturedSection 
            title={selectedCategory === 'cervejas' ? 'Cervejas' : 
                  selectedCategory === 'vinhos' ? 'Vinhos' : 
                  selectedCategory === 'destilados' ? 'Destilados' : 'Promoções'}
            products={categoryProducts}
            link={`/categoria/${selectedCategory}`}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
