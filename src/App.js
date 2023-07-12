import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import Landing from './Landing';
import NavBar from './NavBar';
import Team from './Team';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion"

function App() {
  // useState is a type of hook, which allows you to make any visual elements that change e.g. UI update due to button click, 
  // useState to update the address so when a the value changes React will render correct components
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavClick = (page) => {
    setCurrentPage(page);
    console.log(currentPage);
  }

  return (
    <div className='overlay'>
      <div className="App">
        
          {/* Initializing so useState can be used*/}
          <NavBar accounts={accounts} setAccounts={setAccounts} currentPage={currentPage} setCurrentPage={setCurrentPage} handleNavClick={handleNavClick}/>
          <AnimatePresence mode='wait'>
            {/* Components can be used in both */}

            <motion.div 
            key={currentPage}
            initial={{ opacity: 0 }} // Initial animation state
            animate={{ opacity: 1 }} // Animation when component is present
            exit={{ opacity: 0 }} // Animation when component is removed
            transition={{ duration: 0.5 }} // Animation duration
          >
            {currentPage === 'landing' && (
              <Landing
                key='landing'
                accounts={accounts}
                setAccounts={setAccounts}
                currentPage={currentPage}
              />
            )}
            {currentPage === 'mainmint' && (
              <MainMint
                key='mainmint'
                accounts={accounts}
                setAccounts={setAccounts}
                currentPage={currentPage}
              />
            )}
            {currentPage === 'team' && (
              <Team
                key='team'
                accounts={accounts}
                setAccounts={setAccounts}
                currentPage={currentPage}
              />
            )}
            </motion.div>
          </AnimatePresence>
      </div>
      <div className='moving-background'></div>
    </div>
  );
}

export default App;
