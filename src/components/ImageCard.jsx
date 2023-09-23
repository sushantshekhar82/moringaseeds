import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImageCard = ({ imageUrl, text ,href}) => {
  return (
    <Box>
      <Link to={href}>
    <Box
      w={{base:'100%',md:'100%',lg:'100%'}}
      h="300px"
      position="relative"
      overflow="hidden"
       borderRadius={'5px'}
     
>
      <Flex
        bgImage={`url(${imageUrl})`}
        bgSize="cover"
        bgPosition="center"
        w="100%"
        h="100%"
        align="flex-end"
        justify='center'
        transition="transform 0.3s"
        _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
       
      >
        <motion.div
          style={{ position: "absolute", bottom: "1rem", left: 0, right: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        >
          <Text
             
              fontSize="2xl"
              fontWeight="extrabold"
              textAlign={'center'}
              color={'yellow'}
              boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px;'}
            >
             {text}
            </Text>
        </motion.div>
      </Flex>
    </Box>
    </Link>
    </Box>
  );
};

export default ImageCard;