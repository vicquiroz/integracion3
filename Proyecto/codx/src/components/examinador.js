import React, {useCallback,useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './comps.css';

export const Exa = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
    const reader = new FileReader()
    reader.onabort = () => console.log('lectura abortada')
    reader.onerror = () => console.log('lectura fallada')
    reader.onload = () => {
      // logica de archivos
      const datos = reader.result
      props.res(datos)
      console.log("El archivo fue aceptado")
    }
    reader.readAsText(file)
  })
}, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div id="Examinador" {...getRootProps()}>
    <input {...getInputProps()} />
    <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
    
  )
    
    
  
}