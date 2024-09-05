import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const ToDo = () => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const handleInput = (enteredValue: any) => {
    setEnteredTodo(enteredValue);
  };
  const handleAddTodo = () => {
    setTodoList(Todo => [...Todo, enteredTodo]);
    setEnteredTodo('');
  };
  return (
    <View className="h-full pt-10 bg-white dark:bg-slate-800">
      <Text className="text-4xl font-black pt-6 text-center text-black dark:text-white">
        Todo
      </Text>
      <View className="mt-2 flex flex-row items-center justify-between p-4">
        <TextInput
          value={enteredTodo}
          onChangeText={handleInput}
          className="h-10 w-9/12 px-1.5 py-3 bg-gray-500 dark:bg-white text-white dark:text-black rounded-md"
          placeholder="Enter Your Todo!"
        />
        <TouchableOpacity
          onPress={handleAddTodo}
          className="bg-green-500 p-2 rounded-md">
          <Text className="text-sm text-white dark:text-black">Add Todo</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-4 bg-[#ccc] h-0.5 w-full" />
      <ScrollView className="p-4 mb-5">
        {todoList.map((todo, index) => (
          <View
            key={index}
            className="mt-2.5 rounded-md p-3 bg-gray-500 dark:bg-gray-400">
            <Text className="text-white font-extrabold">{todo}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ToDo;
