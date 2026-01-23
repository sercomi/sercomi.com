# Astro 5 Best Practices

Este recurso detalla patrones avanzados y buenas prácticas para maximizar el potencial de Astro 5.

## 1. Arquitectura de Datos: Content Layer API

A partir de Astro 5, el API de colecciones es más flexible. Sigue estas pautas:

- **Configuración centralizada**: Define todas tus colecciones en `src/content.config.ts`.
- **Validación con Zod**: Siempre usa `z` de `astro:content` para definir el esquema de tus datos. Esto garantiza que el contenido sea válido antes de que falle en producción.
- **Loaders**: Aprovecha el cargador `glob` para archivos locales:
  ```typescript
  import { defineCollection } from 'astro:content';
  import { glob } from 'astro/loaders';

  const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
    schema: ({ image }) => z.object({ ... }),
  });
  ```

## 2. Server Islands vs Client Islands

- **Server Islands (`server:defer`)**: Úsalas para contenido que depende de datos lentos o pesados pero que no requiere interactividad del lado del cliente (ej. una lista de recomendados personalizada).
- **Client Islands**: Úsalas para interactividad pura (ej. un carrito de compras, un selector de filtros).
- **Fallback**: Siempre proporciona un slot de fallback atractivo durante la carga diferida:
  ```html
  <MySlowComponent server:defer>
    <div slot="fallback" class="loading-shimmer">Cargando...</div>
  </MySlowComponent>
  ```

## 3. SEO y Metadatos

- **Layouts Base**: Centraliza los meta tags comunes en un `BaseLayout.astro`.
- **Canonical URLs**: Asegúrate de incluir `<link rel="canonical" href={Astro.url} />`.
- **Sitemaps**: Usa la integración `@astrojs/sitemap` (ya configurada en este proyecto).

## 4. Imágenes y Assets

- **Astro Image**: Usa siempre el componente `<Image />` de `astro:assets` para imágenes locales dentro de `src/assets`. Esto habilitará el redimensionamiento y conversión a formatos modernos (WebP/AVIF) automáticamente.
- **Alt Text**: No omitas nunca el atributo `alt` para accesibilidad.

## 5. Rendimiento Crítico

- **CSS**: Aprovecha Tailwind CSS 4 (integrado). Evita duplicidad de estilos.
- **Scripts de Terceros**: Usa la directiva `is:inline` solo cuando sea estrictamente necesario para evitar que Astro procese y optimice scripts que ya vienen minificados o que necesitan ejecutarse inmediatamente.
