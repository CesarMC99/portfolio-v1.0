import { NavBar } from './components/NavBar'
import { Contacto } from './sections/Contacto'
import { Footer } from './sections/Footer'
import { Inicio } from './sections/Inicio'
import { Projects } from './sections/Projects'
import { Tecnologics } from './sections/Tecnologics'

function App() {
    return (
        <>
            <header>
                <NavBar />
                <Inicio />
            </header>
            <main>
                <Tecnologics />
                <Projects />
                <Contacto />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default App
