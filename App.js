import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import Home from './Pages/Home';
import {
  Button,
  Title,
  Paragraph,
} from 'react-native-paper';
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';
import Registration from './Pages/Registration';
import Header from './component/Header';
import DonateInfo from './Pages/DonateInfo';



export default function App() {
  return (
    <>
      <Header />
      <Tabs
      // defaultIndex={0} // default = 0
      // uppercase={false} // true/false | default=true | labels are uppercase
      // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
      // iconPosition // leading, top | default=leading
      // style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
      // dark={false} // works the same as AppBar in react-native-paper
      // theme={} // works the same as AppBar in react-native-paper
      // mode="scrollable" // fixed, scrollable | default=fixed
      // onChangeIndex={(newIndex) => {}} // react on index change
      // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
      >
        <TabScreen label="Home" icon="compass">
          <Home />
        </TabScreen>
        <TabScreen label="Registration" >
          <Registration />
        </TabScreen>
        <TabScreen label="Information" >
          <DonateInfo />
        </TabScreen>
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
