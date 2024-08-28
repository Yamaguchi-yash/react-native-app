import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Asset = {
  id: string;
  name: string;
  // Add any other properties your assets may have
};

type AssetContextType = {
  assets: Asset[];
  addAsset: (name: string) => void;
  deleteAsset: (id: string) => void; // Add this line
};

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export function useAssets() {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error('useAssets must be used within an AssetProvider');
  }
  return context;
}

export function AssetProvider({ children }: { children: ReactNode }) {
  const [assets, setAssets] = useState<Asset[]>([]);

  const addAsset = (name: string) => {
    const newAsset = { id: new Date().getTime().toString(), name };
    setAssets([...assets, newAsset]);
  };

  const deleteAsset = (id: string) => {
    setAssets((prevAssets) => prevAssets.filter(asset => asset.id !== id));
  };

  return (
    <AssetContext.Provider value={{ assets, addAsset, deleteAsset }}>
      {children}
    </AssetContext.Provider>
  );
}
