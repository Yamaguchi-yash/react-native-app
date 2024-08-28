// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AssetDropdown from '../components/AssetDropdown';
// import RSSIValues from '../components/RSSIValues';

// export default function ExploreScreen() {
//   const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Explore</Text>
//       <AssetDropdown onSelect={setSelectedAsset} />
//       {selectedAsset && <RSSIValues assetId={selectedAsset} />}
//       <Button title="Add New Asset" onPress={() => navigation.navigate('AddAsset' as never)} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });
