import { useState, useEffect } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const images = [
    './moringa5.webp',
    './moringa6.webp',
    './moringa7.webp',
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
      <Box position="relative" width="100%" height={{base:'300px',lg:"400px"}}>
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
              style={{ objectFit: 'cover', width: '100%', height: '100%', }}
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