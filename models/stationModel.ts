import config from '../config/config.json';
import requestModel from "./requestModel";
import Station from '../interfaces/station';

const urlPath = "stations"

const station = {
  getStations: async function getStations(): Promise<Station[]> {
    try {
      return await requestModel.request(`${config.train.base_url}/${urlPath}`, {});      
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}

export default station;