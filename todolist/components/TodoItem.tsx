import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export default function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onToggle(todo.id)}
    >
      <Text style={[styles.text, todo.done && styles.textDone]}>
        {todo.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
