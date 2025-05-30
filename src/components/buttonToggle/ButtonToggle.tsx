import React, { useRef, useState } from 'react';
import Button from '../button/Button';
import './buttonToggle.css';

type Selection = 'one' | 'two' | 'three';

const ButtonToggle = () => {
   
  const [selected, setSelected] = useState<Selection>('one'); 
  const [position, setPosition] = useState({ top: 50, left: 50 });  
  const containerRef = useRef<HTMLDivElement>(null); 

  //get random position values
  const randomPosition = () => {
    const padding = 20;
    const ref = containerRef.current;

    if (!ref) return;

    const { width, height } = ref.getBoundingClientRect();
    const maxLeft = window.innerWidth - width - padding;
    const maxTop = window.innerHeight - height - padding;

    const left = Math.floor(Math.random() * maxLeft);
    const top = Math.floor(Math.random() * maxTop);

    setPosition({ top, left });
  };

  //button click event- label update, and locate random position 
  const handleClick = (label: Selection) => {
    if (label === selected) return;
    setSelected(label);
    randomPosition();
  };

  return (
    <div
      ref={containerRef}
      className="toggle-container"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
       {(['one', 'two', 'three'] as Selection[]).map((label) => (
        <Button
          key={label}
          variant={selected === label ? 'secondary' : 'primary'}
          size="lg"
          onClick={() => handleClick(label)}
        >
        {selected === label ? 'Selected' : label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonToggle;
