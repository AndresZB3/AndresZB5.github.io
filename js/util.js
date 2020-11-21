/ ** @module
* Funciones que se usan en varios proyectos. * /

/ ** Indica si un tipo de entrada = "archivo" tiene un archivo seleccionado.
* @param { HTMLInputElement } entrada de archivo que se analiza.
* @returns { Archivo } devuelve el archivo seleccionado; en otro caso, falso. * /
function  fileSeleccionado ( file )  {
   archivo de retorno . archivos  &&  archivo . archivos [ 0 ] ;
}

/ ** Procesa un error. Muestra el objeto en la consola y un cuadro de
 * alerta con el mensaje.
* @param { Error } e descripción del error. * /
function  procesaError ( e )  {
  consola . log ( e ) ;
  alerta ( e . mensaje ) ;
}

/ ** Mapa que contiene el texto de escape de los caracteres especiales de
 * HTML.
* @type {Readonly <Map <string, string >>} * /
const  codMap  =  Objeto . congelar ( mapa nuevo  ( [ [ '&' , '& amp;' ] , [ '<' , '& lt;' ] ,   
[ '>' ,  '& gt;' ] ,  [ '"' ,  '& quot;' ] ,  [ "'" ,  ' & # 039; ' ] ] ) ) ;

/ ** Codifica un texto para que escape los caracteres especiales y no se
* pueda interpretar como HTML. Esta técnica evita la inyección de código.
* @param { cadena } texto
* @returns { string } un texto que no puede interpretarse como HTML. * /
función  cod ( texto )  {
  return  ( texto  ||  "" ) . reemplazar ( / [ & <> "' ] / g ,  letra  =>  codMap . get ( letra ) ) ;
}
