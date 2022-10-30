import { PreTransformationStation, Station } from "./station";

type DelayedStationData = {
  LocationName: string,
  Priority: number,
  Order: number,
}

interface Delayed {
  activityId: string,
  activityType: string,
  advertisedTimeAtLocation: string,
  advertisedTrainIdent: string,
  canceled: boolean,
  estimatedTimeAtLocation: string,
  fromLocation?: Station,
  toLocation?: Station,
}

interface PreTransformationDelayed {
  ActivityId: string,
  ActivityType: string,
  AdvertisedTimeAtLocation: string,
  EstimatedTimeAtLocation: string,
  AdvertisedTrainIdent: string,
  Canceled: boolean,
  FromLocation: DelayedStationData[],
  ToLocation: DelayedStationData[],
}

export {Delayed, PreTransformationDelayed}