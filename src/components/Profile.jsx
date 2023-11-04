import * as Chakra from "@chakra-ui/react";
import UserProfile from "./parts/UserProfile";
import { weddingPerson } from "../dummy/app";
import { FadeInView, SubtitleSection } from "./atoms";
import { links } from "../constant/app";

const Profile = () => {
   return (
      <>
         <FadeInView>
            <SubtitleSection>
               Together with joyful hearts and the grace of God, we cordially
               request the honor of your presence at the wedding celebration of:
            </SubtitleSection>
         </FadeInView>
         <Chakra.VStack my="14" py="4" w="100%" bg="blue.sm">
            <FadeInView>
               <UserProfile
                  link={links.insta}
                  transform="translateY(-60px)"
                  button={{
                     _hover: {
                        bgColor: "blackAlpha.600",
                     },
                  }}
                  color="white"
                  {...weddingPerson.man}
               />
            </FadeInView>
         </Chakra.VStack>
         <FadeInView>
            <UserProfile
               transform="translateY(-100px)"
               button={{
                  color: "white",
                  bgColor: "blue.sm",
               }}
               {...weddingPerson.woman}
               color="gray.800"
               link={links.insta}
            />
         </FadeInView>
      </>
   );
};

export default Profile;
