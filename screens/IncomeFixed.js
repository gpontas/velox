import { View, Text, StyleSheet, ScrollView, TouchableOpacity, PanResponder, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const IncomeScreen = ({ navigation }) => {
  // State for Fixed and Dynamic incomes
  const [fixedIncome, setFixedIncome] = useState([
    { id: 1, label: "Salary", date: "Sun 09.06.2024", amount: "+ € 1257", percentage: "100", moneyicon: "%" },
    { id: 2, label: "Tenant from Rome", date: "Fri 07.06.2024", amount: "+ € 750", percentage: "500", moneyicon: "€" },
    { id: 3, label: "Tenant from Napoli", date: "Fri 07.06.2024", amount: "+ € 460", percentage: "460", moneyicon: "€" },
    { id: 4, label: "Family Fund", date: "Wed 05.06.2024", amount: "+ € 600", percentage: "50", moneyicon: "%" },
    { id: 5, label: "Freelancing Gig", date: "Tue 09.06.2024", amount: "+ € 600", percentage: "100", moneyicon: "%" }
  ]);

  const [dynamicIncome, setDynamicIncome] = useState([
    { id: 6, label: "Aruta", date: "Wed 12.06.2024", amount: "+ 15,00 €", percentage: "100", moneyicon: "%" },
    { id: 7, label: "Gustavo", date: "Fri 07.06.2024", amount: "+ 250,00 €", percentage: "200", moneyicon: "€" },
    { id: 8, label: "Amazon reimb.", date: "Wed 05.06.2024", amount: "+ 68,64 €", percentage: "100", moneyicon: "%" },
    { id: 9, label: "Asli", date: "Fri 07.06.2024", amount: "+ 26,70 €", percentage: "15", moneyicon: "€" },
    { id: 10, label: "Mom", date: "Tue 09.06.2024", amount: "+ 100,00 €", percentage: "100", moneyicon: "%" }
  ]);

  
  const [selectedTab, setSelectedTab] = useState('Fixed');
  const headerGradientColor = selectedTab === 'Fixed' 
  ? ['#8FDFCC', '#17C59B']
  : ['#FEBBFB', '#B574D3'];
  const triangleColor = selectedTab === 'Fixed' ? '#C8A3E1' : '#A6E1D9';
  const moveboxColor = selectedTab === 'Fixed' ? '#C8A3E1' : '#A6E1D9';
  const moveboxText = selectedTab === 'Fixed' ? 'Move to Dynamic' : 'Move to Fixed';

 // Function to move an income from Fixed to Dynamic
const moveToDynamic = (income) => {
  setFixedIncome((prevFixed) => prevFixed.filter((item) => item.id !== income.id));
  setDynamicIncome((prevDynamic) => [income, ...prevDynamic]); // Add to the beginning of the list
};

// Function to move an income from Dynamic to Fixed
const moveToFixed = (income) => {
  setDynamicIncome((prevDynamic) => prevDynamic.filter((item) => item.id !== income.id));
  setFixedIncome((prevFixed) => [income, ...prevFixed]); // Add to the beginning of the list
};


return (
  <View style={styles.container}>
    {/* Header Section */}
    {/* Gradient Header using expo-linear-gradient */}
    <LinearGradient
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={headerGradientColor}
      style={styles.header}
    >
      <Text style={styles.headerTitle}>INCOME</Text>
      <View style={[styles.tabContainer, { backgroundColor: selectedTab === 'Fixed' ? '#E5F8F4' : '#E6CFE6' }]}>
        <TouchableOpacity
          onPress={() => setSelectedTab('Fixed')}
          style={selectedTab === 'Fixed' ? styles.tabActive : styles.tabInactive}
        >
          <Text style={styles.tabTextActive}>Fixed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('Dynamic')}
          style={selectedTab === 'Dynamic' ? styles.tabActive : styles.tabInactive}
        >
          <Text style={styles.tabTextActive}>Dynamic</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>

    {/* Render Income List based on selected tab */}
    {selectedTab === 'Fixed' ? (
      <ScrollView contentContainerStyle={styles.incomeContainer}>
        {fixedIncome.map((income) => (
          <IncomeItem
            key={income.id}
            {...income}
            triangleColor={triangleColor}
            moveboxColor={moveboxColor}
            moveboxText={moveboxText}
            moveItem={moveToDynamic} // Move to Dynamic
            navigation={navigation}
          />
        ))}
      </ScrollView>
    ) : (
      <ScrollView contentContainerStyle={styles.incomeContainer}>
        {dynamicIncome.map((income) => (
          <IncomeItem
            key={income.id}
            {...income}
            triangleColor={triangleColor}
            moveboxColor={moveboxColor}
            moveboxText={moveboxText}
            moveItem={moveToFixed} // Move to Fixed
            navigation={navigation}
          />
        ))}
      </ScrollView>
    )}

    {/* Footer Section */}
    <View style={styles.footer}>
      <TouchableOpacity>
        <Text style={styles.footerIcon}>ⓥ</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.footerIcon}>➤</Text>
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

};

