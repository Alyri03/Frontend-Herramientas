import { createContext, useState } from "react";
import { logoutRequest } from "@/services/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem("authUser");
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (e) {
            console.error("Error leyendo usuario del storage", e);
            return null;
        }
    });

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData));
    };

    const logout = async () => {
        try {
            await logoutRequest();
        } catch (e) {
            console.warn("No se pudo cerrar sesión en el servidor", e);
        }

        setUser(null);
        localStorage.removeItem("authUser");
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
