import { createContext, useState, ReactNode } from "react";

interface MealContextData {
    meals: MealData[];
    createMeal: (params: MealData) => void
}

interface MealContextProps {
    children: ReactNode
}

interface MealData {
    name: string;
    pic: string;
}

export const MealContext = createContext({} as MealContextData)

export function MealContextProvider ({children }: MealContextProps) {
    const [meals, setMeals] = useState([])

    const createMeal = (meal: MealData) => {
        setMeals([...meals, meal])
    }

    return (
        <MealContext.Provider value={{
            meals,
            createMeal
        }}>
            {children}
        </MealContext.Provider>
    )
}

