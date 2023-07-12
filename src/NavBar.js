import React from 'react';
import {Box, Flex, Link, Spacer} from '@chakra-ui/react';

const NavBar = ({ accounts, setAccounts, currentPage, setCurrentPage}) => {
    
    const isMobile = window.innerWidth <= 768;
    const handleNavClick = (page) => {
        setCurrentPage(page);
    }

    return (
        <Flex justify="center" align="center" padding="50px">    
            {isMobile ? (
              <>
                  <Box
                    position="inherit"
                    top="100%"
                    left="0"
                    right="0"
                    p="4"
                    bg="none"
                    boxShadow="md"
                  >
                    <Flex justify="space-between" align="flex-start" spacing="4">
                      <Box>
                        <Link padding="25px" to="/landing" onClick={() => handleNavClick('landing')}>
                          Home
                        </Link>
                      </Box>
                      <Box>
                        <Link padding="25px"  to="/mainmint" onClick={() => handleNavClick('mainmint')}>
                          Mint
                        </Link>
                      </Box>
                      <Box>
                        <Link padding="25px"  to="/team" onClick={() => handleNavClick('team')}>
                          Team
                        </Link>
                      </Box>
                    </Flex>
                  </Box>
              </>
            ) : (
              <Flex justify="center" align="center" padding="50px"> 
                <Box margin="0 15px" padding="25px">
                  <Link padding="25px" to="/landing" onClick={() => handleNavClick('landing')}>
                    Home
                  </Link>
                </Box>
                <Spacer />
                <Box margin="0 15px" padding="25px">
                  <Link padding="25px" to="/mainmint" onClick={() => handleNavClick('mainmint')}>
                    Mint
                  </Link>
                </Box>
                <Spacer />
                <Box margin="0 15px" padding="25px">
                  <Link padding="25px" to="/team" onClick={() => handleNavClick('team')}>
                    Team
                  </Link>
                </Box>
                <Spacer />
              </Flex>
            )}
          </Flex>
      );
    };
    
    export default NavBar;