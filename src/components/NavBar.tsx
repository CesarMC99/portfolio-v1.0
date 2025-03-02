import { HashLink } from 'react-router-hash-link'
import { Bars3Icon } from '@heroicons/react/16/solid'
import { useLocation } from 'react-router'
import { useEffect, useMemo, useState } from 'react'
import { links } from '../data/links'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    // const [isActive, setIsActive] = useState(false)

    const location = useLocation()

    // const activeEffect = (hash: string) => {
    //     setIsActive(hash === location.hash)
    // }
    const isActive = (hash: string) => {
        return hash === location.hash
    }

    useMemo(() => setIsOpen(false), [location.hash])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1)
            // console.log(location.hash)
            // location.hash = ''
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`
             fixed flex justify-around items-center w-full py-5 z-10
             lg:py-6
            ${
                isScrolled
                    ? 'bg-acero/80 backdrop-blur-sm transition-colors ease-linear shadow-2xl'
                    : 'bg-acero'
            }`}
        >
            <label className='text-4xl text-celeste font-bold italic'>
                César M.C.
            </label>

            <ul
                className={`fixed flex flex-col gap-12 top-20 bg-acero-oscuro/90 w-full h-screen text-center py-15 duration-500 ease-linear
                lg:static lg:flex-row lg:w-auto lg:h-auto lg:bg-transparent lg:py-0 lg:transition-none
                ${isOpen ? 'left-0' : 'left-[-100%]'}`}
            >
                {links.map((link) => (
                    <li key={link.id}>
                        <HashLink
                            smooth
                            to={link.path}
                            className={`text-3xl font-bold hover:text-azul 
                            lg:text-2xl lg:font-bold
                            ${
                                isActive(link.hash)
                                    ? 'text-azul'
                                    : 'text-celeste'
                            } `}
                        >
                            {link.name}
                        </HashLink>
                    </li>
                ))}
            </ul>
            <Bars3Icon
                className={`size-8 text-white cursor-pointer lg:hidden`}
                onClick={() => setIsOpen(!isOpen)}
            />
        </nav>
    )
}
