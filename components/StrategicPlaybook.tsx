import React, { useState } from 'react';
import Card from './Card';

const strategicOptions = {
    jv: {
        name: "Opção B: JV com iFood (Realista)",
        concept: "GPA + iFOOD = JOINT VENTURE",
        description: "Unir a marca e os ativos do GPA com a tecnologia, logística e capital do iFood para criar uma nova empresa focada em dark stores premium. A parceria mitiga o risco de execução e acelera o time-to-market.",
        structure: {
            "Estrutura": "60% GPA + 40% iFood (nova empresa, CNPJ separado)",
            "Contribuição GPA": "30-50 lojas para conversão, marca Pão de Açúcar, relacionamento com fornecedores.",
            "Contribuição iFood": "Plataforma de tecnologia, rede de entregadores, capital de crescimento (R$ 300M+).",
            "Objetivo": "100 dark stores premium em 24 meses, posicionando-se como 'iFood Mercado Premium' com exit (IPO/venda) em 3-5 anos."
        },
        pros: ["Acesso à tecnologia e logística do iFood sem CapEx pesado", "Monetiza ativos existentes (lojas não-rentáveis)", "Aprende o modelo digital com o líder de mercado", "Mantém controle majoritário (55-60%)"],
        cons: ["Divide o upside do negócio", "Dependência de um parceiro que também é concorrente", "Complexidade de negociação e governança da JV"]
    },
    niche: {
        name: "Opção C: Nicho Premium (Conservador)",
        concept: "O 'WHOLE FOODS / EATALY BRASILEIRO'",
        description: "Abandonar a competição por velocidade e preço. Focar 100% no cliente de altíssima renda, competindo em qualidade, curadoria e experiência, com um modelo de negócio de margens elevadas.",
        structure: {
            "Competição": "NÃO em velocidade ou preço. SIM em qualidade (orgânicos, importados), curadoria (sommeliers) e experiência.",
            "Target": "Classe A+ (top 2% da renda), dispostos a pagar 30-50% mais por qualidade.",
            "Canais": "15-20 lojas físicas como hubs de experiência + 10-15 dark stores para delivery em 60-90min + modelo de assinatura de cestas curadas.",
            "Diferenciação": "Curadoria obsessiva (cada produto tem uma história), sustentabilidade real e um programa de membership exclusivo."
        },
        pros: ["Joga em um 'oceano azul' com menos concorrência direta", "Permite margens brutas muito altas (35-40%)", "Reforça e eleva a marca Pão de Açúcar", "Menor risco de execução, pois está mais próximo do core business"],
        cons: ["Mercado endereçável muito menor", "Potencial de escala limitado", "CapEx próprio necessário (R$ 200-300M)", "Crescimento mais lento que as outras opções"]
    },
    platform: {
        name: "Opção A: Virar Plataforma (Radical)",
        concept: "O 'MERCADO LIVRE DO FOOD'",
        description: "Uma transformação radical onde o GPA deixa de ser apenas um varejista e se torna uma plataforma tecnológica que conecta toda a cadeia de alimentos (outros mercados, produtores locais) aos consumidores.",
        structure: {
            "Modelo": "Híbrido 1P (vendas próprias) e 3P (marketplace de terceiros).",
            "Monetização": "Comissão de 10-15% sobre vendas de terceiros, margem de 25-30% em vendas próprias, e novas receitas de Ads e serviços de fulfillment.",
            "Transformação": "Exige a contratação de um CEO de tecnologia e a montagem de uma equipe de engenharia de elite, com um orçamento de R$ 200-300M/ano para tech.",
            "Potencial": "Multiplicar o valuation por 10x, atingindo R$ 5-8 bilhões."
        },
        pros: ["Maior potencial de upside (10x valuation)", "Modelo de negócio de margens altas e escalável", "Cria um fosso competitivo (moat) com efeito de rede", "Diversifica as fontes de receita"],
        cons: ["Extremamente difícil de executar; culturalmente oposto ao DNA do GPA", "Risco de execução altíssimo (9/10)", "Exige capital massivo para tecnologia", "Time-to-market longo (3-5 anos)"]
    }
};

