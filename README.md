# TP Backend 2020

## Integrantes

Federico Ruiz, 43904

Federico Vallejos, 41886

## Enunciado general

El sistema que vamos a desarrollar es una tienda online de venta de componentes de computación e insumos relacionados. El sistema está pensado para una tienda particular ubicada en Rosario. 

Los productos poseen lo siguientes datos
	* Nombre
	* Detalle
	* Stock

Los productos van a tener asociado una clase débil para almacenar el precio y llevar un histórico y una clase categoría, en la que un producto puede estar en varias categorías y una categoría puede tener varios productos.

Los usuarios de la página web serán de dos tipos, el Cliente y el Administrador

El Administrador tendrá las capacidades de crear, modificar y eliminar las siguientes entidades
	* Categorías
 * Productos
 * Precios
	
También tendrá que actualizar el estado de la orden de compra según en qué estado se encuentre (En Preparación, Envio, Finalizado).

El Cliente tendrá las facultades de ver los productos (detalles) y crear un carrito (con su listado de productos) y comprarlos, del stock de productos lo tomamos como que existen proveedores que enviaran productos para llenar el mismo, pero no se modeliza para no añadir tanta complejidad.

Para realiza una compra, el Cliente mirara los productos de un listado ordenado por categoría y filtros (precio), selecciona el producto(si hay stock), cantidad del mismo y confirma, esa línea de productos se agregaran al carrito, se añadirá una opción de envió con su costo, luego se actualizará el precio total (productos x cantidad + envio), y si el Cliente acepta, se podrá confirmar la compra ingresando los datos (método de pago, datos personales), se generará entonces una orden de compra que el Cliente podrá consultar.


## ABMC

Clientes (Dependiente)
 * nombre
 * apellido
 * teléfono
 * dirección
  	* calle
  	* número
  	* código postal
		* ciudad
		* provincia	
 * email
 * estado

Productos (Dependiente)
 * nombre producto
 * detalle
 * stock
 * categorías
 * precio actual

Categorias (independientes)

 * Id categoria
 * descripcion

## Listados

 * Listado de los Productos por Categoría (Simple)
 * Listar los Productos con el stock disponible, su detalle , precio y categoría a la cual pertenece (Complejo)
 * Listado de los datos del carrito (Nombre de los productos, Precios de cada producto, Precio envio y Precio Final) (Complejo)

## Detalles

 * Producto : Tipo de Producto, Precio
* Carrito : Línea de Producto 
	
## Modelo de dominio

	https://app.diagrams.net/#G1kSK_ERzIZNSvalpdNPq2WalKDi_JEu-w
	
[checklist]: ./checklist/README.md
