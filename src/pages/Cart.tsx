
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/mockData';
import { Separator } from '@/components/ui/separator';

interface CartItem {
  product: typeof products[0];
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    { product: products[0], quantity: 2 },
    { product: products[2], quantity: 1 },
  ]);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== id));
  };

  const handleDecreaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item => {
      if (item.product.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const handleIncreaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item => {
      if (item.product.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 
    0
  );
  
  const deliveryFee = 7.90;
  const total = subtotal + deliveryFee;

  return (
    <Layout>
      <div className="bebija-container py-4">
        <h1 className="text-2xl font-bold px-4 mb-4">Carrinho</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
            <Button asChild>
              <Link to="/produtos">Ver produtos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
              {cartItems.map((item, index) => (
                <React.Fragment key={item.product.id}>
                  <div className="p-4">
                    <div className="flex items-center">
                      <div className="h-16 w-16 rounded-md overflow-hidden">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                        <p className="text-bebija-primary font-bold mt-1">
                          R$ {item.product.price.toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleRemoveItem(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-end mt-3">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleDecreaseQuantity(item.product.id)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-3 text-lg font-medium w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleIncreaseQuantity(item.product.id)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
              <h2 className="font-medium text-lg mb-3">Resumo do pedido</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Taxa de entrega</span>
                <span className="font-medium">R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
            
            <div className="px-4">
              <Button className="w-full bg-bebija-primary hover:bg-bebija-secondary h-12 text-base">
                Finalizar pedido
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
