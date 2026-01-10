"use client";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";
import React, { useState } from "react";

type Marker = { title: string; lat: number; lng: number };

const EventMarker: React.FC<{ marker: Marker }> = ({ marker }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <MapMarker
        position={{ lat: marker.lat, lng: marker.lng }}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      />
      {isVisible && (
        <CustomOverlayMap
          position={{ lat: marker.lat, lng: marker.lng }}
          yAnchor={1}
        >
          <div className="relative">
            <div
              className="absolute top-[-85px] left-1/2 -translate-x-1/2 transform"
              style={{ width: "fit-content" }}
            >
              <div className="min-w-max rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-lg">
                <span className="text-sm font-medium whitespace-nowrap text-gray-800">
                  {marker.title}
                </span>
              </div>
            </div>
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
};

const KakaoMap: React.FC<{
  markers: { title: string; lat: number; lng: number }[];
}> = ({ markers: locations }) => {
  useKakaoLoader();

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 37.53809058086079,
        lng: 126.93000719505153,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={8} // 지도의 확대 레벨
    >
      {locations.map((marker) => (
        <EventMarker key={marker.title} marker={marker} />
      ))}
    </Map>
  );
};

export default KakaoMap;
