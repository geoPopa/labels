import React from "react";

export const useLocalStorage: CallableFunction = (key: string, defaultValue: any): [string, CallableFunction] => {
    const [value, setValue] = React.useState(() => {
        return JSON.parse(localStorage.getItem(key) ?? '[]') ?? defaultValue
    });

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}