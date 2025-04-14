# 💻 Frontend Herramientas

Este proyecto es una **SPA (Single Page Application)** construida con **React + Vite**, utilizando **TailwindCSS** para estilos y estructurada para trabajo colaborativo en equipo. Incluye configuración de rutas, manejo de estado global y buenas prácticas de desarrollo..

---

<p align="center">
  <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.1.1-06B6D4?logo=tailwindcss&logoColor=white" />
</p>

---

## 🚀 Tecnologías y dependencias

### 📦 Dependencias principales (`dependencies`):

| Paquete                    | Versión   | Descripción                                 |
|---------------------------|-----------|---------------------------------------------|
| react                     | ^19.0.0   | Biblioteca principal para construir la UI   |
| react-dom                 | ^19.0.0   | Renderiza componentes React en el DOM       |
| react-router-dom          | ^7.4.1    | Navegación en la SPA                        |
| axios                     | ^1.8.4    | Cliente HTTP para consumir APIs             |
| tailwindcss               | ^4.1.1    | Framework de estilos CSS utility-first      |
| @tailwindcss/vite         | ^4.1.1    | Plugin para integrar Tailwind con Vite      |

### 🛠️ Dependencias de desarrollo (`devDependencies`):

| Paquete                      | Versión   | Descripción                                 |
|-----------------------------|-----------|---------------------------------------------|
| vite                        | ^6.2.0    | Bundler ultrarrápido para desarrollo web    |
| @vitejs/plugin-react        | ^4.3.4    | Plugin oficial de React para Vite           |
| eslint                      | ^9.21.0   | Linter para mantener calidad de código      |
| @eslint/js                  | ^9.21.0   | Reglas recomendadas para JavaScript         |
| eslint-plugin-react-hooks   | ^5.1.0    | Buenas prácticas para hooks en React        |
| eslint-plugin-react-refresh | ^0.4.19   | Soporte para React Fast Refresh             |
| @types/react                | ^19.0.10  | Tipado para React                           |
| @types/react-dom            | ^19.0.4   | Tipado para React DOM                       |
| globals                     | ^15.15.0  | Variables globales reconocidas por ESLint   |

---

## 📁 Estructura del Proyecto

```plaintext
src/
├── assets/         → Imágenes, íconos y archivos estáticos
├── components/     → Componentes reutilizables (Navbar, Footer, etc.)
├── context/        → Estados globales con Context API (ej. Auth)
├── hooks/          → Hooks personalizados
├── pages/          → Vistas principales del sistema
├── routes/         → Configuración de rutas (React Router)
├── services/       → Lógica de consumo de APIs (axios)
├── styles/         → Estilos globales
├── App.jsx         → Componente raíz
├── main.jsx        → Punto de entrada
```

## 👨‍💻 Flujo de trabajo en equipo

### 🌱 Uso de ramas

| Rama         | Propósito                                         |
|--------------|---------------------------------------------------|
| `main`       | Rama de producción (estable)                      |
| `develop`    | Rama base para integrar nuevas funcionalidades    |
| `feature/*`  | Desarrollo de una nueva funcionalidad             |
| `fix/*`      | Corrección de errores                             |
| `hotfix/*`   | Cambios urgentes que van directo a producción     |


## Flujo de Trabajo Git Básico

1.  **Crear una nueva rama para tu tarea:**
    Sal desde la rama `develop` (asegúrate de que esté actualizada) y crea tu rama de funcionalidad.

    ```bash
    # Asegúrate de estar en develop y tener la última versión
    git checkout develop
    git pull origin develop

    # Crea tu nueva rama
    git checkout -b feature/nombre-de-tarea
    ```

2.  **Trabajar en la funcionalidad:**
    Realiza los cambios necesarios en el código para completar tu tarea.

3.  **Agregar cambios y hacer commit:**
    Añade los archivos modificados al área de preparación (staging) y crea un commit descriptivo.

    ```bash
    # Añade todos los cambios (o especifica archivos individuales)
    git add .

    # Haz commit siguiendo las convenciones (ej. Conventional Commits)
    git commit -m "feat: agregar funcionalidad X para la tarea Y"
    ```
    * *Repite los pasos 2 y 3 tantas veces como sea necesario.*

4.  **Subir la rama al repositorio remoto:**
    Empuja tu rama local al repositorio remoto (origin).

    ```bash
    git push origin feature/nombre-de-tarea
    ```

5.  **Crear Pull Request (PR):**
    Ve a la interfaz de GitHub (o tu plataforma Git):
    * Crea un Pull Request desde tu rama (`feature/nombre-de-tarea`) hacia la rama `develop`.
    * Añade una descripción clara, enlaza issues si es necesario, y asigna revisores.

6.  **Revisión y Merge:**
    * Espera la revisión del código por parte de tus compañeros.
    * Aplica los cambios solicitados si los hubiera (haciendo nuevos commits en tu rama y volviendo a hacer `push`).
    * Una vez aprobado el PR, realiza el merge desde la interfaz de la plataforma Git (generalmente lo hace el revisor o el dueño del repositorio).

7.  **Limpieza (opcional pero recomendado):**
    Después de que el PR haya sido mergeado en `develop`, puedes eliminar tu rama local y remota para mantener limpio el repositorio.

    ```bash
    # Cambia de nuevo a develop y actualízala
    git checkout develop
    git pull origin develop

    # Elimina la rama local
    git branch -d feature/nombre-de-tarea

    # Elimina la rama remota
    git push origin --delete feature/nombre-de-tarea
