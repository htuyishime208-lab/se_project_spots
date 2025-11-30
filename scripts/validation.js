const Settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-btn",
  inactiveButtonClass: "modal__save-btn_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
   errorMessageEl.textContent = errorMessage;
    inputElement.classList.add("modal__input_type_error");
   
 
};

const hideInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
   errorMessageEl.textContent = "";
   inputElement.classList.remove("modal__input_type_error");
    
 
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

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
    buttonElement.classList.add("modal__save-btn_inactive");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("modal__save-btn_inactive");
    
  }
};

const disableButton = (buttonElement, Config) => {
   
buttonElement.disabled = true;
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
