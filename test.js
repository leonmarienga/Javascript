var birthday = new Date(1985, 1, 15,11,15,25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDay());
var birthday2 = new Date(1985, 1, 15,11,15,25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getTime());

if(birthday ==birthday2){
	console.log("Birthdays a re equal");
}else{
	console.log("Birthdays are not equal");
}