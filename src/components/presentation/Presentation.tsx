"use client"

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import './Presentation.scss';

export default function Presentation() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const icons = [<FaGithub />];
  useEffect(() => {
    const phrases = [
      'Desenvolvedor Back-end',
      'Desenvolvedor Front-end',
      'Artesão Web',
    ];

    const currentPhrase = phrases[currentPhraseIndex];

    let index = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (forward) {
        if (index <= currentPhrase.length) {
          setDisplayedPhrase(currentPhrase.substring(0, index));
          index++;
        } else {
          forward = false;
          setIsTypingComplete(true);
          setTimeout(() => {
            setIsTypingComplete(false);
            clearInterval(interval);
            clear();
          }, 2000);
        }
      } else {
        if (index >= 0) {
          setTimeout(() => {
            setDisplayedPhrase(currentPhrase.substring(0, index));
            index--;
          }, 3000);
        } else {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          clearInterval(interval);
        }
      }
    }, 100);

    const clear = () => {
      setTimeout(() => {
        if (index >= 0) {
          setDisplayedPhrase(currentPhrase.substring(0, index));
          index--;
          clear();
        } else {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }, 500);
    };

    return () => clearInterval(interval);
  }, [currentPhraseIndex]);
  return (
    <>
    <main id="home" className="w-100 d-flex flex-column align-items-center text-center py-5 my-5">
      <h1 className="w-80 text-center mt-5">Raphael Azambuja</h1>
      <h3 className="phrase">{displayedPhrase}</h3>
      <p className="mt-5 col-8">
        Sou um jovem desenvolvedor que produz soluções com qualidade, 
        elegância e simplicidade com o objetivo de proporcionar uma ótima 
        experiência e encantar os usuários.
      </p>
    </main>
    </>
  )
}