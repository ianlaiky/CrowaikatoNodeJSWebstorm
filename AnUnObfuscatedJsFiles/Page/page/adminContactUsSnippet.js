
function loadMsg(id) {

    let selectedName = document.getElementById("hiddenName" + id).textContent;
    let selecteEmail = document.getElementById("hiddenEmail" + id).textContent;
    let selectedPhone = document.getElementById("hiddenName" + id).textContent;
    let selectedMessage = document.getElementById("hiddenMessage" + id).textContent;


    console.log(selectedName);
    console.log(selecteEmail);
    console.log(selectedPhone);
    console.log(selectedMessage);


    document.getElementById("col1Data").innerHTML = id;
    document.getElementById("col2Data").innerHTML = selectedName;
    document.getElementById("col3Data").innerHTML = selecteEmail;
    document.getElementById("col4Data").innerHTML = selectedPhone;
    document.getElementById("col5Data").innerHTML = selectedMessage;


    var modal = document.getElementById('myModal');

    var span = document.getElementsByClassName("close")[0];


    modal.style.display = "block";


    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}
