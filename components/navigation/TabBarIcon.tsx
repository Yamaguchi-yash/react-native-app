import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface TabBarIconProps {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
}

export function TabBarIcon(props: TabBarIconProps) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
