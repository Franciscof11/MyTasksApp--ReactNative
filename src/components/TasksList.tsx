import React, { useContext } from "react";
import { ITask, ItaskContext, TasksContext, useTaskList } from "../context/TasksContext";
import { ScrollListTasks, TaskContentTouchView, TaskContentText } from "../styles/HomeScreenStyles";

export const TaskList: React.FC = () => {
    const { tasks } = useTaskList();
    return (

        <ScrollListTasks
            data={tasks as unknown as ITask[]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TaskContentTouchView>
                    <TaskContentText>{item.title}</TaskContentText>
                </TaskContentTouchView>
            )}
        />

    );
}
