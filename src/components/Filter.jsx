import React from "react";
import * as Chakra from "@chakra-ui/react";
import { image } from "../constant/app";
import { AiOutlineInstagram } from "react-icons/ai";
import SubtitleSection from "./atoms/SubtitleSection";
import { FadeInView } from "./atoms/Fade";

const Filter = () => {
   return (
      <Chakra.VStack justify="center" textAlign="center" spacing="6">
         {/* heading */}
         <FadeInView>
            <Chakra.VStack>
               <Chakra.Heading fontFamily="var(--font-fantasy)" maxW="60%">
                  Instagram Wedding Filter
               </Chakra.Heading>
               <SubtitleSection px="32px">
                  Capture your moment while attending our wedding by using the
                  Instagram filter below:
               </SubtitleSection>
            </Chakra.VStack>
         </FadeInView>
         <FadeInView>
            <Chakra.Box justifyContent="center" display="flex">
               <Chakra.Image
                  shadow="md"
                  maxW="80%"
                  src={image.bg_gift}
                  rounded="24px"
                  alt="filter-image"
               />
            </Chakra.Box>
         </FadeInView>
         <FadeInView>
            <Chakra.Button variant="brown" fontWeight="normal">
               <Chakra.Icon as={AiOutlineInstagram} />
               use filter
            </Chakra.Button>
         </FadeInView>
      </Chakra.VStack>
   );
};

export default Filter;
