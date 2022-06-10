class PiezasOfrecidas {
    constructor(id, nombre, stock, importe) {
        this.id = id
        this.nombre = nombre.toLowerCase()
        this. stock = stock
        this.importe = importe
    }
}

class Venta{
    constructor(nom, dir, prod, cant, mail, id){
    this.nom = nom.toLowerCase()
    this.dir = dir.toLowerCase()
    this.prod = prod
    this.cant = cant
    this.mail = mail.toLowerCase()
    this.id = id
}
}