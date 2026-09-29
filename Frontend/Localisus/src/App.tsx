import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Admin } from './pages/Admin'
import { Cadastro } from './pages/Cadastro'
import { Login } from './pages/Login'
import { Funcionario } from './pages/Funcionario'
import { Home } from './pages/Home'
import { TipoUsuario } from './mocks/usuarioMock'
import { Contato } from './pages/Contato'
import { Sobre } from './pages/Sobre'
import { UsuarioComum } from './pages/UsuarioComum'
import  Navbar  from './components/Navbar/Navbar'
import { Lembretes } from './pages/Lembretes'


export function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute allowedRoles={[TipoUsuario.ADMIN]}>
                                <Admin />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/cadastro"
                        element={<Cadastro />}
                    />
                    <Route 
                        path='/contato'
                        element={<Contato/>}
                    />
                    <Route 
                        path='/home-usuario'
                        element={<UsuarioComum/>}
                    />
                    <Route 
                        path='/lembretes'
                        element={<Lembretes/>}
                    />
                    <Route 
                        path='/sobre'
                        element={<Sobre/>}
                    />
                    <Route 
                        path='/navbar'
                        element={<Navbar/>}
                    />
                    <Route
                        path="/funcionario"
                        element={<Funcionario />
                            // <ProtectedRoute allowedRoles={[TipoUsuario.FUNCIONARIO]}>
                            //     
                            // </ProtectedRoute>
                        } />
                       

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/"
                        element={<Home />}
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}