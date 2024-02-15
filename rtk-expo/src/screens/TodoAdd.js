import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useAddToDoMutation } from "../api/todo-api";

const TodoAdd = () => {
  const [title, setTitle] = useState("");
  const [addAnewTodo, { isError, isSuccess, isLoading }] = useAddToDoMutation();

  const onSubmit = () => {
    if (title === "") {
      Alert.alert("Error", "Please enter a title");
    } else {
      // Submit form (e.g., post to JSON server)
      // Remember to reset the form after successfully submitting
      const body = {
        title: title,
        completed: false,
      };
      addAnewTodo(body);
      console.log(`Submitted: ${title}`);
      setTitle("");
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Enter Todo Title"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
        }}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Create a new todo" onPress={onSubmit} />
      )}
    </View>
  );
};

export default TodoAdd;
