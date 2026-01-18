import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_APP_KEY as string,
    libraries: ["clusterer", "drawing", "services"],
  });
}
