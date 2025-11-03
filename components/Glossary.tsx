import React, { useState } from 'react';

const groupedTerms = {
    "Governança Corporativa": [
        { term: "AGO (Assembleia Geral Ordinária)", definition: "Reunião anual obrigatória de acionistas para aprovar contas, eleger administradores e decidir sobre dividendos." },
        { term: "AGE (Assembleia Geral Extraordinária)", definition: "Reunião de acionistas convocada para deliberar sobre assuntos específicos fora da AGO (fusões, alterações estatutárias, etc.)." },
        { term: "Conselho de Administração", definition: "Órgão colegiado que define estratégia e supervisiona diretoria. Mínimo 3 membros, eleitos por acionistas." },
        { term: "Conselheiro Independente", definition: "Membro do Conselho sem vínculo com controladores ou gestão. Deve representar todos os acionistas." },
        { term: "Covenant", definition: "Cláusula contratual em dívidas que estabelece métricas que empresa deve cumprir (ex: Dívida/EBITDA < 3x). Descumprimento pode acelerar vencimento." },
        { term: "Skin in the Game", definition: "Expressão que significa ter capital próprio investido/em risco, alinhando interesses do gestor com acionistas." },
    ],
    "Finanças e Valuation": [
        { term: "Valuation", definition: "Processo de determinar valor econômico de empresa usando métodos como fluxo de caixa descontado, múltiplos ou ativos." },
        { term: "Market Cap (Capitalização de Mercado)", definition: "Valor de mercado da empresa = preço da ação × número de ações emitidas." },
        { term: "Enterprise Value (EV)", definition: "Valor total da empresa = Market Cap + Dívida Líquida. Representa custo total para adquirir empresa." },
        { term: "EBITDA", definition: "Lucro antes de juros, impostos, depreciação e amortização. Proxy de geração de caixa operacional." },
        { term: "Haircut", definition: "Redução do valor principal da dívida em reestruturação. Credor aceita receber menos que emprestou." },
        { term: "Chapter 11 / Recuperação Judicial", definition: "Processo legal para reestruturar empresa insolvente, protegendo-a de credores enquanto negocia." },
    ],
    "Varejo e E-commerce": [
        { term: "GMV (Gross Merchandise Value)", definition: "Valor bruto total de mercadorias vendidas, antes de descontos, devoluções e comissões." },
        { term: "NPS (Net Promoter Score)", definition: "Métrica de satisfação do cliente baseada na probabilidade de recomendação." },
        { term: "Dark Store", definition: "Loja física convertida em centro de distribuição exclusivo para e-commerce, fechada ao público." },
        { term: "Last Mile", definition: "Última etapa da entrega (do CD até cliente). Mais cara e complexa parte da logística." },
        { term: "Omnichannel", definition: "Integração entre canais físicos e digitais, permitindo experiência fluida para o cliente." },
        { term: "Private Label / Marca Própria", definition: "Produtos com marca do varejista, não do fabricante, geralmente com margens maiores." },
    ],
    "Estratégia e Mercado": [
        { term: "Market Share", definition: "Participação de mercado; % das vendas totais do setor que empresa captura." },
        { term: "Disruptor", definition: "Empresa/tecnologia que muda fundamentalmente como mercado funciona, tornando modelos antigos obsoletos." },
        { term: "Asset-Light", definition: "Modelo de negócio com poucos ativos fixos (ex: Uber). Oposto: asset-heavy (GPA com lojas próprias)." },
        { term: "Marketplace", definition: "Plataforma que conecta compradores e vendedores (ex: Mercado Livre). Empresa não possui estoque." },
        { term: "1P (First Party) vs. 3P (Third Party)", definition: "1P = empresa vende produtos próprios. 3P = terceiros vendem na plataforma da empresa." },
        { term: "Lock-in", definition: "Estratégia que torna difícil para o cliente trocar de fornecedor (ex: Amazon Prime)." },
    ],
    "Estratégia de Plataforma (iFood)": [
        { term: "Marketplace Bilateral", definition: "Plataforma que conecta dois lados (oferta e demanda). Ex: iFood conecta restaurantes e clientes." },
        { term: "Efeito Rede (Network Effect)", definition: "Valor da plataforma aumenta quanto mais usuários tem. Mais restaurantes → mais clientes → mais restaurantes." },
        { term: "Super-App", definition: "Aplicativo único que integra múltiplos serviços. iFood quer virar super-app (comida + mercado + farmácia + fintech)." },
        { term: "Cloud Kitchen / Ghost Kitchen", definition: "Cozinha comercial sem área de atendimento, operando exclusivamente para delivery." },
        { term: "Unit Economics", definition: "Economia por unidade (pedido, cliente). Pergunta crucial: 'Cada pedido dá lucro ou prejuízo?'" },
        { term: "Winner-Takes-Most", definition: "Mercado onde o líder captura a maior parte do share (70-80%). O delivery de comida é um exemplo." },
    ]
};

const Glossary: React.FC = () => {
    const [openCategory, setOpenCategory] = useState<string | null>(Object.keys(groupedTerms)[0]);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div className="space-y-4">
            {Object.entries(groupedTerms).map(([category, terms]) => (
                <div key={category} className="border border-slate-700 rounded-lg bg-slate-800/50">
                    <button
                        onClick={() => toggleCategory(category)}
                        className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-200"
                    >
                        <span>{category}</span>
                        <svg
                            className={`w-5 h-5 transition-transform ${openCategory === category ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {openCategory === category && (
                        <div className="p-4 border-t border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {terms.map(item => (
                                <div key={item.term}>
                                    <h4 className="font-bold text-slate-100">{item.term}</h4>
                                    <p className="text-sm text-slate-400">{item.definition}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Glossary;
