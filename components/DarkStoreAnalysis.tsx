import React, { useState } from 'react';
import Card from './Card';

const players = {
    gpa: {
        name: "GPA",
        color: "text-green-400",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/20",
        content: null,
        tables: {
            "Especificações Físicas": [
                { "Característica": "Metragem", "Especificação": "400-800m²", "Justificativa": "Lojas de bairro convertidas" },
                { "Característica": "Localização", "Especificação": "Bairros classe A/B, raio 3-5km", "Justificativa": "Aproveita lojas existentes" },
                { "Característica": "Layout", "Especificação": "70% estoque + 30% picking", "Justificativa": "Prioriza densidade de SKUs" },
            ],
            "Operação": [
                { "Aspecto": "SKUs", "Detalhes": "3.000-5.000 itens (Foco em giro alto + premium)" },
                { "Aspecto": "Picking", "Detalhes": "Manual, por zona (CapEx zero)" },
                { "Aspecto": "Capacidade", "Detalhes": "150-250 pedidos/dia" },
            ],
            "Financeiro": [
                { "Item": "CapEx conversão", "Valor": "R$ 150-300k", "Observação": "Reorganiza layout de loja existente" },
                { "Item": "Payback", "Valor": "18-24 meses", "Observação": "Conservador" },
                { "Item": "EBITDA target", "Valor": "5-7%", "Observação": "Após maturação (12 meses)" },
            ]
        },
        strategy: {
            advantages: ["Converte lojas não-rentáveis", "Marca forte Pão de Açúcar", "Base de clientes fidelidade", "Imóveis próprios"],
            challenges: ["Tecnologia legada", "Cultura de varejo físico", "Capital limitado", "Competição feroz"]
        }
    },
    ml: {
        name: "Mercado Livre",
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/20",
        content: null,
        tables: {
            "Especificações Físicas": [
                { "Característica": "Metragem", "Especificação": "1.500-3.000m²", "Justificativa": "Sortimento amplo (não só food)" },
                { "Característica": "Pé-direito", "Especificação": "6-8 metros", "Justificativa": "Verticalização com racks altos" },
                { "Característica": "Layout", "Especificação": "80% estoque + 20% picking", "Justificativa": "Densidade máxima" },
            ],
            "Operação": [
                { "Aspecto": "SKUs", "Detalhes": "15.000-30.000 itens (5-10x GPA)" },
                { "Aspecto": "Picking", "Detalhes": "Semi-automatizado (RFID, esteiras)" },
                { "Aspecto": "Horário", "Detalhes": "24/7 (Operação contínua)" },
            ],
            "Financeiro": [
                { "Item": "CapEx", "Valor": "R$ 2-5M", "Observação": "10-20x GPA (automação)" },
                { "Item": "Payback", "Valor": "24-36 meses", "Observação": "Escala justifica" },
                { "Item": "EBITDA target", "Valor": "10-15%", "Observação": "Economia de escala" },
            ]
        },
        strategy: {
            advantages: ["Escala brutal (60+ dark stores)", "Automação (R$ 15 bi investidos)", "Ecossistema Full Commerce", "Dados e IA preditiva"],
            challenges: ["Foco em same-day, não ultra-fast", "Menor expertise em perecíveis"]
        }
    },
    amazon: {
        name: "Amazon",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
        content: null,
        tables: {
            "Especificações Físicas": [
                { "Característica": "Metragem", "Especificação": "2.000-5.000m²", "Justificativa": "Escala global" },
                { "Característica": "Pé-direito", "Especificação": "8-12 metros", "Justificativa": "Máxima verticalização robotizada" },
                { "Característica": "Layout", "Especificação": "85% estoque + 15% ops", "Justificativa": "Densidade máxima automatizada" },
            ],
            "Operação": [
                { "Aspecto": "SKUs", "Detalhes": "30.000-50.000 itens (Long tail infinita)" },
                { "Aspecto": "Picking", "Detalhes": "Robotizado (Kiva/Amazon Robotics)" },
                { "Aspecto": "Capacidade", "Detalhes": "2.000-5.000 pedidos/dia (10-20x GPA)" },
            ],
            "Financeiro": [
                { "Item": "CapEx", "Valor": "R$ 20-50M", "Observação": "100x GPA (robótica de ponta)" },
                { "Item": "Payback", "Valor": "36-48 meses", "Observação": "Visão de 10-20 anos" },
                { "Item": "EBITDA target", "Valor": "8-12%", "Observação": "Escala global subsidia BR" },
            ]
        },
        strategy: {
            advantages: ["Tecnologia superior (robótica)", "Padrão global replicado", "Ecossistema Prime (lock-in)", "Integração com AWS"],
            challenges: ["Investimento conservador no BR", "Fraco em perecíveis", "Capilaridade limitada vs. ML"]
        }
    },
    ifood: {
        name: "iFood",
        color: "text-red-400",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/20",
        tables: {},
        strategy: { advantages: [], challenges: [] },
        content: (
            <div className="space-y-8 text-sm">
                
                <div>
                    <h3 className="font-bold text-xl mb-4 text-red-300">🏗️ Estrutura: 3 Modelos de Negócio Distintos</h3>
                    <p className="mb-4">O iFood opera três negócios diferentes sob a mesma marca, uma estratégia multi-camadas que confere enorme vantagem competitiva e confunde os concorrentes.</p>
                
                    <div className="space-y-6">
                        <Card title="1️⃣ iFood Marketplace (2011)" className="bg-slate-800/50 border-slate-700">
                            <p><strong className="text-slate-200">Modelo:</strong> Plataforma pura (conecta restaurantes, clientes e entregadores).</p>
                            <p><strong className="text-slate-200">Papel iFood:</strong> Orquestrador. Não cozinha, não possui restaurantes. Apenas conecta e gerencia a entrega.</p>
                             <p className="mt-2 text-xs">Neste modelo, as "dark kitchens" são dos restaurantes parceiros, não do iFood, que apenas as lista no app.</p>
                        </Card>

                        <Card title="2️⃣ iFood Mercado (2020+)" className="bg-slate-800/50 border-slate-700">
                             <p><strong className="text-slate-200">Modelo:</strong> Varejo próprio (1P) com dark stores.</p>
                            <p><strong className="text-slate-200">Papel iFood:</strong> Dono e Operador. Compra, estoca, precifica e separa os produtos em seus próprios mini-CDs urbanos.</p>
                             <p className="mt-2 text-xs">Aqui, o iFood virou um varejista para capturar a margem completa (30-35%) e controlar a experiência de entrega ultra-rápida (15-30 min).</p>
                        </Card>

                        <Card title="3️⃣ iFood Shops (2021+)" className="bg-slate-800/50 border-slate-700">
                            <p><strong className="text-slate-200">Modelo:</strong> Marketplace especializado (3P) para supermercados.</p>
                            <p><strong className="text-slate-200">Papel iFood:</strong> Agregador de parceiros (GPA, Carrefour, etc). O parceiro separa o pedido na sua loja, e o iFood cuida da entrega.</p>
                            <p className="mt-2 text-xs">O iFood compete e coopera ao mesmo tempo. Ele ganha a margem cheia em seu dark store ou uma comissão segura se o cliente escolher um parceiro. <strong className="text-red-300">O iFood ganha sempre.</strong></p>
                        </Card>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-xl mb-4 text-red-300">🏭 Dark Kitchen vs. Dark Store</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800/50 p-3 rounded-md border border-slate-700">
                            <h4 className="font-semibold text-slate-200">Dark Kitchen = Restaurante sem Salão</h4>
                             <ul className="list-disc list-inside text-xs mt-2 space-y-1 text-slate-400">
                                <li>**O que faz:** PRODUZ COMIDA na hora.</li>
                                <li>**Margem Bruta:** 60-70%.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800/50 p-3 rounded-md border border-slate-700">
                            <h4 className="font-semibold text-slate-200">Dark Store = Supermercado sem Loja</h4>
                            <ul className="list-disc list-inside text-xs mt-2 space-y-1 text-slate-400">
                                <li>**O que faz:** ARMAZENA E SEPARA produtos industrializados.</li>
                                <li>**Margem Bruta:** 25-30%.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                 <div>
                    <h3 className="font-bold text-xl mb-4 text-red-300">🔥 A Vantagem Competitiva Brutal</h3>
                    <p className="mb-4">A combinação de um ecossistema completo (restaurantes, mercado, farmácia, fintech, ads) com um modelo de negócio asset-light e cultura tech-first cria um fosso competitivo quase intransponível.</p>
                     <ul className="list-decimal list-inside space-y-2 pl-2 text-slate-300">
                        <li><strong>Plataforma &gt; Produto:</strong> O efeito de rede (mais clientes atraem mais parceiros, que atraem mais clientes) é o maior ativo.</li>
                        <li><strong>Asset-Light Escala Rápido:</strong> Usar a "gig economy" e parceiros permite uma expansão massiva com baixo investimento de capital (CapEx).</li>
                         <li><strong>Dados como Petróleo:</strong> O iFood usa IA para tudo: otimizar rotas, decidir sortimento de cada dark store e personalizar ofertas, criando um ciclo de melhoria contínua.</li>
                    </ul>
                 </div>
            </div>
        )
    }
};

