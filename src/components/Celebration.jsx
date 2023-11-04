import React from "react";
import * as Chakra from "@chakra-ui/react";
import Watermark from "./template/Watermark";
import { image } from "../constant/app";
import { CoupleGlass, CoupleRing } from "./atoms/Svg";
import { weddingAddressDetail } from "../dummy/app";
import { globalStyles as styles } from "../styles/app";
import { FadeInView } from "./atoms/Fade";

const Celebration = () => {
   return (
      <Watermark p="32px 16px">
         <Chakra.VStack
            p="32px"
            bg="var(--color-main-blue)"
            w="100%"
            rounded="24px"
            pos="relative"
            textAlign="center"
            spacing={8}
            shadow="2xl">
            <Chakra.VStack lineHeight="0.8" fontWeight="700">
               <FadeInView>
                  <Chakra.Heading
                     lineHeight="1.2"
                     fontSize="3xl"
                     fontFamily="var(--font-heading)">
                     Wedding Celebration
                  </Chakra.Heading>
               </FadeInView>
               <FadeInView>
                  <Chakra.Text color="whiteAlpha.700">
                     will be held in:
                  </Chakra.Text>
               </FadeInView>
            </Chakra.VStack>
            <FadeInView>
               <Chakra.Breadcrumb separator="." gap="8">
                  <Chakra.BreadcrumbItem>
                     <ClockItem num={0} title="days" />
                  </Chakra.BreadcrumbItem>
                  <Chakra.BreadcrumbItem>
                     <ClockItem num={0} title="hours" />
                  </Chakra.BreadcrumbItem>
                  <Chakra.BreadcrumbItem>
                     <ClockItem num={0} title="mins" />
                  </Chakra.BreadcrumbItem>
                  <Chakra.BreadcrumbItem>
                     <ClockItem num={0} title="secs" />
                  </Chakra.BreadcrumbItem>
               </Chakra.Breadcrumb>
            </FadeInView>
            <Chakra.VStack
               rounded="24px"
               pos="relative"
               _after={{ ...styles.bg_overlay }}
               spacing="6"
               backgroundImage={image.story}
               backgroundSize="cover"
               py="24px"
               backgroundPosition="center">
               {/* main content top */}
               <WeddingDetail
                  Icon={CoupleRing}
                  {...weddingAddressDetail.matrimony}
               />
               <WeddingDetail
                  Icon={CoupleGlass}
                  {...weddingAddressDetail.reception}
               />
               <Chakra.Box zIndex="1">
                  <FadeInView>
                     <Chakra.HStack>
                        <Chakra.Button variant="badge">Remind Me</Chakra.Button>
                        <Chakra.Button variant="badge">
                           See Location
                        </Chakra.Button>
                     </Chakra.HStack>
                  </FadeInView>
               </Chakra.Box>
            </Chakra.VStack>
         </Chakra.VStack>
      </Watermark>
   );
};

const WeddingDetail = ({ title, clock, date, place, address, Icon }) => {
   return (
      <Chakra.Box zIndex="1">
         <FadeInView>
            <Chakra.VStack
               fontWeight="600"
               color="white"
               fontSize="sm"
               mx="auto"
               spacing={0}>
               {/* svg icon component header */}
               <Icon />
               <Chakra.Text
                  fontSize="2xl"
                  fontWeight="bold"
                  fontFamily="var(--font-fantasy)">
                  {title}
               </Chakra.Text>
               <Chakra.VStack maxW="85%" spacing={1}>
                  <Chakra.Text as="span">{clock}</Chakra.Text>
                  <Chakra.Text as="span">{date}</Chakra.Text>
                  <Chakra.Text as="span">{place}</Chakra.Text>
                  <Chakra.Text as="span">{address}</Chakra.Text>
               </Chakra.VStack>
            </Chakra.VStack>
         </FadeInView>
      </Chakra.Box>
   );
};

const ClockItem = ({ num, title }) => {
   return (
      <Chakra.VStack spacing="0" lineHeight="1">
         <Chakra.Text fontStyle="italic" fontSize="4xl" fontWeight="600">
            {num}
         </Chakra.Text>
         <Chakra.Text fontWeight="600" fontSize="sm" color="whiteAlpha.900">
            {title}
         </Chakra.Text>
      </Chakra.VStack>
   );
};

export default Celebration;
