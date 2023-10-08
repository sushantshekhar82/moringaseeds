import { useState, useEffect } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const images = [
    './gallery1.webp',
    './gallery2.webp',
    
    
    './gallery5.webp',
   
    './gallery22.webp',
    './gallery23.webp',
    './gallery24.webp'
  ];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <Box marginTop={'10px'} marginBottom={'5px'}>
    <Box position="relative">
      <Box position="relative" width="100%" height={{base:'300px',md:'300px',lg:"400px"}}>
        {images.map((image, index) => (
          <Box
            key={index}
            display={index === currentSlide ? 'block' : 'none'}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ objectFit:'revert-layer', width: '100%', height: '100%' }}
            />
          </Box>
        ))}
      </Box>
      <Flex
        justifyContent="center"
        position="absolute"
        bottom={4}
        left={0}
        right={0}
        zIndex={1}
      >
        {images.map((_, index) => (
          <Button
            key={index}
            mx={1}
            size='xs'
            borderRadius="full"
            bg={index === currentSlide ? 'teal.500' : 'gray.200'}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Flex>
     
    </Box>
    </Box>
  );
};

export default Slider;