'use client';

import { useState } from 'react';

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className="container">
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
        {isEnglish ? (
          // English version with circles
          <>
            <h1 className="title">TOTAL GAME OVER</h1>
            <p className="description">
              Data vortex completely and comprehensively processed at <span className="highlight">111¹%</span>
            </p>
            <div className="shapes-container">
              <div className="circle" style={{ backgroundColor: '#ff6b6b' }}></div>
              <div className="circle" style={{ backgroundColor: '#4ecdc4' }}></div>
              <div className="circle" style={{ backgroundColor: '#ffe66d' }}></div>
              <div className="circle" style={{ backgroundColor: '#ff9ff3' }}></div>
              <div className="circle" style={{ backgroundColor: '#54a0ff' }}></div>
            </div>
            <a 
              href="https://miroslavamirihaikerova.eu" 
              className="link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Access Main System →
            </a>
          </>
        ) : (
          // Czech version with squares and triangles
          <>
            <h1 className="title">TOTAL GAME OVER</h1>
            <p className="description">
              Datový vortex kompletně a komplexně zpracován na <span className="highlight">111¹%</span>
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
            <a 
              href="https://miroslavamirihaikerova.cz" 
              className="link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Přístup k Hlavnímu Systému →
            </a>
          </>
        )}
      </main>
    </div>
  );
}
