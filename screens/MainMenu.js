import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, Pressable } from 'react-native';

function MainMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          {/* Menu icon */}
          <Text style={styles.iconText}>≡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileIcon}>
          {/* Profile icon */}
          <Text style={styles.iconText}>⚪</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>WELCOME TO VELOX</Text>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Budget</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate('Savings')} style={styles.box}>
          <TouchableOpacity>
              <Text style={styles.boxText} onPress={() => navigation.navigate('Savings')}>Savings</Text>
          </TouchableOpacity>
        </Pressable>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Income</Text>
        </TouchableOpacity>
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

export default MainMenu;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: STATUSBAR_HEIGHT,  // Adding padding to avoid overlapping with status bar
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  menuIcon: {
    // Additional styling if needed
  },
  profileIcon: {
    // Additional styling if needed
  },
  iconText: {
    fontSize: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  box: {
    width: '40%',
    height: 100,
    backgroundColor: '#CFFFD3',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
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
