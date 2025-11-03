import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, children, className, onClick }) => {
  const isClickable = !!onClick;
  return (
    <div 
      className={`border rounded-lg p-4 h-full ${className} ${isClickable ? 'cursor-pointer' : ''}`} 
      onClick={onClick}
    >
      <h3 className="font-bold text-md mb-3 text-slate-100">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;