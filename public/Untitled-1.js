function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


var array=[1,2,3,4,5,6,7,8]
function match(array){
    debugger
for(i=0;i<=array.length/2;i++){
const newArr = array.map(function(arr){
    return array.splice(0,2);
})
    return newArr;
}
}


