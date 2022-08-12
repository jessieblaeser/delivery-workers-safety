// mapboxgl.accessToken = 'pk.eyJ1IjoiamJsYWVzZXIiLCJhIjoiY2t4OGVtY3FmMTh6YTJ4cXU1NWY5aXUxMiJ9.DJNRPOrzDpL4YDzTQXxaCQ';
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/jblaeser/cl4ctluq0001814qdwo0cqxgh',
//     zoom: 6.5,
//     maxZoom: 22,
//     minZoom: 10,
//     center: [-73.935242, 40.730610]

// });

// map.on("load", function () {
//     // this is the funciton that finds the first sympbol layer
//     let layers = map.getStyle().layers;
//     for(var i = 0; i <layers.length; i++) {
//         console.log(layers[i].id);
//     }

//     // map.addLayer({
//     //   id: "us_states_elections_outline",
//     //   type: "line",
//     //   source: {
//     //     type: "geojson",
//     //     data: "data/statesElections.geojson",
//     //   },
//     //   paint: {
//     //     "line-color": "#ffffff",
//     //     "line-width": 0.7,
//     //   },
//     // });
//     // map.addLayer({
//     //   id: "nyc_poly",
//     //   type: "fill",
//     //   source: {
//     //     type: "geojson",
//     //     data: "data/ntaData.geojson",
//     //   },
//     //   maxzoom: 6,
//     //   paint: {"fill-outline-color": "whitesmoke"},
//     // }, "waterway-label");

//     map.addLayer(
//         {
//           id: "ebikeDeaths",
//           type: "circle",
//           source: {
//             type: "geojson",
//             data: "data/geo_deaths.geojson",
//           },
//           minzoom: 6,

//           paint: {
//             "circle-radius": 3,
//             "circle-color": "#343d72"
//             // "circle-opacity": {
//             //     property: "tripcount",
//             //     stops: [[0, 0.3],
//             //             [14435, 1]]
//             // }
//         }
      
//         },
//         "waterway-label"
//       );
     

//   });

//  // Create the popup
// map.on('click', 'citiGeoStarts20', function (e) {
//     var stationName = e.features[0].properties['start station name'];
//     var tripCount = e.features[0].properties.tripcount;
    
//     stationName = stationName;
//     tripCount = tripCount;
//     new mapboxgl.Popup()
//         .setLngLat(e.lngLat)
//         .setHTML('<h4>'+stationName+'</h4>'
//             +'<h2>'+tripCount+'</h2>'
//             + '<p>trips</p>')
//         .addTo(map);
// });
// // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
// map.on('mouseenter', 'citiGeoStarts20', function () {
//     map.getCanvas().style.cursor = 'pointer';
// });
// // Change it back to a pointer when it leaves.
// map.on('mouseleave', 'citiGeoStarts20', function () {
//     map.getCanvas().style.cursor = '';
// });


//MAP2

mapboxgl.accessToken = 'pk.eyJ1IjoiamJsYWVzZXIiLCJhIjoiY2t4OGVtY3FmMTh6YTJ4cXU1NWY5aXUxMiJ9.DJNRPOrzDpL4YDzTQXxaCQ';
var map2 = new mapboxgl.Map({
  container: 'map2',
  style: 'mapbox://styles/jblaeser/cl6pwi1ak006114ml98prm8s5',
  zoom: 6.5,
  maxZoom: 22,
  minZoom: 10,
  center: [-73.935242, 40.730610]
});

map2.on("load", function () {
    // this is the funciton that finds the first sympbol layer
    let layers = map2.getStyle().layers;
    for(var i = 0; i <layers.length; i++) {
        console.log(layers[i].id);
    }

    
    map2.addLayer(
      {
        id: "deliveryDeaths",
        type: "circle",
        source: {
          type: "geojson",
          data: "data/deliveryDeaths2.geojson",
        },
        minzoom: 6,
        paint: {
          "circle-radius": 4,
          "circle-color": "#FA8128"
          
        //   "circle-opacity": {
        //     property: "tripcount",
        //     stops: [[0, 0.3],
        //             [14435, 1]]
        // }
        // "circle-opacity": [
        //   "interpolate", ["linear"], ["get", "tripcount"],
        //   0, 0,
        //   14435, 1
        // ]
        },
      },
      "waterway-label"
    );

//  Create the popup
 map2.on('click', 'deliveryDeaths', function (e) {
  var victimName = e.features[0].properties['name'];
  var boro = e.features[0].properties['boro'];
  var accidentDate = e.features[0].properties['day_of_death'];
  var age = e.features[0].properties['age'];
  var accidentType = e.features[0].properties['incident_circumstances'];
  // var stationName = e.features[0].properties['start_station_name'];
  // var tripCount = e.features[0].properties.tripcount;
  
  victimName = victimName;
  boro = boro;
  accidentDate = accidentDate;
  age = age;
  accidentType = accidentType;
  // stationName = stationName;
  // tripCount = tripCount;

  new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h4>'+accidentDate+'</h4>'
          +'<h3>'+victimName+', '+age+'</h3>'
          + '<p>'+accidentType+'</p>')
      .addTo(map2);
});
// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map2.on('mouseenter', 'deliveryDeaths', function () {
  map2.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map2.on('mouseleave', 'deliveryDeaths', function () {
  map2.getCanvas().style.cursor = '';
});
  });


