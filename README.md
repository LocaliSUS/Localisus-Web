# LocaliSUS Web - Projeto Integrador (Senac)

<img src="./Frontend/Localisus/src/assets/readmeWeb.png" alt="Home screen of the application" width="1920" />

Este é o **Projeto Integrador** desenvolvido para o curso de Tecnologia no **Senac**. A aplicação consiste em uma plataforma de geolocalização que integra os dados oficiais do **LocaliSUS** com a **Google Maps API**, permitindo a busca e visualização de unidades de saúde e serviços do SUS de forma eficiente.

Além da versão web, o projeto conta com um **aplicativo mobile multiplataforma**, desenvolvido em **React Native**, oferecendo acesso às funcionalidades tanto em dispositivos **Android** quanto **iOS**, mantendo uma experiência consistente entre as plataformas.

---

## A Solução

Durante o desenvolvimento, identificamos que o acesso aos dados de saúde pública muitas vezes é fragmentado ou de difícil compreensão para o cidadão comum. O **LocaliSUS App** entrega as seguintes soluções:

* **Centralização de Dados:** Consolida informações de diferentes microsserviços em uma interface única.

* **Acessibilidade Geográfica:** Através da integração com Google Maps, o usuário visualiza instantaneamente a unidade mais próxima, reduzindo o tempo de busca em situações de necessidade.

* **Transparência e Confiabilidade:** Utiliza a base de dados oficial do governo, garantindo que o usuário consulte informações reais de postos de saúde, UPAs e hospitais.

* **Experiência Multiplataforma:** Disponível em ambiente web e mobile, permitindo acesso às informações do SUS em qualquer dispositivo.

* **Eficiência Técnica:** A arquitetura em microsserviços permite que a plataforma seja escalável, podendo adicionar novos serviços de saúde sem interromper o funcionamento do mapa principal.

---

## Stack Tecnológica

### **Frontend Web**

* **React + Vite:** Estrutura base para uma Single Page Application (SPA) de alta performance.

* **TypeScript:** Tipagem estrita para garantir a integridade dos dados geoespaciais.

* **Google Maps API:** Integração para renderização de mapas, geocodificação e plotagem de marcadores.

* **CSS Modules:** Estilização modular e customizada.

### **Backend (Microsserviços e API)**

* **C# / .NET 8:** Framework principal para o desenvolvimento da lógica de negócio.

* **Arquitetura de Microsserviços:** Estrutura modular para independência funcional e escalabilidade.

* **Entity Framework Core:** ORM utilizado para a persistência e manipulação de dados.

* **SQL Server:** Banco de dados relacional para armazenamento de informações do ecossistema.

* **Scalar:** Documentação interativa da API, proporcionando uma interface de testes moderna.

---

## Fluxo de Funcionamento

1. **Integração Governamental:** O sistema consome os serviços de dados georreferenciados do LocaliSUS.

2. **Processamento via EF Core:** Os dados são processados pelos microsserviços e persistidos no SQL Server.

3. **API Centralizada:** Os microsserviços disponibilizam os dados por meio de uma API unificada.

4. **Visualização Web e Mobile:** As aplicações React e React Native consomem a API e renderizam os pontos de interesse utilizando o Google Maps.

5. **Interface Scalar:** Documentação técnica acessível para visualização e testes dos contratos da API.

---

## Instruções Para Execução

### Backend

```bash
git clone https://github.com/LuizSoares-sys/projeto-integrador-senac.git

dotnet ef database update

dotnet run
```

Acesse o Scalar em:

```
/scalar/v1
```

### Frontend Web

```bash
npm install
npm run dev
```

### Frontend Mobile

```bash
npm install
npx react-native run-android
```

ou

```bash
npx react-native run-ios
```

---

## 👥 Equipe de Desenvolvimento (Senac)

* **Benjamin Dominique** - [bendominique](https://github.com/bendominique)

* **Italo Vinicius** - [@Italo15](https://github.com/Italo15)

* **Lucas Torino** - [@zerowavez](https://github.com/zerowavez)

* **Luiz Soares** - [@LuizSoares-sys](https://github.com/LuizSoares-sys)

* **Ryan Silva** - [@ryanzlxt](https://github.com/ryanzlxt)

---

> "Conectando tecnologia e saúde pública para o desenvolvimento social." — Projeto Integrador Senac 2026.
