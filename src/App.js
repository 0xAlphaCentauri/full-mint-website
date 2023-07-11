import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
import Team from './Team';
import { AnimatePresence } from 'framer-motion';

function App() {
  // useState is a type of hook, which allows you to make any visual elements that change e.g. UI update due to button click, 
  // useState to update the address so when a the value changes React will render correct components
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

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
            {currentPage === 'home' && (
              <MainMint
                key='home'
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
          </AnimatePresence>
      </div>
      <div className='moving-background'></div>
    </div>
  );
}

export default App;
