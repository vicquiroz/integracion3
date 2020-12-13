import React from 'react';

function Home() {
  return (
    <div className='home'>
      <h1 style={{textAlign: "center"}}>Plataforma : Aplicación de procedimientos de Big Data y Data Science</h1>
      <img src="https://i.ibb.co/4WK72SV/unknown-2.png" ></img>
      <img src="https://i.postimg.cc/FHj5LSjF/unknown.png" ></img>
      <p style={{textAlign: "center"}}>Actualmente, el análisis de datos requiere un conocimiento previo sobre programación y estadística para lograr alcanzar resultados significativos. Mediante la plataforma propuesta se espera reducir la curva de aprendizaje en términos de programación para acceder a las herramientas de análisis de datos más robustas, y así aumentar el acceso y la facilidad de uso en Ciencia de Datos para las personas. A la vez, se espera modernizar el almacenamiento de dichos datos mediante el uso del modelo de arquetipos de conocimiento, basado en objetos NoSQL, lo que permite crear y trabajar con colecciones de datos e información más complejas, dinámicas, y que mejor representan la realidad según el contexto de los datos.</p>
      <h2>Modo General</h2>
      <p>El modo General realiza todas las funciones estadísticas tales como Mediana, Media Aritmética, Moda y Desviación Estándar.
        Puede Graficar los datos que sea necesario y se seleccionen, también tiene la función de mostrar una tabla de frecuencia según corresponda.
        Más allá puede mostrar antecedentes clínicos , Fichas médicas, etc, en Formato Json.
        </p>
      <h2>Modo Arquetipos</h2>
      <p>Esta Modo fue creado para trabajar excepcionalmente con arquetipos, en el cual se puede cargar una lista de ellos, y buscar coincidencias para poder graficarlas.
    Otra opción es mostrar una tabla de frecuencias en base a la edad de cada paciente.
    La gracia de todo ello es poder trabajar facilmente con el manejo
    </p>
    </div>
  );
}

export default Home;