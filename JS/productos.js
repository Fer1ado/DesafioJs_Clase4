class PiezasOfrecidas {
    constructor(id, nombre, stock, importe) {
        this.id = id
        this.nombre = nombre.toLowerCase()
        this. stock = stock
        this.importe = importe
    }
}

class Venta{
    constructor(nom, dir, prod, mail, id){
    this.nom = nom.toLowerCase()
    this.dir = dir.toLowerCase()
    this.prod = prod
    this.mail = mail.toLowerCase()
    this.id = id
}
}