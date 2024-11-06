import React, {useEffect} from 'react';
import {View, FlatList, Button, Text} from 'react-native';
import TaskCard from '../components/TaskCard';
import {useTasks} from '../hooks/useTask';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../router/AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type TaskListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TaskList'
>;

const TaskListScreen = () => {
  const {tasks, fetchTasks, deleteTask} = useTasks();
  const navigation = useNavigation<TaskListScreenNavigationProp>();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TaskCard
            task={item}
            onDelete={() => deleteTask(item.id)}
            onPress={() => navigation.navigate('TaskDetail', {task: item})}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>Görev yok</Text>}
      />
    </View>
  );
};

export default TaskListScreen;
