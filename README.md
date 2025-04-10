# 💻 Frontend Herramientas

Este proyecto es una aplicación web tipo SPA (Single Page Application) desarrollada con **React + Vite**. Está estructurada de forma modular, usando TailwindCSS para los estilos, React Router para la navegación y Context API para el manejo de estados globales.

---

## 🚀 Tecnologías y dependencias usadas

### 📦 Dependencias principales (`dependencies`):

| Paquete                      | Versión   | Descripción                                 |
|-----------------------------|-----------|---------------------------------------------|
| react                       | ^19.0.0   | Biblioteca principal para construir la UI   |
| react-dom                   | ^19.0.0   | Renderiza componentes React en el DOM       |
| react-router-dom            | ^7.4.1    | Navegación en la SPA                        |
| axios                       | ^1.8.4    | Cliente HTTP para consumir APIs             |
| tailwindcss                 | ^4.1.1    | Framework de estilos CSS utility-first      |
| @tailwindcss/vite           | ^4.1.1    | Plugin para integrar Tailwind con Vite      |

### 🛠️ Dependencias de desarrollo (`devDependencies`):

| Paquete                      | Versión   | Descripción                                 |
|-----------------------------|-----------|---------------------------------------------|
| vite                        | ^6.2.0    | Bundler ultrarrápido para el desarrollo web |
| @vitejs/plugin-react        | ^4.3.4    | Plugin oficial para usar React con Vite     |
| eslint                      | ^9.21.0   | Linter para mantener calidad del código     |
| @eslint/js                  | ^9.21.0   | Reglas recomendadas para JavaScript         |
| eslint-plugin-react-hooks   | ^5.1.0    | Buenas prácticas para hooks en React        |
| eslint-plugin-react-refresh | ^0.4.19   | Soporte para React Fast Refresh             |
| @types/react                | ^19.0.10  | Tipado para React (opcional con TypeScript) |
| @types/react-dom            | ^19.0.4   | Tipado para React DOM                       |
| globals                     | ^15.15.0  | Define variables globales reconocidas por ESLint |

---

## 📁 Estructura del Proyecto

```plaintext
src/
├── assets/           → Imágenes, íconos y archivos estáticos
├── components/       → Componentes reutilizables (Navbar, Footer, etc.)
├── context/          → Manejo de estados globales con Context API (ej. autenticación)
├── hooks/            → Hooks personalizados
├── pages/            → Cada vista/página principal del sistema
├── routes/           → Configuración de rutas con React Router
├── services/         → Lógica de consumo de APIs externas (usando Axios)
├── styles/           → Archivos CSS globales o específicos
├── App.jsx           → Componente raíz de la aplicación
├── main.jsx          → Punto de entrada donde se monta React
