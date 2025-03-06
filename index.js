function receivesAFunction(goinToZ){
    return goinToZ()
}

receivesAFunction(function(){"goin to zion"})

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("I am a named function")
    }

    namedFunction()
}

function returnsAnAnonymousFunction(){

    return function(){
        console.log("I am an anonymous function")
    }
    

    
}




