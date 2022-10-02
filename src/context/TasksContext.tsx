import React, { useContext, useEffect, useState } from "react";
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
    removeTask(id: string): void;
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
            setData(newTaskList); /*Atualiza o estado*/
            await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList)); /*Atualiza o storage*/
        } catch (error) {
            throw new Error(error as string)
        }
    };

    const removeTask = async (id: string) => {
        const newTaskList = data.filter(task => task.id != id);
        setData(newTaskList);/*Atualiza o estado*/
        await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));/*Atualiza o storage*/
    }

    return (
        <TasksContext.Provider value={{ tasks: data, addTask, removeTask }}>
            {children}
        </TasksContext.Provider>
    );
}

export function useTaskList(): ItaskContext {
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error("useTaskList deve ser usado em um TaskProvider");
    }

    return context;

}
