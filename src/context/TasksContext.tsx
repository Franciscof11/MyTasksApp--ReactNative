import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Iprops {
    children: React.ReactElement;
}

export interface ITask {
    id: string;
    title: string;
}

const tasksData = "@MyTasks: Tasks";

export interface ItaskContext {
    /*tipos do context*/
    tasks: ITask[];
    addTask(tasks: ITask): void;
}

export const TasksContext = React.createContext<ItaskContext>({} as ItaskContext);

export const TasksProvider: React.FC<Iprops> = ({ children }) => {

    const [data, setData] = useState<ITask[]>([]);

    useEffect(() => {
        async function loadTasks() {
            const taskList = await AsyncStorage.getItem(tasksData);

            if (taskList) {
                setData(JSON.parse(taskList));
            }

        }
        loadTasks();
    }, []);

    const addTask = async (task: ITask) => {
        try {
            const newTaskList = [...data, task];
            setData(newTaskList);
            await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
        } catch (error) {
            throw new Error(error as string)
        }
    };



    return (
        <TasksContext.Provider value={{ tasks: data, addTask }}>
            {children}
        </TasksContext.Provider>
    );
}
