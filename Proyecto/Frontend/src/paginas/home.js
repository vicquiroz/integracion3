import React from 'react';

function Home() {
  return (
    <div className='home'>
      <h1 style={{textAlign: "center"}}>Plataforma : Aplicación de procedimientos de Big Data y Data Science</h1>
      <br/>
      <div className="d-flex justify-content-center">
        <img src="Home.png" ></img>
      </div>
      <br/>
      <p style={{textAlign: "center"}}>Actualmente, el análisis de datos requiere un conocimiento previo sobre programación y estadística para lograr alcanzar resultados significativos. Mediante la plataforma propuesta se espera reducir la curva de aprendizaje en términos de programación para acceder a las herramientas de análisis de datos, y así aumentar el acceso y la facilidad de uso en Ciencia de Datos para las personas.</p>
      <br/><br/>
      <h2>Modo General</h2>
      <p>El modo General realiza funciones estadísticas tales como Mediana, Media Aritmética, Moda y Desviación Estándar.
        Puede Graficar los datos que se seleccionen, también tiene la función de mostrar una tabla de frecuencia de lo que se pida.
        Tiene la capacidad de funcionar con cualquier Json que siga la estructura presentada por CIDLA.
        </p>
      <h2>Modo Arquetipos</h2>
      <p>Este Modo fue creado para trabajar con el Json de arquetipos de CIDLA, aqui se puede cargar una lista de las consultas, que se compararan con la informacion
        que está en las fichas medicas y una vez se encuentran los datos, se pueden graficar o se puede calcular una tabla de frecuencias de sus edades.
        Esto funciona de esta forma para lograr que el manejo sea el mas comodo para el usuario.
    </p>
    </div>
  );
}

export default Home;