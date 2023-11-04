import * as Chakra from "@chakra-ui/react";
import { image } from "../constant/app";
import { globalStyles as styles } from "../styles/app";
import { FadeInView } from "./atoms";

const Layout = ({ children }) => {
   return (
      <Chakra.HStack
         pos="relative"
         w="100%"
         display="flex"
         justify={{ base: "center", lg: "flex-end" }}
         bgColor="white">
         {/* left content */}
         <Chakra.Box
            minH="100vh"
            alignSelf="flex-start"
            w=" calc(100% - 500px)"
            borderRightWidth="8px"
            borderRightColor="blackAlpha.500"
            borderRightStyle="solid"
            scrollSnapType="none"
            p="42px"
            left={0}
            color="var(--color-brown)"
            lineHeight="base"
            backgroundImage={image.story}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            pos="fixed"
            flexDirection="column"
            _after={{ ...styles.bg_overlay }}
            display={{ base: "none", lg: "flex" }}>
            <FadeInView justifyContent="start">
               <Chakra.VStack
                  spacing="1.5rem"
                  align="start"
                  position="relative">
                  <Chakra.Text letterSpacing={"2px"} textTransform="uppercase">
                     the wedding of
                  </Chakra.Text>
                  <Chakra.Heading
                     letterSpacing="2px"
                     as="h2"
                     zIndex="10"
                     fontWeight="400"
                     textTransform="capitalize"
                     fontFamily={"var(--font-heading)"}
                     fontSize="72px">
                     Nailal & Via
                  </Chakra.Heading>
                  <Chakra.Text
                     className="test"
                     fontStyle="italic"
                     letterSpacing="1px"
                     maxW="500px">
                     “And I knew exactly how old Walt Disney’s Cinderella felt
                     when she found her prince.”
                     <br />— Elizabeth Young
                  </Chakra.Text>
               </Chakra.VStack>
            </FadeInView>
         </Chakra.Box>
         {/* right content */}
         <Chakra.VStack
            alignSelf={{ base: "center", lg: "end" }}
            maxW="500px"
            w="100%">
            <Chakra.VStack
               bgColor="white"
               position="relative"
               w="100%"
               spacing={0}>
               {children}
            </Chakra.VStack>
         </Chakra.VStack>
      </Chakra.HStack>
   );
};

export default Layout;
