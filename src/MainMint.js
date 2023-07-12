import {useState } from 'react';
import {ethers, toBigInt } from 'ethers';
import { Box, Button, Flex, Input, Text} from '@chakra-ui/react';
import roboPunksNFT from './RoboPunksNFT.json';
import useMediaQuery from "./useMediaQuery";

const roboPunksNFTAddress = '0xe0d8439711ab3eD4172a7BCcce110e88F4E6Bb65';

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    async function handleMint() {
        if (window.ethereum) {
            // https://ethereum.stackexchange.com/questions/121686/i-am-getting-error-saying-export-ethers-provider-imported-as-ethers-was
            //const provider = new ethers.providers.Web3Provider(window.ethereum);
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            );
            try {
                //const response = await contract.mint(BigNumber.from(mintAmount));
                const response = await contract.mint(toBigInt(mintAmount), {
                    value: ethers.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response: ', response);
            }catch (err) {
                console.log('error within MainMint', err);
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="18%">
            {/*<Box width='90%', '520px'></Box>*/}
            {isAboveLarge ? (
            <Box width='70%'>
                <div>
                    {/*<Text fontSize={['240px', '48px']} textShadow="0 5px #000000">RoboPunks</Text> */}
                    <Text fontSize={['240px', '48px']} textShadow="0 5px #000000">RoboPunks</Text>
                    <Text fontSize={['24px', '30px']} 
                    textShadow="0 2px 2px #000000" 
                    fontFamily="VT323">Yo Momma, mint now </Text>
                </div>
            {isConnected ? (
                <div>
                    <Flex align="center" justify="center">
                        <Button 
                          backgroundColor="#D6517D"
                          borderRadius="10%"
                          boxShadow="0px .3vh .3vw .1vw #0F0F0F"
                          color="white"
                          cursor="pointer"
                          fontFamily="inherit"
                          padding="3%"
                          marginTop="2%"
                          onClick={handleDecrement}>
                            -
                        </Button>
                        <Input 
                          readOnly
                          fontFamily="inherit"
                          width="12vw"
                          height="3.1vh"
                          paddingLeft="2.3%"
                          marginTop="2%"
                          type="number" 
                          value={mintAmount} />
                        <Button 
                          backgroundColor="#D6517D"
                          borderRadius="10%"
                          boxShadow="0px .3vh .3vw .1vw #0F0F0F"
                          color="white"
                          cursor="pointer"
                          fontFamily="inherit"
                          padding="3%"
                          marginTop="2%" 
                          onClick={handleIncrement}>
                            +
                        </Button>
                    </Flex>
                    <Button 
                          backgroundColor="#D6517D"
                          borderRadius="10%"
                          boxShadow="0px .3vh .3vw .1vw #0F0F0F"
                          color="white"
                          cursor="pointer"
                          fontFamily="inherit"
                          padding="3%"
                          marginTop="2%"
                          onClick={handleMint}>
                            Mint
                    </Button>
                </div>
            ) : (
                    <Button
                      backgroundColor="#D6517D"
                      borderRadius="5px"
                      boxShadow="0 px 2px 2px 1px #0F0F0F"
                      color="white"
                      cursor="pointer"
                      fontFamily="inherit"
                      padding="15px"
                      margin="0 15px"
                      onClick={connectAccount}
                    >
                      Connect
                    </Button>
                  )}
            </Box> ) : (
                        <Box width='70%'>
                        <div>
                            <Text fontSize='30px' textShadow="0 5px #000000">RoboPunks</Text>
                            <Text fontSize='30px' 
                            textShadow="0 2px 2px #000000" 
                            fontFamily="VT323">Yo Momma, mint now </Text>
                        </div>
                    {isConnected ? (
                        <div>
                            <Flex align="center" justify="center">
                                <Button 
                                  backgroundColor="#D6517D"
                                  borderRadius="10%"
                                  boxShadow="0px .3vh .3vw .1vw #0F0F0F"
                                  color="white"
                                  cursor="pointer"
                                  fontFamily="inherit"
                                  padding="3%"
                                  marginTop="2%"
                                  onClick={handleDecrement}>
                                    -
                                </Button>
                                <Input 
                                  readOnly
                                  fontFamily="inherit"
                                  width="12vw"
                                  height="3.1vh"
                                  paddingLeft="2.3%"
                                  marginTop="2%"
                                  type="number" 
                                  value={mintAmount} />
                                <Button 
                                  backgroundColor="#D6517D"
                                  borderRadius="10%"
                                  boxShadow="0px .3vh .3vw .1vw #0F0F0F"
                                  color="white"
                                  cursor="pointer"
                                  fontFamily="inherit"
                                  padding="3%"
                                  marginTop="2%" 
                                  onClick={handleIncrement}>
                                    +
                                </Button>
                            </Flex>
                            <Button 
                                  backgroundColor="#D6517D"
                                  borderRadius="10%"
                                  boxShadow="0px .3vh .3vw .1vw #0F0F0F"
                                  color="white"
                                  cursor="pointer"
                                  fontFamily="inherit"
                                  padding="3%"
                                  marginTop="2%"
                                  onClick={handleMint}>
                                    Mint
                            </Button>
                        </div>
                    ) : (
                        <Button
                          backgroundColor="#D6517D"
                          borderRadius="5px"
                          boxShadow="0 px 2px 2px 1px #0F0F0F"
                          color="white"
                          cursor="pointer"
                          fontFamily="inherit"
                          padding="15px"
                          margin="0 15px"
                          onClick={connectAccount}
                        >
                          Connect
                        </Button>
                      )}
                    </Box>)}
        </Flex> 
    );
};

export default MainMint;