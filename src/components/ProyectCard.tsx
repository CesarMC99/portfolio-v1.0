// import { FiExternalLink, FiGithub } from 'react-icons/fi'
// import { Proyect, Tecnologic } from '../types'
// import { useState } from 'react'

// interface ProyectCardProps {
//     proyect: Proyect
// }

// export const ProyectCard = ({ proyect }: ProyectCardProps) => {
//     const [activeIndex, setActiveIndex] = useState<number | null>(0)

//     const handleClick = (id: Proyect['id']) => {
//         setActiveIndex(activeIndex === id ? null : id)
//     }
//     return (
//         <article className=' transition-transform duration-700 shadow-lg rounded-xl overflow-hidden shadow-azul-marino'>
//             <div
//                 className=' flex flex-col items-center gap-5 bg-acero p-5 w-[300px]
//                                 md:items-center md:justify-center md:w-[500px]
//                                 lg:w-[400px]
//                                 xl:w-[600px]'
//             >
//                 <h3
//                     className='text-2xl text-azul-marino font-semibold
//                                 xl:text-3xl'
//                 >
//                     {proyect.name}
//                 </h3>

//                 <a
//                     href={proyect.link}
//                     target='_blank'
//                     className='rounded-2xl overflow-hidden w-[100%] relative group'
//                 >
//                     <FiExternalLink
//                         className='absolute right-3 top-3 size-3 text-celeste z-10
//                                     lg:right-4 lg:top-4 lg:size-4
//                                     xl:right-5 xl:top-5 xl:size-5'
//                     />

//                     <img
//                         src={proyect.img}
//                         alt={proyect.name}
//                         className='aspect-video w-[100%] group-hover:scale-105 transition-transform duration-300'
//                     />
//                 </a>

//                 <div
//                     className='flex flex-col gap-4 mx-2
//                                 md:items-center '
//                 >
//                     {
//                         /* h-[5.5rem] overflow-hidden line-clamp-3 */
//                         // ${
//                         //             activeIndex
//                         //                 ? 'line-clamp-none h-auto'
//                         //                 : 'line-clamp-3 h-[5.5rem] overflow-hidden'
//                         //         }
//                     }
//                     <p
//                         className={`text-celeste text-lg h-[5.5rem] overflow-hidden line-clamp-3 transition-all duration-400

//                             ${
//                                 activeIndex === proyect.id
//                                     ? 'line-clamp-none h-[7rem]'
//                                     : 'line-clamp-3 h-[5.5rem] overflow-hidden'
//                             }
//                                     xl:text-xl`}
//                         onClick={() => handleClick(proyect.id)}
//                     >
//                         {proyect.description}
//                     </p>
//                     <div className='flex flex-col items-center justify-center gap-4'>
//                         <ul className='flex justify-center gap-2'>
//                             {proyect.tecnologics.map(
//                                 (tecnologic: Tecnologic) => (
//                                     <img
//                                         key={tecnologic.id}
//                                         src={`./tecnologias/${tecnologic.img}`}
//                                         alt={tecnologic.name}
//                                         className='size-10 rounded-lg xl:size-13'
//                                     />
//                                 )
//                             )}
//                         </ul>

//                         <a
//                             href={proyect.github}
//                             target='_blank'
//                             className='group bg-celeste py-2.5 px-30 rounded-xl hover:bg-celeste-oscuro shadow-xl'
//                         >
//                             <FiGithub className='text-azul-marino group-hover:scale-110 transition-transform duration-200' />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </article>
//     )
// }

import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Proyect, Tecnologic } from '../types'
import { useState, useEffect, useRef } from 'react'

interface ProyectCardProps {
    proyect: Proyect
}

