let names=[

    {id:12,names:"ross",location:"NYC"},
    {id:1,names:"joey",location:"NYC"},
    {id:134,names:"pablo",location:"mexico"},
    {id:145,names:"gus",location:"orlando"}
];

//getting particular object 
var found = names.find(function(post) {
	if(post.names == 'joey')
		return true;
});

//remove the object 
console.log(found);
var found=names.shift();
console.log(names);

//iterating the object
names.forEach(x=> console.log(x));


//array1.forEach(element => console.log(element));
