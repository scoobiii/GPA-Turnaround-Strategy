import React from 'react';
import Card from './Card';

const stakeholders = [
    { name: "Casino Group (França)", role: "Historicamente controlador majoritário" },
    { name: "Família Diniz", role: "Fundadores, influência estratégica reduzida" },
    { name: "Credores/Bancos", role: "Poder crescente devido ao endividamento" },
    { name: "Gestores profissionais", role: "Execução operacional" },
    { name: "Minoritários", role: "Pressão por governança" }
];

const decisionMakers = [
    { who: "Conselho de Administração", what: "Define estratégia macro, aprova grandes investimentos, monitora risco." },
    { who: "CEO", what: "Execução da estratégia, gestão operacional, resultados do dia-a-dia." },
    { who: "Acionistas Controladores", what: "Visão de longo prazo, mas podem conflitar com necessidades de caixa." }
];

const ceoProfile = {
    past: ["Background em varejo tradicional", "Foco em eficiência operacional", "Gestão de margens e custos"],
    ideal: ["Híbrido: Varejo + Digital/Tech", "Experiência em transformação cultural", "Capacidade de atrair talentos tech", "Credibilidade com investidores"]
}

const GovernanceAnalysis: React.FC = () => {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card title="Stakeholders e Equilíbrio de Forças" className="bg-slate-800/50 border-slate-700">
                    <ul className="space-y-3">
                        {stakeholders.map(s => (
                            <li key={s.name}>
                                <p className="font-semibold text-slate-200">{s.name}</p>
                                <p className="text-sm text-slate-400">{s.role}</p>
                            </li>
                        ))}
                    </ul>
                </Card>
                <Card title="Peso e Responsabilidades" className="bg-slate-800/50 border-slate-700">
                    <ul className="space-y-3">
                        {decisionMakers.map(d => (
                             <li key={d.who}>
                                <p className="font-semibold text-slate-200">{d.who}</p>
                                <p className="text-sm text-slate-400">{d.what}</p>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>

            <div>
                 <h3 className="text-2xl font-bold text-slate-100 mb-6">Estrutura de Poder e Decisão</h3>
                 <pre className="bg-slate-900 border border-slate-700 p-4 rounded-md text-xs sm:text-sm text-slate-400 font-mono overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│           ASSEMBLEIA GERAL DE ACIONISTAS (AGO)              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              CONSELHO DE ADMINISTRAÇÃO (8 membros)          │
│        (6 Independentes, 2 Não-Independentes)             │
└────┬──────────────┬──────────────┬──────────────┬──────────┘
     │              │              │              │
     ▼              ▼              ▼              ▼
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────────┐
│ Comitê  │    │ Comitê  │    │ Comitê  │    │  Conselho   │
│Auditoria│    │ Gestão  │    │Financeiro│    │   Fiscal    │
└─────────┘    └─────────┘    └─────────┘    └─────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│                    DIRETORIA EXECUTIVA                      │
│     • CEO Interino + CFO + DRI                              │
│     • Diretor Comercial                                     │
│     (OBS: Estrutura extremamente enxuta = crise)           │
└─────────────────────────────────────────────────────────────┘`}
                 </pre>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <Card title="Análise Crítica da Estrutura" className="bg-slate-800/50 border-slate-700">
                    <div>
                        <h4 className="font-semibold text-green-400">Pontos Positivos:</h4>
                        <ul className="list-disc list-inside text-sm text-slate-300 pl-2 mt-1">
                            <li>Maioria independente no Conselho (6 de 8)</li>
                            <li>Comitês especializados e Conselho Fiscal instalado</li>
                        </ul>
                    </div>
                     <div className="mt-4">
                        <h4 className="font-semibold text-red-400">Pontos Críticos:</h4>
                         <ul className="list-disc list-inside text-sm text-slate-300 pl-2 mt-1">
                            <li>CEO Interino e acúmulo de funções (CFO+CEO)</li>
                            <li>Diretoria subdimensionada (apenas 2 membros)</li>
                        </ul>
                    </div>
                </Card>
                 <Card title="Perfil de CEO: Passado vs. Futuro" className="bg-slate-800/50 border-slate-700">
                      <div>
                        <h4 className="font-semibold text-yellow-400">Perfil Anterior (Padrão):</h4>
                        <ul className="list-disc list-inside text-sm text-slate-300 pl-2 mt-1">
                           {ceoProfile.past.map(p => <li key={p}>{p}</li>)}
                        </ul>
                    </div>
                     <div className="mt-4">
                        <h4 className="font-semibold text-teal-400">Perfil Atual/Ideal (Necessário):</h4>
                         <ul className="list-disc list-inside text-sm text-slate-300 pl-2 mt-1">
                            {ceoProfile.ideal.map(i => <li key={i}>{i}</li>)}
                        </ul>
                    </div>
                 </Card>
            </div>
            
             <Card title="Análise da Nova Liderança: André Diniz na Presidência do Conselho" className="bg-blue-900/30 border-blue-700">
                <p className="text-blue-300 mb-4">A chegada de André Diniz (família fundadora) à presidência do conselho, com Edison Ticle (CFO da Minerva) como vice, representa a retomada do controle estratégico pela família, com um forte contrapeso de expertise financeira e de mercado.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 className="font-semibold text-green-400">Implicações Positivas:</h4>
                         <ul className="list-disc list-inside text-slate-300 pl-2 mt-1 space-y-1">
                            <li>**Decisão mais rápida:** Menos burocracia e mais "skin in the game".</li>
                            <li>**Visão de longo prazo:** Família pensa em gerações, não em trimestres.</li>
                            <li>**Legitimidade interna:** Nome Diniz tem peso cultural para quebrar resistências.</li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="font-semibold text-red-400">Riscos a Monitorar:</h4>
                         <ul className="list-disc list-inside text-slate-300 pl-2 mt-1 space-y-1">
                            <li>**Conflito de interesse:** Interesses da família vs. minoritários.</li>
                            <li>**Capacidade técnica:** Background é mais de varejo tradicional do que digital.</li>
                            <li>**Relação com credores:** Podem ver a mudança como patrimonialismo.</li>
                        </ul>
                    </div>
                </div>
            </Card>

        </div>
    );
};

export default GovernanceAnalysis;
