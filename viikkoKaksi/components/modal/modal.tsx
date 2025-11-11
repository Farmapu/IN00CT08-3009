import React, {useState} from "react";
import { Pressable, StyleSheet, View, Text, Modal } from "react-native";

function ModalTest() {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
        <Modal visible={modalVisible} style={styles.modal}
        onRequestClose={() => {setModalVisible(!modalVisible)}}>
            <View style={styles.modal}>
                <Text>This is modal...</Text>
                <Text />
                <Pressable onPress={() => setModalVisible(false)}>
                    <Text style={styles.text}>Close</Text>
                </Pressable>
            </View>
        </Modal>
        <Pressable onPress={() => setModalVisible(true)}>
            <Text>Show modal message</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 10,
  },
  text: {
    fontWeight: 'bold'
  }
});

export default ModalTest