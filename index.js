function receivesAFunction (myFunction){
    myFunction();
}
function returnsANamedFunction() {
    function namedFunction(){
        return "before all";
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log("before all");
    }
}