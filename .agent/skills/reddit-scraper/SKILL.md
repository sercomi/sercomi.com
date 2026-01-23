---
name: reddit-scraper
description: Una habilidad para extraer las 5 mejores publicaciones (Top) de cualquier subreddit especificado por el usuario.
---

# Reddit Scraper

Esta habilidad permite al agente navegar a un subreddit específico y extraer información sobre las 5 publicaciones más populares del momento.

## Cuándo usar esta habilidad

- Cuando el usuario pida ver qué es tendencia en un subreddit.
- Cuando necesites obtener información actualizada de una comunidad de Reddit para investigación o recopilación de datos.

## Cómo usar esta habilidad

Para ejecutar el rastreo, debes usar el `browser_subagent` siguiendo estos pasos:

1. **Navegar**: Ve a `https://www.reddit.com/r/<subreddit>/top/`.
2. **Manejar Interrupciones**: Si aparece un banner de cookies o una verificación de edad, acéptalo o ciérralo.
3. **Extraer Datos**: Identifica las primeras 5 publicaciones. De cada una, extrae:
    - Título de la publicación.
    - Enlace (URL) a la publicación.
    - Puntuación (Upvotes) si es posible.
4. **Formatear**: Devuelve la información al usuario en una lista clara de Markdown.

### Ejemplo de instrucción para el subagente:
"Navega a r/programming en Reddit, busca las 5 mejores publicaciones de hoy y extrae sus títulos y enlaces. Asegúrate de cerrar cualquier pop-up que bloquee la vista."

## Consideraciones

- Reddit puede cambiar su estructura de selectors CSS frecuentemente. Usa el `read_browser_page` para analizar el DOM antes de intentar extraer datos específicos si los selectores comunes fallan.
- Respeta los límites de velocidad y no realices peticiones excesivas.
