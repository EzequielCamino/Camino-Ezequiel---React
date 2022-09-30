

# React JS - Comisión 38280

## Proyecto Final - Golden Loot (E-commerce) - Camino Ezequiel

El proyecto fue desarrollado íntegramente utilizando React, RouterDom, Sass y las siguientes librerías:
#### Bootstrap
Utilizado para dar estilo general al proyecto

#### Sweet Alert
Utilizado para las notificaciones en formato Modal (success o error) al avanzar en el proceso de compra

#### Toastify
Utilizado para las notificaciones en formato Toast (success o error) al intentar agregar unidades de un producto al carrito

#### Font Awesome
Utilizado para los íconos del footer

#### Se uso Firebase para la base de datos

### Para ver el deploy del sitio: [Golden Loot](https://goldenloot-l0utjlkz4-ezequielcamino.vercel.app/)


## GIF explicativo del proceso de compra:
![buy](https://user-images.githubusercontent.com/103323332/193184153-de510673-e56f-4f03-a55c-874bfa93cb74.gif)

##### Al intentar agregar stock de un producto, éste se verifica (el primer ítem se encuentra sin stock a fines prácticos)
##### Los productos se encuentran dividos por categorías accesibles desde el Navbar
##### Finalizar la compra genera una "order" que se guarda en Firebase y se le da el ID de ésta al usuario
##### El stock comprado es removido de la base de datos de Firebase y, consecuentemente, del sitio web


## GIF explicativo del proceso de restaurar carrito:
![restoreCart](https://user-images.githubusercontent.com/103323332/193184160-c38a4f3e-b910-4edf-a348-1731e472e1f2.gif)

##### Al recargar el sitio o salir del navegador, el carrito creado es guardado en LocalStorage
##### Éste puede restaurarse únicamente desde un carrito vacío
##### Si el carrito fue limpiado o el proceso de compra se completó no es posible retaurarlo
