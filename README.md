
# 🐝 BeeHive

Bienvenido a BeeHive, el monorepo frontend de BeeDevelopers. Este repositorio alberga varios proyectos clave como DroneBee y WorkerBee, que constituyen el frontend para el panel de administración y la interfaz de usuarios/visitantes del sitio web de BeeDevelopers, respectivamente.

## 🌟 Inspiración del Nombre

Los nombres de los componentes de nuestro proyecto, BeeHive, WorkerBee, DroneBee y QueenBee, están inspirados en la estructura social natural de las abejas. Cada término refleja el rol que desempeñan en nuestro sistema:

- **BeeHive**: Representa el monorepo que alberga nuestra aplicación. Al igual que un panal de abejas reales, es el espacio virtual donde todos los componentes coexisten y colaboran.
- **WorkerBee**: Esta vista está destinada a los usuarios finales o estudiantes, quienes, como las abejas obreras, son los más numerosos y realizan la mayoría de las actividades dentro del sistema.
- **DroneBee**: Corresponde a la vista del administrador. En el mundo de las abejas, los zánganos tienen la tarea de proteger a la reina y manejar recursos críticos, función similar a la de nuestros administradores que gestionan y supervisan el entorno.
- **QueenBee**: Este es el nombre de nuestro backend, que actúa como el núcleo central de la aplicación, dirigiendo y coordinando todas las operaciones, tal como una reina lidera la colmena.

El uso de esta terminología no solo refleja la funcionalidad de cada componente, sino que también celebra nuestra identidad como parte de la Universidad de Guanajuato, cuya mascota oficial es una abeja.

## 📦 Contenido del Monorepo

Este monorepo incluye los siguientes proyectos y paquetes:

### Aplicaciones

- **DroneBee**: Frontend para el panel de administración.
- **WorkerBee**: Frontend para usuarios y visitantes.

### Paquetes

- @beehive/ui: una biblioteca de componentes React compartida por ambas aplicaciones, DroneBee y WorkerBee.
- @beehive/eslint-config: configuraciones de eslint (incluye eslint-config-next y eslint-config-prettier).
- @beehive/typescript-config: tsconfig.jsons utilizados en todo el monorepo.
- @beehive/tailwind: carpeta para la configuración global de tailwind.

Cada paquete/aplicación es 100% TypeScript.

## 🛠️ Utilidades

Herramientas configuradas en el monorepo:

- **TypeScript**: Para la comprobación estática de tipos.
- **ESLint**: Para el análisis estático de código.
- **Prettier**: Para el formateo automático de código.
- **TailwindCSS**: Para simplicidad en los estilos in-line dentro del JSX.

## 🛠️ Configuración del Monorepo

Para instalar todas las dependencias necesarias, ejecuta:

```sh
bun install
```

## 🚀 Inicio Rápido

Para comenzar el desarrollo de todas las aplicaciones y paquetes:

```sh
bun run dev
```

## 🏗️ Construcción

Para construir todas las aplicaciones y paquetes:

```sh
bun build
```
