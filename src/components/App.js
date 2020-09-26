import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './App.scss';
import AboutDrawer from './AboutDrawer';

export default function App() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isAboutDrawerOpen, setIsAboutDrawerOpen] = useState(false);

  const pageStyle = { marginLeft: `calc((-1 * ${displayIndex} * 100%) - (100px * ${displayIndex}))` };

  return (
    <section className={styles.App}>
      <Header/>
      <main>
        <div className="grid" style={pageStyle}>
          <section className="title-card">
            <h1>
              {'Data Visualizations Utilizing the VX Library'}
            </h1>
          </section>
          <section className="card-container">
            <div className="card"></div>
          </section>
          <section className="card-container">
            <div className="card"></div>
          </section>
          <section className="card-container">
            <div className="card"></div>
          </section>
        </div>
      </main>
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
