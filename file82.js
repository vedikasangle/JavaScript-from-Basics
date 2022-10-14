//same method in sub class
class animal{
    constructor(name, age){
        this.name = name;
        this.age= age ;
    }
    eat(){
        return`${this.name} is eating`;
    } 
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }

}


// const animal1 = new animal("tom" , 2);
// console.log(animal1);
// console.log(animal1.eat());

//dog class

class Dog extends animal{
constructor(name, age , speed){
    super(name,age);
    this.speed =  speed;
}
eat(){
    return `modified eat  : ${this.name} is eating `
}
run(){
    return `${this.name} is running at ${this.speed} kmph`
}
}


const tommy = new Dog("tommy" , 3, 45);
console.log(tommy.run());
console.log(tommy.eat());