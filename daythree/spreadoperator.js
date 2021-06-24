

//program using spread operator
function add(val,...z){

    let res=0;
    for(let i=0;i<z.length;i++){
        res=res+z[i];
    }
    res=res+val;
    return res;
}

console.log(add(10,20,20,10,40));
