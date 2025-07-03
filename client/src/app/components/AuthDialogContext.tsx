"use client"
import { createContext, useContext, useState } from "react"

type DialogType = "login" | "register" | null

const AuthDialogContext = createContext<{
    openDialog: DialogType
    setOpenDialog: (dialog: DialogType) => void
}>({
    openDialog: null,
    setOpenDialog: () => { }
})

export const AuthDialogProvider = ({ children }: { children: React.ReactNode }) => {
    const [openDialog, setOpenDialog] = useState<DialogType>(null)
    return (
        <AuthDialogContext.Provider value={{ openDialog, setOpenDialog }}>
            {children}
        </AuthDialogContext.Provider>
    )
}

export const useAuthDialog = () => useContext(AuthDialogContext)
