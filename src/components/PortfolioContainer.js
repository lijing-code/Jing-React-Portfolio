import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h1>Jing Li</h1>
      </header>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <footer>
        <section className="contact-me" id="contact-me">
          <h1>Contact Me</h1>
          <div>
              <ul>
                  <li>503.764.7383</li>
                  <li><a href="mailto: lijing900913@gmail.com">lijing900913@gmail.com</a></li>
                  <li><a href="https://github.com/lijing-code?tab=repositories">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/jing2/">Linkedin</a></li>
              </ul> 
          </div>   
      </section>
      </footer>
    </div>
    
  );
}
