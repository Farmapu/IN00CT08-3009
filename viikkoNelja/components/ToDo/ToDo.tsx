import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header/Header";
import ItemAdd from "./ItemAdd/ItemAdd";

type TestItem = {
  id: number;
  text: string;
  done: boolean;
};

const STORAGE_KEY = "TEST_DATA";

const DEFAULT_DATA: TestItem[] = [
  { id: 1, text: "Test", done: false },
  { id: 2, text: "Kokeilu", done: true },
  { id: 3, text: "afjdfaj", done: false },
];

function Test() {
  const [data, setData] = useState<TestItem[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try{
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        setData(stored ? JSON.parse(stored) : DEFAULT_DATA);
    }catch(e){
        console.log(e);
    }
  };

  const saveData = async (newData: TestItem[]) => {
    try{
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }catch(e){
        console.log(e);
    }
  }

  const toggleDone = (id: number) => {
    setData(prev => {
      const updated = prev.map(item =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      );

      AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  const handleAddItem = (text: string) => {
    const newItem: TestItem = {
        id: Date.now(),
        text,
        done: false,
    };
    const newData = [...data, newItem];
    setData(newData);
    saveData(newData);
  }

  return (
    <SafeAreaView style={styles.testDiv}>
            <Header />
            <ItemAdd onAdd={handleAddItem}/>
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Text
          onPress={() => toggleDone(item.id)}
          style={[
            styles.text1,
            item.done && styles.text2,
          ]}
        >
          {item.text}
        </Text>
      )}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  testDiv: {
    flex: 1,
  },
  text1: {
    marginLeft: 10,
    padding: 5,
    fontSize: 20,
  },
  text2: {
    marginLeft: 10,
    padding: 5,
    fontSize: 20,
    textDecorationLine: 'line-through'
  }
});

export default Test