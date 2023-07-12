import { Box, Flex, Text} from '@chakra-ui/react';
import useMediaQuery from './useMediaQuery';

const Team = ({ accounts, setAccounts }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
        {isAboveLarge ? (
            <Box width="520px">
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000">RoboPunks</Text>
                    <Text fontSize="30px" 
                    textShadow="0 2px 2px #000000" 
                    fontFamily="VT323">This is where team information goes</Text>
                </div>
            </Box>
            ) : (
                <Box width="90%">
                    <div>
                        <Text fontSize="30px" textShadow="0 5px #000000">boop</Text>
                        <Text fontSize="30px" 
                        textShadow="0 2px 2px #000000" 
                        fontFamily="VT323">This is where team information goes</Text>
                    </div>
                </Box>
            )}
        </Flex>
    );
};

export default Team;