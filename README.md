# Heroes App — Descripción profesional

## Resumen del proyecto

`Heroes App` es una SPA construida con React y TypeScript orientada a búsqueda y visualización de héroes. Está diseñada como un proyecto de referencia técnica que demuestra capacidad para construir interfaces escalables, mantenibles y con buenas prácticas en performance y accesibilidad.

## Objetivo

- Crear una interfaz rápida y confiable para la consulta de datos desde una API, con énfasis en experiencia de usuario (UX), consistencia visual y facilidad de mantenimiento del código.

## Características principales

- Búsqueda y filtrado de resultados.
- Navegación basada en rutas (incluye rutas dinámicas para detalle de elementos).
- Manejo centralizado de estados asíncronos y caching para optimizar peticiones.

## Tecnologías principales y motivación

- `React` + `TypeScript`: construcción de UI declarativa con tipado estático; mejora la mantenibilidad y reduce errores en tiempo de ejecución.
- `Vite`: servidor de desarrollo y builder rápido que acelera el feedback de desarrollo y produce bundles optimizados.
- `axios`: cliente HTTP para encapsular llamadas REST, manejo de timeouts y configuración centralizada en la capa de servicios.
- `@tanstack/react-query`: gestión de datos remotos y caching; permite políticas de revalidación, control de stale/ttl y simplifica la sincronización con el servidor.
- `react-router`: routing declarativo para rutas anidadas y soporte de lazy-loading de módulos para optimizar el bundle inicial.
- `tailwindcss`: enfoque utility-first que acelera el desarrollo de interfaces coherentes y reduce la necesidad de CSS específico por componente.
- `shadcn` (shadcn/ui): conjunto de componentes estilizados que combinan Radix primitives con Tailwind; acelera la construcción de componentes accesibles y consistentes sin sacrificar control visual.
- `radix-ui`: primitives accesibles y sin estilos que garantizan mejores prácticas en accesibilidad como comportamientos y atributos ARIA.
- `lucide-react`: iconografía ligera y moderna con buena ergonomía para interfaces.
- `clsx`, `class-variance-authority`, `tailwind-merge`: utilidades para componer clases dinámicas, gestionar variantes y evitar conflictos en clases generadas por Tailwind.

## Diseño y mantenibilidad

- Estructura modular por dominios (`src/pages`, `src/components`, `src/hooks`, `src/services`) que facilita la lectura, testeo y escalado del código.
- Separación entre componentes presentacionales y componentes con lógica (contenedores/hooks) para facilitar testing y reuso.
- Hooks personalizados para encapsular lógica de negocio y abstraer detalles de consumo de la API.

## Presentación profesional

El proyecto está desarrollado siguiendo buenas prácticas de ingeniería: estructura modular, tipado con TypeScript y convenciones de código que facilitan revisión, mantenimiento y trabajo en equipo. Está pensado para ser entregable en entornos reales y sencillo de integrar con el backend.

Demo público: https://0seg.github.io/heroes-frontend/#/

## Repositorio del backend: https://github.com/0seg/heroes-backend
