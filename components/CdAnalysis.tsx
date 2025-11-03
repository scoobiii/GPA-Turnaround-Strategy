import React from 'react';
import Card from './Card';

const diagnosisData = [
    { 'Característica': 'Função Principal', 'CD Clássico (GPA)': 'Abastecer Lojas Físicas', 'Necessidade Digital (iFood/ML)': 'Atender Cliente Final (direto)' },
    { 'Característica': 'Unidade de Medida', 'CD Clássico (GPA)': 'Pallets, Caixas', 'Necessidade Digital (iFood/ML)': 'Unidades, Itens' },
    { 'Característica': 'Velocidade de Saída', 'CD Clássico (GPA)': 'Lenta (caminhões/dia)', 'Necessidade Digital (iFood/ML)': 'Ultrarrápida (milhares de pedidos/hora)' },
    { 'Característica': 'Custo por Item', 'CD Clássico (GPA)': 'Baixíssimo (movendo caixas)', 'Necessidade Digital (iFood/ML)': 'Alto (picking unitário)' },
    { 'Característica': 'Layout', 'CD Clássico (GPA)': 'Otimizado para empilhadeiras', 'Necessidade Digital (iFood/ML)': 'Otimizado para picking rápido' },
    { 'Característica': 'Localização', 'CD Clássico (GPA)': 'Fora das cidades', 'Necessidade Digital (iFood/ML)': 'Dentro das cidades' },
];

const newFunctions = [
    {
        title: "Função 1: Hub de Abastecimento para a Rede 'Express'",
        description: "O DC Clássico se tornará o ponto central que abastece a rede de dark stores. Ele recebe pallets da indústria, desmembra-os e envia vans em rotas otimizadas (milk run) para reabastecer as dark stores 2 a 3 vezes ao dia.",
        impact: "Permite que as dark stores operem com estoque mínimo e altíssimo giro, focando na entrega rápida."
    },
    {
        title: "Função 2: Centro de Cross-Docking para Produtos Frescos",
        description: "Caminhões de produtores locais chegam ao CD e, em vez de serem estocados, os produtos são imediatamente separados, reembalados e despachados para as lojas e dark stores no mesmo dia.",
        impact: "Garante o máximo de frescor, reduz perdas (quebra) e utiliza o CD como um ponto de passagem rápido."
    },
    {
        title: "Função 3: Pulmão de Estoque para a 'Cauda Longa'",
        description: "O CD Clássico estocará os 18.000 SKUs de baixo giro. O cliente pode pedir itens essenciais da dark store para entrega em 30 minutos e adicionar um item de 'cauda longa' para receber no dia seguinte, despachado do CD.",
        impact: "Combina a conveniência da entrega rápida com a amplitude de sortimento, algo que o iFood não consegue oferecer."
    },
    {
        title: "Função 4: Base para Operações B2B",
        description: "O GPA pode monetizar sua expertise logística, prestando serviços de fulfillment para outras empresas, como a própria JV com o iFood ou pequenos varejistas do marketplace.",
        impact: "Transforma um centro de custo (o CD) em uma nova unidade de negócio geradora de receita."
    },
    {
        title: "Função 5: Centro de Logística Reversa",
        description: "Todos os produtos devolvidos (online ou físicos) são centralizados nos CDs. Uma equipe especializada avalia, recondiciona e decide o destino, recuperando valor e liberando as dark stores dessa complexidade.",
        impact: "Otimiza o processo de devolução e recupera valor de produtos que seriam perdidos."
    }
];

const transitionPhases = [
    {
        title: "Fase 1 (Próximos 6 meses): Otimização e Piloto",
        steps: [
            "Revisar o layout dos CDs para criar áreas dedicadas ao abastecimento das dark stores piloto.",
            "Implementar um WMS (Warehouse Management System) básico.",
            "Focar em reduzir custos da operação existente para liberar caixa."
        ]
    },
    {
        title: "Fase 2 (6-18 meses): Integração e Semi-Automação",
        steps: [
            "Investir em um OMS (Order Management System) robusto para integrar a visão de estoque de toda a rede.",
            "Implementar automação de baixo custo (esteiras, pick-to-light).",
            "Estruturar formalmente a unidade de negócio B2B."
        ]
    },
    {
        title: "Fase 3 (18-36 meses): Transformação e Automação Avançada",
        steps: [
            "Investir em robótica (AGVs) para as áreas de maior giro dentro dos CDs.",
            "Integrar totalmente a operação de logística reversa.",
            "Usar IA para previsão de demanda e otimização de estoque."
        ]
    }
];

