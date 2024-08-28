import React from 'react';
import { Text, Linking, Platform, TouchableOpacity } from 'react-native';
import { openBrowserAsync } from 'expo-web-browser';

type Props = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, children }: Props) {
  const handlePress = async () => {
    if (Platform.OS !== 'web') {
      // Open the link in an in-app browser for native platforms
      await openBrowserAsync(href);
    } else {
      // Open the link in the default browser for web
      Linking.openURL(href);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>{children}</Text>
    </TouchableOpacity>
  );
}
