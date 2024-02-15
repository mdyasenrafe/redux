import React from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useGetAllTodosQuery } from "../api/todo-api";

const TodoListScreen = ({ navigation }) => {
  const deleteTodo = (id) => {
    // Logic to delete todo
    console.log(`Deleting ${id}`);
  };

  const { isLoading, data, error, isFetching, refetch } = useGetAllTodosQuery();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate("TodoView", { id: item.id })}
      >
        <Text
          style={{
            color: item?.completed ? "green" : "red",
            fontSize: 14,
          }}
        >
          {item.title}
        </Text>
        <Button
          title="Delete"
          onPress={() => {
            deleteTodo();
          }}
        />
      </Pressable>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onRefresh={refetch}
      refreshing={isFetching}
      ListFooterComponent={() => {
        return (
          <View style={{ marginTop: 20 }}>
            <Button
              title="Add a new todo"
              onPress={() => navigation.navigate("TodoAdd")}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TodoListScreen;
