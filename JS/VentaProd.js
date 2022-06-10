


function compra() {
    console.table(piezasEnstock)
    let nombre = prompt("Ingrese su Nombre:")
    let direccion = prompt("ingrese su direcciòn:")
    let prod = parseInt(prompt("ingrese el ID del producto que esta comprando\n \n SEA PRECISO! LISTAMOS LOS PRODUCTOS EN LA CONSOLA"))
    let cant = parseInt(prompt("ingrese la cantidad de items a comprar"))
    let mail = prompt("ingrese su direcciòn de E-mail:")
    let idcompra = crearID()
    almacenarId = prod
     
    let respuesta = confirm("los datos ingresados son:" + "\n \n " + nombre + "\n " + direccion + "\n " + mail + "\n\nSi son correctos Presiona ACEPTAR,\nSi no son correctos Presiona CANCELAR y vuelve a cargarlos")
       
    if(respuesta === true){ 
        alert("tu producto sera enviado a la calle:" + "\n \n " + direccion + "\n\n Se envió un correo con la facturación a:"+ "\n\n"  + mail + "\n \n Tu número de operación es:" + "   " + idcompra)
        ventasRealizdas.push(new Venta(nombre, direccion,prod,cant,mail,crearID()))
        
       
     
        }
        if(respuesta === false){
            let reiniciar = confirm("Ingresar nuevamente los datos de compra?:")
            if(reiniciar===true){
                compra()
            }  
                 
           } else {
           console.log("Gracias por tu compra")
           let index = piezasEnstock.findIndex((stockResta) => stockResta.id === prod);

           if(index !== -1){
           piezasEnstock[index].stock = piezasEnstock[index].stock - cant
            }
            console.table(piezasEnstock[index])
            console.log("quedan en stock " + piezasEnstock[index].stock + " unidades de este producto")
           }
    }
     
function listarVentas(){
    console.table(ventasRealizdas)
}


// function ajustarStock(){
//     debugger
//     let index = piezasEnstock.findIndex(almacenarID => {return almacenarID.id === prod});
//     if(index !== -1){
//      piezasEnstock[index].prod = -1
//     }

//  }

    
    
  


