import Geometry from "./geometry";

export default interface Station {
  AdvertisedLocationName: string,
  Geometry: Geometry,
  LocationSignature: string,
  PlatformLine: string[],
}