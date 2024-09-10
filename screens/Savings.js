import {useState, useContext, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, ScrollView, Pressable, FlatList} from 'react-native';
import { GlobalContext } from '../GlobalState';

const months = [
  'June', 'May', 'April', 'March', 'February', 'January'
];

const amountText=[
  "+ 597 €", "- 75 €", "+ 522 €", "+ 635 €", "+ 270 €", "+ 323 €"
]


function Savings({ navigation }) {

  const { initSavings}  = useContext(GlobalContext);

  const {setInitSavings} = useContext(GlobalContext);

  const { savedValueSavings } = useContext(GlobalContext);

  const { setSavedValueSavings } = useContext(GlobalContext);

  const { savedPrevSavings, setSavedPrevSavings } = useContext(GlobalContext);

  const [savings, setSavings] = useState(initSavings);
  

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024');

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectYear = (year) => {
    setSelectedYear(year); // Update the selected year
    setDropdownVisible(false); // Hide the dropdown after selection
  }

  useEffect(() => {
    if (savedValueSavings !== null && savedValueSavings !== undefined) {
      // Use the previous budget value to apply the subtraction
      setSavings(prevBudget => prevBudget + savedValueSavings);
      setInitSavings(prevBudget => prevBudget + savedValueSavings);
      setSavedValueSavings(0);
    }
  }, [savedValueSavings]);

  const formattedSavings = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(savings);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.savingsBox}>
        <Text style={styles.savingsText}>SAVINGS</Text>
        <Text style={styles.moneyEmoji}>⛃</Text>
      </View>

      <View style={styles.euroStyle}>
        <Text style={styles.euroText}>{formattedSavings}</Text>
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
    renderItem={({ item, index}) => (
      item === 'June' ? (
        <TouchableOpacity 
          onPress={() => navigation.navigate('SavingsJune')}  
          style={[
            styles.boxMonths, 
            { backgroundColor: '#CEFFD9' }  // Apply lightgreen background for June
          ]}
        >
          <Text style={styles.textMonths}>
            {item}</Text>
          <Text style={styles.amountText}>{amountText[index]}</Text>
            
          


        </TouchableOpacity>
      ) : (
        <View 
          style={[
            styles.boxMonths, 
            { backgroundColor: item === 'May' ? '#FFC9C9' : '#CEFFD9' }  // Apply lightblue for May, lightgray for others
          ]}
        >
          <Text style={styles.textMonths}>
            {item}</Text>
          <Text style={styles.amountText}>{amountText[index]}</Text>
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
    width: '100%',
    marginLeft: 1,
  },
  boxMonths: {
    flex: 1,
    height: 75,
    width: 320,
    margin: 10,
    backgroundColor: 'lightgreen',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textMonths: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  amountText:{
    marginLeft: 120,
    color:"black",
    fontSize: 20,
    fontWeight: "bold",
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Elevation for Android
    elevation: 5,
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
    padding: 10,
    margin: 10,
    marginTop: 0,
    borderRadius: 5,
    alignItems: 'center',    
  },

  savingsText: {
    marginLeft: 0,
    marginTop: 3,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  moneyEmoji: {
    marginLeft: 14,
    marginTop: 4,

    fontSize: 36,
    alignSelf: 'top',
  },
  euroStyle: {
    marginLeft: 25,
    marginBottom: 20,
  },
  euroText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
