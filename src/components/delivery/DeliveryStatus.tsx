
import React from 'react';
import { Truck, Clock, MapPin } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface DeliveryStatusProps {
  status: 'preparing' | 'shipping' | 'delivered';
  estimatedTime: number; // in minutes
  address: string;
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ 
  status, 
  estimatedTime, 
  address 
}) => {
  let progress = 0;
  let statusText = '';
  
  switch (status) {
    case 'preparing':
      progress = 25;
      statusText = 'Preparando seu pedido';
      break;
    case 'shipping':
      progress = 75;
      statusText = 'A caminho';
      break;
    case 'delivered':
      progress = 100;
      statusText = 'Entregue';
      break;
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="bg-bebija-primary/10 p-2 rounded-full">
          <Truck className="h-6 w-6 text-bebija-primary" />
        </div>
        <div className="ml-3">
          <h3 className="font-medium text-gray-800">{statusText}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Clock className="h-4 w-4 mr-1" />
            <span>{status === 'delivered' ? 'Entregue' : `${estimatedTime} min`}</span>
          </div>
        </div>
      </div>

      <Progress value={progress} className="h-2 mb-4" />

      <div className="flex items-start mt-3">
        <MapPin className="h-5 w-5 text-bebija-secondary mr-2 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default DeliveryStatus;
