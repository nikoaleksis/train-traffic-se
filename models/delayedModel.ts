import requestModel from './requestModel';
import stationModel from './stationModel';
import config from '../config/config.json';
import { Delayed, PreTransformationDelayed } from '../interfaces/delayed';
import { Station } from '../interfaces/station';

const urlPath = 'delayed';

const delayed = {
  getPreTransDelayed: async function getPreTransDelayed(): Promise<PreTransformationDelayed[]> {
    try {
      return await requestModel.request(`${config.train.base_url}/${urlPath}`, {});
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    getDelayed: async function getDelayed(): Promise<Delayed[]> {
      const preTransDelayed = await this.getPreTransDelayed();
      const stations: Station[] = await stationModel.getStations();
      
      return [...new Set(
        preTransDelayed
          .filter((delay: PreTransformationDelayed) => {
            return delay.hasOwnProperty('FromLocation') && delay.hasOwnProperty('ToLocation')
          })
          .map((delay: PreTransformationDelayed) => {
            return {
              activityId: delay.ActivityId,
              activityType: delay.ActivityType,
              advertisedTimeAtLocation: delay.AdvertisedTimeAtLocation,
              advertisedTrainIdent: delay.AdvertisedTrainIdent,
              canceled: delay.Canceled,
              estimatedTimeAtLocation: delay.EstimatedTimeAtLocation,
              //Add additonal station data
              fromLocation: stations
                .find((station: Station) => station.locationSignature === delay.FromLocation[0].LocationName),
              toLocation: stations
                .find((station: Station) => station.locationSignature === delay.ToLocation[0].LocationName),
            };
        }))];
  }
}

export default delayed;