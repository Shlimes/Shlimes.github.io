//Programe quie créer, soummet, et sauvegarde un ticket si un élève a un problème technique avec son Chromebook ou son internet.
//Déclarer des variables pour les propriétées
var arrayName = []
var arrayEmail = []
var arrayGrade = []
var arrayType = []
var arrayComments = []
var arrayID = []

//Fonction qui vérifie si le mot de passe pour accès au siteweb admin est valide
function passwordAdmin(){
    //Déclarer une variable pour le mot de passe inséré
    var password = document.getElementById("password").value;
    //Déclarer une variable pour le mot de passe
    var password1 = "123"
    //Si le mot de passe est valide l'utiliseur gagne accès a la page administrative
    if (password == password1) {
        window.location.href = "admin.html";
    }
}//Fin de la fonction

//Fonction pour les données d'un compte
function loadUsers() {
  //Utilisé le web API window.localStorage pour chercher les données
  arrEmail = JSON.parse(window.localStorage.getItem('emailData'));
  arrName = JSON.parse(window.localStorage.getItem('nameData'));
  arrGrade = JSON.parse(window.localStorage.getItem('gradeData'));
  arrType = JSON.parse(window.localStorage.getItem('typeData'));
  arrComments = JSON.parse(window.localStorage.getItem('commentsData'));
  arrID = JSON.parse(window.localStorage.getItem('idData'));

  //Déclarer des variables pour les données
  var i = document.getElementById("idData");
  i.innerHTML = arrID;

  var n = document.getElementById("nameData");
  n.innerHTML = arrName;

  var e = document.getElementById("emailData");
  e.innerHTML = arrEmail[0];

  var g = document.getElementById("gradeData");
  g.innerHTML = arrGrade;

  var t = document.getElementById("typeData");
  t.innerHTML = arrType;

  var c = document.getElementById("commentsData");
  c.innerHTML = arrComments;
    
}

//Programation O.O. pour créer un objet ticket
function CreateTicket() {
    
    //Contructeur du ticket
    function TicketObject(name, email, grade, type, comments, identifier, date) {
      this.name = name;
      this.email = email;
      this.grade = grade;
      this.type = type;
      this.comments = comments;
      this.identifier = identifier;
    }//Fin du contructeur
    //Fonction qui ajoute la date au données du ticket
    TicketObject.prototype.setDate = function(date) {
      //Déclarer un variable pour la date en format yyyy-mm-dd 
      var todayDate = new Date().toISOString().slice(0, 10);
      //Donner la valeur de date à la propriété
      ticket.date = todayDate;
      return(date);
    }//Fin de la fonction setDate

    //Fonction qui assigne un nombrec au hazard de 6 shiffres au ticket
    TicketObject.prototype.setIdentifier = function(identifier) {
      //Déclarer une variable et donner une valeur au hazard entre 100000 et 999999
      var randomNum = Math.floor((Math.random() * 999999) + 100000);
      //Donner le nombre au hazard à la propriété
      ticket.identifier = randomNum;
      return(identifier);
    }//Fin de la fonction setIdentifier
    
    //Chercher les propriété inseré sur le siteweb
    var txtName = document.getElementById("name").value;
    var txtEmail = document.getElementById("email").value;
    var txtGrade = document.getElementById("grade").value;
    var txtType = document.getElementById("type").value;
    var txtComments = document.getElementById("description").value;

    //Créer le ticket
    let ticket = new TicketObject(txtName, txtEmail, txtGrade, txtType, txtComments, "", "")
    //Appelle à la fonction setDate
    ticket.setDate();
    //Appelle à la fonction setIdentifier
    ticket.setIdentifier();

    //Mettre toute les vsleurs dans les variables array
    arrayName.push(ticket.name)
    arrayEmail.push(ticket.email)
    arrayGrade.push(ticket.grade)
    arrayType.push(ticket.type)
    arrayComments.push(ticket.comments)
    arrayID.push(ticket.identifier)

    //Sauvegarder les données
    window.localStorage.setItem('idData', JSON.stringify(arrayID));
    window.localStorage.setItem('nameData', JSON.stringify(arrayName));
    window.localStorage.setItem('emailData', JSON.stringify(arrayEmail));
    window.localStorage.setItem('gradeData', JSON.stringify(arrayGrade));
    window.localStorage.setItem('typeData', JSON.stringify(arrayType));
    window.localStorage.setItem('commentsData', JSON.stringify(arrayComments));
    
}//Fin de la fonction CreateTicket
