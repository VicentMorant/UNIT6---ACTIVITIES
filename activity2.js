
Array.prototype.media = function(){
    let sum = this.reduce((anterior, actual) => (anterior + actual),0);    
    return sum/this.length;
}

let array = [2,2,4,0];
console.log(array.media());