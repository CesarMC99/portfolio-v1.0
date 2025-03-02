import { ProyectCard } from '../components/ProyectCard'
import { Separation } from '../components/Separation'
import { proyects } from '../data/proyects'

export const Projects = () => {
    return (
        <section
            id='proyectos'
            className='grid place-items-center'
        >
            <Separation />

            <div
                className='w-full flex flex-col items-center justify-center gap-12
                            lg:gap-20'
            >
                <h2
                    className='text-celeste-oscuro text-4xl font-bold
                                lg:text-5xl'
                >
                    Proyectos
                </h2>

                <div
                    className='grid grid-cols-1 gap-10 place-items-center
                                lg:grid-cols-2'
                >
                    {proyects.map((proyect) => (
                        <ProyectCard
                            key={proyect.id}
                            proyect={proyect}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
