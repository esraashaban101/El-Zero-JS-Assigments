
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

/* Output
"1 => Sayed"
"2 => Mahmoud"*/


var i=index;
while (i<friends.length) 
{
    if(friends[i][0]!='A' && friends[i] !==1 &&  friends[i] !==2 )
        {
            counter++;
            console.log(`${counter} => ${friends[i]}`)
        }
  i++;

}
