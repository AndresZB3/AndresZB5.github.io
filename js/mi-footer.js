// Declara los estilos de la etiqueta mi-footer.
documento . cabeza . innerHTML  + =  / * html * /
  `<estilo>
    mi-footer {display: block}
  </style> ` ;
/ * Declara la etiqueta "mi-footer" que se usa en "index.html" y "usuarios.html".
* Es el footer de todas las páginas del sitio. * /
customElements . define ( "mi-pie de página" ,  clase  extiende  HTMLElement  {
  / ** Se invoca al agregar este elemento a la página. * /
  connectedCallback ( )  {
    esto . textContent  =  "Copyright © 2020 Ricardo Armando Machorro Reyes." ;
  }
} ) ;
