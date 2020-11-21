/ * Declara la etiqueta "mis-checks" para manejar las casillas de verificación. * /
customElements . define ( "errores de verificación" , la  clase  extiende  HTMLElement  {
  obtener  valor ( )  {
    / ** @type {HTMLInputElement []} * /
    const  comprobado  =  Array . from ( this . querySelectorAll ( ": comprobado" ) ) ;
    retorno  comprobado . mapa ( comprobar  =>  comprobar . valor ) ;
  }
  establecer  valor ( valor )  {
    const  conjunto  =  nuevo  Set ( valor  ||  [ ] ) ;
    / ** @type {HTMLInputElement []} * /
     comprobaciones  constantes =  Array . from ( this . querySelectorAll ( "[type = checkbox]" ) ) ;
    para  ( verificación constante  de cheques ) {   
      comprobar . comprobado  =  conjunto . tiene ( comprobar . valor ) ;
    }
  }
