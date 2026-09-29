import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { type hospital } from "../../mocks/hospitaisMocks";
import "../../pages/Funcionario.css";
import { gerarIconePorStatus } from "../ElementosMapa/mapaUtil";

export interface HospitalMapeado extends hospital {
  status: string;
}

interface MapaFuncionarioProps {
  hospitais: HospitalMapeado[];
  onHospitalClick: (hospitalId: number) => void;
}

export const MapaFuncionario = ({ hospitais, onHospitalClick }: MapaFuncionarioProps) => {
  const centro: [number, number] = [-23.55045, -46.6333];

  return (
    <div className="conteudo-mapa-funcionario">
      <MapContainer
        center={centro}
        zoom={12}
        style={{
          height: "480px",
          width: "1000px",
          borderRadius: "15px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hospitais.map((hosp) => (
          <Marker
            key={hosp.id}
            position={[hosp.latitude, hosp.longitude]}
            icon={gerarIconePorStatus(hosp.status)}
            eventHandlers={{
              click: () => onHospitalClick(hosp.id),
            }}
          >
            <Popup>
              <strong>{hosp.nome}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};