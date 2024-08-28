import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Asset {
  id: string;
  name: string;
}

interface AssetDropdownProps {
  onSelect: (assetId: string) => void;
}

const AssetDropdown: React.FC<AssetDropdownProps> = ({ onSelect }) => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<string>('');

  useEffect(() => {
    const fetchAssets = async () => {
      const querySnapshot = await getDocs(collection(db, 'assets'));
      const assetsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Asset));
      setAssets(assetsData);
    };
    fetchAssets();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Select Asset</Text>
      <Picker
        selectedValue={selectedAsset}
        onValueChange={(itemValue: string) => {
          setSelectedAsset(itemValue);
          onSelect(itemValue);
        }}>
        {assets.map(asset => (
          <Picker.Item key={asset.id} label={asset.name} value={asset.id} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default AssetDropdown;
