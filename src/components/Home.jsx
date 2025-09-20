import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

const Home = () => {
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    const generatePDF = async () => {
        setIsGeneratingPDF(true);
        
        try {
            const element = document.getElementById('pdf-content');
            const options = {
                margin: 0.5,
                filename: 'Lucas_Prado_Curriculo.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            
            await html2pdf().set(options).from(element).save();
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            alert('Erro ao gerar PDF. Tente novamente.');
        } finally {
            setIsGeneratingPDF(false);
        }
    };

    return (
        <div className='min-h-screen flex-[2] lg:flex-[3] transition-all duration-500 dark:bg-black dark:text-white animate-fadeInRight'>
            <div className='flex justify-end gap-3 p-4 md:p-5 animate-fadeInUp delay-200'>
                <a 
                    href='/CurriculoLucasPrado.pdf' 
                    download="Lucas_Prado_Curriculo.pdf"
                    className='px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 font-medium text-sm md:text-base'
                >
                     Baixar Currículo PDF
                </a>
                <button 
                    onClick={generatePDF}
                    disabled={isGeneratingPDF}
                    className='px-4 py-2 md:px-6 md:py-3 bg-black text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-all duration-300 hover:scale-105 font-medium text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {isGeneratingPDF ? (
                        <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                            Gerando...
                        </span>
                    ) : (
                        ' Gerar PDF da Página'
                    )}
                </button>
            </div>
            <div id='pdf-content' className='flex max-w-[1000px] flex-col gap-8 md:gap-10 p-4 md:p-5 lg:mx-10 lg:py-14'>
                <div className='space-y-4 md:space-y-5 animate-fadeInUp delay-300'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white'>Resumo Profissional</h1>
                    <div className='space-y-4'>
                        <p className='text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Desenvolvedor Full Stack</span> com sólida experiência em criar soluções web completas e inovadoras. Especializado em <span className="text-blue-600 dark:text-blue-400 font-medium">React, TypeScript e Node.js</span>, com expertise comprovada em <span className="text-purple-600 dark:text-purple-400 font-medium">PHP, PostgreSQL e Prisma ORM</span> no ambiente corporativo.
                        </p>
                        
                        <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed'>
                            Minha paixão por tecnologia se reflete em meus <span className="font-semibold text-gray-800 dark:text-gray-200">18 projetos open source</span>, incluindo sistemas de cadastro com arquitetura full stack, websites comerciais responsivos e aplicações mobile com React Native. Tenho experiência prática com ferramentas modernas como <span className="text-emerald-600 dark:text-emerald-400 font-medium">Vite, Vercel e integração de APIs</span>.
                        </p>
                        
                        <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed'>
                            Atualmente atuo na <span className="font-semibold text-gray-800 dark:text-gray-200">Imobiliária California</span>, desenvolvendo soluções web inovadoras. Busco continuamente aprimorar minhas habilidades e aplicar as melhores práticas de desenvolvimento, desde a arquitetura do código até a experiência do usuário final.
                        </p>
                        
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg border border-green-200 dark:border-gray-600">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🎯</span>
                                <div>
                                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Principais Conquistas</h4>
                                    <ul className='text-sm text-green-700 dark:text-green-400 space-y-1'>
                                        <li>• Graduando em Ciência da Computação (Una)</li>
                                        <li>• Projetos com integração de APIs externas</li>
                                        <li>• 18 repositórios open source no GitHub</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='space-y-10 animate-fadeInUp delay-500'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Portfólio de Projetos</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
                        <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105'>
                            <div className='flex items-center justify-between mb-4'>
                                <h3 className='text-lg font-bold text-gray-900 dark:text-white'>Sistema de Cadastro Full Stack</h3>
                                <a href="https://github.com/LucasPradoLPS/sistema-cadastro-full-stack" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors">
                                    🔗
                                </a>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed'>
                                Sistema completo de cadastro com autenticação, CRUD avançado e interface moderna. Arquitetura full stack com separação de responsabilidades.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                <span className='px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs'>React</span>
                                <span className='px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs'>Node.js</span>
                                <span className='px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-xs'>PostgreSQL</span>
                            </div>
                            <div className='flex items-center text-xs text-gray-500 dark:text-gray-400'>
                                <span>⭐ Projeto em destaque</span>
                            </div>
                        </div>

                        <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105'>
                            <div className='flex items-center justify-between mb-4'>
                                <h3 className='text-lg font-bold text-gray-900 dark:text-white'>React Calculator</h3>
                                <a href="https://github.com/LucasPradoLPS/React-Calculator" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors">
                                    🔗
                                </a>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed'>
                                Calculadora moderna e responsiva desenvolvida em React com design elegante e funcionalidades avançadas de cálculo.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                <span className='px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs'>React</span>
                                <span className='px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-xs'>JavaScript</span>
                                <span className='px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 rounded-full text-xs'>CSS3</span>
                            </div>
                            <div className='flex items-center text-xs text-gray-500 dark:text-gray-400'>
                                <span>⭐ Projeto popular</span>
                            </div>
                        </div>

                        <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105'>
                            <div className='flex items-center justify-between mb-4'>
                                <h3 className='text-lg font-bold text-gray-900 dark:text-white'>Pokédex API</h3>
                                <a href="https://github.com/LucasPradoLPS/pokedex" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors">
                                    🔗
                                </a>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed'>
                                Pokédex interativa com consumo da PokéAPI, busca avançada e interface responsiva com animações suaves.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                <span className='px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-xs'>HTML5</span>
                                <span className='px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-xs'>JavaScript</span>
                                <span className='px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs'>API Integration</span>
                            </div>
                        </div>

                        <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105'>
                            <div className='flex items-center justify-between mb-4'>
                                <h3 className='text-lg font-bold text-gray-900 dark:text-white'>E-commerce Mobile</h3>
                                <a href="https://github.com/LucasPradoLPS/Projeto-mobile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors">
                                    🔗
                                </a>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed'>
                                Aplicativo mobile de e-commerce com carrinho de compras, autenticação e integração com APIs de pagamento.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                <span className='px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs'>React Native</span>
                                <span className='px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-xs'>Expo</span>
                                <span className='px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-xs'>JavaScript</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-blue-200 dark:border-gray-600">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">📊</span>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Estatísticas GitHub</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">18</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Repositórios</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400">2</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Projetos Favoritos</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Linguagens</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='space-y-10'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Experiência Profissional</h1>
                    <div className='space-y-8'>
                        <div className='border-l-4 border-blue-500 pl-6 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-r-lg transition-all duration-300'>
                            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
                                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>Desenvolvedor Full Stack</h3>
                                <span className='text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full'>2024 - Presente</span>
                            </div>
                            <h4 className='text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3'>Imobiliária California</h4>
                            <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-2 leading-relaxed'>
                                <li>• Desenvolvimento de soluções web personalizadas para o setor imobiliário</li>
                                <li>• Criação de interfaces modernas e responsivas para melhor experiência do usuário</li>
                                <li>• Implementação de sistemas de gestão e automação de processos</li>
                                <li>• Otimização de performance e SEO para websites corporativos</li>
                            </ul>
                        </div>

                        <div className='border-l-4 border-green-500 pl-6 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-r-lg transition-all duration-300'>
                            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
                                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>Desenvolvedor Full Stack</h3>
                                <span className='text-sm font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full'>2023 - 2024</span>
                            </div>
                            <h4 className='text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3'>Way Sistemas</h4>
                            <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-2 leading-relaxed'>
                                <li>• Desenvolvimento de aplicações web corporativas com PHP e PostgreSQL</li>
                                <li>• Criação de interfaces responsivas e intuitivas para sistemas empresariais</li>
                                <li>• Integração de sistemas legados com novas tecnologias</li>
                                <li>• Otimização de consultas de banco de dados e performance de aplicações</li>
                                <li>• Colaboração em equipe ágil com metodologias Scrum</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className='space-y-10'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Certificados</h1>
                    <div className='space-y-10'>
                        <div className='text-baseline space-y-3'>
                            <h3 className='text-xl font-semibold md:text-lg'>Compuway</h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                                Curso completo de Lógica de Programação Orientada a Objetos (2017-2018)
                            </p>
                        </div>
                    </div>
                    <div className='space-y-10'>
                        <div className='text-baseline space-y-3'>
                            <h3 className='text-xl font-semibold'>Informática Avançada</h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                                Curso completo de Informática Avançada (2016-2017)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;