const Close = document.getElementById('close');
const menu= document.getElementById('menu');
const ListaNav= document.querySelector('.nav-lista')

menu.addEventListener('click',()=>{
    ListaNav.classList.add('lista');
    menu.style.display='none';
    Close.style.display='block';
});

Close.addEventListener('click',Cerrar)

function Cerrar(){
    ListaNav.classList.remove('lista');
    menu.style.display='block';
    Close.style.display='none';
}
