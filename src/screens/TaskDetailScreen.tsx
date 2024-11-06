import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../router/AppNavigator';

type TaskDetailScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetail'>;

const TaskDetailScreen = () => {
  const route = useRoute<TaskDetailScreenRouteProp>();
  const task = route.params.task;

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Görev bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TaskDetailScreen;
