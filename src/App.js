import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Layout from './layouts/Layout';


function App() {
  const [page, setPage] = useState(1)

  function updateState(pageNum) {
    setPage(pageNum)
  }

  function renderPage() {
    switch (page) {
      case 1:
        return <About />
        break;
      case 2:
        return <Portfolio />
        break;
      case 3:
        return <Resume />
        break;
      case 4:
        return <Contact />
        break;
      case 5:
        return <Footer />
        break;
    }
  }

  return (
    <div className="App">
      <Layout updateState={updateState}>
      <main>
        {renderPage()}
      </main>
      </Layout>
    </div >
  );
}

export default App;
