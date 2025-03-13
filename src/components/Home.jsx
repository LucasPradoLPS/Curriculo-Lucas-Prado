import React from 'react';
import html2pdf from 'html2pdf.js';

const Home = () => {
    return (
        <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>
            <div className='flex justify-end p-5'>
                <a 
                    href='/LucasFullstack.pdf' 
                    download 
                    className='p-2 bg-black text-white rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-colors duration-300'
                >
                    Baixar Currículo
                </a>
            </div>
            <div id='pdf-content' className='flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14'>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Resumo</h1>
                    <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                    Sou desenvolvedor apaixonado pela área de programação e desenvolvimento, trabalho com PHP, PostgreSLQ, Html, CSS e ScriptCase, trabalho atualmente como fullstack. Além dessas tecnologias tenho conhecimento em TypeScript, Java, JavaScript, React, React Native, Python, NodeJS, tailwindcss
                    </p>
                </div>
                <div className='space-y-10'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Experiências</h1>
                    <div className='flex flex-col lg:flex-row lg:gap-20'>
                        <ul className="space-y-3">
                            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                <span className="text-lg font-semibold">Desenvolvedor Fullstack</span>
                                <span className="font-light">Way Sistemas</span>
                                <span className="text-sm text-gray-400">2025</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    • Criação e modificação de sites.
                                    • Integração em banco de dados PostgreSQL.
                                    • Atendimento de clientes.
                                    • Desenvolvimento Web PHP, ScriptCase.
                                </p>
                            </li>
                            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                <span className="text-lg font-semibold">Aplicativo de Habitos</span>
                                <span className="font-light">Centro Universitario Una</span>
                                <span className="text-sm text-gray-400">2023-2024</span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    • Desenvolvimento de um aplicativo de habitos.
                                    • Utilização de React Native.
                                    • Node.js para o backend.
                                    • Usando como linguagem de programação TypeScript.
                                    • Trabalho feito em grupo.

                                </p>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                <span className="text-lg font-semibold">Site Hamburgueria</span>
                                <span className="font-light"></span>
                                <span className="text-sm text-gray-400"></span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    • Desenvolvimento de um site para uma hamburgueria.
                                    • Utilização de HTML, Tailwindcss e JavaScript.
                                    • Ligado no WhatsApp.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-10'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Certificados</h1>
                    <div className='space-y-10'>
                        <div className='text-baseline space-y-3'>
                            <h3 className='text-xl font-semibold md:text-lg'>Compuway</h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                                Cursado em Logica de Programação orientada a objeto 2017-2018
                            </p>
                        </div>
                    </div>
                    <div className='space-y-10'>
                        <div className='text-baseline space-y-3'>
                            <h3 className='text-xl font-semibold'>Informatica</h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                                Curso de infomatica avaçada 2016-2017
                            </p>
                        </div>
                    </div>
                    <div className='space-y-10'>
                        <div className='text-baseline space-y-3'>
                            <h3 className='text-xl font-semibold md:text-lg'>Tecnico em automação</h3>
                            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                                Programação voltada pra arduino voltado a empresa 2018-2019
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;