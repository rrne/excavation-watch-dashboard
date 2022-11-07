import React, { useEffect, useState } from "react";
import kjeojson from './test-data/kgeojson.json'
import { Map, MarkerClusterer, MapMarker, Polyline } from "react-kakao-maps-sdk";
import linejson from './test-data/linejson.json';
import marker from '@public/image/rec.png'

type kpostion = {
    lat: number,
    lng: number
}
const MapComp = () => {
    const [positions, setPositions] = useState<kpostion[]>();
    const [line, setLine] = useState([
        { lat: 33.452344169439975, lng: 126.56878163224233 },
        { lat: 33.452739313807456, lng: 126.5709308145358 },
        { lat: 33.45178067090639, lng: 126.572688693875 },
    ])

    useEffect(() => {
        setPositions(kjeojson);
          const linedata = linejson.data.geometry.coordinates
        const lineArr = [];
        for(let i =0; i < linedata.length; i++){
          lineArr.push({lat:linedata[i][1], lng:linedata[i][0]})
        }
        setLine(lineArr)
      },[])

    return (
            <Map
           center={{
            lat: 36.7488573,
            lng: 126.5989244,
            }}
            style={{
            width: "100%",
            height: "100%",
            }}
            level={13}
        >
            <MarkerClusterer
            averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel={10} // 클러스터 할 최소 지도 레벨
            >
            {positions?.map((pos) => (
                <MapMarker
                key={`${pos.lat}-${pos.lng}`}
                position={{
                    lat: pos.lat,
                    lng: pos.lng,
                }}
                />
            ))}
            </MarkerClusterer>
            <MapMarker 
            position={{ lat: 36.7488573, lng: 126.2989244 }}
            image={{
              src: marker, // 마커이미지의 주소입니다
              size: {
                width: 50,
                height: 50,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 27,
                  y: 69,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }} >
        <div style={{ padding: "5px", color: "#ff0d0d" }}>
         알람!!</div>
            </MapMarker>
            <Polyline
                path={[line]}
                  strokeWeight={5} // 선의 두께 입니다
                  strokeColor={"#0077ff"} // 선의 색깔입니다
                  strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                  strokeStyle={"solid"} // 선의 스타일입니다
            />
        </Map>
    )
}

export default MapComp;