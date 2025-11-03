import React, { useState } from 'react';
import Section from './components/Section';
import Card from './components/Card';
import HistoricalAnalysis from './components/HistoricalAnalysis';
import Glossary from './components/Glossary';
import { ChartIcon, BrainIcon, RobotIcon, HistoryIcon, BookIcon, BugAntIcon, LightBulbIcon, ClipboardDocumentCheckIcon, FlagIcon, ExclamationTriangleIcon, ShieldExclamationIcon } from './components/IconComponents';
import { GoogleGenAI } from "@google/genai";

const kpiData = [
  { title: "Dívida Líquida / EBITDA", value: "3,8x", change: "+0,5x vs 1T23", positive: false },
  { title: "Market Cap", value: "R$ 800M", change: "-85% vs Pico", positive: false },
  { title: "Same-Store Sales (SSS)", value: "+5,2%", change: "Aceleração", positive: true },
  { title: "Margem EBITDA Ajustada", value: "7,1%", change: "+0,8 p.p. vs 1T23", positive: true },
];

const sabotageEvidence = [
    {
        title: "Amelia.com (2000) vs. Fracasso Digital (2010s)",
        description: "GPA foi pioneiro com um e-commerce integrado em 2000, mas subinvestiu por uma década, perdendo a liderança para o iFood (fundado em 2011). A única explicação é a resistência interna e o desvio de foco para lojas físicas, transformando uma vantagem de 10 anos em uma parceria de subordinação em 2021."
    },
    {
        title: "Confusão de Marcas (2014-2018)",
        description: "O lançamento de múltiplas bandeiras (Minuto, Mercado Extra, Compre Bem, Fresh) sem um posicionamento claro resultou em canibalização e execução fraca. Isso indica uma falha de coordenação e falta de 'buy-in' da média gerência para executar uma estratégia de portfólio coesa."
    },
    {
        title: "Venda da Via Varejo (2019) - 10 Anos Tarde",
        description: "A fusão desastrosa de 2009 demorou uma década para ser revertida. A demora sugere uma forte resistência interna em admitir o erro e o poder de executivos defendendo seus feudos, resultando em bilhões de reais em valor destruído."
    },
     {
        title: "Parceria com iFood (2021) em Vez de Competição",
        description: "Com capital e marca, o GPA poderia ter competido ou adquirido o iFood entre 2011-2015. A decisão de esperar 10 anos e se tornar um parceiro é um forte indício de que a liderança foi convencida internamente de que 'o varejo físico é nosso core', abdicando da guerra digital."
    }
];

const fatalErrors = [
    "Diversificação Suicida (1976-2012): Foco excessivo em eletro, drogarias e postos diluiu a atenção do core business de alimentos.",
    "Perda de Controle Familiar (2012): A gestão do Casino, com interesses e cultura diferentes, quebrou o DNA inovador da empresa.",
    "Ignorou a Revolução Digital (2010-2020): Apesar do pioneirismo com Amelia.com, não investiu para defender a liderança, deixando startups dominarem.",
    "Confusão de Marcas (2014-2021): Múltiplas bandeiras sem estratégia clara levaram à canibalização e enfraquecimento da marca principal.",
    "Vendeu Ativos Tarde e Mal (2019-2021): Atraso na venda da Via Varejo e do Extra Hiper resultou em 'fire sales' que destruíram valor."
];

const remainingAssets = [
    "Marca Pão de Açúcar: Forte reconhecimento nacional associado à qualidade e ao segmento premium.",
    "Base de Clientes: Milhões de clientes cadastrados em programas de fidelidade, um ativo de dados valioso.",
    "Imóveis Estratégicos: Localizações premium que podem ser monetizadas (via sale-leaseback) ou convertidas em hubs logísticos.",
    "Know-how Operacional: Décadas de experiência em supply chain de alimentos e relacionamento com a indústria."
];

