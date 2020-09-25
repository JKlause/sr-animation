import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './App.scss';
import AboutDrawer from './AboutDrawer';

export default function App() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isAboutDrawerOpen, setIsAboutDrawerOpen] = useState(false);

  return (
    <section className={styles.App}>
      <Header/>
      <section>
        { displayIndex }
        { isAboutDrawerOpen ? 'open' : 'close'}
      </section>
      <Footer 
        displayIndex={displayIndex}
        setDisplayIndex={setDisplayIndex}
        isAboutDrawerOpen={isAboutDrawerOpen}
        openAboutDrawer={() => setIsAboutDrawerOpen(true)}
        closeAboutDrawer={() => setIsAboutDrawerOpen(false)}/>
        <AboutDrawer isOpen={isAboutDrawerOpen}/>
    </section>
  );
}
