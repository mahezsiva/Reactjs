const names=[

    {id:12,names:"ross",location:"NYC"},
    {id:1,names:"joey",location:"NYC"},
    {id:134,names:"pablo",location:"mexico"},
    {id:145,names:"gus",location:"orlando"}
];

//adding anew array into existing one
const arr=names.unshift({id:15,names:"scofield",location:"NYC"});
console.log(names);
