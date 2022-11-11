import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import spot from '@public/image/spot.png'

type kpostion = {
    lat: number,
    lng: number
}
const ModifyMap = ({xy}:{xy:string | undefined}) => {

    const [lng, setLng] = useState<number>(126.5989244)
    const [lat, setLat] = useState<number>(36.7488573)
 
    useEffect(() => {
        if(!xy) return;
        setLng(Number(xy?.split('/')[0]))
        setLat(Number(xy?.split('/')[1]))
    },[xy])

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
                <MapMarker 
            position={{ lat:lat,
                lng:lng}}
            image={{
              src: spot, // 마커이미지의 주소입니다
              size: {
                width: 50,
                height: 50,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 25,
                  y: 65,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }} >
            </MapMarker>
            </Map>
    )
}

export default ModifyMap;