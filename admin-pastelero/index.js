const lista= document.getElementById('lista');
const lista_inventario= document.getElementById('lista-pedido');
const inventario= document.getElementById('inventario');
const titulo= document.getElementById('titulo');
lista_inventario.addEventListener('click',()=>{
    titulo.innerHTML='Lista de los pedidos';
    lista.src='lista de pedidos/lista.html'});

inventario.addEventListener('click',()=>{
    titulo.innerHTML='Lista de Inventario';
    lista.src='inventario/inventario.html'});