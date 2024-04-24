class Temperature {
    constructor(c) {
        this.c = c;
    }
    getC(){
        return this.c;
    }
    getCtoF(){
        return 9/5 * this.c +32;
    }
    getCtoKenvin(){
        return this.c + 273.15;
    }
}
let doC = new Temperature(25);
let c = doC.getC();
let CtoF = doC.getCtoF();
document.write( c+" độ C "+" = " +CtoF + " độ F"+"<br>")
let CtoKenvin = doC.getCtoKenvin();
document.write( c+" độ C "+" = " +CtoKenvin + " Kenvin")