import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Button } from '@src/components/component/Button';

type kpostion = {
    lat: number,
    lng: number
}
const RegisterMap = ({getPosition}:{getPosition:(value:kpostion) => void}) => {

  const [position, setPosition] = useState<kpostion | null>(null)
 
    return (
        <div className="map-box">
            <Map
                center={{
                    lat:36.7488573,
                    lng:126.5989244,
                }}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                level={10}
                onClick={(_t, mouseEvent) => setPosition({
                  lat: mouseEvent.latLng.getLat(),
                  lng: mouseEvent.latLng.getLng(),
                })}
            >
                {position && <MapMarker position={position}/>}
            </Map>
             <div className="button"><Button label="위치정보 적용" size="large"  onClick={() => {
                if(!position)return;
                getPosition(position)
             }} /></div>
             </div>
    )
}

export default RegisterMap;