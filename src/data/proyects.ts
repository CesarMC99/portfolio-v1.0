import { Proyect } from '../types'
import { tecnologics } from './tecnologics'

export const proyects: Proyect[] = [
    {
        id: 1,
        name: 'Pokedex',
        img: './img-proyectos/pokedex.png',
        github: 'https://github.com/CesarMC99/pokedex-v2',
        link: 'https://pokedex-seven-ecru.vercel.app/',
        description:
            'Una aplicación que te permite buscar cualquier Pokémon y visualizar sus estadísticas completas de manera detallada. Utiliza el consumo de API para ofrecer información actualizada y precisa.',
        tecnologics: [
            tecnologics[0],
            tecnologics[2],
            tecnologics[5],
            tecnologics[4],
        ],
    },
    {
        id: 2,
        name: 'Recetas de cócteles',
        img: './img-proyectos/coctel-proyect.png',
        github: 'https://github.com/CesarMC99/buscador-bebidas/tree/main',
        link: 'https://buscador-bebidas-dun.vercel.app/',
        description:
            'Una aplicación diseñada para explorar una amplia variedad de recetas de cócteles y guardarlas en tu lista de favoritos. Mediante el consumo de API, proporciona información actualizada y detallada sobre cada preparación.',
        tecnologics: [
            tecnologics[0],
            tecnologics[3],
            tecnologics[5],
            tecnologics[4],
        ],
    },
    {
        id: 3,
        name: 'Tienda de guitarras',
        img: './img-proyectos/tienda-guitarra.png',
        github: 'https://github.com/CesarMC99/carrito-compras-guitarras/tree/main',
        link: 'https://carrito-compras-guitarras.vercel.app/index.html',
        description:
            'Un carrito de compras diseñado para los amantes de la música, donde puedes descubrir y adquirir las mejores guitarras con facilidad.',
        tecnologics: [
            tecnologics[0],
            tecnologics[2],
            tecnologics[6],
            tecnologics[4],
        ],
    },
    {
        id: 4,
        name: 'Buscador de clima',
        img: './img-proyectos/clima-proyect.png',
        github: 'https://github.com/CesarMC99/buscador-clima/tree/main',
        link: 'https://buscador-clima-nine.vercel.app/',
        description:
            'Una aplicación que sirve para buscar el clima exacto de las ciudades en diferentes países. Utiliza el consumo de API para ofrecer información actualizada y precisa.',
        tecnologics: [
            tecnologics[0],
            tecnologics[3],
            tecnologics[5],
            tecnologics[4],
        ],
    },
]