const IncomeItem = ({ label, date, amount, percentage, moneyicon, navigation, triangleColor, moveboxColor, moveboxText, moveItem, id }) => {
  // State to handle triangle drag
  const pan = useRef(new Animated.ValueXY()).current;
  const [draggedFarEnough, setDraggedFarEnough] = useState(false);

  // Interpolation for smoother trailing effect
  const boxTranslateX = pan.x.interpolate({
    inputRange: [-325, 0],
    outputRange: [-180, 0],  // Adjust the trailing effect to stay behind the triangle
    extrapolate: 'clamp',
  });

  const boxOpacity = pan.x.interpolate({
    inputRange: [-325, -30],
    outputRange: [1, 0],  // Box becomes visible as you swipe
    extrapolate: 'clamp',
  });

  

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({ x: pan.x._value, y: pan.y._value });
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx < -30) {
        setDraggedFarEnough(true);  // Set when triangle has been dragged far enough

        // Animate the triangle to the end of the box (left side)
        Animated.spring(pan, {
          toValue: { x: -325, y: 0 }, // Adjust x value based on box width
          useNativeDriver: false,
          friction: 8,  // For smoothness
          //tension: 40,
        }).start(() => {
          moveItem({ id, label, date, amount, percentage, moneyicon });

          // Hide the box and triangle after some time
          setTimeout(() => {
            setDraggedFarEnough(false);
            pan.setValue({ x: 0, y: 0 }); // Reset the triangle's position after it disappears
          }, 1000);
        });
      } else {
        // Reset the triangle position if not dragged far enough
        setDraggedFarEnough(false);
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
          friction: 8, 
          tension: 40,
        }).start();
      }
      pan.flattenOffset();
    },
  });

  return (
    <View style={styles.box}>
      {/* TouchableOpacity for the income details and navigation */}
      <TouchableOpacity onPress={() => navigation.navigate("DigitIncome")} style={styles.incomeItem}>
        <View style={styles.incomeDetails}>
          <Text style={styles.incomeLabel}>{label}</Text>
          <Text style={styles.incomeDate}>{date}</Text>
          <Text style={styles.incomeAmount}>{amount}</Text>
        </View>
        <View style={styles.incomeStatsContainer}>
          <View style={styles.incomeStats}>
            <Text style={styles.incomePercentage}>{percentage}{moneyicon}</Text>
            <Text style={styles.incomeBudgetText}>in the budget</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Draggable Triangle */}
      <Animated.View {...panResponder.panHandlers} style={[styles.triangleContainer, { transform: [{ translateX: pan.x }] }]}>
        <View style={[styles.percentageTriangle, { borderTopColor: triangleColor }]} />
      </Animated.View>

      {/* Only render the "Move to Fixed" box if dragged far enough */}
      {draggedFarEnough && (
      <Animated.View
      style={[
      styles.moveToFixedBox,
      {
        backgroundColor: moveboxColor,
        transform: [{ translateX: boxTranslateX }],
        opacity: boxOpacity, // Animate opacity for smooth appearance
      }
    ]}
  >
    <Text style={styles.moveToFixedText}>{moveboxText}</Text>
  </Animated.View>
)}
    </View>

  );
};






const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    width: "100%",
    backgroundColor: '#A6E1D9',
    top: 0,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitle: {
    marginTop: -20,
    marginBottom: 20,
    marginLeft: -200,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#E5F8F4',
    borderRadius: 15,
    padding: 5,
  },
  tabActive: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  tabInactive: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabTextActive: {
    color: '#333',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: '#888',
  },
  dateFilter: {
    marginTop: 10,
    paddingLeft: 20,
    height: 70,
    
  },
  monthItem: {
    marginRight: 15,
    paddingVertical: 10,
    
    
  },
  monthText: {
    color: '#888',
    marginBottom: 10
    
  },
  selectedMonth: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    height: 40,
  },
  selectedMonthText: {
    color: '#333',
    fontWeight: 'bold',

    
  },
  yearText: {
    color: '#888',
    paddingVertical: 10,
    paddingLeft: 10,
    marginLeft: 10,
  },
  incomeContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100, // for spacing above the bottom navigation

  },
  incomeItem: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  incomeDetails: {
    flexDirection: 'column',
  },
  incomeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  incomeDate: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  incomeAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  incomeStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  incomeStats: {
    alignItems: 'center',
    marginRight: 50, // Space between text and the triangle
  },
  incomePercentage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A673D4', // Purple color for the percentage
  },
  incomeBudgetText: {
    fontSize: 12,
    color: '#888',
  },
  percentageTriangle: {
    
    paddingVertical:18,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 0,
    height: 0,
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderTopWidth: 40,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#C8A3E1', // Light purple for the triangle
    transform: [{ rotateZ: '90deg' }], // Flip vertically
    marginLeft: -15, // Shift the triangle slightly to overlap the card
    
    
    
  },

  triangleContainer: {
    position: 'absolute',
    top: 0, // Adjust this to position the triangle vertically inside the income box
    right:3 , // Position it to the right side of the box
    top: 25,
  },

  moveToFixedBox: {
    position: 'absolute',
    right: -200,
    width: '100%', // Same width as the income item
    paddingHorizontal: 15, // Match the padding of the income item
    paddingVertical: 38, // Adjust vertical padding as needed
    backgroundColor: '#C8A3E1',
    marginTop: 15, // Adjust to align vertically with the triangle
    borderRadius: 10, // Optional: to give the box rounded corners
    opacity: 0, // Initially hidden, will be animated
  },
  moveToFixedText:{
    
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFF",
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E5F8F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems:"center",
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    marginHorizontal: -30,
  },
  footerIcon: {
    fontSize: 35,
  },
});

export default IncomeScreen;
