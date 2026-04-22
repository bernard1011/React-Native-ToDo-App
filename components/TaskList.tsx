import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskItem from './TaskItem';
import { Task } from '@/hooks/useTasks';
import { COLORS, FONTS } from '@/constants/theme';

type Props = {
    tasks: Task[];
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

const TaskList = ({tasks, onDelete, onToggle}: Props) => {
    if (tasks.length === 0) {
    return (
      <View style={styles.empty}>
        <Ionicons name="checkmark-done-circle-outline" size={64} color={COLORS.textSecondary} />
        <Text style={styles.emptyTitle}>Список порожній</Text>
        
      </View>
    );
}


return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 30,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    opacity: 0.6,
  },
  emptyTitle: {
    fontSize: FONTS.large,
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
 
});

export default TaskList