const consolidatedData = [
    { metric: "Metragem média", gpa: "400-800m²", ml: "1.500-3.000m²", amazon: "2.000-5.000m²", ifood: "150-400m²" },
    { metric: "CapEx por unidade", gpa: "R$ 150-300k", ml: "R$ 2-5M", amazon: "R$ 20-50M", ifood: "R$ 80-200k" },
    { metric: "Payback", gpa: "18-24 meses", ml: "24-36 meses", amazon: "36-48 meses", ifood: "8-12 meses ⭐" },
    { metric: "SKUs", gpa: "3-5k", ml: "15-30k", amazon: "30-50k", ifood: "1.5-3k" },
    { metric: "Pedidos/dia", gpa: "150-250", ml: "800-1.500", amazon: "2.000-5.000", ifood: "300-600" },
    { metric: "Tempo entrega", gpa: "30-60min", ml: "Same/next day", amazon: "Next-day", ifood: "15-30min ⭐" },
    { metric: "Automação", gpa: "Zero", ml: "Parcial", amazon: "Total ⭐", ifood: "Zero" },
    { metric: "EBITDA target", gpa: "5-7%", ml: "10-15%", amazon: "8-12%", ifood: "12-18% ⭐" },
    { metric: "Unidades Brasil", gpa: "0-10", ml: "60+", amazon: "10-15", ifood: "300+ ⭐" },
];

