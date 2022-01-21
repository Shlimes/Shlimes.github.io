//test in repl
function CreateTicket() {

function TicketObject(email, grade, type, comments, date, identifier) {
  this.email = email;
  this.grade = grade;
  this.type = type;
  this.comments = comments;
  this.date = date;
  this.identifier = identifier;
}
TicketObject.prototype.setDate = function(date) {
  var todayDate = new Date().toISOString().slice(0, 10);
  ticket.date = todayDate;
  return(date);
}
TicketObject.prototype.setIdentifier = function(identifier) {
  var randomNum = Math.floor((Math.random() * 999999) + 100000);
  ticket.identifier = randomNum;
  return(identifier);
}

var txtEmail = document.getElementById("email");
var txtGrade = document.getElementsByName("grade");
var txtType = document.getElementsByName("type");
var txtComments = document.getElementsByName("comments");
//HELP
let ticket = new TicketObject(txtEmail, txtGrade, txtType, txtComments, "", "")
ticket.setDate();
ticket.setIdentifier();
console.log(ticket);
}
