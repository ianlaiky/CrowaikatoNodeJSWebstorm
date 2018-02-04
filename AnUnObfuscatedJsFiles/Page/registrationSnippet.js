var socket = io();

function myFunction() {

    var userdat = document.getElementById("emailAddress").value;
    socket.emit("checkexistinguser",userdat);

}
socket.on("receiveExistingUser",function (info) {
    console.log(info);

    if(info=="false"){
        console.log("falseRun");
        document.getElementById('existinguserFound').style.visibility = "visible";
        document.getElementById('existinguserFound').style.color = "red";
        document.getElementById('existinguserFound').innerHTML = "That email is taken";
    }else{
        document.getElementById('existinguserFound').style.visibility = "hidden";
    }

});
