import React from "react";
import * as Chakra from "@chakra-ui/react";
import { image, links } from "../constant/app";
import { globalStyles as styles } from "../styles/app";
import { wishes } from "../dummy/app";
import { Wave } from "./atoms/Svg";
import { FadeInView } from "./atoms/Fade";

const Wishes = () => {
   return (
      <Chakra.VStack textAlign="center" fontWeight="700">
         <Chakra.VStack spacing={0} mt="10">
            <Chakra.VStack
               backgroundImage={image.footer}
               backgroundPosition="center"
               backgroundSize="cover"
               pos="relative"
               pt="8"
               _after={{ ...styles.bg_overlay }}>
               <Chakra.VStack zIndex={2} spacing="6" p="16px">
                  <FadeInView>
                     <Chakra.VStack color="white">
                        <Chakra.Heading fontFamily="var(--font-fantasy)">
                           Prayers & Wishes
                        </Chakra.Heading>
                        <Chakra.Text maxW="60%">
                           Please leave your sincere prayers and wishes to us
                           and our families:
                        </Chakra.Text>
                     </Chakra.VStack>
                  </FadeInView>
                  <FadeInView>
                     <form style={{ width: "100%" }}>
                        <Chakra.VStack color="gray.700">
                           <Chakra.Input
                              type="text"
                              name="name"
                              id="name"
                              bgColor="white"
                              placeholder="Your Name"
                              _placeholder={{
                                 color: "gray.500",
                                 fontWeight: "semibold",
                              }}
                           />
                           <Chakra.Textarea
                              type="text"
                              bgColor="white"
                              name="player"
                              id="player"
                              placeholder="Player & Wishes"
                              _placeholder={{
                                 fontWeight: "semibold",
                                 color: "gray.500",
                              }}
                           />
                           <Chakra.Button
                              variant="dark"
                              minW="8"
                              w="8px 24px"
                              fontWeight="semibold"
                              alignSelf="end">
                              Send
                           </Chakra.Button>
                        </Chakra.VStack>
                     </form>
                  </FadeInView>
                  <FadeInView>
                     <Chakra.VStack overflow="hidden" zIndex="3" height="300px">
                        <Chakra.VStack overflow="auto" spacing="5">
                           {wishes.map((item, i) => (
                              <Chakra.HStack
                                 key={i}
                                 gap="6"
                                 align="center"
                                 wrap="nowrap">
                                 <Chakra.Avatar
                                    name={item.author[0]}
                                    w="40px"
                                    h="40px"
                                    color="white"
                                    fontWeight="bold"
                                    bg="var(--color-main-blue)"
                                    border="3px solid white"
                                 />
                                 <Chakra.Box
                                    gap="4"
                                    textAlign="left"
                                    bg="white"
                                    p="4px 16px"
                                    shadow="sm"
                                    borderBottomRadius="2xl"
                                    borderTopEndRadius="2xl">
                                    <Chakra.Text fontWeight="700">
                                       {item.author}
                                    </Chakra.Text>
                                    <Chakra.Text
                                       fontWeight="normal"
                                       fontSize="sm">
                                       {item.desc}
                                    </Chakra.Text>
                                 </Chakra.Box>
                              </Chakra.HStack>
                           ))}
                        </Chakra.VStack>
                     </Chakra.VStack>
                  </FadeInView>
               </Chakra.VStack>
               <Wave mt="26px" minW="100%" />
            </Chakra.VStack>
            <Chakra.VStack
               bg="blue.sm"
               py="8"
               color="white"
               px="16px"
               spacing="6"
               fontSize="sm">
               <FadeInView>
                  <Chakra.Text>
                     It will be a joy for us if you are able to be attend on our
                     wedding day. Thank you for all the kind words, prayers, and
                     attentions given. We wish your understanding for all health
                     protocols restrictions. See you on our wedding day!
                  </Chakra.Text>
               </FadeInView>
               <FadeInView>
                  <Chakra.Heading
                     fontSize="3xl"
                     fontFamily="var(--font-heading)">
                     Nailal & Via
                  </Chakra.Heading>
               </FadeInView>
            </Chakra.VStack>
            <Chakra.Box
               fontWeight="bold"
               color="white"
               fontSize="sm"
               w="full"
               gap="4"
               lineHeight="1.5"
               bg="blue.md"
               py="6">
               <FadeInView>
                  <Chakra.Box justifyContent="center" display="flex">
                     <Chakra.Link href={links.insta} target="_blank">
                        <Chakra.Image
                           src={image.logo}
                           alt="logo"
                           maxW="120px"
                        />
                     </Chakra.Link>
                  </Chakra.Box>
               </FadeInView>
               <FadeInView>
                  <Chakra.Text>Created with Love by Invitato</Chakra.Text>
               </FadeInView>
               <FadeInView>
                  <Chakra.Text mt="2">
                     &copy; 2023 Nailal & Via. All Rights Reserved <br />
                     Song by I Finally Found Someone - Barbra Streisand ft.
                     Bryan Adams
                  </Chakra.Text>
               </FadeInView>
            </Chakra.Box>
         </Chakra.VStack>
      </Chakra.VStack>
   );
};

export default Wishes;
