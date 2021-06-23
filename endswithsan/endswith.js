//program for determine odd and even by adding prefix as dr and suffix as er and adding san with the values starting with dr

let names=['car','lorry','truck']

const ref=names.map((test,idx)=>{
if(idx%2==0){
    return 'dr.'+test;
}
else{
    return 'er.'+test;
}

});
for (let i = 0; i < ref.length; i++) {
    if (ref[i].startsWith("dr")) {
        console.log(ref[i] + "San");

    }
    else {
        console.log(ref[i]);
    }

}
