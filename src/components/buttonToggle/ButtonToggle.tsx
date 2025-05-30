// src/components/ButtonToggle/ButtonToggle.tsx
import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';
import './buttonToggle.css';

type Selection = 'one' | 'two' | 'three';

const ButtonToggle: React.FC = () => {
   
  const [selected, setSelected] = useState<Selection>('one'); //component selected state
  const [position, setPosition] = useState({ top: 50, left: 50 });  //component random position state
  const containerRef = useRef<HTMLDivElement>(null); //create ref

  const randomPosition = () => {
    const padding = 20; //padding
    const viewportWidth = window.innerWidth; //get viewport width
    const viewportHeight = window.innerHeight; //get viewport height

    const el = containerRef.current; //get element
    if (!el) return; //return if no element

    const rect = el.getBoundingClientRect(); //get element for size and location info

    //position within viewport
    const maxLeft = viewportWidth - rect.width - padding; 
    const maxTop = viewportHeight - rect.height - padding;
    //get random position
    const left = Math.floor(Math.random() * maxLeft);
    const top = Math.floor(Math.random() * maxTop);

    setPosition({ top, left });
  };

  //handle button click event
  const handleClick = (value: Selection) => {
    if (value === selected) return;
    setSelected(value);
    randomPosition();
  };

  return (
    <div
      ref={containerRef}
      className="toggle-container"
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        transition: 'top 0.3s ease, left 0.3s ease',
      }}
    >
      <Button
        variant={selected === 'one' ? 'secondary' : 'primary'} 
        size="lg"
        onClick={() => handleClick('one')}
      >
       {selected === 'one' ? 'Selected' : 'One'} 
      </Button>
      <Button
        variant={selected === 'two' ? 'secondary' : 'primary'}
        size="lg"
        onClick={() => handleClick('two')}
      >
          {selected === 'two' ? 'Selected' : 'Two'}
      </Button>
      <Button
        variant={selected === 'three' ? 'secondary' : 'primary'}
        size="lg"
        onClick={() => handleClick('three')}
      >
          {selected === 'three' ? 'Selected' : 'Three'}
      </Button>
    </div>
  );
};

export default ButtonToggle;
