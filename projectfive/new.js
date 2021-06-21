
//program for determine odd and even by adding prefix as dr and suffix as er.

let names=["apple","orange","pineapple","watermelon"]
console.log(names.length);
var index=0;
for( var i=0;i<names.length;i++){
    if(index%2==0){
    console.log(`${i}.${names[i]}.Er`);
    }
    else{
        console.log(`Dr.${i}.${names[i]}`);
    }
    index++;

}