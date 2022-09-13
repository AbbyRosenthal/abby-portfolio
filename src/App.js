import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page'
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
        <Page currentPage={currentPage}>

        </Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
