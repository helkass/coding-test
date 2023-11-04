import { Box, Button, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const UserProfile = ({ image, name, male, button, link, ...props }) => {
   return (
      <VStack
         {...props}
         textAlign="center"
         lineHeight="base"
         fontWeight="700"
         fontSize="xs">
         <Box>
            <Image
               src={image}
               alt={name}
               rounded="lg"
               maxW="120px"
               objectFit="cover"
            />
         </Box>
         <Text fontSize="24px" fontFamily="var(--font-heading)">
            {name}
         </Text>
         <Text maxW="168px">
            The {male ? "son" : "daughter"} of Mr. Parents Man and Mrs. Parents
            Lady
         </Text>
         <Link target="_blank" href={link}>
            <Button
               {...button}
               height="8"
               color={button.color || props.color}
               bgColor={button.bgColor || "blackAlpha.500"}
               gap="2"
               borderRadius="8px"
               fontWeight="700"
               padding="8px 16px"
               fontSize="xs">
               <AiOutlineInstagram />
               {name}
            </Button>
         </Link>
      </VStack>
   );
};

export default UserProfile;
