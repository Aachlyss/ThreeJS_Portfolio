import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1000
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[23.5000, 42.8566]}
        dx={-430}
        dy={-100}
        connectorProps={{
          stroke: "white",
          strokeWidth: 1.5,
          strokeLinecap: "round"
        }}
      >
        <text x="-10" textAnchor="end" alignmentBaseline="middle" fill="white" fontSize={18} fontFamily="Poppins, sans-serif">
          {"Pernik, Bulgaria"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
