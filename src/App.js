import React from 'react';

import './styles.css';

import Screen from './view/screen/screen';
import SideMenu from './view/sideMenu/sideMenu';
import History from './view/history/history';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <SideMenu />
      <Screen />
      <History />
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
