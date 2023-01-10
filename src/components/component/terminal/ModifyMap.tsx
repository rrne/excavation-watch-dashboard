import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Button } from '@src/components/component/Button';

export type kpostion = {
    lat: number,
    lng: number
}
const ModifyMap = ({xy, getPosition}:{xy:string | undefined, getPosition:(value:kpostion) => void}) => {

  const [position, setPosition] = useState<kpostion>({
    lat:36.7488573,
    lng:126.5989244,
  })
  const [lat, setLat] = useState(36.7488573)
  const [lng, setLng] = useState(126.5989244)
 
  useEffect(() => {
    if(!xy) return;
    setPosition({
      lat:Number(xy?.split('/')[1]),
      lng:Number(xy?.split('/')[0])
    })
    setLat(Number(xy?.split('/')[1]))
    setLng(Number(xy?.split('/')[0]))
},[xy])

    return (
         <div className="map-box">
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
                onClick={(_t, mouseEvent) => setPosition({
                  lat: mouseEvent.latLng.getLat(),
                  lng: mouseEvent.latLng.getLng(),
                })}
            >
                <MapMarker 
            position={position}
            // image={{
            //   src: spot, // 마커이미지의 주소입니다
            //   size: {
            //     width: 50,
            //     height: 50,
            //   }, // 마커이미지의 크기입니다
            //   options: {
            //     offset: {
            //       x: 25,
            //       y:50,
            //     }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            //   },
            // }} 
            >
            </MapMarker>
            </Map>
              <div className="button"><Button label="위치정보 적용" size="large" onClick={() => getPosition(position)}/></div>
           </div>
    )
}

export default ModifyMap;

