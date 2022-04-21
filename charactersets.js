//Till now we have seen basic functions and metacharacters in regular expression 
//Now  let's see character sets 

//CHARACTER SETS -[]
let reg =/i[a-z]du/; // can be any character from a to z
reg=/i[ryu]du/; //can be r, y, or u
reg=/i[^ryu]du/; //cannot be r, y, or u (don't get confused with the previous usage of charat symbol - starts with)
reg=/i[^ryu]d[yu]/; //multiple character sets cannot be r, y, or u + can be y, or u 
reg=/i[a-zA-z]nd[a-z0-9]/ //we can have as many character sets as we want
//let s = "princess indu";

//QUANTIFIERS - {} 
//whenever we want to specify the quantity of any character then we use quantifier
reg=/princes{2}/; //s can appear exactly two times
reg=/princes{0,2}/; //s can appear either 0 to 2 times(0 or 1 or 2) (s appears 0 times in prince and s appears 1 time in princes)


//let s = "princess indu";
//let s= "prince indu";
//let s="princes indu";

///GROUPINGS - we use parenthesis () for groupings 
reg=/(in){2}/
reg=/(in){2}([0-9]u){3}/

//s = "inindu";
s = "inin1u2u5u";

var result= reg.exec(s);
console.log("The result from exec is", result);

if(reg.test(s))
{
    console.log(`The string ${s} matches the expression ${reg.source}`);
}
else
{
    console.log(`The string ${s} does'nt  matches the expression ${reg.source}`);
}