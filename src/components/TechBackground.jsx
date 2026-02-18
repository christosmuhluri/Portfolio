import React from 'react';

const nodes = [
  { left: '8%', top: '12%', delay: '0s' },
  { left: '22%', top: '28%', delay: '1.1s' },
  { left: '36%', top: '18%', delay: '0.5s' },
  { left: '51%', top: '35%', delay: '1.7s' },
  { left: '66%', top: '14%', delay: '0.9s' },
  { left: '82%', top: '26%', delay: '1.3s' },
  { left: '14%', top: '62%', delay: '0.4s' },
  { left: '30%', top: '74%', delay: '1.5s' },
  { left: '48%', top: '60%', delay: '0.8s' },
  { left: '63%', top: '78%', delay: '1.9s' },
  { left: '78%', top: '64%', delay: '0.6s' },
  { left: '90%', top: '82%', delay: '1.2s' },
];

export default function TechBackground() {
  return (
    <div className="tech-bg fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="tech-bg-base absolute inset-0" />
      <div className="tech-bg-grid absolute inset-0" />
      <div className="tech-bg-circuit absolute inset-0" />
      <div className="tech-bg-scan absolute inset-0" />

      {nodes.map((node, index) => (
        <span
          key={index}
          className="tech-bg-node absolute"
          style={{ left: node.left, top: node.top, animationDelay: node.delay }}
        />
      ))}
    </div>
  );
}
