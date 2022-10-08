import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {
    AddTaskButton, ButtonText, LoginInput, TitleTasks,
    TitleText, ViewBackground, ViewContainer
} from "../styles/HomeScreenStyles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TaskList } from "../components/TasksList";
import { TasksContext, useTaskList } from "../context/TasksContext";

export const HomeScreen: React.FC = () => {

    const [newTask, setNewTask] = useState('');

    const { addTask } = useTaskList();

    const addNewTask = () => {
        const data = {
            id: String(new Date().getTime()), /*Garantir id único para cada task.*/
            title: newTask ? newTask : 'Empty Task',
        };

        addTask(data);

        setNewTask(''); /*Limpa o input após inserir nova Task*/
    };

    return (
        <ViewBackground >
            <ViewContainer>
                <View style={{ width: 400 }}>
                    <TitleText>Hi there!</TitleText>
                    <TitleText>Manage your tasks 📝</TitleText>
                </View>

                <View>

                    <LoginInput
                        cursorColor={Colors.white}
                        placeholderTextColor="#555"
                        placeholder="Task name"
                        onChangeText={setNewTask}
                        value={newTask}
                    ></LoginInput>

                    <AddTaskButton
                        onPress={addNewTask}
                        activeOpacity={0.35}>
                        <ButtonText>Add new task</ButtonText>
                    </AddTaskButton>

                </View>

                <TitleTasks>My Tasks :</TitleTasks>

                <TaskList />

            </ViewContainer>
            <StatusBar style="light" backgroundColor="#121214" />
        </ViewBackground >
    );

}
