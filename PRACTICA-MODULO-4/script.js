/* function simulateOperation() {
    return new Promise((resolve, reject) => {

        let counter = 0;
        const interval = setInterval(() => {
            counter++;
            if (counter >= 5) {
                clearInterval(interval);
                resolve('Operación completada.'); 
            }
        }, 1000); 
    });
}
  simulateOperation()
    .then((result) => {
        alert(result); 

    })
    .catch((error) => {
        console.error('Ocurrió un error:', error);
    }); */

//SIMULACION API


axios.get('http://localhost:3000/users')
  .then((response) => {
    console.log('Resultados GET:', response.data);
  })
  .catch((error) => {
    console.error('Error en GET:', error);
  });

const newPost = {
  name: 'Carlos',
};

axios.post('http://localhost:3000/users', newPost)
  .then((response) => {
    console.log('Nuevo post creado:', response.data);
  })
  .catch((error) => {
    console.error('Error en POST:', error);
  });
