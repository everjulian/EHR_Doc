---
id: diagrama-procesos
title: Diagrama de Procesos
---

# Diagrama de Procesos

A continuación se muestra un diagrama de procesos básico para el flujo principal de atención médica en el sistema EHR, basado en las entidades y relaciones del diccionario de datos:

```mermaid
flowchart TD
    A[Paciente solicita cita] --> B[Recepción registra cita]
    B --> C[Asignación de consultorio y médico]
    C --> D[Consulta médica]
    D --> E[Registro de signos vitales]
    E --> F[Evolución médica]
    F --> G[Diagnóstico]
    G --> H[Prescripción]
    H --> I[Fin del proceso]

    subgraph Detalles
      D --> E
      E --> F
      F --> G
      G --> H
    end

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style I fill:#bbf,stroke:#333,stroke-width:2px
```

> Este diagrama representa el flujo típico de atención médica: desde la solicitud de cita por parte del paciente, pasando por la consulta, registro de signos vitales, evolución, diagnóstico y prescripción, hasta el cierre del proceso.

Además, se presenta otro diagrama que incluye el proceso de registro y acceso del usuario a la plataforma:

```mermaid
flowchart TD
    INICIO([Inicio])
    ACCESO[Usuario accede a la plataforma]
    SOLICITA[Solicita cita médica]
    REGISTRADO{¿Usuario registrado?}
    REGISTRO[Registrarse en la plataforma]
    INICIOSESION[Iniciar sesión]
    CITA[Recepción registra cita]
    ASIGNA[Asignación de consultorio y médico]
    CONSULTA[Consulta médica]
    SIGNOS[Registro de signos vitales]
    EVOLUCION[Evolución médica]
    DIAGNOSTICO[Diagnóstico]
    PRESCRIPCION[Prescripción]
    FIN([Fin del proceso])

    INICIO --> ACCESO
    ACCESO --> SOLICITA
    SOLICITA --> REGISTRADO
    REGISTRADO -- No --> REGISTRO
    REGISTRADO -- Sí --> INICIOSESION
    REGISTRO --> INICIOSESION
    INICIOSESION --> CITA
    CITA --> ASIGNA
    ASIGNA --> CONSULTA
    CONSULTA --> SIGNOS
    SIGNOS --> EVOLUCION
    EVOLUCION --> DIAGNOSTICO
    DIAGNOSTICO --> PRESCRIPCION
    PRESCRIPCION --> FIN

    style INICIO fill:#fff,stroke:#333,stroke-width:2px
    style FIN fill:#bbf,stroke:#333,stroke-width:2px
    style REGISTRADO fill:#222,stroke:#333,color:#fff
```

> Este diagrama representa el flujo de procesos típico en la atención médica del sistema EHR, incluyendo registro, solicitud de cita, consulta, registro de signos vitales, evolución, diagnóstico y prescripción.
