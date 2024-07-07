import React from 'react';

const SbIcon = ({ size = 18, color = 'currentColor' }) => {
  const svgStyle = {
    display: 'inline-block',
    width: `${size}px`,
    height: `${size}px`,
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      style={svgStyle}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <text
        x="12"
        y="12"
        dominantBaseline="central"
        textAnchor="middle"
        fill={color}
        stroke="none"
        fontSize="10"
        fontWeight="bold"
      >
        Sb
      </text>
    </svg>
  );
};

export default SbIcon;