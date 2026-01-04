import { View, Text, StyleSheet } from "react-native";

function Header() {
    
    return( 
        <View style={styles.div}>
            <Text style={styles.text}>Todo list</Text>
        </View>
    );
};
export default Header

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  div: {
    alignItems: "center"
  }
});