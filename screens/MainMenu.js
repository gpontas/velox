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
          <Text style={styles.iconText}>⌂</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>WELCOME TO VELOX</Text>
      <View style={styles.gridContainer}>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Account</Text>
        </TouchableOpacity>

        <Pressable onPress={() => navigation.navigate('Budget')} style={styles.box}>
          <TouchableOpacity>
            <Text style={styles.boxText} onPress={() => navigation.navigate('Budget')}>Budget</Text>
          </TouchableOpacity>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Savings')} style={styles.box}>
          <TouchableOpacity>
              <Text style={styles.boxText} onPress={() => navigation.navigate('Savings')}>Savings</Text>
          </TouchableOpacity>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('IncomeFixed')} style={styles.box}>
          <TouchableOpacity>
            <Text style={styles.boxText} onPress={() => navigation.navigate('IncomeFixed')}>Income</Text>
          </TouchableOpacity>
        </Pressable>

        <TouchableOpacity onPress={() => navigation.navigate('IncomeFixed')} style={styles.recentlyViewedContainer}>
  <Text style={styles.recentlyViewedText}>Recently Viewed</Text>
</TouchableOpacity>

      </View>
      <View style={styles.footer}> 
        <TouchableOpacity>
          <Text style={styles.footerIcon}>ⓥ</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>➤ </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>↯</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>⚙︎</Text>
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
    fontSize: 30
  },
  profileIcon: {
    // Additional styling if needed
  },
  iconText: {
    fontSize: 40,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: -40,
    marginTop: 0,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 50,
  },
  box: {
    width: '45%',
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
    fontSize: 35,
  },
  recentlyViewedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
    marginTop: 120,
    borderWidth: 5, // Border to match the design
    borderColor: '#9C27B0', // Light purple color
    borderRadius: 10, // Rounded corners
    paddingVertical: 10, // Vertical padding for touchable area
    paddingHorizontal: 20, // Horizontal padding for touchable area
    marginVertical: 20, // Adds some space between this and other elements
    alignSelf: 'center', // Align center in parent container
  },
  recentlyViewedText: {
    color: '#9C27B0', // Purple text color
    fontSize: 16,
    fontWeight: 'bold',
  }
  
});
