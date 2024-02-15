import React, { useState } from "react";
import { Button, TextInput, View, Alert } from "react-native";
import { useUpdateTodoMutation } from "../api/todo-api";

const TodoEdit = ({ route }) => {
  const id = route?.params?.id;
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const [title, setTitle] = useState(route?.params?.title);

  const onSubmit = () => {
    if (title === "") {
      Alert.alert("Error", "Please enter a title");
    } else {
      const body = {
        title: title,
        id: id,
        completed: false,
      };
      updateTodo(body);
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
      <Button title="Update" onPress={onSubmit} />
    </View>
  );
};

export default TodoEdit;
