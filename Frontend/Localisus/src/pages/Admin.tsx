import { DashboardAdmin } from "../components/Dashboard/DashboardAdmin";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
    const { usuario, logout } = useAuth()
    const navegar = useNavigate()

    const handleLogout = () => {
        logout();
        navegar('/login')
    }

    return (
        <>
        <h1> Seja bem vindo(a) {usuario?.nome} </h1>
        <button onClick={handleLogout}>Sair</button>
        <DashboardAdmin/>
        </>
    )
}