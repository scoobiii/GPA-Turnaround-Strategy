import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <div className="text-blue-400 mr-3">{icon}</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
