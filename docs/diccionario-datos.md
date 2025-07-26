---
id: diccionario-datos
title: Diccionario de Datos
---

# Diccionario de Datos

## Tabla: Patient (Paciente)

| Campo              | Descripción                                                        |
|--------------------|--------------------------------------------------------------------|
| apellido_paterno   | Apellido paterno del paciente (string, requerido)                  |
| primer_nombre      | Primer nombre del paciente (string, requerido)                     |
| empresa            | Empresa asociada (string, requerido, por defecto "Sin empresa")   |
| cedula             | Cédula de identidad (string, requerido, único)                     |
| fecha_nacimiento   | Fecha de nacimiento (date, requerido)                              |
| lugar_nacimiento   | Lugar de nacimiento (string, requerido)                            |
| nacionalidad       | Nacionalidad (string, requerido)                                   |
| sexo               | Sexo (enum: 'H', 'M', requerido)                                   |
| ...otros campos    | Otros campos personales y opcionales                               |

## Tabla: CIE (Catálogo CIE-10)

| Campo      | Descripción                                         |
|------------|-----------------------------------------------------|
| id         | Identificador único (integer, PK)                   |
| cie_id     | Referencia a CIE padre (integer)                    |
| versioncie | Versión del catálogo (string)                       |
| codigo     | Código CIE-10 (string)                              |
| nombre     | Nombre de la enfermedad (string)                    |
| ...otros   | Otros campos médicos                                |

## Tabla: Medicamento

| Campo             | Descripción                                         |
|-------------------|-----------------------------------------------------|
| id                | Identificador único (integer, PK)                   |
| nombre_generico   | Nombre genérico del medicamento (string, requerido) |
| nombre_comercial  | Nombre comercial (string, opcional)                 |
| forma_farmaceutica| Forma farmacéutica (string, requerido)              |
| concentracion     | Concentración (string, requerido)                   |
| via_administracion| Vía de administración (string, requerido)           |
| categoria         | Categoría (string, opcional)                        |
| estado            | Estado (boolean, por defecto true)                  |

## Tabla: Provincia

| Campo   | Descripción                                 |
|---------|---------------------------------------------|
| id      | Identificador único (integer, PK)           |
| nombre  | Nombre de la provincia (string, único)      |
| Relación| Una provincia tiene muchos cantones         |

> Cada tabla representa una colección principal del sistema EHR. Puedes agregar más tablas siguiendo este formato.
