 import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('dejeuner');

  const recettes = {
    dejeuner: "Oeufs brouillés rapides : 2 œufs, 1 c. à soupe de lait, sel, poivre. Cuire doucement en brassant.",
    diner: "Wrap poulet-avocat : Tortilla, poulet cuit, avocat, tomate, laitue, sauce au goût. Rouler et déguster.",
    souper: "Pâtes sauce tomate : Pâtes cuites, sauce tomate, ail, basilic, parmesan.",
    dessert: "Yogourt aux fruits : Yogourt nature, fruits frais coupés, miel.",
    drink: "Smoothie banane : Banane, lait ou boisson végétale, miel, glaçons, mixer le tout."
  };

  return (
    <div>
      <h1>UNE TITE VITE À MANGER</h1>
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        {['dejeuner', 'diner', 'souper', 'dessert', 'drink'].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`tab-button ${tab === item ? 'tab-button-active' : ''}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <h2>{tab.charAt(0).toUpperCase() + tab.slice(1)}</h2>
        <p>{recettes[tab]}</p>
      </div>

      <div className="share-container">
        <p>Partager sur :</p>
        <div className="flex gap-4 justify-center mt-2">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://unerapide.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.messenger.com/t/?link=https://unerapide.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Messenger
          </a>
          <a
            href="https://www.reddit.com/submit?url=https://unerapide.netlify.app&title=Site de recettes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit
          </a>
        </div>
      </div>
    </div>
  );
}
