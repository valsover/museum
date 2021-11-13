export function calculator() {


  //TICKETS CALCULATOR
  const plusBasic = document.getElementById("plusBasic"),
    plusSenior = document.getElementById("plusSenior"),
    minusBasic = document.getElementById("minusBasic"),
    minusSenior = document.getElementById("minusSenior"),
    plusBasicForm = document.getElementById("plusBasicForm"),
    plusSeniorForm = document.getElementById("plusSeniorForm"),
    minusBasicForm = document.getElementById("minusBasicForm"),
    minusSeniorForm = document.getElementById("minusSeniorForm"),
    totalAmount = document.getElementById("totalAmount"),
    basicAmount = document.getElementById("basic"),
    seniorAmount = document.getElementById("senior"),
    formBasicAmount = document.querySelector(".payment__basic_num"),
    formSeniorAmount = document.querySelector(".payment__senior_num"),
    formBasicSum = document.querySelector(".payment__basic_price"),
    formSeniorSum = document.querySelector(".payment__senior_price"),
    formBasicRowInput = document.querySelector(".basic__row-input"),
    formSeniorRowInput = document.querySelector(".senior__row-input"),
    ticketType = document.querySelectorAll(".type-list__input"),
    ticketTypeSelect = document.getElementById("formTicketType"),
    formTotalAmount = document.querySelector(".total__num");

  let basicTotal = 20,
    seniorTotal = 10,
    countB = 1,
    countS = 0,
    totalSResultMain = 0,
    totalResultPopup = 0;

  const countTotal = () => {
    totalSResultMain = totalResultPopup = (basicTotal * countB) + (seniorTotal * countS);
    totalAmount.innerText = totalSResultMain;
    formTotalAmount.innerHTML = `${totalSResultMain} €`;
  };
  const checkRadio = () => {
    for (let i = 0; i < ticketType.length; i++) {
      if (ticketType[i].type === "radio" && ticketType[i].checked) {
        let tt = ticketType[i].value;
        tt === "Permanent" ? basicTotal = 20 :
          tt === "Temporary" ? basicTotal = 25 :
            tt === "Combined" ? basicTotal = 40 : false;
        for (let j = 0; j < ticketTypeSelect.length; j++) {
          ticketTypeSelect[j].value === tt ? ticketTypeSelect[j].selected = true : false;
        }
        document.querySelector(".payment__ticket").innerHTML = ticketType[i].value;
        seniorTotal = basicTotal / 2;
        countTotal();
      }
    }
  };
  const checkOption = () => {
    let tt = ticketTypeSelect.value;
    tt === "Permanent" ? basicTotal = 20 :
      tt === "Temporary" ? basicTotal = 25 :
        tt === "Combined" ? basicTotal = 40 : false;
    seniorTotal = basicTotal / 2;
    document.querySelector(".payment__basic_name").innerHTML = `Basic (${basicTotal} €)`;
    document.querySelector(".payment__senior_name").innerHTML = `Senior (${seniorTotal} €)`;
    document.querySelector(".payment__ticket").innerHTML = ticketTypeSelect.value;
    formBasicSum.innerHTML = `${(basicTotal * countB)} €`;
    formSeniorSum.innerHTML = `${(seniorTotal * countS)} €`;
    countTotal();
  };
  const plusTicket = (a, b, c, d, f) => {
    if (a < 20) {
      if (a === countB && b === basicAmount && c === formBasicAmount && d === formBasicSum && f === formBasicRowInput) {
        countB++;
        b.value = c.innerHTML = f.value = countB;
        d.innerHTML = `${basicTotal * countB} €`;
      } else {
        countS++;
        b.value = c.innerHTML = f.value = countS;
        d.innerHTML = `${seniorTotal * countS} €`;
      }
    } else if (a >= 20) {
      a = 20;
      b.value = a;
    }
    countTotal();
  };
  const minusTicket = (a, b, c, d, f) => {
    if (a <= 20 && a > 0) {
      if (a === countB && b === basicAmount && c === formBasicAmount && d === formBasicSum && f === formBasicRowInput) {
        countB--;
        b.value = c.innerHTML = f.value = countB;
        d.innerHTML = `${basicTotal * countB} €`;
      } else {
        countS--;
        b.value = c.innerHTML = f.value = countS;
        d.innerHTML = `${seniorTotal * countS} €`;
      }
    } else {
      a = 0;
      b.value = a;
    }
    countTotal();
  };

  ticketType.forEach(el => el.addEventListener("click", checkRadio));
  ticketTypeSelect.addEventListener("change", checkOption);
  plusBasic.addEventListener("click", () => plusTicket(countB, basicAmount, formBasicAmount, formBasicSum, formBasicRowInput));
  plusSenior.addEventListener("click", () => plusTicket(countS, seniorAmount, formSeniorAmount, formSeniorSum, formSeniorRowInput));
  minusBasic.addEventListener("click", () => minusTicket(countB, basicAmount, formBasicAmount, formBasicSum, formBasicRowInput));
  minusSenior.addEventListener("click", () => minusTicket(countS, seniorAmount, formSeniorAmount, formSeniorSum, formSeniorRowInput));
  plusBasicForm.addEventListener("click", () => plusTicket(countB, basicAmount, formBasicAmount, formBasicSum, formBasicRowInput));
  plusSeniorForm.addEventListener("click", () => plusTicket(countS, seniorAmount, formSeniorAmount, formSeniorSum, formSeniorRowInput));
  minusBasicForm.addEventListener("click", () => minusTicket(countB, basicAmount, formBasicAmount, formBasicSum, formBasicRowInput));
  minusSeniorForm.addEventListener("click", () => minusTicket(countS, seniorAmount, formSeniorAmount, formSeniorSum, formSeniorRowInput));

  
}