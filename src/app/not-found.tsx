'use client';

import { useState, useEffect } from 'react';

export default function NotFound() {
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    // Detekce domény pro automatický jazyk
    if (typeof window !== 'undefined') {
      const isEuDomain = window.location.hostname.includes('.eu');
      setIsEnglish(isEuDomain);
    }
  }, []);

  return (
    <div className="container">
      {/* Language switcher - pro manuální přepnutí */}
      <div className="language-switcher">
        <button 
          onClick={() => setIsEnglish(true)}
          className={isEnglish ? 'active' : ''}
        >
          EN
        </button>
        <button 
          onClick={() => setIsEnglish(false)}
          className={!isEnglish ? 'active' : ''}
        >
          CZ
        </button>
      </div>

      <main className="main">
        <h1 className="title">SYSTEM 404</h1>
        
        {isEnglish ? (
          // English version - circles
          <>
            <p className="description">
              Dimension not found. Reality processed at <span className="highlight">111¹%</span>
            </p>
            <div className="shapes-container">
              <div className="circle" style={{ backgroundColor: '#ff6b6b' }}></div>
              <div className="circle" style={{ backgroundColor: '#4ecdc4' }}></div>
              <div className="circle" style={{ backgroundColor: '#ffe66d' }}></div>
              <div className="circle" style={{ backgroundColor: '#ff9ff3' }}></div>
              <div className="circle" style={{ backgroundColor: '#54a0ff' }}></div>
            </div>
            <p className="philosophy">
              "Not found doesn't mean doesn't exist"
            </p>
            <div className="links-container">
              <a href="http://miroslavamirihaikerova.eu" className="link">  
                Access Main Reality →
              </a>
            </div>
          </>
        ) : (
          // Czech version - squares & triangles  
          <>
            <p className="description">
              Dimenze nenalezena. Realita zpracována na <span className="highlight">111¹%</span>
            </p>
            <div className="shapes-container">
              <div className="square" style={{ backgroundColor: '#ff6b6b' }}></div>
              <div className="triangle-up"></div>
              <div className="square" style={{ backgroundColor: '#4ecdc4' }}></div>
              <div className="triangle-down"></div>
              <div className="square" style={{ backgroundColor: '#ffe66d' }}></div>
              <div className="triangle-up"></div>
              <div className="square" style={{ backgroundColor: '#ff9ff3' }}></div>
              <div className="triangle-down"></div>
              <div className="square" style={{ backgroundColor: '#54a0ff' }}></div>
            </div>
            <p className="philosophy">
              "Nenalezeno neznamená neexistuje"
            </p>
            <div className="links-container">
              <a href="https://miroslavamirihaikerova.cz" className="link">  
                Návrat do Hlavní Reality →
              </a>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
