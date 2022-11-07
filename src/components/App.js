import React, { useState } from 'react';
import useEventedMenu from 'hooks/useEventedMenu';
import Header from './Header';
import VisualizationCardsGrid from './VisualizationCardsGrid';
import Footer from './Footer';
import AboutDrawer from './AboutDrawer';
import styles from './App.scss';


export default function App() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [eventedMenuRef, isAboutDrawerOpen, setIsAboutDrawerOpen] = useEventedMenu();
  const [isTitleInFinalPosition, setIsTitleInFinalPosition] = useState(false);


  return (
    <section className={`comp-app ${styles.App}`}>
      <Header/>

      <main className="main-content">
        <h1 className={`title ${isTitleInFinalPosition ? 'final-position' : ''}`}>
          {'Data Visualizations Utilizing the VX Library'}
        </h1>
        <VisualizationCardsGrid displayIndex={displayIndex} />
      </main>

      <Footer 
        displayIndex={displayIndex}
        setDisplayIndex={setDisplayIndex}
        moveTitle={() => setIsTitleInFinalPosition(true)}
        isAboutDrawerOpen={isAboutDrawerOpen}
        openAboutDrawer={() => setIsAboutDrawerOpen(true)}
        closeAboutDrawer={() => setIsAboutDrawerOpen(false)}/>

      <AboutDrawer aboutDrawerRef={eventedMenuRef} isOpen={isAboutDrawerOpen}/>

    </section>
  );
}
