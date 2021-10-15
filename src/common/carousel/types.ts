export type ImageCarousel = {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  
  export type CarouselOptions = {
    images: ImageCarousel[];
    title: string;
  };
  
  export type CarouselHomeOptions = {
    images: ImageCarousel[];
  };