// import React, { useState, useEffect, useMemo } from 'react';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Navigation/Routes';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}

export default App;