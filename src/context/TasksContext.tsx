import React from "react";

export interface Iprops {
    children: React.ReactElement;
}

export interface ItaskContext {
    id: string;
    title: string;
    addTask(): void;
}

export const TasksContext = React.createContext<ItaskContext>({} as ItaskContext);

export const TasksProvider: React.FC<Iprops> = ({ children }) => {

    const addTask = () => {
        console.log("Add New Task Teste");

    }

    return (
        <TasksContext.Provider value={{ id: '1', title: 'teste1', addTask }}>
            {children}
        </TasksContext.Provider>
    );
}
