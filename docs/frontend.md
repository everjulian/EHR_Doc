---
id: frontend
title: Documentación del Frontend
---
# EHR Frontend

Sistema de Gestión Médica (EHR)

Este proyecto es una aplicación frontend desarrollada en Angular para la gestión de historias clínicas electrónicas, citas, pacientes, consultorios y administración médica. Forma parte de un sistema EHR (Electronic Health Record) y está diseñado para ser usado por médicos, enfermeras, secretarias y administradores.

## Características principales
- Gestión de pacientes y sus historias clínicas
- Administración de citas médicas y consultorios
- Paneles diferenciados para médicos, enfermeras, secretarias y administradores
- Registro y visualización de signos vitales, diagnósticos y prescripciones
- Generación de reportes y exportación a PDF
- Interfaz moderna y responsiva

## Requisitos previos
- Node.js >= 16.x (recomendado 18.x)
- Angular CLI >= 16.x (recomendado 18.x)
- npm >= 8.x (recomendado 9.x)

## Instalación
1. Clona el repositorio:
   ```sh
   git clone <url-del-repositorio>
   cd ehr-frontend
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```

## Scripts principales
- `npm start` o `ng serve`: Inicia el servidor de desarrollo en `http://localhost:4200/`.
- `npm run build` o `ng build`: Compila la aplicación para producción en la carpeta `dist/`.
- `npm test` o `ng test`: Ejecuta los tests unitarios con Karma.
- `npm run serve:ssr:ehr-frontend`: Ejecuta el servidor SSR (Angular Universal).

## Rutas principales

| Ruta                | Descripción                                 |
|---------------------|---------------------------------------------|
| `/login`            | Login de usuario                            |
| `/patients`         | Gestión de pacientes                        |
| `/admin`            | Dashboard de administrador                  |
| `/doctor`           | Dashboard de doctor y subrutas              |
| `/secretaria`       | Dashboard de secretaria y subrutas          |
| `/enfermera`        | Dashboard de enfermera y subrutas           |
| `/citas`            | Gestión de citas                            |
| `/forgot-password`  | Recuperar contraseña                        |
| `/reset-password`   | Restablecer contraseña                      |

## Notas de desarrollo
- Los guards y roles pueden ser deshabilitados para pruebas comentando las líneas correspondientes en `app.routes.ts`.
- El backend debe estar corriendo y accesible para el funcionamiento completo de la app.

## Estructura de carpetas principal
- `src/app/core/`: Servicios, guards e interceptores
- `src/app/features/`: Módulos y componentes principales (admin, citas, consultorios, pacientes, dashboards, etc.)
- `src/app/shared/`: Componentes reutilizables
- `src/environments/`: Configuración de entornos
- `public/assets/`: Imágenes y recursos estáticos

## Configuración de ambiente
- El archivo `src/environments/environment.ts` contiene la configuración para desarrollo.
- El archivo `src/environments/environment.prod.ts` contiene la configuración para producción.
- Cambia la URL de la API según tu backend.

## Testing
- Ejecuta `npm test` para correr los tests unitarios.
- Los tests se encuentran junto a los componentes y servicios (`*.spec.ts`).

## Despliegue
1. Compila la aplicación:
   ```sh
   npm run build o ng build
   ```
2. El contenido de `dist/ehr-frontend/` puede ser desplegado en cualquier servidor web estático.
3. Para SSR (Angular Universal):
   ```sh
   npm run build && npm run serve:ssr:ehr-frontend
   ```

## Comandos útiles de Angular CLI
- `ng serve`: Inicia el servidor de desarrollo.
- `ng build`: Compila la aplicación para producción.
- `ng test`: Ejecuta los tests unitarios.
- `ng e2e`: Ejecuta tests end-to-end (requiere configuración adicional).
- `ng generate component <nombre>`: Genera un nuevo componente.
- `ng help`: Muestra ayuda y referencia de comandos.


---

_Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.11._
