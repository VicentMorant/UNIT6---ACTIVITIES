

function Punto(pX=0, pY=0){
        this.x = pX;
        this.y = pY;

        this.mostrar = () => {
            return `(${x} , ${y})`
        };
                
        this.change = (changeX, changeY) => {
            this.x = changeX;
            this.y = changeY;
        };

        this.copy = () => {
            return Punto(this.x, this.y);
        };

        this.equal = (p) =>{
            return (this.x == p.x && this.y == p.y);
        };

        this.addition = (punto) =>{
            return new Punto(this.x + punto.x, this.y + punto.y);
        }
        
        this.getDistance = (punto) =>{
            //let result = Math.sqrt(Math.pow(Math.abs(this.x - punto.x)) + Math.pow(Math.abs(this.y - punto.y)));
                
            let a = Math.abs(this.x - punto.x);
            let b = Math.abs(this.y - punto.y);
            a*=a;
            b*=b;
            let result = Math.sqrt(a+b);
                
            return result;                
        }
}               