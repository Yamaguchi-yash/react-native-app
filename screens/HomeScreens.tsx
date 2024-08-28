import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useAssets } from '../context/AssetContext';
import { fetchRSSIValues } from '../services/firebaseService';

type RootStackParamList = {
  Home: undefined;
  AddAsset: undefined;
};

export default function HomeScreen() {
  const { assets, deleteAsset } = useAssets(); 
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    async function fetchRSSI() {
      if (selectedAsset) {
        const rssiValues = await fetchRSSIValues(selectedAsset);
        if (rssiValues) {
          console.log('RSSI Values:', rssiValues);
        }
      }
    }
    fetchRSSI();
  }, [selectedAsset]);

  const handleDeleteAsset = (assetId: string) => {
    deleteAsset(assetId);
    if (selectedAsset === assetId) {
      setSelectedAsset(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      
      <View style={styles.assetList}>
        {assets.length > 0 ? (
          assets.map((asset) => (
            <View key={asset.id.toString()} style={styles.assetItemContainer}>
              <TouchableOpacity
                style={styles.assetItem}
                onPress={() => setSelectedAsset(asset.id.toString())}
              >
                <Text style={styles.assetName}>{asset.name}</Text>
              </TouchableOpacity>
              <Button
                title="Delete"
                onPress={() => handleDeleteAsset(asset.id.toString())}
                color="red"
              />
            </View>
          ))
        ) : (
          <Text style={styles.noAssetSelected}>No assets available. Add a new asset.</Text>
        )}
      </View>
      <Button title="Add New Asset" onPress={() => navigation.navigate('AddAsset')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  assetList: {
    width: '100%',
    marginBottom: 20,
  },
  assetItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  assetItem: {
    flex: 1,
    padding: 10,
  },
  assetName: {
    fontSize: 18,
  },
  noAssetSelected: {
    fontSize: 16,
    color: 'gray',
  },
});
