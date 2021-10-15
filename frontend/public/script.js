mapboxgl.accessToken = 'pk.eyJ1Ijoia2F1c3R1YmgwMjA0IiwiYSI6ImNrcjR5c20xMDA1ZDEyd215NGRrcDQxcWwifQ.omZ2nYvuSAL1IHqjrt3eHQ';

const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [73.02571132604366, 19.04443285966456]
            },
            'properties': {
                'title': 'CSI RAIT',
                'addressline1': '3rd Floor, RAIT,',
                'addressline2': 'Nerul, Navi Mumbai'
            }
        }
    ]
};

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [73.02513196889208, 19.045692948855564],
    zoom: 15
});

// add markers to map
for (const { geometry, properties } of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
        .setLngLat(geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                    `<h2 style="color: #8854C8; font-size: 15px;">${properties.title}</h2><hr style="border: none; background-color: #8854C8; height: 0.5px; opacity: 100%;"><h6>${properties.addressline1}<br>${properties.addressline2}</h6>`
                )
        )
        .addTo(map);
}

function clicked(){
    console.log("clicked");
}


var a = document.getElementById("current");
a.style.display = "block";
var b = document.getElementById("currentm1");
b.style.display = "none";
var c = document.getElementById("currentm2");
c.style.display = "none";
var d = document.getElementById("currentm3");
d.style.display = "none";

var x = document.getElementById("swapbtn");
x.style.backgroundColor = "#4D287B";
var y = document.getElementById("swapbtn1");
y.style.backgroundColor = "#8854C8";
var z = document.getElementById("swapbtn2");
z.style.backgroundColor = "#8854C8";
var w = document.getElementById("swapbtn3");
w.style.backgroundColor = "#8854C8";

function swap(year){

    if(year == 'current'){
        var a = document.getElementById("current");
        a.style.display = "block";
        var b = document.getElementById("currentm1");
        b.style.display = "none";
        var c = document.getElementById("currentm2");
        c.style.display = "none";
        var d = document.getElementById("currentm3");
        d.style.display = "none";

        var x = document.getElementById("swapbtn");
        x.style.backgroundColor = "#4D287B";
        var y = document.getElementById("swapbtn1");
        y.style.backgroundColor = "#8854C8";
        var z = document.getElementById("swapbtn2");
        z.style.backgroundColor = "#8854C8";
        var w = document.getElementById("swapbtn3");
        w.style.backgroundColor = "#8854C8";
    }

    if(year == 'currentm1'){
        var a = document.getElementById("current");
        a.style.display = "none";
        var b = document.getElementById("currentm1");
        b.style.display = "block";
        var c = document.getElementById("currentm2");
        c.style.display = "none";
        var d = document.getElementById("currentm3");
        d.style.display = "none";

        var x = document.getElementById("swapbtn");
        x.style.backgroundColor = "#8854C8";
        var y = document.getElementById("swapbtn1");
        y.style.backgroundColor = "#4D287B";
        var z = document.getElementById("swapbtn2");
        z.style.backgroundColor = "#8854C8";
        var w = document.getElementById("swapbtn3");
        w.style.backgroundColor = "#8854C8";
    }

    if(year == 'currentm2'){
        var a = document.getElementById("current");
        a.style.display = "none";
        var b = document.getElementById("currentm1");
        b.style.display = "none";
        var c = document.getElementById("currentm2");
        c.style.display = "block";
        var d = document.getElementById("currentm3");
        d.style.display = "none";

        var x = document.getElementById("swapbtn");
        x.style.backgroundColor = "#8854C8";
        var y = document.getElementById("swapbtn1");
        y.style.backgroundColor = "#8854C8";
        var z = document.getElementById("swapbtn2");
        z.style.backgroundColor = "#4D287B";
        var w = document.getElementById("swapbtn3");
        w.style.backgroundColor = "#8854C8";
    }

    if(year == 'currentm3'){
        var a = document.getElementById("current");
        a.style.display = "none";
        var b = document.getElementById("currentm1");
        b.style.display = "none";
        var c = document.getElementById("currentm2");
        c.style.display = "none";
        var d = document.getElementById("currentm3");
        d.style.display = "block";

        var x = document.getElementById("swapbtn");
        x.style.backgroundColor = "#8854C8";
        var y = document.getElementById("swapbtn1");
        y.style.backgroundColor = "#8854C8";
        var z = document.getElementById("swapbtn2");
        z.style.backgroundColor = "#8854C8";
        var w = document.getElementById("swapbtn3");
        w.style.backgroundColor = "#4D287B";
    }


}