import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import Card from "componentes/Card";
import styles from "./index.module.css";
// import videos from "data/db.json"
import { useState, useEffect } from "react";


function Inicio(){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(
          "https://my-json-server.typicode.com/florez89/alura-cinema-api/videos"
        )
          .then((response) => response.json())
          .then((data) => {
            setVideos(data);
          });
      }, []);

    return(
        <>
        <Banner img="home" color="#154580"/>
        <Titulo>
            <h1>Un lugar para guardar sus videos favoritos </h1>
        </Titulo>

        <section className={styles.container}>
            {videos.map((video)=>{
                return <Card {...video} key={video.id}/>
            })}
        </section>
        </>
        
    )
}

export default Inicio;