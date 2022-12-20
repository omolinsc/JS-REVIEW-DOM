//! **Iteración #1: Interacción con el DOM**


//* 1.1 Basandote en el array siguiente, crea una lista ul > li 
//* dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const uList$$ = document.createElement("ul");

for ( const country of countries){
    const iList$$ = document.createElement("li");
    iList$$.textContent = country;
    uList$$.appendChild(iList$$);
}

document.body.appendChild(uList$$);

//* 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

//* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//* en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const uList2$$ = document.createElement("ul");
const div$$ = document.querySelector("[data-function='printHere']");

for ( const car of cars){
    const iList$$ = document.createElement("li");
    iList$$.textContent = car;
    uList2$$.appendChild(iList$$);
}

div$$.appendChild(uList2$$);

//* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//* h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// como añadir un atributo a una etiqueta -> p.setAttribute("class", "pepe"); img.src = "asdfs"

for (const country of countries2){

    const div$$ = document.createElement("div");
    const h4$$ = document.createElement("h4");
    const img$$ = document.createElement("img");
    const button$$ = document.createElement("button");
    
    h4$$.textContent = country.title;
    img$$.src = country.imgUrl;
    button$$.textContent = "Elimíname";

    div$$.className = "country";

    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    div$$.appendChild(button$$);

    button$$.addEventListener("click", eliminarEste);

    document.body.appendChild(div$$);
}


//* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//* elemento de la lista.

// ⬆

function eliminarUltimo(){
    const countries$$ = document.querySelectorAll(".country");
    countries$$[countries$$.length-1].remove();
}

const eliminarUltimo$$ = document.createElement("button")
eliminarUltimo$$.textContent = "Eliminar Último";

//añadir un escuchador de eventos
eliminarUltimo$$.addEventListener("click", () => eliminarUltimo());

document.body.appendChild(eliminarUltimo$$);

//* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//* elementos de las listas que elimine ese mismo elemento del html.

// ⬆ completado en el 1.4

function eliminarEste(evento) {

    console.log(evento.target.parentElement);

    evento.target.parentElement.remove();

}

