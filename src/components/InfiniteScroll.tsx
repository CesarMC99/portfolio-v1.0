import { Tecnologic } from '../types'

interface InfiniteScrollProps {
    tecnologics: Tecnologic[]
}

//absolute h-[64px] w-[180px] left-[max(calc(250px*5),100%)] animate-scroll-left

export const InfiniteScroll = ({ tecnologics }: InfiniteScrollProps) => {
    return (
        <ul className='w-[90%] max-w-[1180px] mx-auto relative h-[98px] overflow-hidden [mask-image:_linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_30%,rgba(0,0,0,1)_70%,rgba(0,0,0,0))]'>
            {tecnologics.map((tecnologic, i) => (
                <li
                    key={tecnologic.id}
                    className='absolute left-[max(calc(250px*5),100%)] animate-scroll-left w-[180px] h-[96px]'
                    style={{
                        animationDelay: `${
                            (30 / tecnologics.length) *
                            (tecnologics.length - (i + 1)) *
                            -1
                        }s`,
                    }}
                >
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img
                            src={`./tecnologias/${tecnologic.img}`}
                            alt={tecnologic.img}
                            className='size-12 lg:size-16'
                        />
                        <p className='text-celeste font-semibold'>
                            {tecnologic.name}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
