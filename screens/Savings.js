import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, ScrollView} from 'react-native';



function Savings({ navigation }) {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024');

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectYear = (year) => {
    setSelectedYear(year); // Update the selected year
    setDropdownVisible(false); // Hide the dropdown after selection
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View>
        <Text>Savings</Text>
      </View>

      <View>
        <Text>1.234,56 $</Text>
      </View>

      <TouchableOpacity style={styles.box} onPress={toggleDropdown}>
        <Text style={styles.boxText}>{selectedYear}</Text>
      </TouchableOpacity>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => selectYear('2024')}>
            <Text style={styles.dropdownItemText}>2024</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => selectYear('2023')}>
            <Text style={styles.dropdownItemText}>2023</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView>
        <View>
          <Text>January</Text>
        </View>
        <View>
          <Text>February</Text>
        </View>
        <View>
          <Text>March</Text>
        </View>
        <View>
          <Text>April</Text>
        </View>
        <View>
          <Text>May</Text>
        </View>
        <View>
          <Text>June</Text>
        </View>
        <View>
          <Text>July</Text>
        </View>
        <View>
          <Text>August</Text>
        </View>
        <View>
          <Text>September</Text>
        </View>
        <View>
          <Text>October</Text>
        </View>
        <View>
          <Text>November</Text>
        </View>
        <View>
          <Text>December</Text>
        </View>
      </ScrollView>



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

  box: {
    width: 200,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    zIndex: 1,
  },
  boxText: {
    color: 'black',
    fontSize: 18,
    
  },
  dropdown: {
    position: 'absolute',
    top: 118,
    width: 200,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    zIndex: 2,
  },
  dropdownItem: {
    padding: 15,
    alignItems: 'center',
  },
  dropdownItemText: {
    fontSize: 18,
  },
});
