var billy;

console.log(billy);

billy = 13;
billy = 'billy is great';
billy = 'billy said "hello"';

// keyword expression codeblock
if(true){
    console.log(billy);
}

if ( 15 > 15){
    console.log('is it true?');
}

billy = "silly";
if(billy){ // coercion change string to a boolean
    console.log('billy is silly');
}

if (billy === 'silly'){ // === testing for equal value and same type
    console.log('really silly');
}

// == testing for equal value but allows for coercion
// bill == true
// billy gets coerced into a boolean and the expression is true

// typeof operator precedes a variable name or literal value

console.log(typeof "asdbhasudasbhjid");
console.log(typeof billy);

if(typeof billy === "string"){
    billy = "avshdhjsd";
}else{
    billy = 42;
}

/////////////////
// for loop

for(var i = 0; i < 5; i++){
    console.log ('hello');
}

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(i);
//////

// function decalration
function bob(){
    console.log('i am bob');
    return 'bob';
}

// function invokation
bob(); /// () function invokation operator

for(var i = 0; i < 1000; i ++){
    bob();
}


console.log( bob() );

function bailly (data){
    data = data + 100;
    return data;
}

var mydata = bailly(50);
console.log(mydata);
console.log ( typeof mydata);