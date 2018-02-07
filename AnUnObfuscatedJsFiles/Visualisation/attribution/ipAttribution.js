
var socket = io();
var attIPChunk = [];
var map;
var resolved = [];

function initMap() {

    var options = {
        zoom: 2,
        minZoom: 2,
        center: new google.maps.LatLng(30.60982, 6.34987),
        mapTypeId: 'hybrid'
    }

    map = new google.maps.Map(document.getElementById('map'), options);

}

socket.emit('startingProcess', '{{ipaddsend}}');
var attIP = [];
socket.on('gRe', function (b) {
    var arr = new Uint8Array(b);
    b = String.fromCharCode.apply(String, arr);
    resolved = b.split('|');
    for (var i = 0; i <resolved.length; i++){
        resolved[i].replace(/\n/g, '');
    }
    for (var ip of resolved){
        if (attIP.indexOf(ip) > -1){

        }else{
            attIP.push(ip);
        }
    }
});
var ipQueried;
socket.on('newdata', function (d) {
    $('div.loader').remove();


    var dTest = "";
    for (var obj of d) {
        if (obj.includes("[*]")) {
            // console.log("MATCH");
            $('#messages').append($('<li style="color: mediumspringgreen ">').text(obj));
            // console.log(obj);
        } else if (obj.includes("[+]")) {
            $('#messages').append($('<li style="color: coral ">').text(obj));
        } else if (obj.includes("[!]")){
            $('#messages').append($('<li style="color: red ">').text(obj));
        } else {
            $('#messages').append($('<li>').text(obj));
            // console.log(obj);
        }
        if (obj.includes("Last resolved")) {
            if (attIPChunk.indexOf(obj) > -1) {

            } else {
                attIPChunk.push(obj);
            }
        }else if (obj.includes("Pinging")){
            ipQueried = (/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g).exec(obj);
        }else if (obj.includes("no domain specified. Unable to run some modules")){
            // console.log("MATCH");
            dTest = obj;
        }else if (obj.includes("VirusTotal response: IP address not in dataset")){
            // console.log("MATCH");
            dTest = obj;
        }
    }



    if (dTest != ""){
        // console.log("Domain");
        // console.log(ipQueried);
        attIP.push(ipQueried[0]);
    }else{
        // console.log("IP");
        for (var ip of attIPChunk) {
            // console.log("AttIP: " + attIP);
            // console.log("IP in AttUOCHUNK");
            // console.log("IP: "+ip);
            var t = (/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g).exec(ip);

            if (t != null) {

                if (attIP.indexOf(t[0]) > -1) {
                    // console.log(t+" IN array");
                } else {
                    attIP.push(t[0]);
                    // console.log(t[0]);
                    // console.log(t+" Not IN array");
                }

            }
        }

    }

    var Poscoords =[];
    var indexc=1;

    // function initMap() {
    for (var p = 0; p < attIP.length; p++) {
        if(attIP[p].indexOf("\n")===0){
            $('div.loadingMap').remove();
            $('#attackMap').text("IP/Domain Given is Invalid");
        }else{
            $.get("https://freegeoip.net/json/" + attIP[p], function(data, status){
                // console.log(data);
                var json1 = JSON.stringify(data);
                var json = JSON.parse(json1);
                var attackerIcon = '/images/attribution/attacker.png';
                // console.log(json);
                Poscoords.push(json);
                // console.log(Poscoords);


                var common = [];
                var common2 = [];
                indexc++;
                if(indexc==attIP.length || indexc>attIP.length){
                    for (var e = 0; e < Poscoords.length; e++){
                        common.push(Poscoords[e].ip+"|"+Poscoords[e].longitude+"|"+Poscoords[e].latitude);
                        var con = document.createElement('div');
                        var div = document.createElement('div');
                        div.id ="header";
                        div.style.textAlign = "center";
                        con.appendChild(div);
                        var h3 = document.createElement('h3');
                        h3.style.color = "#ff4444";
                        h3.style.padding = "2px";
                        h3.style.fontSize = "20px";
                        h3.innerText = "Information";
                        div.appendChild(h3);
                        var p1 = document.createElement('p');
                        p1.style.padding = "2px";
                        p1.style.fontSize = "15px";
                        common2 = $.each(common, function (i, el) {
                            if($.inArray(el,common2) === -1){
                                common2.push(el);
                            }
                        });
                        // console.log(common2);
                        var ipLonLat = {};
                        for (i=0; i<common2.length; i++){
                            data = common2[i].split('|');
                            key = (data[1]+data[2]).toString();
                            // console.log("key");
                            // console.log(key);
                            value = data[0];
                            if (key in ipLonLat){
                                if (ipLonLat[key].includes(value)){
                                    // console.log(ipLonLat[key]);
                                }else{
                                    var previous = ipLonLat[key];
                                    ipLonLat[key]= previous+" , "+ value;
                                    // console.log(ipLonLat[key]);
                                }
                            }else{

                                ipLonLat[key] = value;
                            }
                        }
                        var tempContainer = "";

                        // console.log("IPLonLat");
                        // console.log(Object.keys(ipLonLat));
                        tempContainer = (Poscoords[e].longitude).toString()+(Poscoords[e].latitude).toString();
                        // console.log("Container");
                        // console.log(tempContainer);
                        p1.innerText = "Attackers' IP: " +ipLonLat[tempContainer];
                        // p1.innerText = "Attackers' IP: " +Poscoords[e].ip;
                        // console.log(Poscoords[e].ip);
                        div.appendChild(p1);
                        var p2 = document.createElement('p');
                        p2.style.padding = "2px";
                        p2.style.fontSize = "15px";
                        p2.innerText = "Attackers' Country: " +Poscoords[e].country_name;
                        div.appendChild(p2);
                        if (Poscoords[e].city == ""){
                        }else{
                            var p3 = document.createElement('p');
                            p3.style.padding = "2px";
                            p3.style.fontSize = "15px";
                            p3.innerText = "Attackers' City: " +Poscoords[e].city;
                            div.appendChild(p3);
                        }
                        // console.log(Poscoords[e].latitude);
                        var marker = new google.maps.Marker({
                            position: {lat: Poscoords[e].latitude, lng: Poscoords[e].longitude},
                            map: map,
                            animation: google.maps.Animation.DROP,
                            icon: attackerIcon,
                            info: con,
                            title: "IP Address: " + ipLonLat[tempContainer] + " | " + "Country: " + Poscoords[e].country_name
                        });

                        var info = new google.maps.InfoWindow();
                        google.maps.event.addListener(marker, 'mouseover', function () {
                            info.setContent(this.info);
                            info.open(map, this);
                        });
                    }
                    $('div.loadingMap').remove();
                    $('#attackMap').text("Possible Attackers Location");
                }

            });
        }


    }
    Poscoords = [];
});

socket.on('gkey', function (c) {
    var arr = new Uint8Array(c);
    c = String.fromCharCode.apply(String, arr);
    var key = c+"&callback=initMap";
    var tag = document.createElement('script');
    tag.src = "https://maps.googleapis.com/maps/api/js?key=" + key;
    tag.setAttribute('defer', '');
    tag.setAttribute('async', '');
    var fst = document.getElementsByTagName('script')[0];
    fst.parentNode.insertBefore(tag, fst);
});

