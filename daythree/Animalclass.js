
//classes in js
class Animalclass{

constructor(name,category){
    this.name=name;
    this.category=category;

}
extinct(){
    console.log(`${this.name} is wiped out from earth`);
    console.log(`It is ${this.category} `);
}
}
class Dinosaurs extends Animalclass{

    constructor(name,category){
        super(name,category);
    }

}
let ref=new  Dinosaurs("Trex","lethal");
ref.extinct();