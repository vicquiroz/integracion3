import React, {useCallback,useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './comps.css';

export const Exa = (props) => {
  const [archivo,setArchivo]=useState()
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
    const reader = new FileReader()
    reader.onabort = () => console.log('File reading was aborted')
    reader.onerror = () => console.log('File reading has failed')
    reader.onload = () => {
      // Do whatever you want with the file contents
      const datos = reader.result
      setArchivo(datos)
      props.res(datos)
      console.log("File reading was accepted")
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