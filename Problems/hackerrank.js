async function getTemperature(name) {
    const url = `https://jsonmock.hackerrank.com/api/weather?name=${name}`;
    
    try {
      const response = await fetch(url);
      const outputData = await response.json();
  
      // Check if data exists
      if (outputData && outputData.data && outputData.data.length > 0) {
        const tempString = outputData.data[0].weather; // e.g., "36 C"
        
        if (typeof tempString === "string") {
          const temperature = parseInt(tempString); // extract the numeric part
          return temperature;
        } else {
          return "Temperature format invalid";
        }
      } else {
        return "City not found";
      }
    } catch (error) {
      return "Error fetching temp";
    }
  }
  
  getTemperature("Dallas").then(console.log);