
import React from 'react';
import { Calendar, Package } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import DeliveryStatus from '@/components/delivery/DeliveryStatus';
import { orders } from '@/data/mockData';
import { Separator } from '@/components/ui/separator';

const Orders = () => {
  return (
    <Layout>
      <div className="bebija-container py-4">
        <h1 className="text-2xl font-bold px-4 mb-4">Meus Pedidos</h1>
        
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Você ainda não fez nenhum pedido</p>
            <Button asChild>
              <a href="/produtos">Ver produtos</a>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const orderDate = new Date(order.date);
              const formattedDate = orderDate.toLocaleDateString('pt-BR');
              const formattedTime = orderDate.toLocaleTimeString('pt-BR', { 
                hour: '2-digit', 
                minute: '2-digit' 
              });
              
              return (
                <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-sm text-bebija-secondary font-medium">
                        Pedido #{order.id}
                      </span>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formattedDate} - {formattedTime}
                      </div>
                    </div>
                    <span className="font-bold">
                      R$ {order.total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  
                  {order.status === 'shipping' && (
                    <DeliveryStatus 
                      status={order.status} 
                      estimatedTime={order.estimatedTime} 
                      address={order.address} 
                    />
                  )}
                  
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-700 mb-2">Itens</h3>
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center py-2">
                        <div className="h-8 w-8 bg-bebija-primary/10 rounded-full flex items-center justify-center">
                          <Package className="h-4 w-4 text-bebija-primary" />
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
                        </div>
                        <span className="font-medium">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Status</span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      order.status === 'delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status === 'delivered' ? 'Entregue' : 'Em entrega'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
