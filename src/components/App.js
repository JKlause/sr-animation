import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cards from './Cards';
import Footer from './Footer';
import AboutDrawer from './AboutDrawer';
import styles from './App.scss';


export default function App() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isAboutDrawerOpen, setIsAboutDrawerOpen] = useState(false);
  const [isTitleInFinalPosition, setIsTitleInFinalPosition] = useState(false);
  const [isAboutDrawerRendered, setIsAboutDrawerRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAboutDrawerRendered(true);
    }, 1000);
  }, []);


  return (
    <section className={styles.App}>
      <Header/>
      <main>
        <h1 className={`title ${isTitleInFinalPosition ? 'final-position' : ''}`}>
          {'Data Visualizations Utilizing the VX Library'}
        </h1>
        <Cards displayIndex={displayIndex} />
      </main>
      <Footer 
        displayIndex={displayIndex}
        setDisplayIndex={setDisplayIndex}
        moveTitle={() => setIsTitleInFinalPosition(true)}
        isAboutDrawerOpen={isAboutDrawerOpen}
        openAboutDrawer={() => setIsAboutDrawerOpen(true)}
        closeAboutDrawer={() => setIsAboutDrawerOpen(false)}/>
      { 
        isAboutDrawerRendered &&
          <AboutDrawer isOpen={isAboutDrawerOpen}/>
      }
    </section>
  );
}
