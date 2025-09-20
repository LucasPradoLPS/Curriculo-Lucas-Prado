import React from 'react'
import image from '/public/LucasFoto.jpg'
import { BiMoon, BiSun, BiCurrentLocation, BiEnvelope, BiPhone, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="min-h-screen flex-1 relative p-5 md:p-8 lg:p-10 transition-all duration-500 dark:bg-black dark:text-white lg:border-r dark:border-gray-700 animate-fadeInLeft">
            <div className="flex flex-col gap-4 md:gap-5">
                <div className="flex flex-col items-center justify-center gap-4 md:gap-5 animate-fadeInUp">
                    <img src={image} alt="Foto de perfil de Lucas Prado da Silva" className="w-24 md:w-28 lg:w-32 rounded-full ring-4 ring-gray-200 dark:ring-gray-700 transition-all duration-300 hover:ring-blue-500 dark:hover:ring-blue-400 hover:scale-105" />
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light animate-fadeInUp delay-200">
                            Lucas <span className="font-semibold">Prado da Silva</span>
                        </h1>
                        <h3 className="text-sm md:text-lg lg:text-xl font-light text-gray-600 dark:text-gray-300 animate-fadeInUp delay-300">Desenvolvedor Full Stack | TypeScript & PHP | React & React Native | PostgreSQL</h3>
                    </div>
                </div>
                <section className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700 animate-fadeInUp delay-500">
                    <h3 className="text-base font-semibold md:text-2xl">CONTATO</h3>
                    <ul className="space-y-3" role="list" aria-label="Informações de contato">
                        <li className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            <BiCurrentLocation className="text-xl animate-pulse-slow" aria-hidden="true" />
                            <span>Sete Lagoas, Minas Gerais</span>
                        </li>
                        <li className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            <BiEnvelope className="text-xl" aria-hidden="true" />
                            <a href="mailto:lucaspsilva162014@gmail.com" className="hover:underline" aria-label="Enviar email">lucaspsilva162014@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            <BiPhone className="text-xl" aria-hidden="true" />
                            <a href="tel:+5531999380844" className="hover:underline" aria-label="Ligar">+55 31 99938-0844</a>
                        </li>
                    </ul>
                </section>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700 animate-fadeInUp delay-500">
                    <h1 className="text-base font-semibold md:text-2xl">REDES SOCIAIS</h1>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <a href="https://github.com/LucasPradoLPS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300 hover:scale-105">
                                <BiLogoGithub className="text-xl hover:text-black dark:hover:text-white" />
                                <span>@LucasPradoLPS</span>
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <a href="https://www.linkedin.com/in/lucas-prado-da-silva/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                                <BiLogoLinkedin className="text-xl hover:text-blue-700" />
                                <span>Lucas Prado da Silva</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">Formações</h1>
                    <ul className="space-y-3">
                        <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                            <span className="font-semibold md:text-lg">Ciência da Computação</span>
                            <span className="font-light">Centro Universitário Una</span>
                            <span className="text-sm text-gray-400">2021-2026</span>
                        </li>
                        <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                            <span className="font-semibold md:text-lg">Lógica de Programação</span>
                            <span className="font-light">Compuway</span>
                            <span className="text-sm text-gray-400">2017-2018</span>
                        </li>
                    </ul>
                </div>
                <section className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h3 className="text-base font-semibold md:text-2xl">STACK TECNOLÓGICA</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Frontend & UI</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs hover:scale-105 transition-transform">React</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs hover:scale-105 transition-transform">TypeScript</span>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-xs hover:scale-105 transition-transform">JavaScript</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-xs hover:scale-105 transition-transform">HTML5</span>
                                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 rounded-full text-xs hover:scale-105 transition-transform">CSS3</span>
                                <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 rounded-full text-xs hover:scale-105 transition-transform">Tailwind CSS</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Backend & APIs</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs hover:scale-105 transition-transform">PHP</span>
                                <span className="px-3 py-1 bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200 rounded-full text-xs hover:scale-105 transition-transform">Node.js</span>
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full text-xs hover:scale-105 transition-transform">Express.js</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs hover:scale-105 transition-transform">Python</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-xs hover:scale-105 transition-transform">ScriptCase</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Database & ORM</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-xs hover:scale-105 transition-transform">PostgreSQL</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-xs hover:scale-105 transition-transform">Prisma ORM</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs hover:scale-105 transition-transform">MySQL</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Ferramentas & Deploy</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200 rounded-full text-xs hover:scale-105 transition-transform">Vite</span>
                                <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs hover:scale-105 transition-transform">Vercel</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-xs hover:scale-105 transition-transform">React Native</span>
                                <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full text-xs hover:scale-105 transition-transform">Git/GitHub</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-lg">📊</span>
                            <span><strong>18 repositórios</strong> • <strong>JavaScript, CSS, HTML</strong> • <strong>2 projetos com ⭐</strong></span>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>
                    <div className="flex flex-wrap gap-16 p-3">
                        <ul className="flex list-disc flex-col gap-3">
                            <li>Gaming e tecnologia</li>
                            <li>Conteúdo educacional</li>
                            <li>Prática de esportes</li>
                            <li>Acompanhar novidades tecnológicas</li>
                            <li>Desenvolvimento de projetos pessoais</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                    <h1 className='text-base font-semibold md:text-2xl'>Idiomas</h1>
                    <ul className='flex list-disc flex-wrap gap-12 md:text-lg'>
                        <li>Português (Nativo)</li>
                        <li>Inglês (Intermediário)</li>
                    </ul>
                </div>    
                <button 
                    className="absolute right-5 top-5 md:right-8 md:top-8 lg:right-10 lg:top-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110" 
                    onClick={toggleDarkMode}
                    aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
                >
                    {darkMode ? (
                        <BiSun className="text-xl md:text-2xl text-yellow-500" />
                    ) : (
                        <BiMoon className="text-xl md:text-2xl text-blue-600" />
                    )}
                </button>
            </div>
        </div>
    )
}

export default HeaderLeft;