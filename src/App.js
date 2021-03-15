import React from 'react';

import Classes from './components/Classes/Classes';
import Counter from './components/Counter/Counter';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <Counter />
      <Classes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
