import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { COLORS, RADIUS, FONTS } from '@/constants/theme';
import { Task } from '@/hooks/useTasks';

type Props = {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export default function TaskItem({ task, onDelete, onToggle }: Props) {
  return (
    <BlurView
      intensity={20}
      tint="dark"
      style={[styles.blur, task.done && styles.blurDone]}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => onToggle(task.id)}
          style={styles.checkButton}
          activeOpacity={0.7}
        >
          <Ionicons
            name={task.done ? 'checkmark-circle' : 'ellipse-outline'}
            size={24}
            color={task.done ? COLORS.accent : COLORS.textSecondary}
          />
        </TouchableOpacity>

        <Text
          style={[styles.text, task.done && styles.textDone]}
          numberOfLines={2}
        >
          {task.text}
        </Text>

        <TouchableOpacity
          onPress={() => onDelete(task.id)}
          style={styles.deleteButton}
          activeOpacity={0.7}
        >
          <Ionicons name="trash-outline" size={20} color={COLORS.danger} />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  blur: {
    borderRadius: RADIUS.card,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
    marginBottom: 12,
  },
  blurDone: {
    borderColor: COLORS.doneBorder,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  checkButton: {
    padding: 2,
  },
  text: {
    flex: 1,
    fontSize: FONTS.regular,
    color: COLORS.textPrimary,
    lineHeight: 22,
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: COLORS.textDone,
  },
  deleteButton: {
    padding: 4,
  },
});