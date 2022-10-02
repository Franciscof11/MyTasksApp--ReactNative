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
            const taskList = await AsyncStorage;
        }
    }, []);

    const addTask = (task: ITask) => {
        console.log("Add New Task Teste");

    }

    const tasks = [{ id: '1', title: "hi" }]

    return (
        <TasksContext.Provider value={{ tasks, addTask }}>
            {children}
        </TasksContext.Provider>
    );
}
