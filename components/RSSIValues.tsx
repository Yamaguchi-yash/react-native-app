import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface RSSIValuesProps {
  assetId: string;
}

const RSSIValues: React.FC<RSSIValuesProps> = ({ assetId }) => {
  const [rssiValues, setRssiValues] = useState<number[]>([]);

  useEffect(() => {
    const fetchRSSIValues = async () => {
      const q = query(collection(db, 'rssi'), where('assetId', '==', assetId));
      const querySnapshot = await getDocs(q);
      const values = querySnapshot.docs.map(doc => doc.data().rssi);
      setRssiValues(values);
    };
    fetchRSSIValues();
  }, [assetId]);

  return (
    <View style={styles.container}>
      <Text>RSSI Values for {assetId}</Text>
      {rssiValues.map((rssi, index) => (
        <Text key={index}>RSSI: {rssi}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default RSSIValues;