const CdAnalysis: React.FC = () => {
    return (
        <div className="space-y-12">
            <p className="text-slate-400">
                Os Centros de Distribuição (CDs) clássicos do GPA, como o DC 01 e DC 04, não serão desativados. Em vez disso, serão radicalmente transformados, deixando de ser o centro do universo logístico para se tornarem os <strong className="text-slate-200">"cérebros logísticos"</strong> de uma nova rede híbrida e inteligente, o <strong className="text-slate-200">Hub-and-Spoke 2.0</strong>.
            </p>

            <div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">1. O Diagnóstico: Por que os CDs Clássicos são um Problema?</h3>
                <p className="text-slate-400 mb-4">Usar um CD clássico para um pedido de e-commerce é como usar um navio cargueiro para entregar uma pizza: caro, lento e ineficiente.</p>
                <div className="overflow-x-auto bg-slate-800/50 rounded-lg border border-slate-700">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-300 uppercase bg-slate-700/50">
                            <tr>
                                <th className="px-4 py-3">Característica</th>
                                <th className="px-4 py-3">CD Clássico (GPA)</th>
                                <th className="px-4 py-3">Necessidade Digital (iFood/ML)</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-400">
                            {diagnosisData.map((row, index) => (
                                <tr key={index} className="border-b border-slate-800">
                                    <td className="px-4 py-3 font-semibold text-slate-200">{row['Característica']}</td>
                                    <td className="px-4 py-3">{row['CD Clássico (GPA)']}</td>
                                    <td className="px-4 py-3">{row['Necessidade Digital (iFood/ML)']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">2. A Solução: As 5 Novas Funções Estratégicas dos CDs</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newFunctions.map((func, index) => (
                        <Card key={index} title={func.title} className="bg-slate-800/50 border-slate-700">
                            <p className="text-sm text-slate-400 mb-2">{func.description}</p>
                            <p className="text-xs text-blue-400"><strong>Impacto:</strong> {func.impact}</p>
                        </Card>
                    ))}
                </div>
            </div>
            
            <div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">3. O Plano de Transição (Roadmap)</h3>
                 <div className="grid md:grid-cols-3 gap-6">
                    {transitionPhases.map(phase => (
                        <Card key={phase.title} title={phase.title} className="bg-slate-800/50 border-slate-700">
                             <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                               {phase.steps.map((step, index) => <li key={index}>{step}</li>)}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-slate-100 mb-4">4. Implicações Financeiras e Riscos</h3>
                 <div className="grid md:grid-cols-2 gap-6">
                    <Card title="Implicações Financeiras" className="bg-green-900/30 border-green-700">
                        <ul className="list-disc list-inside text-sm text-green-300 space-y-2">
                           <li><strong>Ativos no Balanço:</strong> Evita um write-off de bilhões, ressignificando o valor dos CDs e protegendo o patrimônio líquido.</li>
                           <li><strong>CAPEX:</strong> O investimento na transformação será modular e faseado, custando de 10 a 20 vezes menos do que construir novos CDs automatizados do zero.</li>
                        </ul>
                    </Card>
                    <Card title="Riscos e Mitigações" className="bg-red-900/30 border-red-700">
                        <ul className="list-disc list-inside text-sm text-red-300 space-y-2">
                            <li><strong>Resistência Cultural:</strong> Equipe pode resistir à nova complexidade. <span className="text-slate-400 text-xs">Mitigação: Treinamento, novos KPIs e bônus.</span></li>
                            <li><strong>Falha de Integração Tecnológica:</strong> Sistemas WMS/OMS podem não orquestrar a rede. <span className="text-slate-400 text-xs">Mitigação: Contratar CTO experiente e usar soluções SaaS de mercado.</span></li>
                        </ul>
                    </Card>
                </div>
            </div>

            <Card title="Conclusão" className="bg-slate-800 border-blue-500/30">
                <p className="text-slate-300">
                    Os CDs clássicos são, paradoxalmente, tanto um símbolo do problema do GPA quanto a chave para sua solução. Sozinhos, são obsoletos. Mas, integrados a uma rede moderna de dark stores, eles se tornam um <strong className="text-blue-300">diferencial competitivo poderoso</strong> que nenhum player puramente digital possui: a capacidade de combinar escala, sortimento amplo e expertise em produtos frescos com a agilidade da entrega de última milha.
                </p>
            </Card>
        </div>
    );
};

export default CdAnalysis;
