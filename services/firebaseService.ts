import database from '@react-native-firebase/database';

export async function fetchRSSIValues(assetId: string): Promise<{ [beaconId: string]: number } | null> {
  try {
    const snapshot = await database()
      .ref(`/assets/${assetId}/rssiValues`)
      .once('value');

    const rssiValues = snapshot.val();

    if (rssiValues) {
      return rssiValues; // Assuming RSSI values are stored under 'rssiValues'
    } else {
      console.log('No RSSI values found!');
      return null;
    }
  } catch (error) {
    console.error("Error fetching RSSI values:", error);
    return null;
  }
}
