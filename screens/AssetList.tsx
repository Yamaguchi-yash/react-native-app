import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAssets } from '../context/AssetContext';

export default function AssetList() {
  const { assets, deleteAsset } = useAssets();

  return (
    <View>
      {assets.map(asset => (
        <View key={asset.id}>
          <Text>{asset.name}</Text>
          <Button title="Remove" onPress={() => deleteAsset(asset.id)} />
        </View>
      ))}
    </View>
  );
}
