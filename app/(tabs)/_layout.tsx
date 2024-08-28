import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreens';
// import ExploreScreen from '../../screens/explore';
import AddAsset from '../../screens/AddAsset';
import { AssetProvider } from '../../context/AssetContext'; // Assuming you have an AssetProvider

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <AssetProvider>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Explore" component={ExploreScreen} /> */}
        <Tab.Screen name="AddAsset" component={AddAsset} />
      </Tab.Navigator>
    </AssetProvider>
  );
}
