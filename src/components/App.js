import React, { useState } from 'react';
import Header from './Header';
import Cards from './Cards';
import Footer from './Footer';
import AboutDrawer from './AboutDrawer';
import styles from './App.scss';


export default function App() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isAboutDrawerOpen, setIsAboutDrawerOpen] = useState(false);
  const [isTitleInFinalPosition, setIsTitleInFinalPosition] = useState(false);


  return (
    <section className={styles.App}>
      <Header/>
      <main>
        <h1 className={`${isTitleInFinalPosition ? 'final-position' : ''}`}>
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
      <AboutDrawer isOpen={isAboutDrawerOpen}/>
    </section>
  );
}
