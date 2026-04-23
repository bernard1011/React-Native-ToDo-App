import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { COLORS, RADIUS, FONTS } from '@/constants/theme';

type Props = {
  onAdd: (text: string) => void;
};

const TaskInput = ({ onAdd }: Props) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <BlurView intensity={30} tint="dark" style={styles.blur}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Нове завдання..."
          placeholderTextColor={COLORS.textSecondary}
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleAdd}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={[styles.button, !text.trim() && styles.buttonDisabled]}
          onPress={handleAdd}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  blur: {
    borderRadius: RADIUS.input,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.glassBorder,
    marginBottom: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: FONTS.regular,
    color: COLORS.textPrimary,
    paddingVertical: 8,
    paddingRight: 12,
  },
  button: {
    backgroundColor: COLORS.accentDark,
    borderRadius: RADIUS.button,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.4,
  },
});

export default TaskInput