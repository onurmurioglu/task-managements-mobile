import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {Task} from '../types/Task';

interface TaskCardProps {
  task: Task;
  onDelete: () => void;
  onPress: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({task, onDelete, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{padding: 10, borderBottomWidth: 1}}>
      <Text style={{fontSize: 18}}>{task.title}</Text>
      <Text>{task.description}</Text>
      <Button title="Sil" onPress={onDelete} />
    </TouchableOpacity>
  );
};

export default TaskCard;
