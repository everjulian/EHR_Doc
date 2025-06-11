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
- Node.js >= 18.x
- Angular CLI >= 18.x
- npm >= 9.x

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

## Scripts disponibles
- `npm start` o `ng serve`: Inicia el servidor de desarrollo en `http://localhost:4200/`
- `npm run build` o `ng build`: Compila la aplicación para producción en la carpeta `dist/`
- `npm test` o `ng test`: Ejecuta los tests unitarios con Karma
- `npm run serve:ssr:ehr-frontend`: Ejecuta el servidor SSR (Angular Universal)

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
   npm run build
   ```
2. El contenido de `dist/ehr-frontend/` puede ser desplegado en cualquier servidor web estático.
3. Para SSR (Angular Universal):
   ```sh
   npm run build && npm run serve:ssr:ehr-frontend
   ```

## Contribución
Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

## Contacto
[Agrega aquí tu email o información de contacto]

---

_Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.11._
