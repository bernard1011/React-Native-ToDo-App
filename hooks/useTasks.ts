import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@tasks';

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          setTasks(JSON.parse(json));
        }
      } catch (e) {
        console.error("Помилка завантаження", e);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      if (!loading) {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      }
    };
    
    saveData();
  }, [tasks, loading]);


  const addTask = (text: string) => {
    if (!text.trim()) return; 

    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
      done: false,
    };

    setTasks([newTask, ...tasks]); 
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }; 
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const clearAll = () => {setTasks([])}

  return { tasks, loading, addTask, deleteTask, toggleTask, clearAll };
};

export default useTasks;