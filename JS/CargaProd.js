


function crearID() {
    return parseInt(Math.random() * 1000)
}


function cargarProducto(){
    let nombre = prompt("Ingrese el nombre del producto a cargar:")
    let stock = parseInt(prompt("Ingrese la cantidad del producto ofrecido:"))
    let importe = parseInt(prompt("Ingrese el precio del producto cargado:"))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), nombre, stock, importe))
    console.table(piezasEnstock)
}



function GeneradorAutomatico(){
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "tazas chinas", 45, 5600))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "platos playos", 15, 8200))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "teteras gres", 80, 9000))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "posavasos anchos", 100, 600))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "centro de mesa", 25, 7600))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "pipas decorativas", 24, 2400))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "hebillas de pelo", 75, 1200))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "growlers esmaltados", 35, 8600))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "juego de ollas", 18, 17600))
}

function GeneradorVentas(){
    ventasRealizdas.push(new Venta("Pepe Jonte", "Calle laspina 2085", 165,"pepeJ@gmail.com", crearID()))
    ventasRealizdas.push(new Venta("Cacho Fontaner", "Calle josefa 6548", 486,"cachoF@gmail.com", crearID()))
    ventasRealizdas.push(new Venta("Pepe Mujica", "Calle pintaponint 1058", 846,"pepeM@gmail.com", crearID()))
    ventasRealizdas.push(new Venta("Ricardo Alfonsin", "Calle cisaña 789", 684,"ricardoA@gmail.com", crearID()))
    ventasRealizdas.push(new Venta("Juana de Arco", "Calle pendular 57", 864,"JuanaA@gmail.com", crearID()))
}

function buscarProducto (){
    let nom = prompt("ingrese parte del nombre de las piezas a buscar:")
    let resultado = piezasEnstock.filter(p => p.nombre.includes(nom.toLowerCase()))
    console.log("Encontramos los siguientes productos:")
    console.table(resultado)
}


function listarProductos(){
    for(let lista of piezasEnstock){
    console.table(lista)
}
}

   
function borrarProducto(){
    console.table(piezasEnstock)
    let cod = parseInt(prompt ("ingrese el ID del producto que desea borrar:"))
    let existe = piezasEnstock.some(p=> p.id === cod)

    if (existe){
      let index = piezasEnstock.findIndex((i)=>i.id === cod)
      piezasEnstock.splice(index,1)
      console.clear()
      console.table(piezasEnstock)
      console.warn("el producto con id " + cod + " ha sido borrado")
        
    } else {
        console.error("No se encontro el código ingresado")
    }
}




