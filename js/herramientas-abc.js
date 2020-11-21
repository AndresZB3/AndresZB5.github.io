/ * Declara la etiqueta "herramientas-abc" que se usa en "index.html" y
* "usuarios.html". * /
customElements . define ( "herramientas-abc" ,  class  extiende  HTMLElement  {
  / ** Se invoca al agregar este elemento a la página. * /
  connectedCallback ( )  {
    esto . innerHTML  =   / * html * /
      `<button id =" agregar "type =" button "class =" btn btn-success "onclick =" agrega () ">
        Agregar ...
      </button>
      <button class = "btn btn-info" type = "submit"> Guardar </button>
      <button class = "btn btn-danger" id = "eliminar" type = "button" onclick = "elimina ()">
        Eliminar
      </button> ` ;
  }
} ) ;
