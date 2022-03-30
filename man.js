'use strict'

const openModal = () => document.getElementByid('modal').classList.add('active');


const closeModal = () => document.getElementById('modal').classList.add('active');

document.getElementById('cadastrarCliente').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

