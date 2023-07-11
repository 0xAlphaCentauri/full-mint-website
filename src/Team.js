import {useState } from 'react';
import {ethers, toBigInt } from 'ethers';
import { Box, Button, Flex, Input, Text} from '@chakra-ui/react';
import roboPunksNFT from './RoboPunksNFT.json';

const roboPunksNFTAddress = '0xe0d8439711ab3eD4172a7BCcce110e88F4E6Bb65';

const Team = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

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
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000">RoboPunks</Text>
                    <Text fontSize="30px" 
                    textShadow="0 2px 2px #000000" 
                    fontFamily="VT323">Yo Momma, mint now </Text>
                </div>


            {isConnected ? (
                <div>
                    <Flex align="center" justify="center">
                        <Button 
                          backgroundColor="#D6517D"
                          borderRadius="5px"
                          boxShadow="0px 2px 2px 1px #0F0F0F"
                          color="white"
                          cursor="pointer"
                          fontFamily="inherit"
                          padding="15px"
                          marginTop="10px"
                          onClick={handleDecrement}>
                            -
                        </Button>
                        <Input 
                          readOnly
                          fontFamily="inherit"
                          width="100px"
                          height="40px"
                          paddingLeft="19px"
                          marginTop="10px" 
                          type="number" 
                          value={mintAmount} />
                        <Button 
                          backgroundColor="#D6517D"
                          borderRadius="5px"
                          boxShadow="0px 2px 2px 1px #0F0F0F"
                          color="white"
                          cursor="pointer"
                          fontFamily="inherit"
                          padding="15px"
                          marginTop="10px" onClick={handleIncrement}>
                            +
                        </Button>
                    </Flex>
                    <Button 
                          backgroundColor="#D6517D"
                          borderRadius="5px"
                          boxShadow="0px 2px 2px 1px #0F0F0F"
                          color="white"
                          cursor="pointer"
                          fontFamily="inherit"
                          padding="15px"
                          marginTop="10px" onClick={handleMint}>
                            Mint
                    </Button>
                </div>
            ) : (
                <Text
                  marginTop="70px"
                  fontSize="30px"
                  letterSpacing="-5.5%"
                  fontFamily="VT323"
                  textShadow="0 3px #000000"
                  color="#D6517D">
                    Yourmother
                </Text>
            )}
            </Box>
        </Flex>
    );
};

export default Team;