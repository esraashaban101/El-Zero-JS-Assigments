//Q1
let start = 10;
let end = 100;
let exclude = 40;

/*
Output
10
20
30
50
60
70
80
90
100*/
for(var i=10 ;i<=100 ;i+=10)
    {
        if(i!=40)
            console.log(i);
    }

//Q2
 start = 10;
 end = 0;
let stop = 3;

/* Output
10
09
08
07
06
05
04
03*/
for(var i = 10 ;i>=stop ;i--)
    {
       
        if(i==10)
        console.log(i);
        else
            console.log(`${0}`+ i);
    }
    
//Q3
 start = 1;
end = 6;
let breaker = 2;

/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4*/
for(var i=start ; i<=end ;i++)
    {
        console.log(i);
        for(var j=breaker;j<=breaker*breaker;j+=breaker)
            {
                console.log(`--${j}`)
            }
    }

//Q4
let index = 10;
let jump = 2;
/*Output
10
8
6
4*/
for (;;) {
  // Write Your Code Here
   if(index===jump)
    break;
 else
 {
  console.log(index);
  index-= jump;
 }
}


//Q5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"*/
counter=0
for(var i=0 ;i<friends.length ;i++)
    {
        if(friends[i][0]!=letter.toUpperCase())
            {
                counter++;
                console.log(`${counter} => ${friends[i]}`)
            }
    }
//Q6
 start = 0;
let swappedName = "elZerO" , modified_string="";

// Output "ELzERo"

for(var i=start ;i<swappedName.length ;i++)
{
   if(swappedName[i] >='A'&&swappedName[i]<='Z')
        modified_string+=swappedName[i].toLowerCase();
    else
    modified_string+=swappedName[i].toUpperCase();
}
swappedName=modified_string;
console.log(swappedName);


//Q7
 start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

/*Output
2
3
4*/
for(var i=++start ;i<mix.length;i++)
    {
        if(mix[i]!='A'&&mix[i]!='B'&&mix[i]!='C')
            console.log(mix[i]);
    }