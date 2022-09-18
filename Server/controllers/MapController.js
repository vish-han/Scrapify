const axios = require("axios");

const getGeoCodes = async (req, res) => {
  const { location } = req.body;

  try {
    const splits = location.split(", ");
    let location_string = splits[0];

    for (let i = 1; i < splits.length; i++) {
      location_string = location_string + "%20" + splits[i];
    }

    const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location_string}.json?limit=3&proximity=-73.990593%2C40.740121&types=place%2Cpostcode%2Caddress%2Clocality&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA`;

    const { data } = await axios.get(URL);

    const result = data.features[0].geometry.coordinates;
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(500).json({ message: "Nothing Found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getGeoCodes };
