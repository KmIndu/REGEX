console.log("Regular Expression");
//let reg = /Indu/; //This is a regular expression literal in js
reg= /Indu/g; //g means global
//reg= /Indu/i; // i means case insesitivity
console.log(reg);

let s = "There is a beautiful princess Indu. Indu loves coding.";

/*let s = "There is a beautiful princess indu. Indu loves coding.";*/
/*let s = "There is a beautiful princess indu. Inndu loves coding.";*/
//function to match expression

//1. exec() - This function will return an array for match or null for mo match
let result = reg.exec(s);

if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}
//we can use multiple exec with global flag
//result = reg.exec(s);
//console.log(result);

//result = reg.exec(s);
//console.log(result);

//2. test() - returns true or false
let result2 = reg.test(s);
console.log(result2); //this will print true only if the reg is there in string s

//3. match() - It will return an array of results or Null
//let result3 = reg.match(s); this is wrong
let result3 = s.match(reg); //this is right
console.log(result3);

//4. search() - return index of first match else -1
//let result4 = reg.search(s); this is wrong
let result4 = s.search(reg); //this is right
console.log(result4);

//5. replace() - returns new replaced string with all the replacements (if no global flag is taken only first match will be replaced)
let result5 = s.replace(reg, 'Cinderalla');
console.log(result5);