import { Link } from 'react-router-dom';
import './ProductCard.css'; // Make sure to create this CSS file
import { Box } from '@chakra-ui/react';


function ProductCard({ text, link, imageSrc, alt,constText }) {
   
  return (
   
<Link to={link} className='productcard'>
  <Box as='div' className='box' position='relative' marginTop={{base:'1px',lg:'20px'}}  _hover={{boxShadow:'0px 0px 10px 10px rgba(0,0,0,0.70)'}} >
    <img className='product-image' src={imageSrc} alt={alt} />
    <Box
  display={'flex'}
  width={'100%'}
  height={{base:'70',lg:'80px'}}
 
  justifyContent={'center'}
  alignItems={'center'}
  opacity='1'
  fontSize={{base:'17px',lg:'20px'}}
  fontWeight={'bold'}
  paddingBottom={'20px'}
  transition="transform 0.3s ease"
  _hover={{opacity:'0'}}
>
 {constText}
</Box>

    <span className='product-text'>{text}</span>
  </Box>
</Link>
  );
}

export default ProductCard;