type PlayerForDetail = {
    color: string;
    tables: {
        [key: string]: Array<Record<string, React.ReactNode>>;
    };
    strategy: {
        advantages: string[];
        challenges: string[];
    };
};

const PlayerDetail: React.FC<{ player: PlayerForDetail }> = ({ player }) => (
    <div className="space-y-6">
        {Object.entries(player.tables).map(([title, data]) => (
            <div key={title}>
                <h4 className={`font-bold text-lg mb-2 ${player.color}`}>{title}</h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-300 uppercase bg-slate-700/50">
                            <tr>
                                {Object.keys(data[0]).map(key => <th key={key} className="px-4 py-2">{key}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} className="border-b border-slate-800">
                                    {Object.values(row).map((val, i) => <td key={i} className="px-4 py-2">{val as React.ReactNode}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        ))}
        <div>
            <h4 className={`font-bold text-lg mb-2 ${player.color}`}>Estratégia</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                    <h5 className="font-semibold text-green-400">Vantagens Únicas:</h5>
                    <ul className="list-disc list-inside text-slate-300 text-xs pl-2 space-y-1 mt-1">
                        {player.strategy.advantages.map(adv => <li key={adv}>{adv}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold text-red-400">Desafios:</h5>
                    <ul className="list-disc list-inside text-slate-300 text-xs pl-2 space-y-1 mt-1">
                        {player.strategy.challenges.map(cha => <li key={cha}>{cha}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);


const DarkStoreAnalysis: React.FC = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof players>('ifood');

    return (
        <div className="space-y-16">
            <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">Conceito e Definição</h3>
                <p className="text-slate-400"><strong className="text-slate-200">Dark Store (Loja Escura):</strong> Ponto de venda convertido em micro-centro de distribuição, <span className="font-bold text-red-400">fechado ao público</span>, operando exclusivamente para fulfillment de pedidos online com entregas rápidas (15-60 minutos).</p>
            </div>

            <div>
                 <h3 className="text-2xl font-bold text-slate-100 mb-6">Características por Player</h3>
                <div className="mb-4 flex flex-wrap border-b border-slate-700">
                    {Object.entries(players).map(([key, player]) => (
                        <button
                            key={player.name}
                            onClick={() => setActiveTab(key as keyof typeof players)}
                            className={`py-2 px-4 font-semibold text-sm transition-colors duration-200 -mb-px ${activeTab === key ? `${player.color} border-b-2 ${player.borderColor.replace('border-', 'border-b-')}` : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'}`}
                        >
                            {player.name}
                        </button>
                    ))}
                </div>
                <div className={`p-4 rounded-lg border ${players[activeTab].borderColor} ${players[activeTab].bgColor}`}>
                   {players[activeTab].content ? players[activeTab].content : <PlayerDetail player={players[activeTab] as PlayerForDetail} />}
                </div>
            </div>

             <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-6">Comparativo Consolidado</h3>
                <div className="overflow-x-auto bg-slate-800/50 rounded-lg border border-slate-700">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-300 uppercase bg-slate-700/50">
                            <tr>
                                <th className="px-4 py-3">Métrica</th>
                                <th className="px-4 py-3 text-green-400">GPA</th>
                                <th className="px-4 py-3 text-yellow-400">Mercado Livre</th>
                                <th className="px-4 py-3 text-orange-400">Amazon</th>
                                <th className="px-4 py-3 text-red-400">iFood</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consolidatedData.map(row => (
                                <tr key={row.metric} className="border-b border-slate-800 hover:bg-slate-800/50">
                                    <td className="px-4 py-3 font-semibold text-slate-200">{row.metric}</td>
                                    <td className="px-4 py-3">{row.gpa}</td>
                                    <td className="px-4 py-3">{row.ml}</td>
                                    <td className="px-4 py-3">{row.amazon}</td>
                                    <td className="px-4 py-3">{row.ifood}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 <div className="mt-4 bg-slate-800/60 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-200">🏆 Vencedores por Categoria</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs mt-2">
                        <span><strong>🥇 Velocidade:</strong> <span className="text-red-400">iFood</span></span>
                        <span><strong>🥇 Escala:</strong> <span className="text-red-400">iFood</span></span>
                        <span><strong>🥇 Tecnologia:</strong> <span className="text-orange-400">Amazon</span></span>
                        <span><strong>🥇 Sortimento:</strong> <span className="text-orange-400">Amazon</span></span>
                        <span><strong>🥇 Margem:</strong> <span className="text-red-400">iFood</span></span>
                        <span><strong>🥇 Payback:</strong> <span className="text-red-400">iFood</span></span>
                    </div>
                 </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-6">Conclusão: A Janela Está Fechando</h3>
                <Card title="A Escolha de André Diniz" className="bg-red-900/30 border-red-700">
                   <p className="text-red-200 font-bold mb-2">GPA tem ZERO dark stores em 2025, enquanto concorrentes somam centenas. Cada mês de inação torna a perda de relevância digital irreversível.</p>
                   <p className="text-sm text-red-300">A estratégia vencedora exige uma parceria estratégica, foco em nicho premium, e execução brutalmente rápida. Será o conselheiro que salvou a empresa ou o que presidiu sua irrelevância terminal? O relógio está correndo. ⏰</p>
                </Card>
            </div>

        </div>
    );
};

export default DarkStoreAnalysis;
