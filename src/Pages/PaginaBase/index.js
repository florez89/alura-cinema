import Cabecera from "componentes/Cabecera/Cabecera"
import Container from "componentes/Container"
import FavoritoProvider from "context/Favoritos"
import Pie from "componentes/Pie"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <FavoritoProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritoProvider>
            <Pie/>
        </main>
    )
}

export default PaginaBase