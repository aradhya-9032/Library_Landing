import React from 'react';
import Header from './components/Header';
import LeftContext from './components/LeftContext';
import RightContext from './components/RightContext';
import Main from './components/Main';
import Button from './components/Button';
import TableContainer from './components/TableContainer';
import SellerBookContainer from './components/SellerBookContainer';
import Footer from './components/Footer';
import Circle from './components/Circle';
import SocialIcons from './components/SocialIcons';
import  './App.css';


function App() {
  return (
    <div>
      <Header />
      <LeftContext />
      <Circle/>
      <RightContext />
      <Main />
      <TableContainer />
      <SellerBookContainer />
      <Button/>
      <Footer />
      <SocialIcons/>
    </div>
  );
}

export default App;
