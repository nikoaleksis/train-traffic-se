import config from '../config/config.json';
import { PreTransformationStation, Station } from '../interfaces/station';
import requestModel from "./requestModel";
import wgs84Parser from './wgs84Parser';

const urlPath = "stations"

const station = {
  getPreTransStations: async function getPreTransStations(): Promise<PreTransformationStation[]> {
    try {
      return await requestModel.request(`${config.train.base_url}/${urlPath}`, {});      
    } catch (error) {
      console.log(error);
    }
    return [];
  },
  getStations: async function getStations(): Promise<Station[]> {
    const preTransStations = await this.getPreTransStations();
    return preTransStations.map((station: PreTransformationStation): Station => {
         return {
          advertisedLocationName: station.AdvertisedLocationName,
          geometry: wgs84Parser.parse(station.Geometry.WGS84),
          locationSignature: station.LocationSignature,
          platformLine: station.PlatformLine,
        }
    });
  }
}

export default station;