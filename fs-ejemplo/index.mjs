import fs from 'fs';

// Leer un archivo
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenido del archivo:', data);

  // Escribir en un nuevo archivo
  fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');

    // Ahora que el archivo fue creado, lo renombramos
    fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
      if (err) throw err;
      console.log('Archivo renombrado');
    });
  });
});