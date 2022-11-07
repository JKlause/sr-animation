import React, { useState, useEffect } from 'react';
import useEventedMenu from 'hooks/useEventedMenu';
import Header from './Header';
import VisualizationCards from './VisualizationCards';
import Footer from './Footer';
import AboutDrawer from './AboutDrawer';
import styles from './App.scss';


export default function App() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [eventedMenuRef, isAboutDrawerOpen, setIsAboutDrawerOpen] = useEventedMenu();
  const [isTitleInFinalPosition, setIsTitleInFinalPosition] = useState(false);
  const [isAboutDrawerRendered, setIsAboutDrawerRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAboutDrawerRendered(true);
    }, 1000);
  }, []);


  return (
    <section className={`comp-app ${styles.App}`}>
      <Header/>

      <main className="main-content">
        <h1 className={`title ${isTitleInFinalPosition ? 'final-position' : ''}`}>
          {'Data Visualizations Utilizing the VX Library'}
        </h1>
        <VisualizationCards displayIndex={displayIndex} />
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
          <AboutDrawer aboutDrawerRef={eventedMenuRef} isOpen={isAboutDrawerOpen}/>
      }

    </section>
  );
}
