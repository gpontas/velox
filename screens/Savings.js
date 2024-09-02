import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';

function Savings({ navigation }) {
  return (
    console.log('Savings'),
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Savings</Text>
      </View>

      
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>🏦</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>✈️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>📊</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Savings;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: STATUSBAR_HEIGHT,  // Adding padding to avoid overlapping with status bar
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  footerIcon: {
    fontSize: 30,
  },
});
