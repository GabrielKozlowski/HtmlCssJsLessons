const names = document.getElementById("name");
const number = document.getElementById("number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");


const numberCard = document.getElementById("numberCard");
const nameCard = document.getElementById("nameCard");
const dateCard = document.getElementById("dateCard");

const button = document.getElementById("button")



button.addEventListener("click", function () {
    const valueNames = document.getElementById("name").value;
    const valueNumber = document.getElementById("number").value;
    const valueMonth = document.getElementById("month").value;
    const valueYear = document.getElementById("year").value;
    const valueCvc = document.getElementById("cvc").value;

    const firstFour = valueNumber.substring(0,4);
    const secoundFour = valueNumber.substring(4,8);
    const thirdFour = valueNumber.substring(8,12);
    const fourthFour = valueNumber.substring(12,16);

    const nameError = document.querySelector(".error_card_name");
    const mmError = document.querySelector(".date_error");
    const cvcError = document.querySelector(".cvc_error");
    const textError = document.querySelector(".error_card_number");   

    nameCard.innerHTML = valueNames;
    numberCard.innerHTML = firstFour + " " + secoundFour + " " + thirdFour + " " + fourthFour;
    dateCard.innerHTML = valueMonth + "/" + valueYear;
    

    const namCard = true
    const numbCard = true
    const mmCard = true
    const yyCard = true
    const cvcCard = true    
    const a = true 

    while (true) 
    {
        if (valueNames == "")
        {
            nameError.innerHTML = "Can't be blank";
            names.classList = names.classList + " border_red";
            nameError.classList = nameError.classList + " error_text_red"; 
            namCard = false
        }

        else if (isNaN(valueNumber) || valueNumber == "")
        {
            textError.innerHTML = "Wrong format, numbers only";
            number.classList = number.classList + " border_red";
            textError.classList = textError.classList + " error_text_red";
            numbCard = false 
        }

        else if (valueMonth == "")
        {
            mmError.innerHTML = "Can't be blank";
            month.classList = month.classList + " border_red";
            mmError.classList = mmError.classList + " error_text_red"; 
            mmCard = false
        }

        else if (valueYear == "")
        {
            mmError.innerHTML = "Can't be blank";
            year.classList = year.classList + " border_red";
            mmError.classList = mmError.classList + " error_text_red";
            yyCard = false
        }

        else if (valueCvc == "")
        {
            cvcError.innerHTML = "Can't be blank";
            cvc.classList = cvc.classList + " border_red";
            cvcError.classList = cvcError.classList + " error_text_red";  
            cvcCard = false     
        }


        else if (namCard && numbCard && mmCard && yyCard && cvcCard == true)
        {
            
            document.getElementsByClassName('right_site')[0].style.display = "none";
            document.getElementsByClassName('complete_state')[0].style.display = "block";
            break
        }
    }
});

