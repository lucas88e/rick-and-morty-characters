const btnPrevia = document.getElementById("prev-page")
const btnSiguiente = document.getElementById("next-page")
const lista = document.getElementById("character-list")
let paginaActual =1;


    fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}` )
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue existosa');
        }
        return response.json();
      })
      .then((data) => {
    //    console.log(data.results[0]);
    //    const imagnes = data.results.map(element =>element.image);
       const personajesHtml =data.results.map(element =>`<div class ="personaje"><img src = "${element.image}" alt ="${element.name}" />
       <p> <span style ="font-weight: bold; font-size:20px ">Name :</span>${element.name}</p>
       <span style ="font-weight:bold;font-size:20px;"> Species :</span> ${element.species}
       </div>`).join("")
    //    const nombres = data.results.map(element => element.name);
    //    const nombresHtml =nombres.map(name => `<div>${name}</div>`).join("")
       lista.innerHTML = `
       <div class ="cajas"> ${personajesHtml}</div>`
       
      })
      .catch((error) => {
        lista.innerHTML = 'Error: No se pudo obtener la lista de personajes finalizó actualiza la página para volver a ver';
      });


 

btnSiguiente.addEventListener("click", ()=> {
    fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}` )
    .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue existosa');
        }
        return response.json();
      })
      .then((data) => {
       
       const personajesHtml =data.results.map(element =>`<div class ="personaje"><img src = "${element.image}" alt ="${element.name}" />
       <p> <span style ="font-weight: bold; font-size:20px ">Name :</span>${element.name}</p>
       <span style ="font-weight:bold;font-size:20px;"> Species :</span> ${element.species}
       </div>`).join("")

       lista.innerHTML = `
       <div class ="cajas"> ${personajesHtml}</div>`
       paginaActual++
      })
      .catch((error) => {
        lista.innerHTML = alert ('Error: No se pudo obtener la lista de personajes finalizó actualiza la página para volver a ver');
    });
    })

    btnPrevia.addEventListener("click", ()=> {
        
       
        fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`)
        .then((response) => {
            if (!response.ok) {
              throw new Error('La solicitud no fue existosa');
            }
            return response.json();
          })
          .then((data) => {
       
            const personajesHtml =data.results.map(element =>`<div class ="personaje"><img src = "${element.image}" alt ="${element.name}" />
            <p> <span style ="font-weight: bold; font-size:20px ">Name :</span>${element.name}</p>
            <span style ="font-weight:bold;font-size:20px;"> Species :</span> ${element.species}
           </div>`).join("")
        
           lista.innerHTML = `
           <div class ="cajas"> ${personajesHtml}</div>`
           paginaActual--
           
          })
          .catch((error) => {
            lista.innerHTML = alert('Error: No se pudo obtener la lista de personajes finalizó actualiza la página para volver a ver')
        });
        })
        ;

        //   <div class ="nombres"><b>NAME : </b> ${nombresHtml}</div>
        
        //   btnSiguiente.addEventListener('click', () => {
        //     fetch('https://rickandmortyapi.com/api/character/?page=2')
        //       .then((response) => {
        //         if (!response.ok) {
        //           throw new Error('La solicitud no fue existosa');
        //         }
        //         return response.json();
        //       })
        //       .then((data) => {
        //        //console.log(data.results[0].image);
        //        const imagnes = data.results.map(element =>element.image);
        //        const imagenesHtml =imagnes.map(image =>`<img src = "${image}"></img>`).join("")
        //    const nombres = data.results.map(element => element.name);
        //    const nombresHtml =nombres.map(name => `<div>${name}</div>`).join("")
        //        lista.innerHTML = imagenesHtml
        //       })
        //       .catch((error) => {
        //         lista.innerHTML = 'Error: No se pudo obtener la broma';
        //       });
        
        
        //   });