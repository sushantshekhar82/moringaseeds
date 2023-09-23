import { Link } from 'react-router-dom';
import './ProductCard.css'; // Make sure to create this CSS file
import { Box } from '@chakra-ui/react';


function ProductCard({ text, link, imageSrc, alt,constText }) {
   
  return (
   <Box width={'250px'} border={'2px solid red'}>
<Link to={link} className='productcard' >
  <Box as='div' className='box' position='relative' marginTop={{base:'1px',lg:'20px'}}  _hover={{boxShadow:'0px 0px 10px 10px rgba(0,0,0,0.70)'}} >
    <img className='product-image' src={imageSrc} alt={alt} />
   
    <span className='product-text'>{text}</span>
  </Box>
</Link>
</Box>
  );
}

export default ProductCard;