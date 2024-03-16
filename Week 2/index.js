// legCount, speak, name
class Animal {
   
    constructor(name, legCount, speaks) {
        this. name = name;
        this. legCount = legCount;
        this. speaks = speaks;

    }  
    static myType() {
        console.log("Anmial")
    }
    speak() {
        console. log("hi there")
    }
}
    console.log(Animal. speak())
    let dog = new Animal( "dog", 4,"bhow bhow"); //
    //create object
    let cat = new Animal( "cat",4, "meow");
    cat. speak(); // call function on object
