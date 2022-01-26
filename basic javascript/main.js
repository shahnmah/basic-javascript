var names = ["ali", "dhali", "khali"];
var dhaliIndex = names.indexOf("dhali");
var khaliIndex = names.indexOf("khali");
var jamiIndex = names.indexOf("jami");
var thirdIndex = names[2];
names[0] = "ami";
console.log(names);
console.log(names.length);
console.log(dhaliIndex);
console.log(khaliIndex);
console.log(jamiIndex);
console.log(thirdIndex);



var teamMates = ["rofik", "sofik", "jobbar"];
teamMates.push("salam", "borkot");
console.log(teamMates);

var examMarks = [50, 80, 45, 34, 54];
console.log(examMarks);

examMarks.pop();
console.log(examMarks);


var member = ["sumon", "raju"];
console.log(member);

member.unshift("kalam")
console.log(member);


var treeCollections = ["koroi", "mehenuni", "jamrul", "golpata"]
console.log(treeCollections);

treeCollections.shift();
console.log(treeCollections);

console.log(5 < 6);

console.log(45 > 54);

console.log(5 == 5);

console.log(5 == 9);

console.log(7 != 13);

console.log(14 != 14);




var marks80 = true;
if(marks80 == true){
    console.log("A+");
}

var passMark = 40;
if( 100 >= passMark){
    console.log("Pass");
}

var getNumber = 35;
if( getNumber < passMark){
    console.log("Fail");
}


var sonyPrice = 70000;
var myBudget = 10000;
if(sonyPrice <= myBudget){
    console.log("Sony Experia");
}
else{
    console.log("I will buy walton");
}

var totalAssign = 12;
var avgMark = 50;
if(totalAssign == 12 && avgMark <= 50 ){
    console.log("SCIC");
}
else{
    console.log("somobetdona");
}


var vat = true;
var ruti = false;
if(vat == false || ruti==true){
    console.log("bet vora khaisi ami");
}
else{
    console.log("khainai");
}


var aPlusMaek = 80;
var failMark = 33;
var gotMark = 85;
if(gotMark >= aPlusMaek){
    console.log("A+");
}
else if(gotMark > failMark && gotMark < aPlusMaek){
    console.log("pass,but have to be better");
}
else{
    console.log("fail");
}


var salary = 12000;
var bonus = 6000;
var gotSalary = 12000;
var gotBonus = 6000;
if(gotSalary >= salary){
    if(gotBonus >= bonus){
        console.log("all ok")
    }
    else{
        console.log("something wrong")
    }
}

















