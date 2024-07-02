import Banner from "componentes/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "componentes/Titulo";
import Card from "componentes/Card";
import { useFavoritosContext } from "context/Favoritos";

function Favoritos() {
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner img="favoritos" color="#44d97d" />
      <Titulo>
        <h1>Mis favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;


