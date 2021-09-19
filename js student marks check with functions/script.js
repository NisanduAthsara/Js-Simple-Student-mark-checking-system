
var std1_rank , std2_rank , std3_rank;

function check_the_numbers (x,y,z){
	try {
		if (x>100 || y>100 || z>100){
			throw "Error : Invalid marks";
		}
		else if (x<0 || y<0 || z<0){
			throw "Error : Invalid marks";
		}
	}
	catch(err){
		alert(err);
	}

	finally{
        console.log("Input values are "+x+", "+y+" and "+z);
    }
}


function total_check (mark1 , mark2 , mark3){
	var total;
	total = mark1+mark2+mark3;
	return total;
}


function avg (total){
	var avg;
	avg = total/3;
	return avg;
}

function rank (std1_total , std2_total , std3_total){
	var rank;
	if (std1_total > std2_total && std1_total > std3_total){
		std1_rank = 1;
		if (std2_total > std3_total){
			std2_rank = 2;
			std3_rank = 3;
		}
		else{
			std3_rank = 2;
			std2_rank = 3;
		}
	}

	else if (std2_total > std1_total && std2_total > std3_total){
		std2_rank = 1;
		if (std1_total > std3_total){
			std1_rank = 2;
			std3_rank = 3;
		}
		else{
			std3_rank = 2;
			std1_rank = 3;
		}
	}

	else if (std3_total > std1_total && std3_total > std2_total){
		std3_rank = 1;
		if (std1_total > std2_total){
			std1_rank = 2;
			std2_rank = 3;
		}
		else{
			std2_rank = 2;
			std1_rank = 3;
		}
	}

	else{
		console.log("Invalid Inputs");
	}
}

n = prompt("Enter name of the first student : ");
x = parseInt(prompt("Enter maths marks of "+n+" : "));
y = parseInt(prompt("Enter IT marks of "+n+" : "));
z = parseInt(prompt("Enter science marks of "+n+" : "));

check_the_numbers(x,y,z);

var std1_name = n;
var std1_marks = [x,y,z];
var std1_maths_marks = std1_marks[0];
var std1_IT_marks = std1_marks[1];
var std1_science_marks = std1_marks[2];
var std1_total = parseInt(total_check(std1_maths_marks,std1_IT_marks,std1_science_marks));
var std1_avg = avg(std1_total);



n = prompt("Enter name of the second student : ");
x = parseInt(prompt("Enter maths marks of "+n+" : "));
y = parseInt(prompt("Enter IT marks of "+n+" : "));
z = parseInt(prompt("Enter science marks of "+n+" : "));

check_the_numbers(x,y,z);

var std2_name = n;
var std2_marks = [x,y,z];
var std2_maths_marks = std2_marks[0];
var std2_IT_marks = std2_marks[1];
var std2_science_marks = std2_marks[2];
var std2_total = parseInt(total_check(std2_maths_marks,std2_IT_marks,std2_science_marks));
var std2_avg = avg(std2_total);



n = prompt("Enter name of the third student : ");
x = parseInt(prompt("Enter maths mark of "+n+" : "));
y = parseInt(prompt("Enter IT mark2 of "+n+" : "));
z = parseInt(prompt("Enter science mark3 of "+n+" : "));

check_the_numbers(x,y,z);

var std3_name = n;
var std3_marks = [x,y,z];
var std3_maths_marks = std3_marks[0];
var std3_IT_marks = std3_marks[1];
var std3_science_marks = std3_marks[2];
var std3_total = parseInt(total_check(std3_maths_marks,std3_IT_marks,std3_science_marks));
var std3_avg = avg(std3_total);



rank(std1_total,std2_total,std3_total);

console.log("----------"+std1_name+"----------");
console.log("Maths marks : "+std1_maths_marks);
console.log("IT marks : "+std1_IT_marks);
console.log("Science marks : "+std1_science_marks);
console.log("Total marks : "+std1_total);
console.log("Average marks : "+std1_avg);
console.log(std1_name+"'s'"+"rank : "+std1_rank);

console.log("----------"+std2_name+"----------");
console.log("Maths marks : "+std2_maths_marks);
console.log("IT marks : "+std2_IT_marks);
console.log("Science marks : "+std2_science_marks);
console.log("Total marks : "+std2_total);
console.log("Average marks : "+std2_avg);
console.log(std2_name+"'s'"+"rank : "+std2_rank);

console.log("----------"+std3_name+"----------");
console.log("Maths marks : "+std3_maths_marks);
console.log("IT marks : "+std3_IT_marks);
console.log("Science marks : "+std3_science_marks);
console.log("Total marks : "+std3_total);
console.log("Average marks : "+std3_avg);
console.log(std3_name+"'s'"+"rank : "+std3_rank);