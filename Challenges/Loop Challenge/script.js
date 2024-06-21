/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let numAdmins =0;
for(var i=0 ;i<myAdmins.length ;i++)
    {
        if(myAdmins[i]=="Stop")
            break;
        else
        numAdmins++;
    }

document.write(`<div>We Have ${numAdmins} Admins</div> <hr>`);
   for(var i=0;i<numAdmins ;i++)
    {
        document.write(`The Admin of team ${i+1} is ${myAdmins[i]} <br> <h3>Team Members:<br></h3>`)
        var counter = 0;
        for(var j=0 ; j< myEmployees.length ;j++)
            {
                if(myEmployees[j][0]==myAdmins[i][0])
                    {
                        counter++;
                    document.write(`- ${counter} ${myEmployees[j]} <br><br>`)
                    }
                    
            }
            document.write(`<hr>`)
    }

