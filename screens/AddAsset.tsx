import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAssets } from '../context/AssetContext';

export default function AddAsset() {
  const [assetName, setAssetName] = useState('');
  const navigation = useNavigation();
  const { addAsset } = useAssets(); // Use the addAsset function from context

  const handleAddAsset = () => {
    if (assetName.trim() !== '') {
      addAsset(assetName); // Add the asset to the context
      navigation.goBack(); // Navigate back to the previous screen
    } else {
      alert('Please enter a valid asset name.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Asset</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter asset name"
        value={assetName}
        onChangeText={setAssetName}
      />
      <Button title="Add Asset" onPress={handleAddAsset} />
      <Button title="Go Back" onPress={() => navigation.goBack()} color="grey" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 20,
    width: '100%',
  },
});