const emergencyPlan = {
    title: "🚨 Plano de Emergência: 90 Dias para Sobreviver",
    weeks: [
        {
            title: "Semanas 1-2: Decisão Estratégica",
            steps: [
                "Reunião de emergência do conselho para apresentar o diagnóstico brutal: 'RJ em 6-12 meses se nada mudar'.",
                "Forçar uma votação entre as 3 opções estratégicas (Venda, JV, Nicho). Não sair da sala sem uma decisão.",
                "Iniciar contato imediato com o parceiro estratégico escolhido (ex: CEO do iFood).",
            ]
        },
        {
            title: "Semanas 3-4: Estruturação da Parceria",
            steps: [
                "Negociar e assinar um Term Sheet (acordo de intenções) vinculante com o parceiro.",
                "Definir os pontos críticos: valuation, equity split (ex: 55/45 GPA/iFood), governança, e investimento.",
                "Comunicar ao mercado a exploração da parceria para ganhar tempo com os credores.",
            ]
        },
        {
            title: "Semanas 5-8: Due Diligence Mútua",
            steps: [
                "Ambas as empresas abrem seus números e operações para uma auditoria rigorosa (financeira, operacional, legal).",
                "Advogados começam a redigir os contratos definitivos da Joint Venture.",
                "Negociar um waiver (perdão temporário) dos covenants com os credores, usando o Term Sheet como garantia do plano.",
            ]
        },
        {
            title: "Semanas 9-12: Documentação e Fechamento",
            steps: [
                "Obter aprovações internas (conselhos, acionistas) e regulatórias (CADE).",
                "Assinatura do contrato definitivo e transferência de capital e ativos para a nova empresa (JV).",
                "Comunicado oficial à imprensa e ao mercado, detalhando a parceria e o plano de futuro.",
            ]
        },
    ]
}

const StrategicPlaybook: React.FC = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof strategicOptions>('jv');

    const renderStructure = (structure: Record<string, string>) => (
        <ul className="text-xs space-y-2 mt-2">
            {Object.entries(structure).map(([key, value]) => (
                 <li key={key}><strong className="text-slate-200">{key}:</strong> <span className="text-slate-400">{value}</span></li>
            ))}
        </ul>
    );

     const renderProsCons = (pros: string[], cons: string[]) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
            <div>
                <h5 className="font-semibold text-green-400">Vantagens:</h5>
                <ul className="list-disc list-inside text-slate-300 pl-2 space-y-1 mt-1">
                    {pros.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
             <div>
                <h5 className="font-semibold text-red-400">Desafios:</h5>
                <ul className="list-disc list-inside text-slate-300 pl-2 space-y-1 mt-1">
                    {cons.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
    );


    return (
        <div className="space-y-16">
            <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-6">Opções Estratégicas e Recomendação</h3>
                 <div className="mb-4 flex flex-wrap border-b border-slate-700">
                    {Object.entries(strategicOptions).map(([key, option]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key as keyof typeof strategicOptions)}
                            className={`py-2 px-4 font-semibold text-sm transition-colors duration-200 -mb-px ${activeTab === key ? `text-blue-400 border-b-2 border-blue-400` : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'}`}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
                <div className="p-4 rounded-b-lg border border-t-0 border-slate-700 bg-slate-800/50">
                    <h4 className="font-bold text-lg text-blue-300">{strategicOptions[activeTab].concept}</h4>
                    <p className="text-sm text-slate-400 mt-1">{strategicOptions[activeTab].description}</p>
                    <div className="mt-4">
                        {renderStructure(strategicOptions[activeTab].structure)}
                    </div>
                    {renderProsCons(strategicOptions[activeTab].pros, strategicOptions[activeTab].cons)}
                </div>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-6">{emergencyPlan.title}</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    {emergencyPlan.weeks.map(week => (
                        <Card key={week.title} title={week.title} className="bg-slate-800/50 border-slate-700">
                             <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                               {week.steps.map((step, index) => <li key={index}>{step}</li>)}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>

            <Card title="🎬 Conclusão Final: A Verdade Brutal" className="bg-slate-800 border-blue-500/30">
                <p className="text-slate-300">O iFood não é apenas um concorrente; é um <strong className="text-blue-300">arquiteto de ecossistema</strong>. Ele venceu não por ter um produto melhor, mas por construir uma plataforma que orquestra múltiplos modelos de negócio simultaneamente. O GPA perdeu a guerra porque pensou em <strong className="text-red-400">produtos</strong>, enquanto o iFood pensava em <strong className="text-green-400">plataforma</strong>.</p>
                <p className="mt-4 font-bold text-yellow-300">A janela de oportunidade é de 12-18 meses. Se o plano de parceria (Opção B) ou o de nicho (Opção C) não for executado com urgência, a irrelevância terminal é o cenário mais provável.</p>
            </Card>
        </div>
    );
};

export default StrategicPlaybook;
