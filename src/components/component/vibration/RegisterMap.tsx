import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import spot from '@public/image/spot.png'

type kpostion = {
    lat: number,
    lng: number
}
const RegisterMap = () => {

    const [lng, setLng] = useState<number>(126.5989244)
    const [lat, setLat] = useState<number>(36.7488573)

    return (
            <Map
                center={{
                    lat:lat,
                    lng:lng,
                }}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                level={10}
            >
            </Map>
    )
}

export default RegisterMap;