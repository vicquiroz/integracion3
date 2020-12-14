import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import '../comps.css';

export const Exa = (props) => {    // Funcion para examinador
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
    const reader = new FileReader() // Receptor de el archivo que se subira
    reader.onabort = () => console.log('lectura abortada')
    reader.onerror = () => console.log('lectura fallada')//Muestra en la consola los sucesos descritos.
    reader.onload = () => {
      // Logica de archivos
      const datos = reader.result
      props.res(datos)
      console.log("El archivo fue aceptado") //Muestra en consola si el archivo fue recibido
    }
    reader.readAsText(file)
  })
}, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop,  accept: 'application/json'})

  return (
    <div id="Examinador" {...getRootProps()}>
    <input {...getInputProps()} /> {/* Input que recibira el archivo Json*/}
    <p>Seleccionar archivos JSON o arrastra y suelta el archivo aqui</p>
    </div>
  )
    
    
  
}