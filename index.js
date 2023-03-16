const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "e2d4ef15",
      s: "avengers",
    }
  });

  console.log(response.data);
};

fetchData();