const actionPlan = {
    "Fase 1: Estancar Hemorragia (3 meses)": [
        "Foco Brutal: Manter apenas 3 marcas (Pão de Açúcar, Minuto, Fresh) e descontinuar as demais.",
        "Resolver Dívida: Renegociar haircut ou extensão longa e vender R$ 2-3 bi em imóveis não-core.",
        "Nova Governança: Contratar CEO permanente com perfil de varejo digital e renovar 30-50% da média gerência."
    ],
    "Fase 2: Transformação (6-18 meses)": [
        "Parceria Estratégica Profunda: Buscar Joint Venture ou venda de participação para um player de tecnologia (iFood, ML, Amazon).",
        "Digital-First: Investir R$ 500M-1B em tecnologia, construir um super app e expandir dark stores.",
        "Cultura Ágil: Implementar programa agressivo de transformação cultural com remuneração atrelada a KPIs digitais."
    ],
    "Fase 3: Crescimento (2027+)": [
        "Novo Modelo de Loja: Lojas físicas se tornam showrooms e hubs de fulfillment.",
        "E-commerce como Motor: O canal digital deve se tornar a principal fonte de receita.",
        "Marketplace e Dados: Monetizar o tráfego e a base de clientes através de um marketplace 3P."
    ]
};

const riskAnalysisData = [
    {
        risk: "Credores não aceitam proposta",
        probability: "Média (40%)",
        probabilityColor: "bg-yellow-500/20 text-yellow-300",
        impact: "Crítico",
        impactColor: "bg-red-500/20 text-red-300",
        mitigation: [
            "Engajamento Proativo: Formar um comitê com os principais credores para construir consenso antes da proposta formal.",
            "Apresentar Cenários Múltiplos: Desenvolver 3 planos (A, B, C) com diferentes combinações de extensão, juros e haircut.",
            "Oferecer Garantias Adicionais: Usar imóveis não-core ou um 'equity kicker' (opção de converter dívida em ações) como incentivo.",
            "Contratar Assessoria de Renome: Usar um banco de investimento especializado para validar o plano e mediar as negociações."
        ]
    },
    {
        risk: "Parceiro estratégico (iFood) recusa aliança",
        probability: "Baixa (25%)",
        probabilityColor: "bg-green-500/20 text-green-300",
        impact: "Alto",
        impactColor: "bg-orange-500/20 text-orange-300",
        mitigation: [
            "Negociação Paralela: Iniciar conversas exploratórias com Rappi e Cornershop by Uber para criar um senso de urgência e ter um 'Plano B' aquecido.",
            "Proposta de Valor Clara: Focar a proposta não como um pedido de ajuda, mas como uma parceria mutuamente benéfica (sortimento premium vs. logística).",
            "Desenvolver Modelo Híbrido: Acelerar um plano de delivery próprio focado em nichos de alta margem para aumentar o poder de barganha.",
        ]
    },
    {
        risk: "Média gerência sabota a transformação",
        probability: "Alta (60%)",
        probabilityColor: "bg-orange-500/20 text-orange-300",
        impact: "Alto",
        impactColor: "bg-red-500/20 text-red-300",
        mitigation: [
            "Sistema de KPIs Duplos: Atrelar 50% do bônus a metas digitais (crescimento e-commerce, NPS digital) e 50% a metas tradicionais.",
            "Programa 'Digital Champions': Identificar e empoderar gerentes com mentalidade inovadora para liderar projetos-piloto e evangelizar a mudança.",
            "Comunicação Top-Down Agressiva: CEO e C-level devem deixar claro que a não-adesão à estratégia digital resultará em consequências.",
            "Renovação Estrutural: Quebrar silos, criar squads multifuncionais e trazer novos líderes de mercado para posições-chave."
        ]
    },
    {
        risk: "Concorrência reage de forma agressiva",
        probability: "Muito Alta (80%)",
        probabilityColor: "bg-red-500/20 text-red-300",
        impact: "Médio",
        impactColor: "bg-yellow-500/20 text-yellow-300",
        mitigation: [
            "Guerra de Nichos: Evitar competição direta em preço/velocidade. Focar em nichos de alta margem (produtos frescos, marca própria premium, orgânicos).",
            "Fortalecimento do CRM: Usar a base de dados dos programas de fidelidade para criar ofertas ultra-personalizadas e aumentar o custo de troca do cliente.",
            "Inovação em Serviços: Acelerar a implementação de serviços de valor agregado nas lojas (cafés, degustações) que players digitais não podem replicar."
        ]
    }
];


