import { render } from '@testing-library/react-native';
import React from 'react';
import DelayedList from '../components/DelayedList';

const delays = [
  {
    AdvertisedTrainIdent: "421",
    FromLocation: [
      {
        AdvertisedLocationName: "Testkøping"
      }
    ],
    ToLocation: [
      {
        AdvertisedLocationName: "Testborg"
      }
    ],
    AdvertisedTimeAtLocation: new Date(),
    EstimatedTimeAtLocation: new Date(),

  },
  {
    AdvertisedTrainIdent: "420",
    FromLocation: [
      {
        AdvertisedLocationName: "Testkøping"
      }
    ],
    ToLocation: [
      {
        AdvertisedLocationName: "Testborg"
      }
    ],
    AdvertisedTimeAtLocation: new Date(),
    EstimatedTimeAtLocation: new Date(),

  },
];

const delayedList = (
  <DelayedList />
);

test("It should render card components depending on size of delayed list", async () => {
  
  jest
    .spyOn(React, 'useState')
    .mockImplementationOnce(() => React.useState(delays));
  
  jest
    .spyOn(React, 'useEffect')
    .mockImplementationOnce(() => React.useEffect(() => false));
  
  const { getAllByA11yLabel, debug } = render(delayedList);

  const components = await getAllByA11yLabel("Tryck før att se transportstræckan");

  expect(components.length).toBe(2);
});