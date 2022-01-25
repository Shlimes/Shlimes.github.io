var arrayName = []
var arrayEmail = []
var arrayGrade = []
var arrayType = []
var arrayComments = []
var arrayID = []

function passwordAdmin(){
    var password = document.getElementById("password").value;
    var password1 = "123"
    if (password == password1) {
        window.location.href = "admin.html";
    }
}

function loadUsers() {
  arrEmail = window.localStorage.getItem('emailData');
  arrName = window.localStorage.getItem('nameData');
  arrGrade = window.localStorage.getItem('gradeData');
  arrType = window.localStorage.getItem('typeData');
  arrComments = window.localStorage.getItem('commentsData');
  arrID = window.localStorage.getItem('idData');

  var i = document.getElementById("idData");
  i.innerHTML = arrID;

  var n = document.getElementById("nameData");
  n.innerHTML = arrName;

  var e = document.getElementById("emailData");
  e.innerHTML = arrEmail;

  var g = document.getElementById("gradeData");
  g.innerHTML = arrGrade;

  var t = document.getElementById("typeData");
  t.innerHTML = arrType;

  var c = document.getElementById("commentsData");
  c.innerHTML = arrComments;
    
}

function CreateTicket() {

    function TicketObject(name, email, grade, type, comments, identifier, date) {
      this.name = name;
      this.email = email;
      this.grade = grade;
      this.type = type;
      this.comments = comments;
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
    
    var txtName = document.getElementById("name").value;
    var txtEmail = document.getElementById("email").value;
    var txtGrade = document.getElementById("grade").value;
    var txtType = document.getElementById("type").value;
    var txtComments = document.getElementById("description").value;

    let ticket = new TicketObject(txtName, txtEmail, txtGrade, txtType, txtComments, "", "")
    ticket.setDate();
    ticket.setIdentifier();

    arrayName.push(ticket.name)
    arrayEmail.push(ticket.email)
    arrayGrade.push(ticket.grade)
    arrayType.push(ticket.type)
    arrayComments.push(ticket.comments)
    arrayID.push(ticket.identifier)

    window.localStorage.setItem('idData', arrayID);
    window.localStorage.setItem('nameData', arrayName);
    window.localStorage.setItem('emailData', arrayEmail);
    window.localStorage.setItem('gradeData', arrayGrade);
    window.localStorage.setItem('typeData', arrayType);
    window.localStorage.setItem('commentsData', arrayComments);
    
}
