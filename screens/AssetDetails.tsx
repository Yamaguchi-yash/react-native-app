import React from 'react';
import { View, Text } from 'react-native';
import { useAssets } from '../context/AssetContext';

export default function AssetDetails() {
  const { assets } = useAssets();

  return (
    <View>
      {assets.map(asset => (
        <Text key={asset.id}>{asset.name}</Text>
      ))}
    </View>
  );
}
