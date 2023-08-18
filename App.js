import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Navbar from './components/Navbar/Navbar';
import Heading from './components/Heading/Heading';
import Trending from './components/Trending/Trending';
import RecentlyView from './components/Rview/RecentlyView';
import Footer from './components/Footer.js/Footer';

const App = () => {
  return (
    <View>
      <Navbar />
      <ScrollView>
        <Heading />
        <Trending />
        <RecentlyView />
        <Footer  />
      </ScrollView>
    </View>
  );
};
export default App;
