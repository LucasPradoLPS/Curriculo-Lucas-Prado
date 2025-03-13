import React from 'react'
import image from '/public/LucasFoto.jpg'
import { BiMoon, BiSun, BiCurrentLocation, BiEnvelope, BiPhone, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={image} alt="" className="w-32 rounded-full" />
                    <div className="text-center space-y-1">
                        <h1 className="text-4xl font-light">
                            Lucasl <span className="font-semibold">Prado da Silva</span>
                        </h1>
                        <h3 className="text-xl font-light"> TypeScript & PHP | React & React Native | Mobile & Web | PostgresSQL</h3>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <BiCurrentLocation className="text-xl" />
                            <span>Sete Lagoas Minas Gerais</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiEnvelope className="text-xl" />
                            <span>lucaspsilva162014@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiPhone className="text-xl" />
                            <span>+5531999380844</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <a href="https://github.com/LucasPradoLPS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <BiLogoGithub className="text-xl" />
                                <span>@LucasPradoLPS</span>
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <a href="https://www.linkedin.com/in/lucas-prado-da-silva/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <BiLogoLinkedin className="text-xl" />
                                <span>Lucas Prado</span>
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
                            <span className="font-semibold md:text-lg">Cursado em Logica de Programação</span>
                            <span className="font-light">Compuway</span>
                            <span className="text-sm text-gray-400">2017-2018</span>
                        </li>
                        <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                            <span className="font-semibold md:text-lg">Tecnico em automação</span>
                            <span className="font-light">Senai</span>
                            <span className="text-sm text-gray-400">2018-2019</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
                    <div className="flex flex-wrap gap-3">
                        <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">Desenvolvedor</span>
                        <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">FrontEnd</span>
                        <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">BackEnd</span>
                        <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">Application Security</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>
                    <div className="flex flex-wrap gap-16 p-3">
                        <ul className="flex list-disc flex-col gap-3">
                            <li>Games</li>
                            <li>Ver videos</li>
                            <li>Praticar esportes</li>
                            <li>Me manter por dentro das novidades da tecnolia</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                    <h1 className='text-base font-semibold md:text-2xl'>Linguagens</h1>
                    <ul className='flex list-disc flex-wrap gap-12 md:text-lg'>
                        <li>English</li>
                    </ul>
                </div>    
                <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
                    {darkMode ? (
                        <BiSun className="text-2xl" />
                    ) : (
                        <BiMoon className="text-2xl" />
                    )}
                </button>
            </div>
        </div>
    )
}

export default HeaderLeft;