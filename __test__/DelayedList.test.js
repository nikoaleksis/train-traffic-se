import { render } from '@testing-library/react-native';
import React from 'react';
import DelayedList from '../components/delayed/DelayedList';
import { DelayedCurrentView } from '../enum/delayedCurrentView';

const delays = [
  {
    advertisedTrainIdent: "421",
    fromLocation: [
      {
        advertisedLocationName: "Testkøping"
      }
    ],
    toLocation: [
      {
        advertisedLocationName: "Testborg"
      }
    ],
    advertisedTimeAtLocation: new Date(),
    estimatedTimeAtLocation: new Date(),

  },
  {
    advertisedTrainIdent: "420",
    fromLocation: [
      {
        advertisedLocationName: "Testkøping"
      }
    ],
    toLocation: [
      {
        advertisedLocationName: "Testborg"
      }
    ],
    advertisedTimeAtLocation: new Date(),
    estimatedTimeAtLocation: new Date(),
  },
];

const mockSetDelays = () => undefined;

const mockSetCurrentView = () => undefined;

const mockSetInitialRegion = () => undefined;

const delayedList = (
  <DelayedList
    delayed={delays}
    setDelayed={mockSetDelays}
    currentView={DelayedCurrentView.LIST}
    setCurrentView={mockSetCurrentView}
    setInitialRegion={mockSetInitialRegion}
  />
);


test(
  "It should render card components depending on size of delayed list", 
  async () => {
    jest
    .spyOn(React, 'useEffect')
    .mockImplementationOnce(() => React.useEffect(() => false));
    
    const { getAllByA11yLabel, debug } = render(delayedList);
    
    const components = await getAllByA11yLabel("Tryck før att se transportstræckan");

    expect(components.length).toBe(2);
});