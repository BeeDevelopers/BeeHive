# BeeHive: Monorepo para BeeDevelopers

Bienvenido a BeeHive, el monorepo oficial para BeeDevelopers. Este monorepo contiene varios proyectos, incluyendo DroneBee y WorkerBee, que es el frontend para el panel de administración y los usuarios/visitantes regulares del sitio web de BeeDevelopers, respectivamente.

## Pero, ¿Por qué llamarse así?

Los nombres de los componentes de nuestro proyecto, BeeHive, WorkerBee, DroneBee y QueenBee, están inspirados en la estructura social natural de las abejas. Cada término refleja el rol que desempeñan en nuestro sistema:

- **BeeHive**: Representa el monorepo que alberga nuestra aplicación. Al igual que un panal de abejas reales, es el espacio virtual donde todos los componentes coexisten y colaboran.
- **WorkerBee**: Esta vista está destinada a los usuarios finales o estudiantes, quienes, como las abejas obreras, son los más numerosos y realizan la mayoría de las actividades dentro del sistema.
- **DroneBee**: Corresponde a la vista del administrador. En el mundo de las abejas, los zánganos tienen la tarea de proteger a la reina y manejar recursos críticos, función similar a la de nuestros administradores que gestionan y supervisan el entorno.
- **QueenBee**: Este es el nombre de nuestro backend, que actúa como el núcleo central de la aplicación, dirigiendo y coordinando todas las operaciones, tal como una reina lidera la colmena.

El uso de esta terminología no solo refleja la funcionalidad de cada componente, sino que también celebra nuestra identidad como parte de la Universidad de Guanajuato, cuya mascota oficial es una abeja.

## Usando este monorepo

Para instalar todas las dependencias necesarias, ejecuta el siguiente comando:

```sh
bun install
```

## ¿Qué contiene?

Este monorepo incluye los siguientes paquetes/aplicaciones:

## Aplicaciones y Paquetes

- DroneBee: el frontend para el panel de administración del sitio web de BeeDevelopers.
- WorkerBee: el frontend para los usuarios y visitantes regulares del sitio web de BeeDevelopers.

- @beehive/ui: una biblioteca de componentes React compartida por ambas aplicaciones, DroneBee y WorkerBee.
- @beehive/eslint-config: configuraciones de eslint (incluye eslint-config-next y eslint-config-prettier).
- @beehive/typescript-config: tsconfig.jsons utilizados en todo el monorepo.

Cada paquete/aplicación es 100% TypeScript.

## Utilidades

Este monorepo tiene algunas herramientas adicionales ya configuradas para ti:

- TypeScript para la comprobación estática de tipos.
- ESLint para el linting de código.
- Prettier para el formateo de código.

## Build

Para construir todas las aplicaciones y paquetes, ejecuta el siguiente comando:

```sh
bun build
```

## Inicia

Para desarrollar todas las aplicaciones y paquetes, ejecuta el siguiente comando:

```sh
bun run dev
```
