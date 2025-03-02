import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { IconLink } from '../components/IconLink'

export const Inicio = () => {
    return (
        <section
            id='inicio'
            className='grid place-items-center gap-20 pt-25 
                            lg:pt-40'
        >
            <div
                className='flex flex-col justify-center items-center gap-4 
                                lg:gap-10 lg:flex-row'
            >
                <div
                    className='w-[150px] h-[150px] bg-[url("./cesar.png")] bg-center bg-cover rounded-[50%] border-4 border-celeste-oscuro shadow-2xl
                                    lg:w-[250px] lg:h-[250px] 
                                    xl:w-[350px] xl:h-[350px]'
                />

                <div
                    className='flex flex-col items-center space-y-4 
                                    md:w-[80%] md:space-y-3
                                    lg:space-y-8 lg:w-[60%] lg:items-start lg:pl-10 
                                    xl:w-[50%]'
                >
                    <h1
                        className='text-2xl text-celeste-oscuro font-bold
                                        md:text-3xl
                                        lg:text-4xl 
                                        xl:text-5xl'
                    >
                        ¡Hola! 👋 Soy César Mejía.
                    </h1>

                    <div className='lg:space-y-4 lg:grid lg:place-items-center'>
                        <p
                            className='text-celeste text-center text-lg
                                            md:text-xl
                                            lg:text-2xl lg:text-start 
                                            xl:text-3xl'
                        >
                            Soy un ingeniero de sistemas en formación,
                            especializado en desarrollo{' '}
                            <span className='font-bold text-celeste-oscuro'>
                                {'<frontend>'} {''}
                            </span>{' '}
                            con conocimientos en backend. Me apasiona crear
                            experiencias digitales innovadoras, optimizadas y
                            atractivas. Siempre en constante aprendizaje para
                            ofrecer soluciones modernas y eficientes.
                        </p>
                    </div>

                    <div
                        className='flex items-center gap-4 order-[-1] m-4 
                                        lg:order-1 lg:m-0
                                        xl:gap-8'
                    >
                        <IconLink link='https://www.linkedin.com/in/c%C3%A9sar-mej%C3%ADa-c%C3%A1rdenas-990613270/'>
                            <FiLinkedin />
                        </IconLink>

                        <IconLink link='https://github.com/CesarMC99'>
                            <FiGithub />
                        </IconLink>

                        <IconLink link='https://www.instagram.com/cesar_mc_24/'>
                            <FiInstagram />
                        </IconLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
