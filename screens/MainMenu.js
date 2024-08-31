import { View, StyleSheet, Text } from "react-native";

function MainMenu() {
  return (
    <View style={styles.background}>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>WELCOME TO VELOX</Text>
        </View>
        <View style={styles.sectionsGeneralBox}>
            <View style={styles.row}>
                <View style={styles.buttonContainer}> 
                    <Text>Section 1</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text>Section 2</Text>  
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <Text>Section 3</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text>Section 4</Text>  
                </View>
            </View>
        </View>
    </View>
  );
}

export default MainMenu;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    welcomeContainer: {
        marginTop: 160,
        backgroundColor: "white",
        width: "45%",
        height: "120",
        padding: 20,
        alignSelf: "center",
        justifyContent: "center",
    },
    welcomeText: { 
        color: "black",
        padding: 10,
        fontSize: 20,
        textAlign: "center",
    },
    sectionsGeneralBox:{
        backgroundColor: "green",
        marginTop: 60,
        alignSelf: "center",
    },
    row: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 20, 
    },
    buttonContainer: {
        backgroundColor: 'white',
        width: 100, 
        height: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 10, 
      },
}); 