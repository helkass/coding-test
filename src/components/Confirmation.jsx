import React from "react";
import * as Chakra from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";
import SubtitleSection from "./atoms/SubtitleSection";
import { FadeInView } from "./atoms/Fade";

const Confirmation = () => {
   return (
      <Chakra.VStack p="24px 16px 0">
         <FadeInView>
            <SubtitleSection p="24px 0 12px">
               Your presence shall be a great honor for us and our families.
               Please confirm your attendance through the reservation form
               below:
            </SubtitleSection>
         </FadeInView>
         <FadeInView>
            <Chakra.Box bg="blue.sm" w="100%" p="24px" rounded="2xl">
               <form>
                  <Chakra.VStack spacing="3">
                     <Chakra.Input
                        size="sm"
                        type="text"
                        rounded="md"
                        bg="white"
                        placeholder="Name"
                     />
                     <Chakra.Textarea
                        type="text"
                        bg="white"
                        size="sm"
                        placeholder="Address"
                     />
                     <Chakra.FormControl>
                        <Chakra.FormLabel htmlFor="is-glad">
                           Will you attend the wedding?
                        </Chakra.FormLabel>
                        <Chakra.Select
                           id="is-glad"
                           name="glad"
                           bg="white"
                           size="sm"
                           defaultChecked="yes">
                           <option value="yes">Yes, I will glady attend</option>
                           <option value="no">
                              No, I can't attend the wedding
                           </option>
                        </Chakra.Select>
                     </Chakra.FormControl>
                     <Chakra.FormControl>
                        <Chakra.FormLabel htmlFor="guest">
                           How many guests will be attend?
                        </Chakra.FormLabel>
                        <Chakra.Select
                           size="sm"
                           bg="white"
                           id="guest"
                           name="guest"
                           defaultChecked="1">
                           <option value="1">1</option>
                           <option value="2">2</option>
                        </Chakra.Select>
                     </Chakra.FormControl>
                     <Chakra.Button
                        variant="outline"
                        mt="16px"
                        p="0px 12px"
                        h="8"
                        _hover={{
                           bgColor: "gray.100",
                        }}
                        border="1px solid var(--color-main-text)"
                        fontSize="xs"
                        align="center"
                        gap="2">
                        <BiMailSend />
                        Submit Confirmation
                     </Chakra.Button>
                  </Chakra.VStack>
               </form>
            </Chakra.Box>
         </FadeInView>
      </Chakra.VStack>
   );
};

export default Confirmation;
