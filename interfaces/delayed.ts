export default interface Delayed {
  AcivityId: string,
  ActivityType: string,
  AdvertisedTimeAtLocation: Date,
  AdvertisedTrainIdent: string,
  Canceled: boolean,
  EstimatedTimeAtLocation: Date,
  FromLocation: Location[],
  ToLocation: Location[],
}