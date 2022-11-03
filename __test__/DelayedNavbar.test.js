import { render } from '@testing-library/react-native';
import React from 'react';
import DelayedNavbar from '../components/delayed/DelayedNavbar';

const delayedNavbar = <DelayedNavbar />

test(
  'Test that DelayedNavbar contains two items',
  async () => {
    const { getAllByA11yLabel, debug } = render(delayedNavbar);
    const menuItems = getAllByA11yLabel("Klicka før att byta meny");
    
    expect(menuItems.length).toBe(2);
});