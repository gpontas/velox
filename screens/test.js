import { View, StyleSheet, Text } from "react-native";

function MainMenu() {
  return (
    <View style={styles.background}>
        <View style={styles.topBox}>
            <View style={styles.iconTopBox}>
            <   Text>Section 1</Text>
            </View>
            <View style={styles.iconTopBox}>
                <Text>Section 1</Text>
            </View>
        </View>
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
        <View style={styles.botBox}>
            <Text>aaa</Text>
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
        marginTop: 120,
        backgroundColor: "white",
        width: "45%",
        height: 110,
        padding: 20,
        alignSelf: "center",
    },
    welcomeText: { 
        color: "black",
        padding: 10,
        fontSize: 20,
        textAlign: "center",
    },
    sectionsGeneralBox:{
        backgroundColor: "lightblue",
        marginTop: 60,
        alignSelf: "center",
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    buttonContainer: {
        backgroundColor: 'white',
        width: 100, 
        height: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 10, 
        borderRadius: 20,
      },
    topBox: {
        backgroundColor: "lightblue",
        marginTop: 50,
        width: "100%",
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconTopBox: {
        backgroundColor: "white",
        height: 40,
        width: 40,
        marginHorizontal: 20
    },
    botBox: {
        backgroundColor: 'green',
        width: '100%',
        height: 55,
        marginTop: 120

    }
}); 

