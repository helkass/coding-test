import React from "react";
import * as Chakra from "@chakra-ui/react";
import { image, links } from "../constant/app";
import { globalStyles as styles } from "../styles/app";
import WaveContent from "./parts/WaveContent";
import { AiFillCheckCircle } from "react-icons/ai";
import SubtitleSection from "./atoms/SubtitleSection";
import YoutubeEmbed from "./parts/YoutubeEmbed";
import { Triagle } from "./atoms/Svg";
import { FadeInView } from "./atoms/Fade";

const Stream = () => {
   return (
      <Chakra.VStack w="100%" mt="2" color="white">
         <Chakra.VStack p="32px" zIndex={1}>
            <Chakra.Heading
               fontWeight="extrabold"
               fontFamily="var(--font-fantasy)"
               color="blue.sm">
               Live Wedding
            </Chakra.Heading>
            <Chakra.Text color="black" size="18px" fontWeight="semibold">
               Nalilal & Via
            </Chakra.Text>
         </Chakra.VStack>
         <Chakra.VStack
            backgroundSize="cover"
            mt="16"
            w="100%"
            backgroundPosition="bottom"
            pos="relative"
            _after={{ ...styles.bg_overlay }}
            backgroundImage={`url(${image.story})`}>
            <Triagle
               style={{
                  position: "absolute",
                  top: 0,
                  zIndex: "2",
                  minHeight: "40px",
                  width: "100%",
                  transform: "translateY(-8px)",
               }}
            />
            <Chakra.Stack zIndex="3" w="100%" px="6">
               <FadeInView>
                  <YoutubeEmbed
                     // content
                     title="Live wedding of Nailal & Via"
                     embdedId={"AhGpYiRxqlw"}
                     // styles props
                     transform="translateY(-80px)"
                     zIndex="2"
                  />
               </FadeInView>
            </Chakra.Stack>
            <Chakra.VStack zIndex="10">
               <Chakra.Text>
                  Live wedding can also be watched <br />
                  via the Youtube platform:
               </Chakra.Text>
               <Chakra.Link target="_blank" href={links.yt}>
                  <Chakra.Button variant="badge">
                     Open Via Youtube
                  </Chakra.Button>
               </Chakra.Link>
            </Chakra.VStack>
            <WaveContent
               w="100%"
               zIndex="10"
               textAlign="center"
               lineHeight="1.2">
               <FadeInView>
                  <Chakra.Heading
                     lineHeight="0.8"
                     mt="2"
                     fontWeight="extrabold"
                     fontFamily="var(--font-fantasy)">
                     Wedding Gift
                  </Chakra.Heading>
               </FadeInView>
               <FadeInView>
                  <SubtitleSection>
                     For beloved ones who may want to show your sincere love by
                     sending a gift, please kindly tap the button below:
                  </SubtitleSection>
               </FadeInView>
               <FadeInView>
                  <Chakra.VStack>
                     <Chakra.Button variant="dark" h="8">
                        Bank Transfer
                     </Chakra.Button>
                     <Chakra.Button variant="dark">Send Gift</Chakra.Button>
                     <Chakra.Button variant="dark">
                        <AiFillCheckCircle />
                        Confirmation
                     </Chakra.Button>
                  </Chakra.VStack>
               </FadeInView>
            </WaveContent>
         </Chakra.VStack>
      </Chakra.VStack>
   );
};

export default Stream;
