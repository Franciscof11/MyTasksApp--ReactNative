import React, { useContext } from "react";
import { Task } from "react-native";
import { ItaskContext, TasksContext } from "../context/TasksContext";
import { ScrollListTasks, TaskContentTouchView, TaskContentText } from "../styles/HomeScreenStyles";

export const TaskList: React.FC = () => {
    const tasks = useContext(TasksContext);
    return (

        <ScrollListTasks
            data={tasks as unknown as ItaskContext[]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TaskContentTouchView>
                    <TaskContentText>{item.title}</TaskContentText>
                </TaskContentTouchView>
            )}
        />

    );
}
