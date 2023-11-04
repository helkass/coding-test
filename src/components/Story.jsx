import React from "react";
import * as Chakra from "@chakra-ui/react";
import { image } from "../constant/app";
import { FadeInView } from "./atoms";

const Story = () => {
   return (
      <Chakra.VStack p="16px 32px 42px" spacing={0} color="white">
         <FadeInView>
            <Chakra.Box
               pos="relative"
               rounded="24px"
               zIndex="1"
               mx="auto"
               _before={{
                  content: '""',
                  position: "absolute",
                  zIndex: 1,
                  width: "100%",
                  height: "70%",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                  borderRadius: "24px",
                  backgroundImage:
                     "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(245, 246, 232, 0.8) 85%)",
               }}>
               <Chakra.Image
                  rounded="24px"
                  shadow="2xl"
                  src={image.story}
                  alt="story-image"
                  height="auto"
                  maxWidth="100%"
                  overflow="clip"
               />
            </Chakra.Box>
         </FadeInView>
         <FadeInView>
            <Chakra.VStack zIndex="0" p="8px" w="100%">
               <Chakra.VStack
                  mt="-24px"
                  bg="blue.sm"
                  zIndex="0"
                  w="100%"
                  borderBottomRadius="24px"
                  p="20px 16px">
                  <Chakra.Text
                     mt="4"
                     as="span"
                     fontSize="sm"
                     textAlign="center"
                     fontWeight="700"
                     p="8px">
                     Read and follow our love of live journey as a couple here:
                  </Chakra.Text>
                  <FadeInView
                     style={{
                        display: "flex",
                        justifyContent: "center",
                     }}>
                     <Chakra.Button variant="light" p="0 12px" m="16px auto">
                        Our love story
                     </Chakra.Button>
                  </FadeInView>
               </Chakra.VStack>
            </Chakra.VStack>
         </FadeInView>
      </Chakra.VStack>
   );
};

export default Story;
