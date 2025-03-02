import { InfiniteScroll } from '../components/InfiniteScroll'
import { Separation } from '../components/Separation'
import { tecnologics } from '../data/tecnologics'

export const Tecnologics = () => {
    return (
        <section
            id='tecnologias'
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
                    Tecnologias
                </h2>

                <InfiniteScroll tecnologics={tecnologics} />
            </div>
        </section>
    )
}
