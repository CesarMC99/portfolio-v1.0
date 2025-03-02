export type Link = {
    id: number
    name: string
    path: string
    hash: string
}

export type Tecnologic = {
    id: number
    name: string
    img: string
}

export type Proyect = {
    id: number
    name: string
    img: string
    github: string
    link: string
    description: string
    tecnologics: Tecnologic[]
}
