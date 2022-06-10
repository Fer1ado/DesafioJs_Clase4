


function compra() {
    console.table(piezasEnstock)
    let nombre = prompt("Ingrese su Nombre:")
    let direccion = prompt("ingrese su direcciòn:")
    let prod = prompt("ingrese el ID del producto que esta comprando")
    let mail = prompt("ingrese su direcciòn de E-mail:")
    let idcompra = crearID()
    
     
    let respuesta = confirm("los datos ingresados son:" + "\n \n " + nombre + "\n " + direccion + "\n " + prod + "\n " + mail + "\n\nSi son correctos Presiona ACEPTAR,\nSi no son correctos Presiona CANCELAR y vuelve a cargarlos")
       
    if(respuesta === true){ 
        alert("tu producto sera enviado a la calle:" + "\n \n " + direccion + "\n\n Se envió un correo con la facturación a:"+ "\n\n"  + mail + "\n \n Tu número de operación es:" + "   " + idcompra)
        ventasRealizdas.push(new Venta(nombre, direccion,prod,mail,crearID()))
        
       
        // ACA TRATE DE GENERAR UNA FUNCIÓN QUE ME EDITARA EL DATO DE STOCK EN EL ARRAY ORIGINAL DE PRODUCTOS OFRECIDOS PERO NO CONSEGUÍ HACERLO, NO ENCUENTRO MANERA DE REFERENCIAR UN ITEM INSTANCIADO DENTRO DE UN ELEMENTO EN EL ARRAY.
        function editarStock(prod){
            let existe = piezasEnstock.some(p=> p.id === prod)
            if(existe===true)
            for (prod of piezasEnstock) {this.stock= -1
            };
           if(existe===false){
            console.log("registro inexistente")
           }
        }

        }
        if(respuesta === false){
            let reiniciar = confirm("Ingresar nuevamente los datos de compra?:")
            if(reiniciar===true){
                compra()
            }        
           } else {
           console.log("nos vemos la proxima")
           }
    }
     
function listarVentas(){
    console.table(ventasRealizdas)
}

    
    
  