// //MAP3

// mapboxgl.accessToken = 'pk.eyJ1IjoiamJsYWVzZXIiLCJhIjoiY2t4OGVtY3FmMTh6YTJ4cXU1NWY5aXUxMiJ9.DJNRPOrzDpL4YDzTQXxaCQ';
// var map3 = new mapboxgl.Map({
//   container: 'map3',
//   style: 'mapbox://styles/jblaeser/cl4ctluq0001814qdwo0cqxgh',
//   zoom: 6.5,
//   maxZoom: 22,
//   minZoom: 10,
//   center: [-73.935242, 40.730610]
// });

// map3.on("load", function () {
//     // this is the funciton that finds the first sympbol layer
//     let layers = map2.getStyle().layers;
//     for(var i = 0; i <layers.length; i++) {
//         console.log(layers[i].id);
//     }

    
//     map3.addLayer(
//       {
//         id: "citiGeoStops20",
//         type: "circle",
//         source: {
//           type: "geojson",
//           data: "data/citiGeoStops2009.geojson",
//         },
//         minzoom: 6,
//         paint: {
//           "circle-radius": 3,
//           "circle-color": "#343d72",
//           "circle-opacity": {
//             property: "tripcount",
//             stops: [[0, 0.3],
//                     [14435, 1]]
//         }
//         },
//       },
//       "waterway-label"
//     );

//      // Create the popup
//  map3.on('click', 'citiGeoStops20', function (e) {
//   var stationName = e.features[0].properties['end station name'];
//   var tripCount = e.features[0].properties.tripcount;
  
//   stationName = stationName;
//   tripCount = tripCount;
//   new mapboxgl.Popup()
//       .setLngLat(e.lngLat)
//       .setHTML('<h4>'+stationName+'</h4>'
//           +'<h2>'+tripCount+'</h2>'
//           + '<p>trips</p>')
//       .addTo(map3);
// });
// // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
// map3.on('mouseenter', 'citiGeoStops20', function () {
//   map3.getCanvas().style.cursor = 'pointer';
// });
// // Change it back to a pointer when it leaves.
// map3.on('mouseleave', 'citiGeoStops20', function () {
//   map3.getCanvas().style.cursor = '';
// });
   
//   });



// //MAP4

// mapboxgl.accessToken = 'pk.eyJ1IjoiamJsYWVzZXIiLCJhIjoiY2t4OGVtY3FmMTh6YTJ4cXU1NWY5aXUxMiJ9.DJNRPOrzDpL4YDzTQXxaCQ';
// var map4 = new mapboxgl.Map({
//   container: 'map4',
//   style: 'mapbox://styles/jblaeser/cl4ctluq0001814qdwo0cqxgh',
//   zoom: 6.5,
//   maxZoom: 22,
//   minZoom: 10,
//   center: [-73.935242, 40.730610]
// });

// map4.on("load", function () {
//     // this is the funciton that finds the first sympbol layer
//     let layers = map2.getStyle().layers;
//     for(var i = 0; i <layers.length; i++) {
//         console.log(layers[i].id);
//     }

    
    // map4.addLayer(
    //   {
    //     id: "citiGeoStops21",
    //     type: "circle",
    //     source: {
    //       type: "geojson",
    //       data: "data/citiGeoStops2109.geojson",
    //     },
    //     minzoom: 6,
    //     paint: {
    //       "circle-radius": 3,
    //       "circle-color": "#343d72",
    //       "circle-opacity": {
    //         property: "tripcount",
    //         stops: [[0, 0.3],
    //                 [14435, 1]]
    //     }
    //     },
    //   },
    //   "waterway-label"
    // );
//  // Create the popup
//  map4.on('click', 'citiGeoStops21', function (e) {
//   var stationName = e.features[0].properties['end_station_name'];
//   var tripCount = e.features[0].properties.tripcount;
  
//   stationName = stationName;
//   tripCount = tripCount;
//   new mapboxgl.Popup()
//       .setLngLat(e.lngLat)
//       .setHTML('<h4>'+stationName+'</h4>'
//           +'<h2>'+tripCount+'</h2>'
//           + '<p>trips</p>')
//       .addTo(map4);
// });
// // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
// map4.on('mouseenter', 'citiGeoStops21', function () {
//   map4.getCanvas().style.cursor = 'pointer';
// });
// // Change it back to a pointer when it leaves.
// map4.on('mouseleave', 'citiGeoStops21', function () {
//   map4.getCanvas().style.cursor = '';
// });
   
  // });