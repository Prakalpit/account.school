let d = new Date();
let y = d.getFullYear();
document.querySelector('.copyright').innerText = y ;

function hover(element) {
    element.setAttribute('src', 'img/khaata-open.png');
}

function unhover(element) {
    element.setAttribute('src', 'img/khaataa-close3.png');
}

// For FeesManagementModal
const FeesManagementModal = document.getElementById('FeesManagementModal');
const modalBtnFM = document.getElementById('FeesModalBTN');
const CloseBtnFM = document.getElementById('closebtn__');

modalBtnFM.addEventListener('click', OpenModalFM)
CloseBtnFM.addEventListener('click', CloseModalFM)

function OpenModalFM() {
    FeesManagementModal.style.display ='block';
}
function CloseModalFM(){
    FeesManagementModal.style.display ='none';
}

// For Exam Management
const ExamManagementModal = document.getElementById('ExamManagementModal');
const modalBtnEM = document.getElementById('ExamModalBTN');
const CloseBtnEM = document.getElementById('closebtn__emb');

modalBtnEM.addEventListener('click', OpenModalEM)
CloseBtnEM.addEventListener('click', CloseModalEM)

function OpenModalEM() {
    ExamManagementModal.style.display ='block';
}
function CloseModalEM(){
    ExamManagementModal.style.display ='none';
}


// For Notification
const NotificationModal = document.getElementById('NotificationModal');
const modalBtnN = document.getElementById('NotificationBTN');
const CloseBtnN = document.getElementById('closebtn__n');

modalBtnN.addEventListener('click', OpenModalN)
CloseBtnN.addEventListener('click', CloseModalN)

function OpenModalN() {
    NotificationModal.style.display ='block';
}
function CloseModalN(){
    NotificationModal.style.display ='none';
}


// For Online Class
const OnlineClassModal = document.getElementById('OnlineClassModal');
const modalBtnOC = document.getElementById('OnlineClassBTN');
const CloseBtnOC = document.getElementById('closebtn__oc');

modalBtnOC.addEventListener('click', OpenModalOC)
CloseBtnOC.addEventListener('click', CloseModalOC)

function OpenModalOC() {
    OnlineClassModal.style.display ='block';
}
function CloseModalOC(){
    OnlineClassModal.style.display ='none';
}


// For And More
const AndMoreModal = document.getElementById('AndMoreModal');
const modalBtnAM = document.getElementById('AndMoreBTN');
const CloseBtnAM = document.getElementById('closebtn__AM');

modalBtnAM.addEventListener('click', OpenModalAM)
CloseBtnAM.addEventListener('click', CloseModalAM)

function OpenModalAM() {
    AndMoreModal.style.display ='block';
}
function CloseModalAM(){
    AndMoreModal.style.display ='none';
}