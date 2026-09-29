import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { gerarIconePorStatus } from "../ElementosMapa/mapaUtil";

export interface DadosHospitalMapa {
    hospital: {
        id: number;
        nome: string;
        latitude: number;
        longitude: number;
    }
    nomeMedicamento: string | undefined;
    quantidadeRestante: number;
    status: string;
}

interface MapaProps {
    hospitaisEncontrados: DadosHospitalMapa[]
}

export const MapaLocalisus = ({ hospitaisEncontrados}: MapaProps) => {
    const centro: [number, number] = [-23.5505, -46.6333]

    return (
        <div className="conteudo-mapa">
            <MapContainer
                center={centro}
                zoom={12}
                style={{ height: '500px', width: '100%', borderRadius: '8px' }}>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {hospitaisEncontrados.map((item, index) => (
                    <Marker key={index} position={[item.hospital.latitude, item.hospital.longitude]} icon={gerarIconePorStatus(item.status)} >
                        <Popup>
                            <strong>{item.hospital.nome}</strong> <br />
                            Medicamento: {item.nomeMedicamento} <br />
                            Estoque disponível: {item.quantidadeRestante} un.
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}