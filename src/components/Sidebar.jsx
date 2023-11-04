import {
   Box,
   Drawer,
   DrawerBody,
   DrawerContent,
   DrawerFooter,
   DrawerOverlay,
   Link,
   Text,
   VStack,
} from "@chakra-ui/react";
import { sidebarLinks } from "../constant/app";
import { Bird } from "./atoms";
import { scrollTo } from "../utils/scrollTo";

function Sidebar({ isOpen, onClose }) {
   const scroll = (id) => {
      onClose();
      scrollTo(id, 300);
   };
   return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
         <DrawerOverlay />
         <DrawerContent
            w={{ base: "80%", lg: "100%" }}
            p={{ base: 0, lg: "2" }}
            maxW={{ base: "80%", lg: "500px" }}>
            <DrawerBody pt="6" w="80%" alignSelf={"end"}>
               <Box alignSelf="end" justifyContent="flex-end" display="flex">
                  <Bird color="var(--color-main-text)" />
               </Box>
               <VStack mt="8" h="max" dsiplay="flex" spacing="2" dir="column">
                  {sidebarLinks.map((item) => (
                     <Link
                        _hover={{
                           textDecor: "none",
                           cursor: "text",
                        }}
                        fontWeight="semibold"
                        alignSelf="end"
                        key={item.title}
                        w="100%"
                        pr="1"
                        onClick={() => scroll(item.href)}
                        borderBottomColor="gray.200"
                        borderBottomWidth="1px"
                        borderBottomStyle="solid"
                        py="2"
                        textTransform="uppercase"
                        letterSpacing="3px"
                        fontSize="sm"
                        textAlign="right">
                        {item.title}
                     </Link>
                  ))}
               </VStack>
            </DrawerBody>

            <DrawerFooter
               fontSize="xs"
               pb="8"
               textAlign="center"
               fontWeight="500">
               <Text>
                  Created with Love by Invitato
                  <br />
                  2023 Nailal & Via. All Rights Reserved
               </Text>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}

export default Sidebar;
