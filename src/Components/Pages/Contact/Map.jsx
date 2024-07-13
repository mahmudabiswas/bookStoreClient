import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {
  const defaultProps = {
    center: {
      lat: 23.685, // Bangladesh latitude
      lng: 90.3563, // Bangladesh longitude
    },
    zoom: 11,
  };
  return (
    <div>
      <h1 className="text-center py-5 text-3xl text-blue-500">
        Please search your location
      </h1>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={23.685} lng={90.3563} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
