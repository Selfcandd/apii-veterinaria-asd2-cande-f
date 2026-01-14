# api – Veterinaria 

API REST desarrollada con Node.js y Express para productos de una veterinaria.  
Permite administrar un catálogo de productos como alimentos, medicamentos y accesorios para tus mascotas.

---

## Tecnologías utilizadas

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Swagger (swagger-ui-express, swagger-jsdoc)  
- dotenv  

---

## Instalación y ejecución local

### Requisitos previos

- Node.js instalado  
- MongoDB (local o MongoDB Atlas)  
- Git (opcional)  

### Pasos para ejecutar el proyecto

1. Clonar el repositorio o descargar el proyecto  
2. Abrir la carpeta del proyecto en Visual Studio Code  
3. Instalar las dependencias:

```bash
npm install
```

4. Crear el archivo `.env` con las variables de entorno:

```env
MONGO_URI=tu_url_de_mongodb
PORT=3000
```

5. Ejecutar el servidor:

```bash
npm start
```

---

## documentación de la API

La documentación de la api está disponible en Swagger una vez que el servidor está en ejecución:

http://localhost:3000/api-docs
 
 ---

## Endpoints

### Productos

- `GET /productos` → Listar todos los productos  
- `GET /productos/{codigo}` → Obtener un producto por código  
- `POST /productos` → Crear un producto  
- `PUT /productos/{codigo}` → Actualizar un producto  
- `DELETE /productos/{codigo}` → Eliminar un producto  

### Búsquedas

- `GET /productos/buscar?q=texto` → Buscar productos por nombre  
- `GET /productos/categoria/{nombre}` → Buscar productos por categoría  
- `GET /productos/precio/{min}-{max}` → Buscar productos por rango de precio  
- `POST /productos/masivo` → Carga masiva de productos  

---

## Autora

**Cande F**
