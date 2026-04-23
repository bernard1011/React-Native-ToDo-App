import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import  useTasks  from '@/hooks/useTasks';
import { COLORS, FONTS, RADIUS } from '@/constants/theme';

const HomeScreen = () => {
  const { tasks, addTask, deleteTask, toggleTask, clearAll } = useTasks();
  const doneCount = tasks.filter((t) => t.done).length;
  const isEmpty = tasks.length === 0;

  const headerAnim = useRef(new Animated.Value(isEmpty ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(headerAnim, {
      toValue: isEmpty ? 1 : 0,
      useNativeDriver: false,
      tension: 60,
      friction: 10,
    }).start();
  }, [isEmpty]);

  const titleFontSize = headerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [FONTS.title, 42],
  });

  const containerJustify = isEmpty ? 'space-between' : 'flex-start';

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientMid, COLORS.gradientEnd]}
      style={styles.gradient}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe}>
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
  >
  <View style={[styles.container, { justifyContent: containerJustify }]}>
          <View style={isEmpty ? styles.headerEmpty : styles.headerFilled}>
            <View style={isEmpty ? styles.titleWrapEmpty : styles.titleWrapFilled}>
              <Animated.Text style={[styles.title, { fontSize: titleFontSize }]}>
                Мої завдання
              </Animated.Text>
              {!isEmpty && (
                <Text style={styles.subtitle}>
                  {doneCount} з {tasks.length} виконано
                </Text>
              )}
            </View>
            {!isEmpty && (
              <TouchableOpacity
                onPress={clearAll}
                style={styles.clearButton}
                activeOpacity={0.7}
              >
                <Ionicons name="trash" size={18} color={COLORS.danger} />
                <Text style={styles.clearText}>Очистити</Text>
              </TouchableOpacity>
            )}
          </View>

          {isEmpty && (
            <View style={styles.emptyCenter}>
              <Ionicons
                name="checkmark-done-circle-outline"
                size={64}
                color={COLORS.textSecondary}
              />
              <Text style={styles.emptySubtitle}>Додай своє перше завдання</Text>
            </View>
          )}

          <View style={isEmpty ? styles.bottomEmpty : styles.bottomFilled}>
            <TaskInput onAdd={addTask} />
            {!isEmpty && (
              <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />
            )}
          </View>

       </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  headerEmpty: {
    alignItems: 'center',
    paddingTop: 40,
  },
  titleWrapEmpty: {
    alignItems: 'center',
  },

  headerFilled: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  titleWrapFilled: {
    alignItems: 'flex-start',
  },

  title: {
    fontWeight: '700',
    color: COLORS.textPrimary,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: FONTS.small,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  emptyCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    opacity: 0.6,
  },
  emptySubtitle: {
    fontSize: FONTS.regular,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },

  bottomEmpty: {
    paddingBottom: 10,
  },
  bottomFilled: {
    flex: 1,
  },

  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(248, 113, 113, 0.15)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: RADIUS.button,
    borderWidth: 1,
    borderColor: 'rgba(248, 113, 113, 0.3)',
  },
  clearText: {
    fontSize: FONTS.small,
    color: COLORS.danger,
    fontWeight: '600',
  },
});

export default HomeScreen;