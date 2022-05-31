import requestModel from './requestModel';
import stationModel from './stationModel';
import config from '../config/config.json';
import Delayed from '../interfaces/delayed';
import Station from '../interfaces/station';

const urlPath = 'delayed';

const delayed = {
  getDelayed: async function getDelayed(): Promise<Delayed[]> {
    try {
      const delayed: Delayed[] = await requestModel.request(`${config.train.base_url}/${urlPath}`, {});
      const stations: Station[] = await stationModel.getStations();
      
      const delayedWithStations = [...new Set(delayed.map((delay) => {
        if (delay.hasOwnProperty('FromLocation')) {
          delay.FromLocation = delay.FromLocation.map((loc) =>
            stations.find((station) => station.LocationSignature === loc.LocationName));
        }

        if (delay.hasOwnProperty('ToLocation')) {
          delay.ToLocation = delay.ToLocation.map((loc) =>
            stations.find((station) => station.LocationSignature === loc.LocationName));
        }

        return delay;
      }))];

      return delayedWithStations;
    } catch (e) {
      console.log(e);
    }
    return [];
  },
}

export default delayed;