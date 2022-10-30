import { Geometry, PreTransformationGeometry } from "./geometry";

interface Station {
  advertisedLocationName: string,
  geometry: Geometry,
  locationSignature: string,
  platformLine: string[],
}

interface PreTransformationStation {
  AdvertisedLocationName: string,
  Geometry: PreTransformationGeometry,
  LocationSignature: string,
  PlatformLine: string[],
}

export {Station, PreTransformationStation}