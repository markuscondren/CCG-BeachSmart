// Refs: https://www.youtube.com/watch?v=aoIccFvHf7s

let mapOptions = {
    //default location for map
    center: [55.126, -6.6582],
    // level of zoom - integer number - from leafletJS
    zoom: 10,
  };
  
  // 2 arguments, map id from div and mapOptions created above.
  let map = new L.map("map", mapOptions);

// Instantiate a tile layer- to load and display various types of map
let layer = new L.TileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
  
  // Add layer to map
  map.addLayer(layer);
  
  // Created variable array to hold location and other data about each beach
  // Likely be API calls when it comes to it. May need to update the maps myself for that
  let locations = [
    {
      id:1,
      lat: 55.1677,
      long: -6.8758,
      title: "Benone Strand",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/benone-strand",
    },
    {
      id:2,
      lat: 55.1672,
      long: -6.8207,
      title: "Downhill Beach",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/downhill-beach",
    },
    {
      id:3,
      lat: 55.16722,
      long: -6.878585,
      title: "Castelrock Beach",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/castlerock-beach",
    },
    {
      id:4,
      lat: 55.1708,
      long: -6.72818,
      title: "Portstewart Strand",
      uri: "#",
    },
    {
      id:5,
      lat: 55.20261,
      long: -6.65437,
      title: "West Bay, Portrush",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/west-strand-portrush",
    },
    {
      id:6,
      lat: 55.20409,
      long: -6.64638,
      title: "East Strand, Portrush",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/east-strand-portrush",
    },
    {
      id:7,
      lat: 55.20572,
      long: -6.60852,
      title: "Whiterocks, Portrush",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/whiterocks-portrush",
    },
    {
      id:8,
      lat: 55.21961,
      long: -6.54257,
      title: "Salmon Rock Beach, Portballintrae",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/salmon-rock-beach-portballintrae",
    },
    {
      id:9,
      lat: 55.22011,
      long: -6.53503,
      title: "Runkerry Beach, Portballintrae",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/runkerry-beach",
    },
    {
      id:10,
      lat: 55.20539,
      long: -6.22387,
      title: "Ballycastle Beach",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/ballycastle-beach",
    },
    {
      id:11,
      lat: 55.084,
      long: -6.05537,
      title: "Cushendall Beach",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/cushendall-beach",
    },
    {
      id:12,
      lat: 55.05828,
      long: -6.05312,
      title: "Waterfoot Beach",
      uri: "https://www.causewaycoastandglens.gov.uk/see-do/beaches/waterfoot-beach",
    },
  ];

  // Variable to remove 'x' from corner of popup
// let popupOption = {
//     closeButton: false,
//   };
  
  // Foreach runs through each element in the array created above and populates the map with a marker and the relevant info
  locations.forEach(element => {
    new L.Marker([element.lat,element.long]).addTo(map)
      //rolling mouse over a pin will pop up the information
      // .on("mouseover", event => {
      //   event.target.bindPopup('<div class = "card"><h3>'+element.title+'</h3><br/><a href="'+element.uri+'">Learn More</a></div>', popupOption).openPopup();
      // })
      //same as above but for a click - primarily for when using fingers or a stylus
      .on("click", event => {
          event.target.bindPopup('<div class = "card"><h3>'+element.title+'</h3><br/><a href="'+element.uri+'">Learn More</a></div>').openPopup();
        })
  
  });