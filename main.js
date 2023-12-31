// Definir una función para cargar los tweets desde el servidor JSON y mostrarlos en la página
function cargarTweets() {
    // Hacer una solicitud GET al servidor JSON
    fetch('https://my-json-server.typicode.com/taliasouza/FakeTw/posts')
      .then(response => response.json())
      .then(data => {
        const posts = data;
        const feedDiv = document.querySelector('.feed');
  
        // Recorrer los tweets y agregarlos al feed
        posts.forEach(post => {
          const tweetDiv = document.createElement('div');
          tweetDiv.className = 'tweets';
  
 // Generar una URL de avatar única para cada comentario
 const avatarUrl = `https://xsgames.co/randomusers/avatar.php?g=pixel&id=${Math.floor(Math.random() * 20)}`;



          // Construir el contenido del tweet
          const tweetContent = `
            <div class="profile-pic">
              <img src="https://xsgames.co/randomusers/avatar.php?g=pixel&id=${Math.floor(Math.random() * 20)}" />
            </div>
            <div class="content">
              <div class="names">
                <p class="full-name">${post['@fullname']}</p>
                <p class="user-name">${post.name}</p>
                <p class="time">${post.time}</p>
              </div>
            </div>
            <div class="tweet-content">
              <p>${post.text}</p>
            </div>
            <div class="tweet-icons">
              <i class="fa fa-comment" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-retweet" aria-hidden="true"></i>
            </div>
          `;
  
          tweetDiv.innerHTML = tweetContent;
          feedDiv.appendChild(tweetDiv);
        });
      })
      .catch(error => console.error('Error al cargar los tweets:', error));
  }
  
  // Llama a la función para cargar los tweets al cargar la página
  window.addEventListener('load', cargarTweets);
  