export function form() {


  // TICKETS FORM
  const buyTicketsBtn = document.getElementById("buyTicketsBtn"),
    formCloseBtn = document.getElementById("formCloseBtn"),
    popUp = document.querySelector(".pop-up"),
    formDate = document.getElementById("formDate"),
    ticketDateText = document.querySelector(".payment__date"),
    overlay = document.querySelector(".pop-up__overlay"),
    selectedTime = document.querySelector(".time__selected"),
    timeOptions = document.querySelector(".time__options"),
    timeOption = timeOptions.querySelectorAll(".time__option"),
    inputName = document.getElementById("formName"),
    alertName = document.querySelector(".name__alert"),
    inputEmail = document.getElementById("formEmail"),
    alertEmail = document.querySelector(".email__alert"),
    inputPhone = document.getElementById("formPhone"),
    alertPhone = document.querySelector(".tel__alert");

  const displayTicketForm = () => {
    if (window.getComputedStyle(popUp).visibility === "hidden") {
      popUp.classList.remove("closed");
      overlay.classList.remove("transparent");
    } else {
      popUp.classList.add("closed");
      overlay.classList.add("transparent");
    }
  };
  const getDate = () => {
    let setDate = new Date(formDate.value);
    let setMonth = setDate.getMonth();
    let setDay = setDate.getDate();
    let setDayOfWeek = setDate.getDay();

    let nameOfDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let nameOfMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let shortM = [];

    ticketDateText.textContent =
      nameOfDays[setDayOfWeek] + ', ' + nameOfMonths[setMonth] + ' ' + setDay;
    for (let i = 0; i < nameOfMonths.length; i++) {
      let a = nameOfMonths[i].split("");
      a = a.slice(0, 3);
      a = a.join("");
      shortM.push(a);
    }
    document.querySelector(".date__wrapper").childNodes[0].nodeValue = `${shortM[setMonth]}, ${setDay}`;
  };
  const setMinDateOnLoad = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    if (currentDay.toString().length === 1) {
      currentDay = '0' + currentDay;
    }
    formDate.setAttribute(
      'min',
      `${currentYear}-${currentMonth + 1}-${currentDay}`
    );
  };
  const checkInput = (input, alert) => {
    if (input.validity.patternMismatch) {
      alert.classList.add("active");
    } else {
      input.classList.remove("active");
      alert.classList.remove("active");
    }
  };
  const checkChange = (input, alert) => {
    if (input.validity.patternMismatch) {
      input.classList.add("active");
      alert.classList.add("active");
    } else {
      input.classList.remove("active");
      alert.classList.remove("active");
    }
  };
  const checkNumberChange = () => {
    let regExp = new RegExp(/^(\d{1,10}|(\d{2,3}(-|\s)){1,4}\d{2,3})$/gm);
    let onlyDigits = parseInt(inputPhone.value.replace(/\D+/g, ''));
    if (!regExp.test(inputPhone.value)) {
      inputPhone.classList.add("active");
      alertPhone.classList.add("active");
    } else if (onlyDigits.toString().length > 10) {
      inputPhone.classList.add("active");
      alertPhone.classList.add("active");
    } else {
      inputPhone.classList.remove("active");
      alertPhone.classList.remove("active");
    }
  };
  const checkNumberInput = () => {
    let regExp = new RegExp(/^(\d{1,10}|(\d{2,3}(-|\s)){1,4}\d{2,3})$/gm);
    let onlyDigits = parseInt(inputPhone.value.replace(/\D+/g, ''));
    if (!regExp.test(inputPhone.value)) {
      alertPhone.classList.add("active");
    } else if (onlyDigits.toString().length > 10) {
      alertPhone.classList.add("active");
    } else {
      inputPhone.classList.remove("active");
      alertPhone.classList.remove("active");
    }
  };

  buyTicketsBtn.addEventListener("click", displayTicketForm);
  formCloseBtn.addEventListener("click", displayTicketForm);
  formDate.addEventListener('change', getDate);
  window.onload = setMinDateOnLoad();
  selectedTime.addEventListener('click', () => timeOptions.classList.toggle('active'));
  timeOption.forEach(option => {
    option.addEventListener('click', () => {
      selectedTime.innerHTML = option.querySelector('label').innerHTML;
      timeOptions.classList.remove('active');
      document.querySelector(".payment__time").textContent = option.querySelector('label').innerHTML;
    });
  });
  inputName.addEventListener('change', () => checkChange(inputName, alertName));
  inputName.addEventListener('input', () => checkInput(inputName, alertName));
  inputEmail.addEventListener('change', () => checkChange(inputEmail, alertEmail));
  inputEmail.addEventListener('input', () => checkInput(inputEmail, alertEmail));
  inputPhone.addEventListener('change', () => checkNumberChange());
  inputPhone.addEventListener('input', () => checkNumberInput());


  
}