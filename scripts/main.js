// Boton de Refrescar/borrar

const refresh = document.getElementById('refresh');

refresh.addEventListener('click', _ => {
location.reload();

});

// Declaracion de variables

    const input = document.getElementById("input");
    const addBtn = document.getElementById("buttonAdd");
    const ul = document.querySelector("ul")
    const reload = document.getElementById("recargar");
    const empty = document.querySelector(".empty");

// Capturar valor de las tareas

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

// Mostrar tareas programadas 

    if( text !== "") { // condicional 

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent= text; //guardo el texto en la const "p"

        li.appendChild(p);
        li.appendChild(ButtonSupr());
        ul.appendChild(li);

        input.value = ""; // Reiniciar form post addTarea
        empty.style.display = "none";
    }
});


// Se genera a través de evento el boton "Eliminar"

function ButtonSupr() {

    const suprBtn = document.createElement('button'); 
    suprBtn.textContent = "Eliminar";
    suprBtn.className = "botonEliminar";

    suprBtn.addEventListener('click',(e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
          empty.style.display = "block";
        }
      });

    return suprBtn;   
    
}

