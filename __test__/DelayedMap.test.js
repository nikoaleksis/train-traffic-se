import { render } from '@testing-library/react-native';
import React from 'react';
import DelayedMap from '../components/delayed/DelayedMap';
import { DelayedCurrentView } from '../enum/delayedCurrentView';

const delays = [
  {
    advertisedTrainIdent: "421",
    fromLocation: {
        advertisedLocationName: 'Testt',
        geometry: {
          latitude: 0,
          longitude: 0,
        }
    },
    toLocation: {
        advertisedLocationName: 'Test2',
        geometry: {
          latitude: 0,
          longitude: 0,
        }
    },
    advertisedTimeAtLocation: new Date(),
    estimatedTimeAtLocation: new Date(),

  },
  {
    advertisedTrainIdent: "420",
    fromLocation: {
        advertisedLocationName: 'Test3',
        geometry: {
          latitude: 0,
          longitude: 0,
        }
    },
    toLocation: {
        advertisedLocationName: 'Test4',
        geometry: {
          latitude: 0,
          longitude: 0,
        }
    },
    advertisedTimeAtLocation: new Date(),
    estimatedTimeAtLocation: new Date(),
  },
];

const mockSetDelays = () => undefined;

const initialRegion = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
}

const myLocation = {
  coords: {
    latitude: 0,
    longitude: 0,
  }
}

const delayedMap = <DelayedMap
  delayed={delays}
  setDelayed={mockSetDelays}
  currentView={DelayedCurrentView.MAP}
  initialRegion={initialRegion}
  myLocation={myLocation}
/>;

jest
.spyOn(React, 'useEffect')
.mockImplementationOnce(() => React.useEffect(() => false));

test(
  'Test that component contains the mapview',
  async () => {

    const { getByTestId, debug } = render(delayedMap);

    const mapView = getByTestId('RouteMap');
    expect(mapView).toBeDefined();
  }
);

test(
  'Test that component contains markers for amount of stations',
  async() => {
    const amountOfStations = 4;
    const { getAllByA11yLabel, debug } = render(delayedMap);
    const fromStations = getAllByA11yLabel('Avgång');
    const toStations = getAllByA11yLabel('Ankomst');

    expect(fromStations.length + toStations.length).toBe(amountOfStations);
  }
);

test(
  'Test that component contains marker for my position',
  async() => {
    const { getByA11yLabel, debug } = render(delayedMap);
    const myPosition = getByA11yLabel('Min Position');
    
    expect(myPosition).toBeDefined();
  }
);