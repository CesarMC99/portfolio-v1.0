import { ReactElement } from 'react'

interface IconLinkProps {
    children: ReactElement
    link: string
}

export const IconLink = ({ children, link }: IconLinkProps) => {
    return (
        <>
            <a
                href={link}
                target='_blank'
                className='group grid place-items-center bg-celeste-oscuro w-[25px] h-[25px] rounded-full text-sm hover:bg-celeste
                            lg:w-[40px] lg:h-[40px] lg:text-xl'
            >
                <span className='group-hover:scale-110 transition-transform duration-200 text-azul'>
                    {children}
                </span>
            </a>
        </>
    )
}
