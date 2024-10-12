# Proyecto Final: Sistema de Gestión para Ferretería

## Integrantes: Russo Tancara Jhonattan Pablo - Zuñiga Mendez Jhonny Agustín

## Descripción del Negocio

Este sistema de gestión de ferretería está diseñado para simplificar la administración del negocio, permitiendo gestionar usuarios, clientes, productos, ventas, y los detalles de cada transacción de manera eficiente. Su objetivo principal es mantener un control adecuado del inventario y facilitar las ventas diarias, optimizando el flujo de trabajo y mejorando la organización de la ferretería.

## Entidades y Campos Tentativos

### 1. Usuario
Gestiona los usuarios que acceden al sistema, incluyendo administradores y empleados.

- **id_usuario**: ID único del usuario.
- **nombre_usuario**: Nombre del usuario.
- **email**: Correo electrónico del usuario.
- **password**: Contraseña para autenticación.
- **rol**: Rol del usuario (ej. administrador, empleado).

### 2. Cliente
Registra y gestiona la información de los clientes de la ferretería.

- **id_cliente**: ID único del cliente.
- **nombre**: Nombre del cliente.
- **apellido**: Apellido del cliente.
- **telefono**: Número de contacto del cliente.
- **email**: Correo electrónico del cliente.
- **direccion**: Dirección del cliente.

### 3. Categorias
Gestiona las categorias disponibles en el inventario de la ferretería.

- **id_categoria**: ID único de la categoria.
- **descripcion**: Descripción breve de la categoria.

### 4. Producto
Gestiona los productos disponibles en el inventario de la ferretería.

- **id_producto**: ID único del producto.
- **nombre_producto**: Nombre del producto.
- **descripcion**: Descripción breve del producto.
- **precio**: Precio unitario del producto.
- **stock**: Cantidad disponible en inventario.
- **id_categoria**: ID único de la categoria.

### 5. Venta
Registra las ventas realizadas en la ferretería.

- **id_venta**: ID único de la venta.
- **fecha**: Fecha de la transacción.
- **id_cliente**: ID del cliente que realiza la compra.
- **total**: Monto total de la venta.
- **id_usuario**: ID del usuario que registra la venta.

### 6. Detalle_Venta
Almacena los detalles específicos de cada venta, incluyendo los productos vendidos.

- **id_detalle**: ID único del detalle de la venta.
- **id_venta**: ID de la venta asociada.
- **id_producto**: ID del producto vendido.
- **cantidad**: Cantidad de producto vendido.
- **precio_unitario**: Precio unitario del producto en el momento de la venta.
- **subtotal**: Subtotal por cada producto (cantidad * precio_unitario).

