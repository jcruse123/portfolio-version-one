import React from 'react';
import PortfolioNavbar from './components/PortfolioNavbar'
import PortfolioTitle from './components/PortfolioTitle'
import PortfolioAbout from './components/PortfolioAbout'
import PortfolioProjects from './components/PortfolioProjects'
import PortfolioContact from './components/PortfolioContact'


const App = () => {
    // Render each section as a component
    return (
      <div>
        <PortfolioNavbar />
        <PortfolioTitle />
        <PortfolioAbout />
        <PortfolioProjects />
        <PortfolioContact />
      </div>
    )
  }


export default App;
