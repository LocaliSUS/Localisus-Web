import { User2Icon } from "lucide-react"
import { Sidebar } from "../Sidebar/Sidebar"
import "./TopbarUsuario.css"

export const TopbarUsuarios = () => {

    const topBarIcones = [
        {id: 1, icone: <User2Icon size={32}/> }
    ]

    return (
        <>
            <div className="elementos-cabecalho">
                <Sidebar />
                <ul className="elementos-usuario">
                    {

                        topBarIcones.map(i => 
                            <li key={i.id} className="icone">
                                {i.icone}
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}