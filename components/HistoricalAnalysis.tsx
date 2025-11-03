import React from 'react';

const eras = [
    {
        title: "Era Dourada: Expansão e Inovação (1948-1999)",
        theme: "bg-green-900/30 border-green-700",
        textColor: "text-green-300",
        analysis: [
            "✅ Cultura de inovação genuína (sempre pioneiro)",
            "✅ Liderança visionária (Valentim e Abilio Diniz)",
            "⚠️ Diversificação prematura (eletro) dilui foco",
            "✅ Governança moderna cedo (IPO em 1995)"
        ],
        events: [
            { year: 1948, event: "Fundação - Doceira Pão de Açúcar", significance: "Empreendedor imigrante, espírito pioneiro", result: { text: "DNA inovador", type: 'positive' } },
            { year: 1959, event: "Primeiro supermercado", significance: "Introduz conceito moderno de varejo no Brasil", result: { text: "Disruptor local", type: 'positive' } },
            { year: 1971, event: "Jumbo (primeiro hipermercado)", significance: "Antecipa tendência de grandes formatos", result: { text: "Visionário", type: 'positive' } },
            { year: 1976, event: "Diversificação (Eletroradiobraz)", significance: "ERRO ESTRATÉGICO - foco disperso", result: { text: "Diluição", type: 'warning' } },
            { year: 1989, event: "Extra (nova bandeira hiper)", significance: "Resposta competitiva, multi-formato", result: { text: "Flexibilidade", type: 'positive' } },
            { year: 1995, event: "IPO - Abertura capital B3", significance: "Acesso a capital para crescimento", result: { text: "Profissionalização", type: 'positive' } },
        ]
    },
    {
        title: "Parceria Casino: Crescimento com Tensões (1999-2012)",
        theme: "bg-yellow-900/30 border-yellow-700",
        textColor: "text-yellow-300",
        analysis: [
            "✅ Amelia.com em 2000 = prova que tinham visão digital 25 anos atrás!",
            "❌ Fusão Casas Bahia (2009) = maior erro estratégico da história",
            "🔴 Casino assume controle (2012) = início do declínio"
        ],
        events: [
            { year: 1999, event: "Casino entra com 25%", significance: "Capital para expansão, know-how internacional", result: { text: "Recursos + Expertise", type: 'positive' } },
            { year: 2000, event: "Amelia.com.br (e-commerce)", significance: "PIONEIRISMO DIGITAL - 20 anos antes do boom", result: { text: "Visão de futuro", type: 'positive' } },
            { year: 2007, event: "Parceria Assaí (atacarejo)", significance: "Antecipa tendência do atacarejo", result: { text: "Estratégico", type: 'positive' } },
            { year: 2009, event: "Fusão Casas Bahia", significance: "ERRO MONUMENTAL - culturas e margens incompatíveis", result: { text: "Desastre cultural", type: 'negative' } },
            { year: 2012, event: "Casino assume controle 100%", significance: "Fim da era Diniz na gestão operacional", result: { text: "Ponto de inflexão", type: 'critical' } },
        ]
    },
    {
        title: "Declínio: Erros Estratégicos e Crise (2012-2025)",
        theme: "bg-red-900/30 border-red-700",
        textColor: "text-red-300",
        analysis: [
            "❌ Perdeu a década de ouro digital (2010-2020), ignorando a vantagem do Amelia.com",
            "❌ Confusão de marcas absurda (Extra, Compre Bem, etc.) diluiu o foco e o cliente",
            "🔴 Venda de ativos core (Via Varejo, Extra Hiper) como 'fire sale' disfarçado",
            "🔴 Dependência de terceiros no digital (iFood/ML) é a admissão da derrota na guerra tecnológica"
        ],
        events: [
            { year: 2018, event: "Lança Mercado Extra + Compre Bem", significance: "Confusão de marcas e canibalização", result: { text: "Canibalização", type: 'negative' } },
            { year: 2019, event: "Vende Via Varejo", significance: "Corrige erro de 2009, mas tarde demais", result: { text: "Valor destruído", type: 'warning' } },
            { year: 2021, event: "Vende 70 Extra Hiper para Assaí", significance: "Admite falência do formato hipermercado", result: { text: "Liquidação forçada", type: 'critical' } },
            { year: 2021, event: "Parcerias iFood/ML/Cornershop", significance: "Admite que não consegue fazer sozinho", result: { text: "Dependência digital", type: 'critical' } },
        ]
    },
];

const ResultBadge: React.FC<{ type: string; text: string }> = ({ type, text }) => {
    const baseClasses = "text-xs font-semibold px-2.5 py-0.5 rounded-full";
    const typeClasses = {
        positive: "bg-green-500/20 text-green-300",
        warning: "bg-yellow-500/20 text-yellow-300",
        negative: "bg-red-500/20 text-red-400",
        critical: "bg-purple-500/20 text-purple-300",
    };
    return <span className={`${baseClasses} ${typeClasses[type]}`}>{text}</span>;
};


const HistoricalAnalysis: React.FC = () => {
    return (
        <div className="space-y-12">
            {eras.map((era, index) => (
                <div key={index} className={`border ${era.theme} rounded-xl p-4 sm:p-6`}>
                    <h3 className={`text-2xl font-bold mb-4 ${era.textColor}`}>{era.title}</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-slate-400">
                            <thead className="text-xs text-slate-300 uppercase bg-slate-700/50">
                                <tr>
                                    <th scope="col" className="px-4 py-3 w-1/12">Ano</th>
                                    <th scope="col" className="px-4 py-3 w-3/12">Marco</th>
                                    <th scope="col" className="px-4 py-3 w-5/12">Significado Estratégico</th>
                                    <th scope="col" className="px-4 py-3 w-3/12">Resultado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {era.events.map((event, eventIndex) => (
                                    <tr key={eventIndex} className="border-b border-slate-800 hover:bg-slate-800/50">
                                        <th scope="row" className="px-4 py-3 font-medium text-slate-200 whitespace-nowrap">{event.year}</th>
                                        <td className="px-4 py-3 text-slate-200">{event.event}</td>
                                        <td className="px-4 py-3">{event.significance}</td>
                                        <td className="px-4 py-3"><ResultBadge type={event.result.type} text={event.result.text} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 bg-slate-800/60 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-200">Análise da Era:</h4>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                            {era.analysis.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HistoricalAnalysis;
