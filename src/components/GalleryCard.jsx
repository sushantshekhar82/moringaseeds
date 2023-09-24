import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GalleryCard = ({ imageUrl, height ,href}) => {
  return (
    <Box>
      <Link to={href}>
    <Box
      w={{base:'100%',md:'100%',lg:'100%'}}
      h={height}
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
              >
         
            </Text>
        </motion.div>
      </Flex>
    </Box>
    </Link>
    </Box>
  );
};

export default GalleryCard;