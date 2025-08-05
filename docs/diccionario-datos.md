---
id: diccionario-datos
title: Diccionario de Datos
---

# Diccionario de Datos

## Tabla: User (Usuario)
| Campo         | Descripción                                         |
|---------------|-----------------------------------------------------|
| id            | Identificador único (integer, PK)                   |
| username      | Nombre de usuario (string, requerido, único)        |
| password      | Contraseña (string, requerido)                      |
| role          | Rol del usuario (string, requerido)                 |
| cedula        | Cédula de identidad (string, único)                 |
| email         | Correo electrónico (string, requerido, único)       |
| empresa       | Empresa asociada (string, opcional)                 |
| especialidad  | Especialidad médica (string, opcional)              |

## Tabla: Patient (Paciente)
| Campo              | Descripción                                                        |
|--------------------|--------------------------------------------------------------------|
| id                 | Identificador único (integer, PK)                                  |
| primer_nombre      | Primer nombre del paciente (string, requerido)                     |
| apellido_paterno   | Apellido paterno del paciente (string, requerido)                  |
| cedula             | Cédula de identidad (string, requerido, único)                     |
| fecha_nacimiento   | Fecha de nacimiento (date, requerido)                              |
| sexo               | Sexo (enum: 'H', 'M', requerido)                                   |
| provincia_id       | Referencia a provincia (integer, FK)                               |
| canton_id          | Referencia a cantón (integer, FK)                                  |
| parroquia_id       | Referencia a parroquia (integer, FK)                               |

## Tabla: Provincia
| Campo   | Descripción                                 |
|---------|---------------------------------------------|
| id      | Identificador único (integer, PK)           |
| nombre  | Nombre de la provincia (string, único)      |

## Tabla: Cantón
| Campo        | Descripción                                         |
|--------------|-----------------------------------------------------|
| id           | Identificador único (integer, PK)                   |
| nombre       | Nombre del cantón (string, único)                   |
| provincia_id | Referencia a la provincia (integer, FK)             |

## Tabla: Parroquia
| Campo        | Descripción                                         |
|--------------|-----------------------------------------------------|
| id           | Identificador único (integer, PK)                   |
| nombre       | Nombre de la parroquia (string, único)              |
| canton_id    | Referencia al cantón (integer, FK)                  |

## Tabla: Consultorio
| Campo        | Descripción                                         |
|--------------|-----------------------------------------------------|
| id           | Identificador único (integer, PK)                   |
| numero       | Número o nombre del consultorio (string, requerido) |
| doctorId     | Referencia al doctor responsable (integer, FK)      |

## Tabla: HorarioConsultorio
| Campo         | Descripción                                         |
|---------------|-----------------------------------------------------|
| id            | Identificador único (integer, PK)                   |
| consultorioId | Referencia al consultorio (integer, FK)             |

## Tabla: Cita
| Campo         | Descripción                                         |
|---------------|-----------------------------------------------------|
| id            | Identificador único (integer, PK)                   |
| pacienteId    | Referencia al paciente (integer, FK)                |
| consultorioId | Referencia al consultorio (integer, FK)             |
| doctorId      | Referencia al doctor (integer, FK)                  |

## Tabla: VitalSigns (Signos Vitales)
| Campo         | Descripción                                         |
|---------------|-----------------------------------------------------|
| id            | Identificador único (integer, PK)                   |
| pacienteId    | Referencia al paciente (integer, FK)                |
| citaId        | Referencia a la cita (integer, FK)                  |
| enfermeroId   | Referencia al enfermero (integer, FK)               |

## Tabla: Evolucion
| Campo           | Descripción                                         |
|-----------------|-----------------------------------------------------|
| id              | Identificador único (integer, PK)                   |
| pacienteId      | Referencia al paciente (integer, FK)                |
| medicoId        | Referencia al médico (integer, FK)                  |
| signosVitalesId | Referencia a los signos vitales (integer, FK)       |

## Tabla: Prescripcion
| Campo        | Descripción                                         |
|--------------|-----------------------------------------------------|
| id           | Identificador único (integer, PK)                   |
| evolucionId  | Referencia a la evolución (integer, FK)             |
| medicoId     | Referencia al médico (integer, FK)                  |

## Tabla: Diagnostico
| Campo        | Descripción                                         |
|--------------|-----------------------------------------------------|
| id           | Identificador único (integer, PK)                   |
| evolucionId  | Referencia a la evolución (integer, FK)             |
| cieId        | Referencia al catálogo CIE (integer, FK)            |

## Tabla: CIE (Catálogo CIE-10)
| Campo      | Descripción                                         |
|------------|-----------------------------------------------------|
| id         | Identificador único (integer, PK)                   |
| codigo     | Código CIE-10 (string)                              |
| nombre     | Nombre de la enfermedad (string)                    |

