# NodeJS Chat

Este proyecto es un chat en tiempo real similar a Telegram, donde los usuarios pueden enviar mensajes y compartir archivos. Está construido utilizando Node.js y otras tecnologías relacionadas.

## Estructura del proyecto

El proyecto está organizado en las siguientes carpetas:

- **controllers**: Contiene los controladores que manejan la lógica de negocio de la aplicación.
- **models**: Contiene los modelos de datos que representan las entidades de la aplicación.
- **routes**: Contiene las rutas y los controladores asociados para cada endpoint del API.
- **services**: Contiene los servicios que encapsulan la interacción con la base de datos u otras operaciones externas.
- **utils**: Contiene utilidades y funciones auxiliares utilizadas en el proyecto.

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías y paquetes:

- **Node.js**: Entorno de ejecución de JavaScript en el servidor.
- **Express**: Framework web para Node.js que facilita la creación de APIs RESTful.
- **Mongoose**: ODM (Object-Document Mapper) para MongoDB, que simplifica la interacción con la base de datos.
- **Multer**: Middleware de Node.js que permite gestionar la subida de archivos en las solicitudes HTTP.
- **dotenv**: Módulo que permite cargar variables de entorno desde un archivo `.env`.
- **Nodemon**: Herramienta de desarrollo que reinicia automáticamente la aplicación cuando se detectan cambios en el código.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias del proyecto.
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.
4. Ejecuta `npm run dev` para iniciar el servidor en modo de desarrollo.

## Uso

Una vez que el servidor esté en funcionamiento, puedes realizar las siguientes acciones:

- **Agregar un usuario**: Envía una solicitud POST a `/users` con el nombre del usuario en el cuerpo de la solicitud.
- **Obtener todos los usuarios**: Realiza una solicitud GET a `/users`.
- **Crear un nuevo chat**: Envía una solicitud POST a `/chats` con la lista de usuarios participantes en el cuerpo de la solicitud.
- **Obtener todos los chats**: Realiza una solicitud GET a `/chats`.
- **Enviar un mensaje**: Envía una solicitud POST a `/messages` con el usuario, el chat, el mensaje y un archivo adjunto opcional en el cuerpo de la solicitud.
- **Obtener todos los mensajes**: Realiza una solicitud GET a `/messages` con un parámetro opcional para filtrar por usuario.
- **Actualizar un mensaje**: Envía una solicitud PATCH a `/messages/:id` con el ID del mensaje y el nuevo contenido en el cuerpo de la solicitud.
- **Eliminar un mensaje**: Envía una solicitud DELETE a `/messages/:id` con el ID del mensaje a eliminar.

Asegúrate de ajustar la URL base y el puerto según la configuración de tu entorno.

¡Disfruta del chat en tiempo real!

## Contribución

Si deseas contribuir a este proyecto, puedes hacerlo de la siguiente manera:

1. Haz un fork de este repositorio.
2. Crea una rama con tus cambios: `git checkout -b nombre-de-la-rama`.
3. Realiza tus modificaciones y guarda los cambios.
4. Haz commit de tus cambios: `git commit -m "Descripción de los cambios"`.
5. Haz push de la rama: `git push origin nombre-de-la-rama`.
6. Abre una pull request en este repositorio.

Agradezco cualquier contribución que puedas hacer para mejorar este proyecto.

