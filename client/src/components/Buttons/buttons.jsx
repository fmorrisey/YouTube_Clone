import React from 'react';

export default function Button({ children, color, onClick }) {
  return (
    <button onClick={onClick} className={`Btn ${color}`}>
      {children}
    </button>
  );
}