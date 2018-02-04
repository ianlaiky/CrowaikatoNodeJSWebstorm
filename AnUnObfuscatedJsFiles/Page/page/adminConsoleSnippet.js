$(function () {
    $("#datepickeryear").datepicker({
        minViewMode: 'years',
        autoclose: true,
        format: 'yyyy'
    });

    $("#datepickermonth").datepicker({
        minViewMode: 'months',
        autoclose: true,
        format: 'MM'
    });


    var senddat = {
        emailAddress: '{{emailAddress}}',
        session: '{{session}}',
        sortby: "year",
        year: "2018",
        month: "",
        user: ""

    };

    socket.emit("reqgraphdata", senddat)


});


function newGraphData(graph1, graph2, graph3) {
    console.log(graph1);
    console.log(graph2);
    console.log(graph3);
    // var element = document.getElementById("myChart");
    //
    //  element.parentNode.removeChild(element);
    if (window.myNewChart1 != null) {
        window.myNewChart1.destroy();
    }


    var ctx = document.getElementById('myChart').getContext('2d');
    window.myNewChart1 = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: graph1,
            datasets: [{
                label: "Login",
                borderColor: 'rgb(255, 99, 132)',
                data: graph2,
                fill: false
            }, {
                label: "Register",
                borderColor: 'rgb(0, 191, 255)',
                data: graph3,
                fill: false
            }]
        },

        // Configuration options go here
        options: {}
    });
    Chart.defaults.global.animation.duration = 3000;


}


function selectorChange() {
    console.log("DUN HELLO");
    var x = document.getElementById("sectorSelectjs").value;
    console.log(x);


    document.getElementById("userselection").value = x.split(" ")[0];
}


function oncheckboxcheck() {
    if (document.getElementById("defaultCheck1").checked) {
        document.getElementById("userselection").value = "All";
        document.getElementById("sectorSelectjs").value = "All";
        document.getElementById("userselection").setAttribute("readonly", true);
        document.getElementById("sectorSelectjs").setAttribute("readonly", true);
        document.getElementById("findcloestuser").style.visibility = "hidden";

    } else {
        document.getElementById("userselection").value = "";
        document.getElementById("sectorSelectjs").val = "";
        document.getElementById("userselection").removeAttribute("readonly");
        document.getElementById("sectorSelectjs").removeAttribute("readonly");
        document.getElementById("findcloestuser").style.visibility = "visible";
    }

}

var socket = io();

function getinputdat() {
    var sortby = document.getElementById("sortBy").value;
    var year = document.getElementById("datepickeryear").value;
    var month = document.getElementById("datepickermonth").value;
    var userselection = document.getElementById("userselection").value;

    console.log(sortby);
    console.log(year);
    console.log(month);


    var senddat = {
        emailAddress: '{{emailAddress}}',
        session: '{{session}}',
        sortby: sortby,
        year: year,
        month: month,
        user: userselection
    };

    socket.emit("reqgraphdata", senddat)


}

function findCloesetUser() {
    console.log("RUNN");
    let username = document.getElementById("userselection").value;
    console.log(username);


    let toSendSocket = {
        username: username,
        emailAddress: '{{emailAddress}}',
        session: '{{session}}'


    };

    socket.emit("findcloestUserAdm", toSendSocket);

}

socket.on("sendlistofusers", function (data) {

    console.log(data);

    var select = document.getElementById("sectorSelectjs");


    while (select.options.length > 0) {
        select.remove(0);
    }
    var opt2 = document.createElement("option");
    opt2.text = "--Select--";
    opt2.value = "";
    select.options.add(opt2);
    for (var i = 0; i < data.length; i++) {

        // console.log(data.length);
        var opt2 = document.createElement("option");
        opt2.text = data[i];
        opt2.value = data[i];
        select.options.add(opt2);
    }

});

socket.on("graphDataLoadAdm", function (data) {

    newGraphData(data.graphLabel, data.graphData1, data.graphData2);

    var currentsortby = data.sortmtd;
    var currentYear = data.yearmtd;
    var curentmonth = data.monthmtd;
    var currentuser = data.usermtd;
    console.log(currentYear);

    document.getElementById("sortbyMtd").innerHTML = currentsortby;
    document.getElementById("yearmtd").innerHTML = currentYear;

    document.getElementById("usermtd").innerHTML = currentuser;


    if (currentsortby == "year") {
        document.getElementById("monthmtd").innerHTML = "NIL";
    } else {
        document.getElementById("monthmtd").innerHTML = curentmonth;
    }

});


function myFunction() {


    console.log("rer");
    let selection = document.getElementById("sortBy").value;


    if (selection.toString() == "month") {
        document.getElementById("monthSelect").style.visibility = "visible";
    } else {
        document.getElementById("monthSelect").style.visibility = "hidden";

    }


    console.log(selection)


}
