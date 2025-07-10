
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
    <div className="min-h-screen flex flex-col items-center justify-start bg-fixed bg-center bg-cover text-white p-4" style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1 className="text-3xl font-bold bg-black/50 rounded-xl p-4 mt-4">UNE TITE VITE À MANGER</h1>
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        {['dejeuner', 'diner', 'souper', 'dessert', 'drink'].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={
  "px-4 py-2 rounded-xl bg-black/60 hover:bg-black/80 transition " +
  (tab === item ? "ring-2 ring-white" : "")
}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      <div className="bg-black/50 rounded-xl p-4 mt-4 max-w-md text-center">
        <h2 className="text-xl font-semibold mb-2">{tab.charAt(0).toUpperCase() + tab.slice(1)}</h2>
        <p>{recettes[tab]}</p>
      </div>
      <div className="mt-4 text-center bg-black/50 p-2 rounded-xl">
        <p>Partager sur :</p>
        <div className="flex gap-4 justify-center mt-2">
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://une-tite-vite.netlify.app" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.messenger.com/t/?link=https://une-tite-vite.netlify.app" target="_blank" rel="noopener noreferrer">Messenger</a>
          <a href="https://www.reddit.com/submit?url=https://une-tite-vite.netlify.app&title=Site de recettes" target="_blank" rel="noopener noreferrer">Reddit</a>
        </div>
      </div>
    </div>
  );
}
