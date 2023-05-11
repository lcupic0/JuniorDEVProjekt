import style from './maps.module.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import GoogleMapStyle from "../../utility/GoogleMapStyle";

const containerStyle = {
    width: "75%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
};

const center = {
    lat: 43.51161,
    lng: 16.46896
};

Maps.defaultProps = GoogleMapStyle;

function Maps() {

    const markerOptions = {
        icon: {
          url: "https://cdn-icons-png.flaticon.com/32/4225/4225935.png",
        },
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA4mPy3EyFZC675RDht9z1kBRwhzhzlPLM"
    })

  return isLoaded ? (
    <div className={style.maps}>
        <h1>GDJE SE NALAZIMO?</h1>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            className={style.mapwrapper}
        >
            <Marker position={{lat: 43.51161, lng: 16.46896}} options={markerOptions}/>
        </GoogleMap>
    </div>
  ) : <></>
}

export default Maps