import React from 'react';
import Section from './components/Section';
import GovernanceAnalysis from './components/GovernanceAnalysis';
import HistoricalAnalysis from './components/HistoricalAnalysis';
import DarkStoreAnalysis from './components/DarkStoreAnalysis';
import Glossary from './components/Glossary';
import StrategicPlaybook from './components/StrategicPlaybook';
import { PaoDeAcucarLogo, UsersIcon, TimelineIcon, StoreIcon, BookIcon, LightbulbIcon, ArchiveBoxIcon } from './components/IconComponents';
import AiChatWidget from './components/AiChatWidget';
import CdAnalysis from './components/CdAnalysis';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <PaoDeAcucarLogo className="h-24 w-auto mx-auto text-green-400" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mt-8">
            Análise Estratégica: O Futuro do GPA no Varejo Digital
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Um deep-dive sobre a jornada, os desafios e o playbook estratégico para a sobrevivência e reinvenção do Grupo Pão de Açúcar na era do quick-commerce.
          </p>
        </header>

        <div className="space-y-24">

          <Section title="Governança e Estrutura de Poder" icon={<UsersIcon />}>
            <GovernanceAnalysis />
          </Section>

          <Section title="Análise Histórica: Padrões, Inflexões e Lições" icon={<TimelineIcon />}>
            <HistoricalAnalysis />
          </Section>

          <Section title="Análise Competitiva: Dark Stores e a Arquitetura do iFood" icon={<StoreIcon />}>
            <DarkStoreAnalysis />
          </Section>
          
          <Section title="O Futuro dos Centros de Distribuição Clássicos" icon={<ArchiveBoxIcon />}>
            <CdAnalysis />
          </Section>

          <Section title="Playbook Estratégico: 90 Dias para Sobreviver" icon={<LightbulbIcon />}>
            <StrategicPlaybook />
          </Section>

          <Section title="Glossário Estratégico" icon={<BookIcon />}>
            <Glossary />
          </Section>
        </div>

      </main>
      <AiChatWidget />
      <footer className="text-center py-8 border-t border-slate-800 mt-16">
          <p className="text-sm text-slate-500">Análise confidencial preparada para o conselho. © 2025</p>
      </footer>
    </div>
  );
}

export default App;