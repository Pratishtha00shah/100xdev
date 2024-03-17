function priyaAsyncFunction(){
    let p = new Promise(function(resolve){

        //do some async logic here
        setTimeout(function(){
           resolve("hello world")
        },2000)
    });
    return p;
}

async function main(){
    //no callbacks., no. then syntax
    let value = await priyaAsyncFunction();  //it waits for 3 sec to output the vlaue and await is neccesary to use
    priyaAsyncFunction().then(function(value){
        console.log("hey there1");
    })

}

main();
console.log("after main");