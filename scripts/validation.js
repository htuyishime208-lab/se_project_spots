const Settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-btn",
  inactiveButtonClass: "modal__save-btn_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}



const showInputError = (formElement, inputElement, errorMessage, Config) => {
  const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
   errorMessageEl.textContent = errorMessage;
   /*inputElement.classList.add(Config.errorClass);
    inputElement.classList.add(Config.errorClass);*/
   
 
};

const hideInputError = (formElement, inputElement, errorMessage, Config) => {
  const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
   errorMessageEl.textContent = "";
  /*inputElement.classList.remove(Config.errorClass);
    inputElement.classList.remove(Config.errorClass);*/
    
 
};



const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const disableButton = (buttonElement, Config) => {
   
buttonElement.disabled = true;
};


const toggleButtonState = (inputList, buttonElement,Config) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, Config);
    buttonElement.classList.add(Config.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(Config.inactiveButtonClass);
    
  }
};


const setEventListeners = (formElement, Config) => {
  const inputList = Array.from(formElement.querySelectorAll(Config.inputSelector));
  const buttonElement = formElement.querySelector(Config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, Config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, Config);
      toggleButtonState(inputList, buttonElement, Config);
    });
  });
};



const enableValidation = (Config) => {
  const formList = document.querySelectorAll(Config.formSelector);
  formList.forEach((formElement) => {
    
    setEventListeners(formElement, Config);
  });
};

enableValidation(Settings);
