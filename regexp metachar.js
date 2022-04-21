let reg =/indu/;

//Let's look into some meta character symbols
reg=/^i/ //charat symbol at the beginning of regex means - starts with i
reg=/u$/ //dollar symbol at the end of regex means - ends with u
reg=/in.u/  //dot symbol in between of regex means-  matches any one character 
reg=/in*u/  //asterik symbol in between of regex means-  matches 0 or more characters
reg=/in?dus?/  //question mark symbol in regex means-  optional character
reg=/in\*u/ // literally matching with in*u in string

let s = "There is a beautiful princess indu. indu loves coding.";
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