
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/mockData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = React.useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <Layout>
        <div className="bebija-container py-8 text-center">
          <p>Produto não encontrado</p>
          <Button asChild className="mt-4">
            <Link to="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const totalPrice = product.price * quantity;

  return (
    <Layout>
      <div className="bebija-container">
        <div className="flex items-center p-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="ml-2 text-xl font-semibold">Detalhes do Produto</h1>
        </div>
        
        <div className="mb-6">
          <div className="h-72 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-4">
            <span className="text-sm text-bebija-secondary font-medium uppercase">
              {product.category === 'cervejas' ? 'Cervejas' : 
               product.category === 'vinhos' ? 'Vinhos' : 'Destilados'}
            </span>
            <h2 className="text-2xl font-bold text-gray-800 mt-1">{product.name}</h2>
            <p className="text-3xl font-bold text-bebija-primary mt-2">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
            
            <div className="mt-6">
              <h3 className="font-medium text-lg mb-2">Descrição</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium text-lg mb-3">Quantidade</h3>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleDecreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4 text-xl font-bold w-10 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleIncreaseQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="fixed bottom-20 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <div className="bebija-container flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Valor total</p>
              <p className="text-xl font-bold text-gray-900">
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </p>
            </div>
            <Button className="bg-bebija-primary hover:bg-bebija-secondary">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
