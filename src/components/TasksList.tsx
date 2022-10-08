import React from "react";
import { Alert } from "react-native";
import { ITask, useTaskList } from "../context/TasksContext";
import { ScrollListTasks, TaskContentTouchView, TaskContentText, DeleteTaskButton } from "../styles/HomeScreenStyles";
import { Delete_Task_Button } from "./Delete_Task_Button";

export const TaskList: React.FC = () => {

    const { tasks, removeTask } = useTaskList();

    const handleRemoveTask = (id: string) => {
        Alert.alert("Delete task", "Are you sure you want to delete this task?", [
            { /*Botão 1 do alert*/
                text: "Cancel",
                onPress: () => { },
            },
            { /*Botão 2  do alert*/
                text: "Yes, I'm sure.",
                onPress: () => removeTask(id)
            }
        ])
    }

    return (

        <ScrollListTasks
            data={tasks as unknown as ITask[]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TaskContentTouchView >
                    <TaskContentText>{item.title}</TaskContentText>
                    <DeleteTaskButton onPressIn={} onPress={() => handleRemoveTask(item.id)}>
                        <Delete_Task_Button />
                    </DeleteTaskButton>

                </TaskContentTouchView>
            )}
        />
    );
}
