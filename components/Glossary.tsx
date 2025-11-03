import React from 'react';

const glossaryData = {
    "Governança Corporativa": [
        { term: "IPO (Initial Public Offering)", definition: "Oferta pública inicial de ações; quando uma empresa abre seu capital na bolsa de valores pela primeira vez." },
        { term: "Conselho de Administração", definition: "Órgão que define a estratégia e supervisiona a diretoria executiva." },
        { term: "Know-how", definition: "Conhecimento prático e expertise técnica acumulada em uma área específica." },
        { term: "DNA (corporativo)", definition: "Cultura e valores essenciais que definem a identidade da empresa desde sua fundação." },
    ],
    "Finanças e Valuation": [
        { term: "Brand Value", definition: "Valor econômico da marca como um ativo intangível." },
        { term: "Fire Sale (Liquidação Forçada)", definition: "Venda rápida de ativos a preços muito abaixo do valor de mercado por necessidade urgente de caixa." },
        { term: "Sale-Leaseback", definition: "Operação onde a empresa vende um imóvel próprio e o aluga de volta, gerando caixa imediato sem perder o uso do ativo." },
        { term: "Haircut", definition: "Redução do valor principal da dívida em uma reestruturação, onde o credor aceita receber menos do que o valor original." },
    ],
    "Varejo e E-commerce": [
        { term: "Multi-formato", definition: "Estratégia de operar com múltiplas bandeiras e formatos de loja (hipermercado, supermercado, conveniência)." },
        { term: "Atacarejo", definition: "Formato híbrido que mistura atacado e varejo, vendendo tanto para o consumidor final quanto para pequenos comerciantes." },
        { term: "Canibalização", definition: "Quando um novo produto ou marca de uma empresa 'rouba' vendas de outro produto da mesma empresa." },
        { term: "Dark Store", definition: "Loja fechada ao público que funciona como um mini centro de distribuição para pedidos online." },
    ],
    "Tecnologia e Estratégia": [
        { term: "Disruptor", definition: "Empresa que introduz uma inovação radical que muda fundamentalmente as regras de um mercado." },
        { term: "Revenue Engine", definition: "A principal fonte de receita de uma empresa; o motor que gera vendas de forma escalável." },
        { term: "Digital Native", definition: "Pessoa ou empresa que já nasceu na era digital e possui uma mentalidade focada em tecnologia." },
        { term: "Super App", definition: "Aplicativo que integra múltiplos serviços (compras, pagamentos, delivery, etc.) em uma única plataforma." },
        { term: "White Flag (Bandeira Branca)", definition: "Expressão usada para indicar rendição. No contexto do GPA, fazer parcerias com iFood/ML em vez de competir diretamente." },
        { term: "Smoking Gun", definition: "Evidência definitiva e irrefutável que comprova uma teoria ou acusação." },
    ]
};

const Glossary: React.FC = () => {
    return (
        <div className="space-y-3">
            {Object.entries(glossaryData).map(([category, terms]) => (
                <details key={category} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
                    <summary className="cursor-pointer p-4 font-semibold text-lg text-slate-200 hover:bg-slate-700/50 transition-colors duration-200 list-inside">
                        {category}
                    </summary>
                    <div className="px-4 pb-4 border-t border-slate-700">
                        <dl className="mt-4 space-y-3">
                            {terms.map((item, index) => (
                                <div key={index}>
                                    <dt className="font-semibold text-teal-400">{item.term}</dt>
                                    <dd className="text-slate-400 text-sm">{item.definition}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </details>
            ))}
        </div>
    );
};

export default Glossary;