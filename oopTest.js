//test in repl
function CreateTicket() {

    function TicketObject(email, grade, type, comments, identifier, date) {
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
    
    var txtEmail = document.getElementById("email").value;
    var txtGrade = document.getElementById("grade").value;
    var txtType = document.getElementById("type").value;
    var txtComments = document.getElementById("description").value;
    //HELP
    let ticket = new TicketObject(txtEmail, txtGrade, txtType, txtComments, "", "")
    ticket.setDate();
    ticket.setIdentifier();
    var array = []
    array.push(ticket)
    console.log(array)

    
}
