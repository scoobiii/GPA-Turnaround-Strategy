import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { GPA_ANALYSIS_CONTEXT } from '../context/GpaAnalysisContext';
import { ChatBubbleOvalLeftEllipsisIcon, PaperAirplaneIcon, XMarkIcon, SparklesIcon } from './IconComponents';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const AiChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                chatRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: `You are AmelIA, an expert AI strategic assistant for GPA, named in homage to the pioneering Amelia.com.br. Your purpose is to provide insights and answer questions based on the comprehensive strategic analysis of GPA provided below. Be concise, insightful, and use a professional tone. Base your answers strictly on the provided context.

CONTEXT:
---
${GPA_ANALYSIS_CONTEXT}
---
`
                    },
                });
                setMessages([{ role: 'model', text: 'Olá! Sou a AmelIA, sua assistente de estratégia. Como posso ajudar a analisar o caso do GPA hoje?' }]);
            } catch (error) {
                console.error("Failed to initialize Gemini AI:", error);
                setMessages([{ role: 'model', text: 'Desculpe, não foi possível conectar ao assistente de IA no momento.' }]);
            }
        };
        initChat();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading || !chatRef.current) return;

        const userMessage: Message = { role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await chatRef.current.sendMessage({ message: inputValue });
            const modelMessage: Message = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorMessage: Message = { role: 'model', text: 'Desculpe, ocorreu um erro ao processar sua pergunta. Por favor, tente novamente.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 z-40"
                aria-label="Abrir chat de ajuda"
            >
                <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl flex flex-col z-50">
                    <header className="flex items-center justify-between p-4 border-b border-slate-700">
                        <div className="flex items-center">
                            <SparklesIcon className="w-6 h-6 text-blue-400 mr-2" />
                            <h2 className="font-bold text-lg text-slate-100">AmelIA - Assistente Estratégico</h2>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100" aria-label="Fechar chat">
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </header>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-slate-700 text-slate-300 p-3 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700">
                        <div className="relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Pergunte sobre a análise..."
                                className="w-full bg-slate-700 text-slate-200 border border-slate-600 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 disabled:bg-slate-600"
                                disabled={isLoading || !inputValue.trim()}
                                aria-label="Enviar mensagem"
                            >
                                <PaperAirplaneIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default AiChatWidget;