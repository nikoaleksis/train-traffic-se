import Station from "./station";

export default interface Delayed {
  ActivityId: string,
  ActivityType: string,
  AdvertisedTimeAtLocation: string,
  AdvertisedTrainIdent: string,
  Canceled: boolean,
  EstimatedTimeAtLocation: string,
  FromLocation: Station[],
  ToLocation: Station[],
}