// Declara los estilos de la etiqueta mi-nav.
documento . cabeza . innerHTML  + =  / * html * /
  `<estilo>
    mi-nav {display: block}
  </style> ` ;
/ * Declara la etiqueta "mi-nav" que se usa en "index.html" y "usuarios.html".
* Es la barra de navegación de todas las páginas del sitio. * /
customElements . define ( "mi-nav" ,  class  extiende  HTMLElement  {
  / ** Se invoca al agregar este elemento a la página. * /
  connectedCallback ( )  {
    esto . innerHTML  =   / * html * /
      `<a class="btn btn-link" href="index.html"> Pasatiempos </a>
      <a class="btn btn-link" href="usuarios.html"> Usuarios </a> ` ;
  }
} ) ;
