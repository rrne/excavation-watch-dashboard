import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapComp = () => {
   
    return (
            <Map
           center={{
            lat: 36.7488573,
            lng: 126.2989244,
            }}
            style={{
            width: "100%",
            height: "100%",
            }}
            level={13}
        >
        </Map>
    )
}

export default MapComp;