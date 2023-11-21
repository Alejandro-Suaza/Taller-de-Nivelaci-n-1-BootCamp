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


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');
  const userList = document.getElementById('users');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;

    checkAndAddUser(name, userList);
  });

  displayUserList(userList);
});

function checkAndAddUser(name, userList) {
  axios.get('http://localhost:3000/users')
    .then((response) => {
      const users = response.data; 

      if (Array.isArray(users)) {
        const existingUser = users.find(user => user.name === name);

        if (existingUser) {
          console.log(`El usuario "${name}" ya existe.`);

          document.getElementById('errorMessage').textContent = `El usuario "${name}" ya existe.`;
        } else {
          const newUser = {
            name: name 
          };
          const newUserId = generateUniqueId(users);
          newUser.id = newUserId;

          axios.post('http://localhost:3000/users', newUser)
            .then(() => {
              console.log('Nuevo usuario creado');

              displayUserList(userList);
            })
            .catch((error) => {
              console.error('Error en POST:', error);
            });
        }
      } else {
        console.error('La respuesta no contiene una lista válida de usuarios.');
      }
    })
    .catch((error) => {
      console.error('Error en GET:', error);
    });
}


function displayUserList(userList) {
  axios.get('http://localhost:3000/users')
    .then((response) => {
      const users = response.data;

      userList.innerHTML = ''; 

      if (Array.isArray(users)) {
        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          userList.appendChild(listItem);
        });
      } else {
        console.error('La respuesta no contiene una lista válida de usuarios.');
      }
    })
    .catch((error) => {
      console.error('Error en GET:', error);
    });
}

function generateUniqueId(users) {
  if (users.length === 0) {
    return 1; 
  }

  let maxId = 0;
  users.forEach(user => {
    if (user.id > maxId) {
      maxId = user.id;
    }
  });
  return maxId + 1;
}


