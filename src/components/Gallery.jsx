import React, { useState } from "react";
import * as Chakra from "@chakra-ui/react";
import { image } from "../constant/app";
import { Carousel } from "react-responsive-carousel";
import { SlControlPause, SlControlPlay } from "react-icons/sl";

const Gallery = () => {
   const [isAutoPlay, setAutoPlay] = useState(true);
   return (
      <Chakra.Container p="32px 16px">
         <Chakra.VStack spacing="3">
            {/* gallry header image */}
            <Chakra.Box>
               <Chakra.Image
                  overflow="clip"
                  alt="image-gal-head"
                  maxH="100%"
                  rounded="lg"
                  w="auto"
                  src={image.gallerY_header}
               />
            </Chakra.Box>
            <Chakra.VStack pos="relative">
               <Carousel
                  showIndicators={false}
                  autoPlay={isAutoPlay}
                  infiniteLoop
                  showThumbs={false}
                  transitionTime={700}
                  showStatus={false}>
                  {image.sliders.map((item, i) => (
                     <Chakra.Box maxW="490px" mx="2" h="max-content" key={i}>
                        <Chakra.Image
                           mx="2"
                           rounded="xl"
                           overflow="clip"
                           alt="image-gal-head"
                           maxH="100%"
                           w="auto"
                           src={item}
                        />
                     </Chakra.Box>
                  ))}
               </Carousel>
               <Chakra.Button
                  pos="absolute"
                  bottom="10%"
                  left="1.5"
                  color="white"
                  bg="transparent"
                  onClick={() => setAutoPlay(!isAutoPlay)}>
                  {isAutoPlay ? (
                     <Chakra.Icon
                        blendMode="overlay"
                        size="44"
                        as={SlControlPause}
                     />
                  ) : (
                     <Chakra.Icon size="44" as={SlControlPlay} />
                  )}
               </Chakra.Button>
            </Chakra.VStack>
         </Chakra.VStack>
      </Chakra.Container>
   );
};

export default Gallery;
