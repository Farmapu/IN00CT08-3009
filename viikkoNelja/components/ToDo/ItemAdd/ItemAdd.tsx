import { useState } from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";

type AddItemProps = {
    onAdd: (text: string) => void;
};

const ItemAdd: React.FC<AddItemProps> = ({onAdd}) => {
    const [text, setText] = useState("");
    
    const handleAdd = () => {
        if (!text.trim()) return;
        onAdd(text);
        setText("");
    };

    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={text}
            onChangeText={setText} />
            <Button title="Add" onPress={handleAdd} />
        </View>
    );
};
export default ItemAdd

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  view: {
    margin: 5,
  }
});