const App: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<string>('');
    const [error, setError] = useState<string>('');
    
    const handleGenerate = async () => {
        if (!prompt) {
            setError('Por favor, insira uma pergunta.');
            return;
        }
        setLoading(true);
        setResult('');
        setError('');

        try {
            const ai = new GoogleGenAI({apiKey: process.env.API_KEY!});
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `Contexto: Você é um analista de turnaround especialista em varejo, analisando a empresa GPA (Grupo Pão de Açúcar) com base em sua história. Use os dados da página e seu conhecimento. Pergunta: ${prompt}`,
            });
            setResult(response.text);
        } catch (e: any) {
            setError(e.message || 'Ocorreu um erro ao contatar a IA.');
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-900 min-h-screen text-slate-300 font-sans">
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
                        GPA: Análise Histórica de um Ponto de Inflexão
                    </h1>
                    <p className="mt-4 text-lg text-slate-400">
                        Entendendo o passado para redefinir o futuro do Grupo Pão de Açúcar.
                    </p>
                </header>

                <div className="space-y-16">
                    <Section title="Análise com Gemini AI" icon={<BrainIcon />}>
                         <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                            <p className="mb-4 text-slate-400">
                                Faça uma pergunta sobre a história do GPA, seus erros estratégicos ou o plano de turnaround. A IA usará o contexto desta página e seu conhecimento para responder.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Ex: Por que a fusão com a Casas Bahia foi um erro?"
                                    className="flex-grow bg-slate-700 text-slate-200 placeholder-slate-500 rounded-md px-4 py-2 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    disabled={loading}
                                    onKeyUp={(e) => e.key === 'Enter' && handleGenerate()}
                                />
                                <button
                                    onClick={handleGenerate}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : <RobotIcon className="h-5 w-5" />}
                                    <span className="ml-2">{loading ? 'Analisando...' : 'Perguntar à IA'}</span>
                                </button>
                            </div>
                             {error && <p className="text-red-400 mt-4">{error}</p>}
                             {result && (
                                <div className="mt-6 p-4 bg-slate-900 border border-slate-700 rounded-md">
                                    <h4 className="font-bold text-lg text-slate-100 mb-2">Resposta do Gemini:</h4>
                                    <div className="prose prose-invert prose-slate max-w-none text-slate-300 whitespace-pre-wrap" >{result}</div>
                                </div>
                            )}
                        </div>
                    </Section>
                    
                    <Section title="Indicadores Chave" icon={<ChartIcon />}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {kpiData.map((kpi, index) => (
                                <Card key={index} title={kpi.title} className="bg-slate-800/50 border-slate-700">
                                    <p className="text-3xl font-bold text-slate-100">{kpi.value}</p>
                                    <p className={`text-sm mt-1 ${kpi.positive ? 'text-green-400' : 'text-red-400'}`}>{kpi.change}</p>
                                </Card>
                            ))}
                        </div>
                    </Section>

                    <Section title="Diagnóstico: Por que o GPA não Lucra?" icon={<ExclamationTriangleIcon />}>
                        <div className="space-y-6">
                            <Card title="1. Curva Exponencial de Juros: O Círculo Vicioso da Dívida" className="bg-red-900/30 border-red-700">
                                <div className="space-y-4 text-sm text-slate-400">
                                    <div>
                                        <h4 className="font-semibold text-red-300">O Problema Central:</h4>
                                        <p>A dívida do GPA (R$ 11-13 bi) é desproporcional à sua geração de caixa (EBITDA de R$ 1-1,5 bi). Isso cria um <span className="font-bold">déficit estrutural anual de R$ 2 a R$ 4,5 bilhões</span>, forçando a empresa a viver apenas para pagar juros.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-300">Impacto Financeiro Direto:</h4>
                                        <ul className="list-disc list-inside space-y-1 pl-2">
                                            <li><span className="font-semibold">Consumo do Caixa:</span> O serviço da dívida consome 3 a 4 vezes todo o EBITDA gerado pela operação.</li>
                                            <li><span className="font-semibold">Sufocamento do Investimento:</span> Não sobram recursos para modernizar lojas, investir em tecnologia ou melhorar a experiência do cliente, perpetuando a obsolescência.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-red-300">Exemplos Concretos na Operação:</h4>
                                         <ul className="list-disc list-inside space-y-1 pl-2">
                                            <li><span className="font-semibold">Canibalização do Lucro:</span> Para cada R$ 100 de lucro operacional, a empresa precisa de R$ 300-R$ 400 para pagar a dívida, tornando a operação deficitária na prática.</li>
                                            <li><span className="font-semibold">Decisões de Curto Prazo:</span> A pressão por caixa força a venda de ativos estratégicos e o corte de investimentos essenciais, prejudicando o futuro do negócio.</li>
                                            <li><span className="font-semibold">Perda de Autonomia:</span> Os credores ditam a estratégia, limitando a capacidade da gestão de inovar e transformando um plano de crescimento em um plano de sobrevivência.</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Section>

                    <Section title="Análise Histórica: Padrões, Inflexões e Lições" icon={<HistoryIcon />}>
                        <HistoricalAnalysis />
                    </Section>
                    
                    <Section title="Padrões Identificados: A Resistência da Média Gerência" icon={<BugAntIcon />}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {sabotageEvidence.map((item, index) => (
                               <Card key={index} title={item.title} className="bg-slate-800/50 border-slate-700">
                                   <p className="text-sm text-slate-400">{item.description}</p>
                               </Card>
                           ))}
                        </div>
                         <div className="mt-6 bg-amber-900/40 border border-amber-700 text-amber-200 rounded-lg p-4 text-center">
                            <h4 className="font-bold">A Prova Inescapável (Smoking Gun)</h4>
                            <p className="text-sm mt-2">O GPA tinha uma vantagem de **20 anos** com o Amelia.com (2000) e perdeu para startups. A única explicação plausível é uma resistência interna sistemática e um subinvestimento crônico no digital.</p>
                        </div>
                    </Section>

                    <Section title="Lições Estratégicas Críticas" icon={<LightBulbIcon />}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-red-400 mb-4">Erros Fatais que Levaram à Crise</h3>
                                <ul className="space-y-3">
                                    {fatalErrors.map((error, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span className="text-slate-400 text-sm">{error}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div>
                                <h3 className="text-xl font-semibold text-green-400 mb-4">Ativos Remanescentes (O Que Ainda Funciona)</h3>
                                <ul className="space-y-3">
                                    {remainingAssets.map((asset, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span className="text-slate-400 text-sm">{asset}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="Plano de Ação para André Diniz" icon={<ClipboardDocumentCheckIcon />}>
                         <div className="space-y-6">
                            {Object.entries(actionPlan).map(([phase, steps]) => (
                                <div key={phase} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-slate-100 mb-4">{phase}</h3>
                                    <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
                                        {steps.map((step, index) => (
                                            <li key={index}>{step}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="Análise de Risco e Mitigação" icon={<ShieldExclamationIcon />}>
                        <div className="overflow-x-auto bg-slate-800/50 border border-slate-700 rounded-lg">
                            <table className="w-full text-sm text-left text-slate-400">
                                <thead className="text-xs text-slate-300 uppercase bg-slate-700/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Risco</th>
                                        <th scope="col" className="px-6 py-3">Probabilidade / Impacto</th>
                                        <th scope="col" className="px-6 py-3">Plano de Mitigação Detalhado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riskAnalysisData.map((risk, index) => (
                                    <tr key={index} className="border-b border-slate-700 last:border-b-0">
                                        <td className="px-6 py-4 font-semibold text-slate-200 align-top">{risk.risk}</td>
                                        <td className="px-6 py-4 align-top whitespace-nowrap">
                                            <div className="flex flex-col space-y-2">
                                                <span className={`px-2 py-1 text-xs font-bold rounded-full text-center ${risk.probabilityColor}`}>{risk.probability}</span>
                                                <span className={`px-2 py-1 text-xs font-bold rounded-full text-center ${risk.impactColor}`}>{risk.impact}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                                {risk.mitigation.map((step, i) => <li key={i}>{step}</li>)}
                                            </ul>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section title="Conclusão: A Tragédia e a Última Chance" icon={<FlagIcon />}>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-bold text-slate-100">A Empresa que Tinha Tudo para Ser o Amazon/iFood Brasileiro</h3>
                            <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
                                O GPA possuía todas as vantagens: pioneirismo, capital, marca, clientes e infraestrutura. A crise atual é resultado de uma década de diversificação suicida, perda de controle, negação da revolução digital e sabotagem interna. A volta da família Diniz ao comando é a última chance de reverter o declínio, mas a empresa está mais fraca e a competição, mais forte.
                            </p>
                            <div className="mt-6 font-bold text-xl text-amber-400">
                                O relógio está correndo. Cada mês conta.
                            </div>
                        </div>
                    </Section>

                    <Section title="Glossário do Turnaround" icon={<BookIcon />}>
                        <Glossary />
                    </Section>
                </div>
            </main>
        </div>
    );
};

export default App;