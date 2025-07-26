## Diccionario de datos y catálogos

### Modelos principales

- **Patient (Paciente)**
  - `apellido_paterno` (string, requerido)
  - `primer_nombre` (string, requerido)
  - `empresa` (string, requerido, por defecto "Sin empresa")
  - `cedula` (string, requerido, único)
  - `fecha_nacimiento` (date, requerido)
  - `lugar_nacimiento` (string, requerido)
  - `nacionalidad` (string, requerido)
  - `sexo` (enum: 'H', 'M', requerido)
  - ...otros campos personales y opcionales

- **CIE (Catálogo CIE-10)**
  - `id` (integer, PK)
  - `cie_id` (integer, referencia a CIE padre)
  - `versioncie` (string)
  - `codigo` (string)
  - `nombre` (string)
  - ...otros campos médicos

- **Medicamento**
  - `id` (integer, PK)
  - `nombre_generico` (string, requerido)
  - `nombre_comercial` (string, opcional)
  - `forma_farmaceutica` (string, requerido)
  - `concentracion` (string, requerido)
  - `via_administracion` (string, requerido)
  - `categoria` (string, opcional)
  - `estado` (boolean, por defecto true)

- **Provincia**
  - `id` (integer, PK)
  - `nombre` (string, requerido, único)
  - Relación: una provincia tiene muchos cantones

### Catálogos disponibles

- **CIE-10:** Catálogo internacional de enfermedades.
- **Medicamentos:** Listado de medicamentos genéricos y comerciales.
- **Provincias, Cantones, Parroquias:** Catálogos geográficos de Ecuador.
