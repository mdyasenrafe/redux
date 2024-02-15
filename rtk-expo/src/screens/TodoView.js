import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { useGetSingleTodoQuery, useUpdateTodoMutation } from "../api/todo-api";

const TodoViewScreen = ({ navigation, route }) => {
  const id = route?.params?.id;
  // Dummy data
  const { data, isLoading, isError } = useGetSingleTodoQuery(id);
  const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.status}>
          Status: {data?.completed ? "Completed" : "Not Completed"}
        </Text>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Edit"
            onPress={() => {
              navigation.navigate("TodoEdit", {
                id: data?.id,
                title: data?.title,
              });
            }}
          />
          {isUpdating ? (
            <ActivityIndicator />
          ) : (
            <Button
              title={
                data?.completed ? "Mark as incompleted" : "Mark as completed"
              }
              onPress={() =>
                updateTodo({
                  id: data?.id,
                  title: data?.title,
                  completed: data?.completed ? false : true,
                })
              }
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    color: "red",
  },
  status: {
    fontSize: 18,
    color: "gray",
  },
});

export default TodoViewScreen;
