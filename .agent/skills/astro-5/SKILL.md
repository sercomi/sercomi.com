---
name: astro
description: Asiste en el desarrollo de aplicaciones con Astro 5 siguiendo las mejores prácticas, la arquitectura de islas (islands) y el Content Layer API.
---

# Astro 5

## Cuándo usar esta habilidad

- Al crear o modificar componentes `.astro`.
- Al configurar o trabajar con Content Collections (Content Layer API).
- Al implementar interactividad usando directivas de hidratación (Client Islands) o Server Islands.
- Al configurar el enrutamiento y transiciones de página (ClientRouter).
- Al optimizar el rendimiento y SEO del sitio.

## Cómo usar esta habilidad

### 1. Estructura de Componentes Astro
Los componentes Astro se dividen en dos partes: el **Component Script** (valla de código `---`) y el **Component Template** (HTML/JSX).
- El código en el Script solo se ejecuta en el servidor durante la construcción o al servir la página.
- No uses `console.log` en el Script si esperas verlo en el navegador.

### 2. Client Islands y Server Islands
Usa directivas para controlar la interactividad:
- `client:load`: Carga e hidrata inmediatamente.
- `client:idle`: Hidrata cuando el navegador esté inactivo.
- `client:visible`: Hidrata cuando el componente entra en el viewport.
- `server:defer` (Astro 5): Convierte un componente en una **Server Island**, permitiendo que el resto de la página cargue mientras este se genera en paralelo en el servidor.

### 3. Content Layer API (Astro 5)
Define tus colecciones en `src/content.config.ts` (ya no en `src/content/config.ts` de forma obligatoria).
- Usa `loader` para cargar datos (ej. `glob` para archivos locales).
- Usa la nueva función `render(entry)` de `astro:content` para renderizar contenido Markdown/MDX.

### 4. Navegación y Transiciones
Usa el componente `<ClientRouter />` (antes `ViewTransitions`) de `astro:transitions` en el `<head>` de tu layout base para habilitar la navegación SPA-like sin recarga de página.

## Instrucciones Especiales

- **Tipado**: Siempre define la interfaz `Props` en el Script del componente para tener autocompletado y seguridad de tipos.
- **Estilos**: Prefiere el uso de clases de Tailwind (ya integrado con Vite 6 en Astro 5) o bloques `<style>` locales.
- **Assets**: Usa la carpeta `src/assets/` para imágenes que necesiten procesamiento (optmización de Astro) y `public/` para archivos estáticos puros.
- **Rendimiento**: Astro es "Static by Default". Mantén la mayor parte del sitio estática y solo añade JavaScript donde sea estrictamente necesario.
