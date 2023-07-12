import { Box, Flex, Text} from '@chakra-ui/react';
import useMediaQuery from "./useMediaQuery";


const Landing = ({ accounts, setAccounts }) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="18%">
            {/*<Box width='90%', '520px'></Box>*/}
            <Box width='70%'>
                <div>
                    {/*<Text fontSize={['240px', '48px']} textShadow="0 5px #000000">RoboPunks</Text> */}
                    <Text fontSize={isMobile ? '100%' : '48px'} textShadow="0 5px #000000">RoboPunks</Text>
                    <Text fontSize={['24px', '30px']} 
                    textShadow="0 2px 2px #000000" 
                    fontFamily="VT323">You're on the home page </Text>
                </div>
            </Box>
        </Flex> 
    );
};

export default Landing;