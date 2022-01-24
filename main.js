var objPeople = [
    {
        email: "sam@gmail.com",
        password: "codify"
    },
    {
        email:"matt@gmail.com",
        password:"academy"
    },
    {
        email:"chris@gmail.com",
        password:"forever"
    }
]

function getInfo(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    for(i = 0; i < objPeople.length; i++){
        if(email == objPeople[i].email && password == objPeople[i].password){
            window.location.href = "ticket.html"
            return
        } 
    }
}

function passwordAdmin(){
    var password = document.getElementById("password").value;
    var password1 = "123"
    if (password == password1) {
        window.location.href = "http://www.w3schools.com";
    }
}
