import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Divider,
  Grid,
  GridItem,
  Image,
  Img,
  Radio,
  RadioGroup,
  Select,
  Table,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";

import {
  Flex,
  Circle,
  Box,
  usecol,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { Spinner, Text } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineRight, AiOutlineArrowRight } from "react-icons/ai";


import {FaFilter} from 'react-icons/fa'
import { Checkbox, CheckboxGroup, Stack, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";



function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1}
      </Box>
    </Box>
  );
}
function Star({ rating }) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "#e4c72b" : "#e4c72b"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf  key={i} style={{ marginLeft: "1" }} color='#e4c72b' />;
            }
            return <BsStar  key={i} style={{ marginLeft: "1", }} />;
          })}
      </Box>
    );
  }
  const data=[
    {
        image:"./brand11",
        name:'Bhagya KDM 01 Seeds',
        price:250,
        rating:4,
        review:15,
        link:'/bhagyakdmseeds',
        discount:10,
        delete:"279",
        brand:"bhagyakdm01"
        
    },
    {
        image:"./brand12",
        name:'PKM Drumstick Seeds',
        price:225,
        rating:4.5,
        review:18,
        link:'/pkmseeds',
        discount:13,
        delete:259,
        brand:"pkm"
        
    },
    {
        image:"./brand13",
        name:'ODC 3 Drumstick Seeds',
        price:220,
        rating:5,
        review:22,
        link:'/odc3seeds',
        discount:15,
        delete:259,
        brand:"odc3"
        
    }
]

