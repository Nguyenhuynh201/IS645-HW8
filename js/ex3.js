const traveler = {
    name: "Nguyen Huynh",
    countries: [
      {
        name: "Singapore",
        year: 2009
      },
      {
        model: "ThaiLand",
        color: 2012
      },
      {
        model: "Mexico",
        color: 2017
      }
    ]
  };
  
  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err.message);
    });