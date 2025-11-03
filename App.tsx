import React from 'react';
import Section from './components/Section';
import GovernanceAnalysis from './components/GovernanceAnalysis';
import HistoricalAnalysis from './components/HistoricalAnalysis';
import DarkStoreAnalysis from './components/DarkStoreAnalysis';
import Glossary from './components/Glossary';
import StrategicPlaybook from './components/StrategicPlaybook';
import { PaoDeAcucarLogo, UsersIcon, TimelineIcon, StoreIcon, BookIcon, LightbulbIcon, ArchiveBoxIcon, CodeBracketIcon } from './components/IconComponents';
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

          <Section title="Fonte e Setup Local" icon={<CodeBracketIcon />}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 space-y-4">
                <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" className="rounded-md border border-slate-600 w-full object-cover" />
                
                <h3 className="text-xl font-bold text-slate-100 pt-4">Rodar Localmente</h3>
                <p className="text-sm text-slate-400">Pré-requisitos: Node.js instalado.</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300">
                    <li>Instale as dependências:
                        <pre className="bg-slate-900 p-2 rounded-md text-xs text-slate-400 font-mono mt-1 overflow-x-auto">npm install</pre>
                    </li>
                    <li>
                        Defina a `GEMINI_API_KEY` no arquivo `.env.local` com sua chave de API do Gemini.
                    </li>
                    <li>Rode o aplicativo:
                        <pre className="bg-slate-900 p-2 rounded-md text-xs text-slate-400 font-mono mt-1 overflow-x-auto">npm run dev</pre>
                    </li>
                </ol>

                <h3 className="text-xl font-bold text-slate-100 pt-4">Ver no AI Studio</h3>
                <p className="text-sm text-slate-300">
                    Acesse o projeto diretamente no Google AI Studio: <a href="https://ai.studio/apps/drive/1hezCFGQm5UZw_sW25c6rIihQwyyN57n7" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">aqui</a>.
                </p>
            </div>
          </Section>

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