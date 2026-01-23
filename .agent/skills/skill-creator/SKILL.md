---
name: creador-de-habilidades
description: Una habilidad para asistir en la creación de nuevas habilidades siguiendo los estándares de Antigravity en español.
---

# Creador de Habilidades

Esta habilidad está diseñada para guiarte en el proceso de creación de nuevas habilidades (skills) para Antigravity. Proporciona una estructura clara, mejores prácticas y plantillas para asegurar que las nuevas habilidades sean efectivas y fáciles de usar por el agente.

## Cuándo usar esta habilidad

- Cuando el usuario te pida crear una nueva habilidad.
- Cuando necesites organizar un flujo de trabajo complejo que se beneficiaría de ser una habilidad reutilizable.
- Cuando quieras mejorar o documentar una habilidad existente.

## Cómo usar esta habilidad

### 1. Definir el propósito
Pregunta al usuario (o define tú mismo) qué tarea específica desea automatizar o mejorar mediante una habilidad. Recuerda el principio de **Responsabilidad Única**.

### 2. Estructura de archivos
Asegúrate de seguir esta estructura en el directorio raíz del proyecto:
- `.agent/skills/<nombre-de-la-habilidad>/`
    - `SKILL.md` (Obligatorio)
    - `scripts/` (Opcional)
    - `examples/` (Opcional)
    - `resources/` (Opcional)

### 3. Redactar el SKILL.md
El archivo debe contener:
- **YAML Frontmatter**:
    ```yaml
    name: nombre-de-la-habilidad
    description: Una descripción en tercera persona detallando qué hace la habilidad.
    ```
- **Instrucciones claras**: Explica cuándo y cómo usar la habilidad de forma concisa.

### 4. Mejores Prácticas
- Usa la descripción para la "activación" y el cuerpo para la "ejecución".
- Mantén las instrucciones breves y fáciles de seguir.
- Proporciona ejemplos claros si la tarea es compleja.

## Plantillas Disponibles

Puedes encontrar plantillas base en el directorio `resources/TEMPLATES.md` de esta misma habilidad para acelerar el proceso.
