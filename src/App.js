import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [pages] = useState([
    { name: 'About Me' },
    { name: 'Contact' },
    { name: 'Portfolio' },
    { name: 'Resume' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}

        ></Nav>
      </Header>
      <main>
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
