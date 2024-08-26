function whereAmI(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      .then(response => {
        if (!response.ok) throw new Error(`Error fetching location data! Status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        console.log(`You are in ${data.city}, ${data.country}`);
  
        // Part 2: Render country using received country data
        fetch(`https://restcountries.eu/search?country=${data.country}`)
          .then(response => {
            if (!response.ok) throw new Error(`Error fetching country data! Status: ${response.status}`);
            return response.json();
          })
          .then(data => {
            console.log(`Country: ${data[0].name.common}`);
          })
          .catch(err => console.error(`Error rendering country: ${err.message}`));
      })
      .catch(err => console.error(`Error geocoding location: ${err.message}`));
  }
  
  // Test the function with different coordinates
  whereAmI(52.508, 13.381); // Berlin, Germany
  whereAmI(19.037, 72.873); // Mumbai, India
  whereAmI(-33.933, 18.474); // Cape Town, South Africa