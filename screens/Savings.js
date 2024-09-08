import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, ScrollView, Pressable, FlatList} from 'react-native';

const months = [
  'June', 'May', 'April', 'March', 'February', 'January'
];

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
      
      <View style={styles.savingsBox}>
        <Text style={styles.savingsText}>SAVINGS</Text>
        <Text style={styles.moneyEmoji}>⛃</Text>
      </View>

      <View style={styles.euroStyle}>
        <Text style={styles.euroText}>1.234,56 $</Text>
      </View>

      <View>
        <Text style={styles.yearStyle}>Year</Text>
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

    <View style={styles.containerMonths}>
      <FlatList 
        data={months}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}  // Single column
        renderItem={({ item }) => (
          item === 'June' ? (
            <TouchableOpacity 
              onPress={() => navigation.navigate('SavingsJune')}  
              style={styles.boxMonths}  // Apply the style to the TouchableOpacity
            >
              <Text style={styles.textMonths}>
                {item}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.boxMonths}>
              <Text style={styles.textMonths}>
                {item}
              </Text>
            </View>
          )
        )}
      />
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
  },
  containerMonths: {
    flex: 1,
    padding: 16,
    width: '90%',
    marginLeft: 12,
  },
  boxMonths: {
    flex: 1,
    height: 75,
    width: 300,
    margin: 10,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  textMonths: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
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

  box: {  // Dropdown box
    marginLeft: 30,
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
  yearStyle: {
    color: 'black',
    fontSize: 16,
    marginLeft: 25,
    marginBottom: 5,
  },
  savingsBox: {
    flexDirection: 'row',
    height: 65,
    width: 200,
    backgroundColor: '#F8F8F8',
    padding: 20,
    margin: 10,
    marginTop: 0,
    borderRadius: 5,
    alignItems: 'center',    
  },
  savingsText: {
    marginTop: 3,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  moneyEmoji: {
    marginLeft: 14,

    fontSize: 22,
    alignSelf: 'top',
  },
  euroStyle: {
    marginLeft: 25,
    marginBottom: 20,
  },
  euroText: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
