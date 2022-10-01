import React from 'react';
import { TasksProvider } from './src/context/TasksContext';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <TasksProvider>
      <HomeScreen />
    </TasksProvider>

  );
}
