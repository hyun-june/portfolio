const Modal1 = new bootstrap.Modal(document.getElementById('Modal-1'));
const Modal2 = new bootstrap.Modal(document.getElementById('Modal-2'));
const Modal3 = new bootstrap.Modal(document.getElementById('Modal-3'));
const Modal4 = new bootstrap.Modal(document.getElementById('Modal-4'));
const Modal5 = new bootstrap.Modal(document.getElementById('Modal-5'));
const Modal6 = new bootstrap.Modal(document.getElementById('Modal-6'));
const Modal7 = new bootstrap.Modal(document.getElementById('Modal-7'));
const Modal8 = new bootstrap.Modal(document.getElementById('Modal-8'));
const Modal9 = new bootstrap.Modal(document.getElementById('Modal-9'));
const Modal10 = new bootstrap.Modal(document.getElementById('Modal-10'));
const Modal11 = new bootstrap.Modal(document.getElementById('Modal-11'));
const Modal12 = new bootstrap.Modal(document.getElementById('Modal-12'));

const ModalClosebtn = document.querySelectorAll('.modal-closebtn');

let ModalList = [Modal1 , Modal2, Modal3, Modal4, Modal5, Modal6, Modal7, Modal8, Modal9, Modal10, Modal11, Modal12];

 const closebtn = () => {
    ModalList.forEach(modal => modal.hide());
};

ModalClosebtn.forEach(buttons =>{
    buttons.addEventListener("click",closebtn)
})

const openModal1 = () => {
    Modal1.show();
}

const openModal2 = () => {
    Modal2.show();
}

const openModal3 = () => {
    Modal3.show();
}

const openModal4 = () => {
    Modal4.show();
}

const openModal5 = () => {
    Modal5.show();
}

const openModal6 = () => {
    Modal6.show();
}

const openModal7 = () => {
    Modal7.show();
}

const openModal8 = () => {
    Modal8.show();
}

const openModal9 = () => {
    Modal9.show();
}

const openModal10 = () => {
    Modal10.show();
}

const openModal11 = () => {
    Modal11.show();
}

const openModal12 = () => {
    Modal12.show();
}
