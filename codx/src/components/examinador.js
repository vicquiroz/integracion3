import React from 'react';
import {useDropzone} from 'react-dropzone';

export const Exa = (props) => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

  return (
    <section id="Examinador">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Arrastra o haz click para subir un archivo</p>
      </div>
      <aside>
        <h4>Archivos</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
