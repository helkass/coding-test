import React from "react";
import * as Chakra from "@chakra-ui/react";
import { image } from "../constant/app";
import WaveContent from "./parts/WaveContent";
import { FadeInView } from "./atoms/Fade";
import { globalStyles as styles } from "../styles/app";

const Hero = () => {
   console.log("hero renderd");
   return (
      <Chakra.Box
         h="100vh"
         backgroundImage={image.hero}
         backgroundRepeat="no-repeat"
         backgroundSize="cover"
         backgroundPosition={{ base: "center", lg: "top" }}
         position="relative"
         color="white"
         _after={{ ...styles.bg_overlay }}
         w="100%">
         <WaveContent position="absolute">
            <FadeInView>
               <Chakra.VStack
                  zIndex={1}
                  sx={{ padding: "16px 16px 0" }}
                  textAlign="center"
                  mt="0">
                  <Chakra.Heading
                     fontFamily="var(--font-heading)"
                     as="h2"
                     fontSize="20px">
                     Dear Mr/Mrs/Ms,
                  </Chakra.Heading>
                  <Chakra.Heading
                     fontFamily="var(--font-heading)"
                     as="h2"
                     fontSize="20px">
                     Family & Friends
                  </Chakra.Heading>
                  <Chakra.Text fontSize="14px" fontWeight={"600"}>
                     We are pleased to announce and invite you to our wedding.
                     We sincerely hope that you will be able to attend and pray
                     directly on our wedding day. Your presence will mean a lot
                     to us.
                  </Chakra.Text>
               </Chakra.VStack>
            </FadeInView>
         </WaveContent>
      </Chakra.Box>
   );
};

export default Hero;
