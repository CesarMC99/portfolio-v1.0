import { Separation } from '../components/Separation'

export const Contacto = () => {
    return (
        <section
            id='contacto'
            className='grid place-items-center'
        >
            <Separation />
            <div
                className='w-full flex flex-col items-center justify-center gap-12 mb-14
                            lg:gap-20'
            >
                <h2
                    className='text-celeste-oscuro text-4xl font-bold
                                lg:text-5xl'
                >
                    Contactame
                </h2>
                <div className='space-y-6'>
                    <a
                        href='mailto:cesar_mejia_99@hotmail.com'
                        target='_blank'
                        className='group flex justify-center items-center gap-2'
                    >
                        <img
                            src='./img-redes/correo.svg'
                            alt='correo'
                            className='w-[40px]
                                        lg:w-[50px]
                                        xl:w-[60px]'
                        />
                        <p
                            className='text-celeste text-lg group-hover:text-celeste-oscuro transition-colors duration-200
                                        lg:text-2xl
                                        xl:text-3xl'
                        >
                            cesar_mejia_99@hotmail.com
                        </p>
                    </a>
                    <a
                        href='https://w.app/cesarmc-dev'
                        target='_blank'
                        className='group flex justify-center items-center gap-2'
                    >
                        <img
                            src='./img-redes/whatsapp.svg'
                            alt='whatsapp'
                            className='w-[40px]
                                        lg:w-[50px]
                                        xl:w-[60px]'
                        />
                        <p
                            className='text-celeste text-lg group-hover:text-celeste-oscuro transition-colors duration-200
                                        lg:text-2xl
                                        xl:text-3xl'
                        >
                            +51 910 379 359
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}
