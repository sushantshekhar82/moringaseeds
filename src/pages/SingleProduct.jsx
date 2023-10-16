import React, { useEffect, useState } from 'react'
import '../App.css';
import {BsStar,BsStarFill,BsStarHalf} from 'react-icons/bs'
import {BsFillTelephoneFill, BsWhatsapp}from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import { Box, Flex, Grid, GridItem, Image,Text,Button, Spinner, useToast, Stack, Heading, useColorModeValue, StackDivider, VStack, SimpleGrid, List, ListItem, useDisclosure, FormLabel, Input, Radio, FormControl } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdLocalShipping } from 'react-icons/md'
import { FaCartArrowDown } from 'react-icons/fa'
import { Helmet } from 'react-helmet';
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
                  color={i < rating ? "#e4c72b" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf  key={i} style={{ marginLeft: "1" }} />;
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
        
    }
]
const SingleProduct = () => {
    const [selectedImage, setSelectedImage] = useState('./brand1.webp');
     const [price,setPrice]=useState(220)
     const [charge,setDeliverCharge]=useState(60)
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [name,setName]=useState("")
     const [address,setAddress]=useState("")
     const [zipcode,setZipcode]=useState("")
     const [city,setCity]=useState("")
     const [mobile,setMobile]=useState("")
     const toast=useToast()
     const [products, setProducts] = useState(data);
     const [totalPrice,setTotalPrice]=useState(0)
     const [weight,setWight]=useState("")
     const [bgColor1,setBgColor1]=useState('white')
     const [bgColor2,setBgColor2]=useState('white')
     const [bgColor3,setBgColor3]=useState('white')
     const [bgColor4,setBgColor4]=useState('white')
     const [bgColor5,setBgColor5]=useState('white')
     const [bgColor6,setBgColor6]=useState('white')
      const [bgColor7,setBgColor7]=useState('white')
      const [quantity, setQuantity] = useState(1);
      const [product,setProduct]=useState("ODC 3 Drumstick Seeds")

      const handleDecrease = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
          console.log(quantity,price)
          setTotalPrice(quantity*price)
          console.log(totalPrice)
        }
      };
    
      const handleIncrease = () => {
        setQuantity(quantity + 1);
        console.log(quantity,price)
        setTotalPrice(quantity*price)
        console.log(totalPrice)
      };
      useEffect(()=>{
        setBgColor1('#1fb125')
        setBgColor2('white')
        setBgColor3('white')
        setBgColor4('white')
        setBgColor5('white')
        setBgColor6('white')
        setBgColor7('white')
        setWight("25g")
        setPrice(220)
      },[])
     const handlePrice=(productprice,productdeliveycharge,btnNum)=>{
       setPrice(productprice)
       setDeliverCharge(productdeliveycharge)
       if(btnNum==1){
setBgColor1('')
       }else if(btnNum==1){
        setBgColor1('#1fb125')
        setBgColor2('white')
        setBgColor3('white')
        setBgColor4('white')
        setBgColor5('white')
        setBgColor6('white')
        setBgColor7('white')
        setWight("25g")


       }else if(btnNum==2){
        setBgColor2('#1fb125')
        setBgColor1('white')
        setBgColor3('white')
        setBgColor4('white')
        setBgColor5('white')
        setBgColor6('white')
        setBgColor7('white')
        setWight("50g")
       }else if(btnNum==3){
        setBgColor3('#1fb125')
        setBgColor2('white')
        setBgColor1('white')
        setBgColor4('white')
        setBgColor5('white')
        setBgColor6('white')
        setBgColor7('white')
        setWight("100g")
       }else if(btnNum==4){
        setBgColor4('#1fb125')
        setBgColor2('white')
        setBgColor3('white')
        setBgColor1('white')
        setBgColor5('white')
        setBgColor6('white')
        setBgColor7('white')
        setWight("150g")
       }else if(btnNum==5){
        setBgColor5('#1fb125')
        setBgColor2('white')
        setBgColor3('white')
        setBgColor4('white')
        setBgColor1('white')
        setBgColor6('white')
        setBgColor7('white')
        setWight("250g")
       }else if(btnNum==6){
        setBgColor6('#1fb125')
        setBgColor2('white')
        setBgColor3('white')
        setBgColor4('white')
        setBgColor5('white')
        setBgColor1('white')
        setBgColor7('white')
        setWight("500g")
       }else if(btnNum==7){
        setBgColor7('#1fb125')
        setBgColor2('white')
        setBgColor3('white')
        setBgColor4('white')
        setBgColor5('white')
        setBgColor6('white')
        setBgColor1('white')
        setWight("1kg")
       }
      }

      const handlePlaceOrder=async()=>{
        if(name!=="" && address!=="" && zipcode!=="" && city!=="" && mobile!=="" ){
          setTotalPrice(quantity*price)
             window.location.href=`https://api.whatsapp.com/send?phone=918123811002&text=Product:${product}%20Quantity:${quantity}%20Name:${name}%20Address:${address}%20Zipcode:${zipcode}%20City:${city}%20Mobile:${mobile}`
       console.log(name,address,zipcode,city,mobile,totalPrice,quantity,weight)}
       else{
        toast({
          title: "Fill all the fields" ,
      
          status: "warning",
          duration: 7000,
          isClosable: true,
       });
       }
      
      }
    const thumbnails = [
    
        `./brand2.webp`,
        `./brand3.webp`,
        `./brand1.webp`,
        // Add more images here
      ];
      
  return (
    <Box >
       <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Reddy Agric where all best quality drumstick seeds or moringa seeds you get. Contactus:8123143554 whatsappus:8123811002 mailus:reddyagric@gmail.com"/>
<meta name="keywords" content="moringaseeds, drumstickseeds, reddyagric,moringaseeds contact, reddyagric moringaseeds, reddyagric durmstickseeds, reddyagric contact, reddyagric moringaseeds contact , reddyagric durmstickseeds contact,"/>
<title>ODC 3 Drumstick Seeds </title>
</Helmet>
    <Navbar/>
    <Box marginTop={'80px'} padding={'7px'}>
    <Breadcrumb fontSize={'md'} >
  <BreadcrumbItem>
    <BreadcrumbLink  fontWeight={'bold'} ><Link to="/">Home</Link></BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink  fontWeight={'bold'} ><Link to="/products">Products</Link></BreadcrumbLink>
  </BreadcrumbItem>


  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink >ODC 3 Drumstick Seeds</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

</Box>
    <Box width={{base:'95%',md:'95%',lg:'95%'}} margin={'auto'} >
   
      <Grid gridTemplateColumns={{base:'1fr',md:'40% 60%',lg:'40% 60%'}}  marginTop={'10px'} paddingLeft={{base:'0px',lg:'25px'}}>
       <GridItem >
       <Box mt={4}>
      {selectedImage && (
        <Image src={selectedImage} alt="Selected Image" boxSize={{base:'80%',lg:"450px"}} width={{base:'100%',md:'90%',lg:'430px'}}marginLeft={{base:'0px',lg:'5px'}}  borderRadius={'10px'}  />
      )}
    </Box>
        <Flex>
      {thumbnails.map((thumbnail, index) => (
        <Image
          key={index}
          src={thumbnail}
          alt={`Thumbnail ${index}`}
          cursor="pointer"
          onClick={() => setSelectedImage(thumbnail)}
          boxSize="80px"
          m={2}
          borderRadius="md"
          boxShadow={selectedImage === thumbnail ? 'md' : 'none'}
          transition="box-shadow 0.2s"
        />
      ))}
    </Flex>
    </GridItem>
       <GridItem  textAlign={'left'}>
       
        <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Text  as={'h1'} fontSize={{base:'3xl',md:'4xl',lg:'5xl'}}  fontWeight={'bold'} >ODC 3 Drumstick Seeds</Text>
      <Box display={{base:'none',md:'block',lg:'block'}}>
        <Flex  alignItems={'center'}>
        <Star rating={5} />(22)
        </Flex>
        </Box>
        </Flex>
        
      
       
     

      
        <Text marginTop={'-10px'} as={'h4'} fontSize={{base:'md',md:'2xl',lg:'2xl'}} fontWeight={'bold'} >seeds</Text>
       <Box display={{base:'block',md:'none',lg:'none'}}>
       <Flex  alignItems={'center'}>
        <Star rating={5} />(22)
        </Flex>
       </Box>
       
       
      <Flex gap={'10px'} alignItems={'center'}>
        <Text fontSize={'3xl'} color={'red.400'} fontWeight={'bold'}>₹{price}/- + {charge}</Text>
                   
      </Flex>
       
        <Box marginTop={'10px'} >
       
        </Box>
        <Stack spacing={{ base: 6, md: 5 }}>
       

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
          <Text fontSize={'18px'} color={'gray.600'} fontWeight={'bold'}>Superior Quality ODC 3 Drumstick Seeds from Reddy Agric Farmers

            Discover the excellence of ODC 3 Drumstick Seeds from Reddy Agric farmers. Our superior quality seeds ensure thriving drumstick plants with abundant yields</Text>
            <Stack direction="column" alignItems="left" >
            
          <Flex alignItems={'center'} gap={1}>  <Image src='./free-delivery.png' alt='free delivery'/> Postage Charges Free for 500g and 1kg <Image src='./free-delivery.png' alt='free delivery'/>
          </Flex>
            <Flex alignItems={'center'}gap={1}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
            </Flex>   
          </Stack>
          <Flex gap={1} flexWrap={'wrap'}>
          <Button   height={'30px'}   marginTop={'5px'}  fontSize={'sm'}  onClick={()=>handlePrice(220,60,1)}
              fontWeight={600} backgroundColor={bgColor1} border={'1px solid #1fb125'} _hover={{backgroundColor:{bgColor1}}}>25g</Button>
               <Button   height={'30px'}   marginTop={'5px'}  fontSize={'sm'} onClick={()=>handlePrice(320,60,2)}
              fontWeight={600} backgroundColor={bgColor2} border={'1px solid #1fb125'} _hover={{backgroundColor:{bgColor2}}}>50g</Button>
               <Button   height={'30px'}   marginTop={'5px'}  fontSize={'sm'} onClick={()=>handlePrice(420,60,3)}
              fontWeight={600} backgroundColor={bgColor3} border={'1px solid #1fb125'} _hover={{backgroundColor:{bgColor3}}}>100g</Button>
               <Button   height={'30px'}   marginTop={'5px'}  fontSize={'sm'} onClick={()=>handlePrice(600,60,4)}
              fontWeight={600} backgroundColor={bgColor4} border={'1px solid #1fb125'} _hover={{backgroundColor:{bgColor4}}}>150g</Button>
               <Button   height={'30px'}   marginTop={'5px'}  fontSize={'sm'} onClick={()=>handlePrice(900,60,5)}
              fontWeight={600} backgroundColor={bgColor5} border={'1px solid #1fb125'} _hover={{backgroundColor:{bgColor5}}}>250g</Button>
               <Button   height={'30px'}   marginTop={'5px'}  fontSize={'sm'} onClick={()=>handlePrice(1700,0,6)}
              fontWeight={600} backgroundColor={bgColor6} border={'1px solid #1fb125'} _hover={{backgroundColor:{bgColor6}}}>500g</Button>
               <Button   height={'30px'}   marginTop={'5px'}  fontSize={'sm'} onClick={()=>handlePrice(2500,0,7)}
              fontWeight={600} backgroundColor={bgColor7} border={'1px solid #1fb125'} _hover={{backgroundColor:{bgColor7}}}>1kg</Button>
          </Flex>
          {/* <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Price List
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem> Rs 220 - 25g +  Parcel 📦 Charge  60</ListItem>
                  <ListItem> Rs 299 - 50g +  Parcel 📦 Charge 60</ListItem>{' '}
                  <ListItem> Rs 400 - 100g +  Parcel 📦 Charge 60</ListItem>
                  <ListItem> Rs 550 - 150g +  Parcel 📦 Charge 60</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Rs 750 - 250g +  Parcel 📦 Charge 60</ListItem>
                  <ListItem>Rs 1400 - 500gm, Free Delivery 🚚</ListItem>
                  <ListItem>Rs 2200 - 1kg, Free Delivery 🚚</ListItem>
                </List>
              </SimpleGrid>
            </Box>  */}
         
             
          </Stack>
          <Stack  divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
          
              <Image src='./payment.png' alt='we accept all payments' marginTop={'-10px'} width={'300px'} height={'80px'}/>
           
          </Stack>
          <a href="tel: 8123143554">
           <Button bgColor={'blue.500'}  w={'full'}  mt={1}
            size={'lg'}  rounded={'none'}
            py={'7'}  fontWeight={'bold'} color={'white'} gap={1}  _hover={{bgColor:'blue'}} alignItems={'center'} ><AiOutlinePhone fontSize={'20px'}/>Buy on Call</Button></a>
          <Button
            rounded={'none'}
            w={'full'}
            onClick={onOpen}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('green.900', 'green.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            gap={1}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
           <FaCartArrowDown/> Buy Now
          </Button>
          <Flex  gap={5} alignItems={'center'} >
       
           {/* <a
            href="https://api.whatsapp.com/send?phone=918123811002&text=Hi%20I%20want%20ODC%203%20Seeds"
            target="_blank"
            rel="noreferrer"
          ><Button bgColor={'green.400'} height={'50px'} color={'white'} fontWeight={'bold'} gap={1} _hover={{bgColor:'green'}} ><BsWhatsapp fontSize={'20px'}/>Buy on Whatsapp</Button></a> */}
          </Flex>
         
        </Stack>
       
       
       </GridItem>
    </Grid>
    <Box>

    </Box>
 
    </Box>
    <Box padding={'10px'} >
      <Text as={'h1'} fontSize={{base:'4xl',md:'5xl',lg:'5xl'}} textAlign={'left'} paddingLeft={'5px'} fontWeight={'bold'}  marginBottom={'5px'}  color={'black'}>Related Products </Text>
     <Box width={{base:'100%',md:'80%',lg:'80%'}} paddingLeft={'5px'} >
     <Grid gridTemplateColumns={{base:'1fr 1fr',md:'1fr 1fr',lg:'1fr 1fr 1fr '}}  justifyContent={'center'} alignItems={'center'} gap={'10px'}>
          
          {
            products.map((el)=>(
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> <Text fontSize={'3xl'}>Shipping Information</Text></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         
        <Box padding={{base:'5px',lg:'20px'}}>
        <FormControl id="name" marginTop={{base:'10px',md:'5px',lg:'5px'}}>
            <FormLabel>Product Ordering</FormLabel>
           <Text fontSize={'3xl'} fontWeight={'bold'}>{product}</Text> 
            </FormControl>
        <FormControl id="name" marginTop={{base:'10px',md:'5px',lg:'5px'}}>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your full name'/>
          </FormControl>
          <FormControl id="address"  marginTop={{base:'10px',md:'5px',lg:'5px'}}>
            <FormLabel>Address</FormLabel>
            <Input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter your full address'/>
          </FormControl>
          <Flex justifyContent={'space-between'} gap={'10px'}  marginTop={{base:'10px',md:'5px',lg:'5px'}}>
          <FormControl id="zipcode">
            <FormLabel>Zip code</FormLabel>
            <Input type="text" value={zipcode} onChange={(e)=>setZipcode(e.target.value)} placeholder='Pin code or Zip code'/>
          </FormControl>
          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter your City or District'/>
          </FormControl>
          </Flex>
          <FormControl id="name"  marginTop={{base:'10px',md:'5px',lg:'5px'}}>
            <FormLabel>Mobile</FormLabel>
            <Input type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Enter your Mobile Number'/>
          </FormControl>
          <Flex justifyContent={'space-between'} alignItems={'center'} gap={'10px'}  marginTop={{base:'10px',md:'5px',lg:'5px'}}>
          <FormControl id="city">
            <FormLabel>Weight</FormLabel>
           <Text fontWeight={'bold'} fontSize={'18px'}>{weight}</Text>
          </FormControl>
          <FormControl id="paymentmode"  marginTop={{base:'10px',md:'5px',lg:'5px'}}>
            <FormLabel>Quanity</FormLabel>
            <Flex alignItems="center">
      <Button onClick={handleDecrease} variant="outline" size="sm">
        -
      </Button>
      <Box mx={2}>
        <Text fontSize="lg">{quantity}</Text>
      </Box>
      <Button onClick={handleIncrease} variant="outline" size="sm">
        +
      </Button>
    </Flex>
          </FormControl>
          </Flex>
        
          
        </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' onClick={handlePlaceOrder}>Place order</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>     
    <Footer/>
  </Box>


  )
}

export default SingleProduct