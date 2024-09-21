const sequentialAsyncAwait = async () => {
    const data = await fetchData();
    const countries = await fetchCountries();
    const cities = await fetchcities();
  }

  const parallelAsyncAwait = async () => {
    try {
      const [data, countries, cities] = Promise.all([fetchData(), fetchCountries(), fetchcities()])
    } catch(e){

    }
  }