const Products = () => {
  
  
  const [brandValue, setBrandValue] = React.useState(null)
  const [StarValue, setStarValue] = React.useState('1')


 const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const [sortValue, setSortValue] = useState(''); // 'asc' for low to high, 'desc' for high to low
  const [product, setProduct] = useState(data);

  useEffect(()=>{
    if (sortValue == 'asc') {
      setProduct([...data].sort((a, b) => a.price - b.price));
      console.log(product)
    } else if (sortValue == 'desc') {
      setProduct([...data].sort((a, b) => b.price - a.price));
      console.log(product)
    }
  },[sortValue])

  const [selectedBrands, setSelectedBrands] = useState([]);
 
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
    }
  };

  // Filter the products based on selected brands
  React.useEffect(() => {
    if (selectedBrands.length === 0) {
      // If no brands are selected, show all products
      setProduct(data);
    } else {
      // Filter products based on selected brands
      const filtered = data.filter((product) =>
        selectedBrands.includes(product.brand)
      );
      setProduct(filtered);
    }
  }, [selectedBrands]);

  const handleChangestar=()=>{

  }

 

  
  return (
    <Box >
       <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Reddy Agric where all best quality drumstick seeds or moringa seeds you get. Contactus:8123143554 whatsappus:8123811002 mailus:reddyagric@gmail.com"/>
<meta name="keywords" content="moringaseeds, drumstickseeds, reddyagric,moringaseeds contact, reddyagric moringaseeds, reddyagric durmstickseeds, reddyagric contact, reddyagric moringaseeds contact , reddyagric durmstickseeds contact,"/>
<title>Reddy Agric Moringa Seeds | Drumstick Seeds </title>
</Helmet>
         <Navbar/>
    <Box marginTop={'80px'} marginBottom={'20px'}>

   
    <Box style={{ width: "95%", margin: "auto" }}>
      {/* ------BreadCrumb------ */}
      <Breadcrumb
        spacing="5px"
        separator={<AiOutlineRight color="gray" />}
        m={"5px"}
      >
        <BreadcrumbItem>
          <Link to={"/"}>Home</Link>
        </BreadcrumbItem>
       
        <BreadcrumbItem isCurrentPage>
          <Text fontWeight={'bold'}> Products </Text>
        </BreadcrumbItem>
      </Breadcrumb>
    
<Box style={{display:"flex",justifyContent:"right"}}>
<Select width={"150px"} onChange={(e)=>setSortValue(e.target.value)} value={sortValue}>
  <option>Sort By</option>
  <option value='asc' >Low to high</option>
  <option value='desc'>High to low</option>
  
</Select>
</Box>
<Box display={{base:'block',md:'none',lg:'none'}} >
     
      <Flex onClick={onOpen}>
      <FaFilter className="filter" size={"25px"}  />
      <Text fontWeight={'bold'}>Filter</Text>
      </Flex>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Filter By</DrawerHeader><DrawerCloseButton/>
          <DrawerBody>
          <Heading
            size={"sm"}
            fontWeight={"bold"}
            marginBottom={"5px"}
            marginTop={"5px"}
            textAlign={'left'}
          >
            Brands
          </Heading>

          <Stack spacing={2} direction='column'>
        <Checkbox
          value="bhagyakdm01"
          colorScheme='green'
          onChange={handleCheckboxChange}
          isChecked={selectedBrands.includes("bhagyakdm01")}
        >
          Bhagya KDM 01
        </Checkbox>
        <Checkbox
          value="pkm"
          colorScheme='green'
          onChange={handleCheckboxChange}
          isChecked={selectedBrands.includes("pkm")}
        >
          PKM
        </Checkbox>
        <Checkbox
          value="odc3"
          colorScheme='green'
          onChange={handleCheckboxChange}
          isChecked={selectedBrands.includes("odc3")}
        >
          ODC 3
        </Checkbox>
      </Stack>

         
          <Heading
            size={"sm"}
            fontWeight={"bold"}
            marginBottom={"5px"}
            marginTop={"5px"}
            textAlign={'left'}
          >
            Rating
          </Heading>

          <RadioGroup colorScheme={"green"}
           onChange={handleChangestar}
           value={StarValue}
          >
            <Stack direction={"column"}>
              <Radio value={"5"} colorScheme="green">
                <Star rating={5} />
              </Radio>
              <Radio value={"4"} colorScheme="green">
                <Star rating={4} />
              </Radio>
              <Radio value={"3"} colorScheme="green">
                <Star rating={3} />
              </Radio>
              <Radio value={"2"} colorScheme="green">
                <Star rating={2} />
              </Radio>
              <Radio value={"1"} colorScheme="green">
                <Star rating={1} />
              </Radio>
            </Stack>
          </RadioGroup>

          </DrawerBody>
         
          <DrawerFooter> <Divider></Divider> <Image src='./moringalogo.png' alt='Moringa Seeds Logo' width={'100%'} height={'100%'}/>
             </DrawerFooter>
        </DrawerContent>
      </Drawer>  
</Box>

      <Box
       display={'grid'}
       gridTemplateColumns={{base:'100%',md:'23% 73%',lg:'25% 75%'}}
       gap={5}
       marginTop={'20px'}
      >
        {/* ------Left Side------ */}
        <Box display={{base:'none',md:'block',lg:'block'}}>
          <Heading
            size={"sm"}
            fontWeight={"bold"}
            marginBottom={"5px"}
            marginTop={"5px"}
            textAlign={'left'}
          >
            Brands
          </Heading>
          <Stack spacing={2} direction='column'>
        <Checkbox
          value="bhagyakdm01"
          colorScheme='green'
          onChange={handleCheckboxChange}
          isChecked={selectedBrands.includes("bhagyakdm01")}
        >
          Bhagya KDM 01
        </Checkbox>
        <Checkbox
          value="pkm"
          colorScheme='green'
          onChange={handleCheckboxChange}
          isChecked={selectedBrands.includes("pkm")}
        >
          PKM
        </Checkbox>
        <Checkbox
          value="odc3"
          colorScheme='green'
          onChange={handleCheckboxChange}
          isChecked={selectedBrands.includes("odc3")}
        >
          ODC 3
        </Checkbox>
      </Stack>

        
          <Heading
            size={"sm"}
            fontWeight={"bold"}
            marginBottom={"5px"}
            marginTop={"5px"}
            textAlign={'left'}
          >
            Rating
          </Heading>

          <RadioGroup colorScheme={"green"}
           onChange={handleChangestar}
           value={StarValue}
          >
            <Stack direction={"column"}>
              <Radio value={"5"} colorScheme="green">
                <Star rating={5} />
              </Radio>
              <Radio value={"4"} colorScheme="green">
                <Star rating={4} />
              </Radio>
              <Radio value={"3"} colorScheme="green">
                <Star rating={3} />
              </Radio>
              <Radio value={"2"} colorScheme="green">
                <Star rating={2} />
              </Radio>
              <Radio value={"1"} colorScheme="green">
                <Star rating={1} />
              </Radio>
            </Stack>
          </RadioGroup>

          
        </Box>
        {/* ------Rigth Side------ */}
        
        <Box>
       
        <Box width={{base:'100%',md:'100%',lg:'100%'}} paddingLeft={'15px'} >
      <Grid gridTemplateColumns={{base:'1fr 1fr',md:'1fr 1fr',lg:'1fr 1fr 1fr '}}  justifyContent={'center'} alignItems={'center'} gap={'10px'}>
          
          {
            product.map((el)=>(
                <GridItem>
                <Link to={el.link}>
                 <Box textAlign={'left'}>
                    <Box position={'relative'}>
                     <Image src={`${el.image}.webp`}  alt={el.name} borderRadius={'10px'}/>
                     <Box pos={'absolute'} top={'10px'} right={'5px'} width={'40px'} height={'40px'} backgroundColor={'red.600'} color={'white'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Text fontSize={'14px'} fontWeight={'bold'}>-{el.discount}%</Text>
                     </Box>
                     </Box>
                     <Box float={'left'}>
                    <Text fontSize={{base:'md',md:'xl',lg:'2xl'}} fontWeight={'bold'}> {el.name}</Text>
                    <Flex gap={4}>
                    <Text fontSize={{base:'sm',md:'xl',lg:'xl'}} color={'red.400'} fontWeight={'bold'}>₹{el.price}/- </Text>
                    <Text fontSize={{base:'sm',md:'xl',lg:'xl'}} color={'gray.400'} fontWeight={'bold'}><del>{el.delete}/-</del></Text>
                    </Flex>
                    <Flex>
                    <Star rating={el.rating} />
                    <Text>{`(${el.review})`}</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                    
                      <Link to={el.link}>
           <Button
                   as={'a'}
                   display={{ base: 'inline-flex', md: 'inline-flex' }}
                   height={'30px'}
                   fontSize={'sm'}
                   fontWeight={600}
                   color={'white'}
                   bg={'#1fb125'}
                  marginTop={'5px'}
                   _hover={{
                     bg: '#1fb125',
                   }}>
                  Buy Now
                 </Button>
                 </Link>
                    </Flex>
                    </Box>
                 </Box>
                 </Link>
              
                </GridItem>
            ))
          }
          
          
    
            </Grid>
      </Box>
        </Box>  
      </Box>
    </Box>
    </Box>
    <Footer/>
    </Box>
  );
};

export default Products;