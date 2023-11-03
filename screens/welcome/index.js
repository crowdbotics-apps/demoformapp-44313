import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          
          
        </View>
        
      <View style={styles.oMyeTtmz}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  oMyeTtmz: {
    height: 674,
    width: 381,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    left: -15,
    top: -26
  }
});
export default WelcomeScreen;