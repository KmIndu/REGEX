//SHORTHAND CHARACTER CLASSES
let reg =/\war/; // \w is a word character || can be _ or alphabet or number
let s= "harh7rd1r4r5r bhai" 

reg= /\w+d1r/ // \w+ means more than one word characters 
s= "harh7rd1r4r5r bhai" 

reg= /\Wbhai/ // non-word character (space is a non word character)
s = "harh7rd1r4r5r bhai"

reg= /\W+bhai/ // more than one non-word characters
s = "harh7rd1r4r5r %%$@bhai";

reg= /number \d999/ // \d means digit
s = "harh7rd1r4r5r %%$@bhai harry ka number 8999999999"

reg= /number \d+999/ // \d+ means more than 1 digits
s = "harh7rd1r4r5r %%$@bhai harry ka number 899999 9999"

reg= /\D999/ //\D means non-digit
s = "harh7rd1r4r5r %%$@bhai harry ka number 899999harry9999"

reg= /\D+999/ // \D+ means more than one non-digit
s = "harh7rd1r4r5r %%$@bhai harry ka number 899999harry9999"

reg= /\ska number/ // \s means match white space character
s = "harh7rd1r4r5r %%$@bhai harry ka number 899999harry9999"

reg= /\s+ka number/ // \s+ means match more than 1 white space characters
s = "harh7rd1r4r5r %%$@bhai harry   ka number 899999harry9999"

reg= /\Ska number/ // \s means match non-white space character
s = "harh7rd1r4r5r %%$@bhai harryika number 899999harry9999"

reg= /\S+ka number/ // \s+ means match more than non-white space character
s = "harh7rd1r4r5r %%$@bhai harryika number 899999harry9999"

reg= /4r5r\b/ // word boundary
s = "harh7rd1r4r5r %%$@bhai harryika number 899999harry9999"

//ASSERTIONS
reg=/h(?=y)/;
s = "harh7rd1r4r5r%%$@bhai hyrryika number 899999harry9999"

reg=/h(?!y)/;
s = "harh7rd1r4r5r%%$@bhai hyrryika number 899999harry9999"


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