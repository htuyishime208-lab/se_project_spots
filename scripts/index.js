const initialCards= [
  {

name:"Golden Gate Bridge",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
},
{

name:"Val Thorens",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
},

{
name:"Restaurant terrace",
link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
},

{
name: "An outdoor cafe",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
},
{
name: "A very long bridge, over the forest and through the trees",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
},

{
name: "Tunnel with morning light",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
},

{
name: "Mountain house",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
},

];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileFormEl= editProfileModal.querySelector(".modal__form");


const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");





const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#edit-profile-modall");
const newPostCloseBtn= newPostModal.querySelector(".modal__close-btn");
const newPostFormEl= newPostModal.querySelector(".modal__form");

const newPostNameInput =newPostModal.querySelector("#link-name-input");
const newPostDescriptionInput= newPostModal.querySelector("#caption-description-input");


//const newPostNameEl = document.querySelector(".profile__name");
//const newPostDescriptionEl = document.querySelector(".profile__description");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const previewModal = document.querySelector("#preview-modall");
const previewCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewCaption = previewModal.querySelector(".modal__caption");
const previewImage = previewModal.querySelector(".modal__image");



const CardTemplate= document.querySelector("#card-template").content.querySelector(".card");
const CardsList= document.querySelector(".cards__list");

function getCardElement(data){
  const cardElement= CardTemplate.cloneNode(true);
  const cardTitleEl= cardElement.querySelector(".card__title");
  const cardImageEl= cardElement.querySelector(".card__image");
  cardImageEl.src=data.link;
  cardImageEl.alt=data.name;
  cardTitleEl.textContent=data.name;
  
const cardLikeBtn=cardElement.querySelector(".card__like-btn");
cardLikeBtn.addEventListener("click", () =>{
cardLikeBtn.classList.toggle("card__like-btn_active");
});

const carddeleteBtn=cardElement.querySelector(".card__delete-btn");
carddeleteBtn.addEventListener("click", () =>{
carddeleteBtn.closest(".card").remove();
// another code to remove cardElement.remove(); cardElement= null;
});

cardImageEl.addEventListener("click", () =>{

  previewImage.src=data.link;
  previewImage.alt=data.name;
  previewCaption.textContent=data.name;
  openModal(previewModal);

});

previewCloseBtn.addEventListener("click", function () {
    //editProfileModal.classList.remove("modal_is-opened");
    closeModal(previewModal);
});

  return(cardElement);

}



function openModal(modal){
  modal.classList.add("modal_is-opened");
}

function closeModal(modal){
  modal.classList.remove("modal_is-opened");
}



editProfileBtn.addEventListener("click", function () {
    //editProfileModal.classList.add("modal_is-opened");
    openModal(editProfileModal);
    editProfileNameInput.value=profileNameEl.textContent;
    editProfileDescriptionInput.value=profileDescriptionEl.textContent;
 

});

editProfileCloseBtn.addEventListener("click", function () {
    //editProfileModal.classList.remove("modal_is-opened");
    closeModal(editProfileModal);
});


newPostBtn.addEventListener("click", function(){
  //newPostModal.classList.add("modal_is-opened");
  openModal(newPostModal);

 

     // newPostNameInput.value=profileNameEl.textContent;
  // newPostDescriptionInput.value=profileDescriptionEl.textContent;

});


newPostCloseBtn.addEventListener("click", function () {
    //newPostModal.classList.remove("modal_is-opened");
    closeModal(newPostModal);

});


function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
 
profileNameEl.textContent= editProfileNameInput.value;
profileDescriptionEl.textContent=editProfileDescriptionInput.value;


 editProfileModal.classList.remove("modal_is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault(); 
//profileNameEl.textContent= editProfileNameInput.value;
//profileDescriptionEl.textContent=editProfileDescriptionInput.value; 

//console.log(newPostNameInput.value);
//console.log(newPostDescriptionInput.value);

const cardElement= getCardElement(
    {
      name: newPostNameInput.value,
      link: newPostDescriptionInput.value,
    }
  );
  CardsList.prepend(cardElement);

  newPostModal.classList.remove("modal_is-opened");


}


newPostFormEl.addEventListener('submit', handleAddCardSubmit)
{
  /*const cardElement= getCardElement(
    {
      name: newPostNameInput.value,
      link: newPostDescriptionInput.value,
    }
  );
  CardsList.prepend(cardElement);*/
  
};



editProfileFormEl.addEventListener('submit', handleProfileFormSubmit);

initialCards.forEach(function (card){
 /*console.log(card.name);
  console.log(card.link);*/
  const cardElement= getCardElement(card);
  CardsList.prepend(cardElement);
  //console.log(getCardElement(card));
  
      
});