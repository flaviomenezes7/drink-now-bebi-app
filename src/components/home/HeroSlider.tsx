
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative rounded-xl overflow-hidden h-48">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h2 className="text-white font-bold text-xl">{slide.title}</h2>
                <p className="text-white/80 text-sm mb-3">{slide.description}</p>
                <Button 
                  size="sm"
                  className="bg-bebija-orange hover:bg-bebija-orange/90 text-white w-fit"
                  asChild
                >
                  <a href={slide.link}>Ver ofertas</a>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7" />
    </Carousel>
  );
};

export default HeroSlider;
