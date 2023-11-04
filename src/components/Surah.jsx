import React from "react";
import * as Chakra from "@chakra-ui/react";
import { image } from "../constant/app";
import Watermark from "./template/Watermark";
import { FadeInView } from "./atoms/Fade";

const Surah = () => {
   return (
      <Watermark py="10" px="8">
         <Chakra.VStack
            rounded="2xl"
            bg="blue.sm"
            textAlign="center"
            py="6"
            px="4"
            spacing="6"
            pos="relative">
            <FadeInView>
               <Chakra.Box
                  pos="relative"
                  pb="10"
                  mb="6"
                  _after={{
                     content: '" "',
                     backgroundColor: "white",
                     bottom: "-10%",
                     position: "absolute",
                     height: "50px",
                     width: "0.1px",
                     zIndex: "1",
                     transform: "translateX(50%)",
                  }}>
                  <Chakra.Image
                     borderRadius={"45% 45% 8px  8px"}
                     height="300px"
                     src={image.surah}
                     alt="foto-surah-section"
                  />
               </Chakra.Box>
            </FadeInView>
            <FadeInView>
               <Chakra.Text fontSize="xs" fontStyle="italic" fontWeight="700">
                  "And of all things We created two mates [i.e., counterparts];
                  perhaps you will remember."
               </Chakra.Text>
            </FadeInView>
            <FadeInView>
               <Chakra.Heading fontSize="sm">(Az-Zariyat 51:49)</Chakra.Heading>
            </FadeInView>
         </Chakra.VStack>
      </Watermark>
   );
};

export default Surah;
