import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import Base_URL from "../axios";
import Dealer from "../components/Dealer";
import { Store } from "../store";
import mapboxgl from "mapbox-gl";

export const geojson = {
  type: "FeatureCollection",
  features: [
    {
      id: '1',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [77.285106, 28.449638],
      },
      properties: {
        title: "Rohan Kumar",
        description: "Scrap Dealer from Sompuri",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
    {
      id: '2',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [77.28, 28.44],
      },
      properties: {
        title: "Sahil Dupia",
        description: "Scrap Dealer from Sompuri",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
    {
      id: '3',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [77.275106, 28.449638],
      },
      properties: {
        title: "Mohd. Afzal",
        description: "Scrap Dealer from Khathari",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
    {
      id: '4',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [77.315106, 28.449638],
      },
      properties: {
        title: "Sohan Rawat",
        description: "Scrap Dealer from Sompuri",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
    {
      id: '5',
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [77.45106, 28.439638],
      },
      properties: {
        title: "Mohan",
        description: "Scrap Dealer from Badkal Mod",
      },
      extraInfo: {
        address: "Sompuri",
        phone: +916576423112,
      },
    },
  ],
};

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Deals = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const mapContainerRef = useRef(null);

  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    let raw_data = [];
    let center = [];
    const getData = async () => {
      try {
        const { data } = await axios.post(`${Base_URL}/map/`, {
          location: userInfo.address,
        });
        setMapData([...mapData, data]);
        center = [...data];
        raw_data = [...raw_data, data];

        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [77.1025, 28.7041],
          zoom: 2,
        });

        map.on("style.load", () => {
          map.setFog({}); // Set the default atmosphere style
        });

        // Add geolocate control to the map.
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true,
          })
        );

        for (const feature of geojson.features) {
          // create a HTML element for each feature
          const el = document.createElement("div");
          el.className = "marker";

          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .addTo(map);

          new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                )
            )
            .addTo(map);
        }
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    };

    getData();
  }, []);

  return (
    <div className="box flex flex-col h-full">
      <h1 className='text-center m-9 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Make a Deal </h1>
      <div className="relative w-full h-[600px]">
        <div className="map-container" ref={mapContainerRef} id="map" />
      </div>
      {geojson.features.map((geo) => (
        
        <Dealer
          key={geo.id}
          id={geo.id}
          name={geo.properties.title}
          phone={geo.extraInfo.phone}
          address={geo.extraInfo.address}
          coord={geo.geometry.coordinates}
          bio={geo.properties.description}
        />
      ))}
    </div>
  );
};

export default Deals;
