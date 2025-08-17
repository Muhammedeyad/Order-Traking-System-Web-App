import type { FormDataType } from "./formDataType";

export interface AuthTypes{
    user: FormDataType | null,
    setUser:  React.Dispatch<React.SetStateAction<FormDataType | null>>,
    currentTheme?: boolean,
    toggleChangeTheme?: ()=> void
}