export const ProyectCard = ({ proyect }: ProyectCardProps) => {
    const [activeIndex, setActiveIndex] = useState<Proyect['id'] | null>(null)
    const [isOverflowing, setIsOverflowing] = useState(false)

    const [contentHeight, setContentHeight] = useState<number | null>(null)

    const paragraphRef = useRef<HTMLParagraphElement>(null)

    // useEffect(() => {
    //     if (paragraphRef.current) {
    //         setIsOverflowing(
    //             paragraphRef.current.scrollHeight >
    //                 paragraphRef.current.clientHeight
    //         )
    //     }
    // }, [])

    useEffect(() => {
        if (paragraphRef.current) {
            const { scrollHeight, clientHeight } = paragraphRef.current
            setIsOverflowing(scrollHeight > clientHeight)
            setContentHeight(scrollHeight) // Guardamos la altura real del contenido
        }
    }, [proyect.description]) // Se actualiza si la descripción cambia

    const handleClick = (id: Proyect['id']) => {
        if (isOverflowing) {
            setActiveIndex(activeIndex === id ? null : id)
        }
    }

    const isCollapsed = activeIndex !== proyect.id

    return (
        <article className='transition-transform duration-700 shadow-lg rounded-xl overflow-hidden shadow-azul-marino'>
            <div
                className='flex flex-col items-center gap-5 bg-acero p-5 w-[300px] saturate-150
                            md:items-center md:justify-center md:w-[500px]
                            lg:w-[400px]
                            xl:w-[600px]'
            >
                <h3
                    className='text-2xl text-azul-marino font-semibold
                                xl:text-3xl'
                >
                    {proyect.name}
                </h3>

                <a
                    href={proyect.link}
                    target='_blank'
                    className='rounded-2xl overflow-hidden w-[100%] relative group'
                >
                    <FiExternalLink
                        className='absolute right-3 top-3 size-3 text-celeste z-10
                                    lg:right-4 lg:top-4 lg:size-4
                                    xl:right-5 xl:top-5 xl:size-5'
                    />

                    <img
                        src={proyect.img}
                        alt={proyect.name}
                        className='aspect-video w-[100%] group-hover:scale-105 transition-transform duration-300'
                    />
                </a>

                <div
                    className='flex flex-col gap-4 mx-2
                                md:items-center '
                >
                    {/* Descripción con expansión */}
                    {/* <p
                        ref={paragraphRef}
                        className={`text-celeste text-lg overflow-hidden transition-all duration-300 
                            ${
                                activeIndex === proyect.id
                                    ? 'h-[14rem] md:h-[7rem]'
                                    : 'h-full line-clamp-3'
                            } 
                            ${
                                isOverflowing
                                    ? 'cursor-pointer hover:opacity-80'
                                    : ''
                            } 
                            xl:text-xl`}
                        onClick={() => handleClick(proyect.id)}
                    >
                        {proyect.description}
                    </p> */}

                    <p
                        ref={paragraphRef}
                        className={`text-celeste text-lg overflow-hidden transition-all duration-300 ease-in-out
                            ${
                                isOverflowing
                                    ? 'cursor-pointer hover:opacity-80'
                                    : ''
                            } 
                            xl:text-xl ${isCollapsed ? 'line-clamp-3' : ''}`}
                        style={{
                            height: isCollapsed
                                ? '5.5rem'
                                : `${contentHeight}px`,
                        }}
                        onClick={() => handleClick(proyect.id)}
                    >
                        {proyect.description}
                        {isCollapsed && isOverflowing && '...'}
                    </p>

                    <div className='flex flex-col items-center justify-center gap-4'>
                        <ul className='flex justify-center gap-2'>
                            {proyect.tecnologics.map(
                                (tecnologic: Tecnologic) => (
                                    <img
                                        key={tecnologic.id}
                                        src={`./tecnologias/${tecnologic.img}`}
                                        alt={tecnologic.name}
                                        className='size-10 rounded-lg xl:size-13'
                                    />
                                )
                            )}
                        </ul>

                        <a
                            href={proyect.github}
                            target='_blank'
                            className='group bg-celeste py-2.5 px-30 rounded-xl hover:bg-celeste-oscuro shadow-xl'
                        >
                            <FiGithub className='text-azul-marino group-hover:scale-110 transition-transform duration-200' />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}
