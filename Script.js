

const convertbutton = document.querySelector("#mainButton")
const currencySelect = document.querySelector(".currencySelectValue")
const currencySelectFrom = document.querySelector("#valueFrom")


function conveterValues(){

    
    const inputCurrencyValue = document.querySelector("#valueDigited").value // Apenas o valor que esta dentro do input
    const currencyValueToConvert = document.querySelector("#currencyToConvert") //Valor em Real
    const currencyValueConverted = document.querySelector("#convertedCurrency") // Outras moedas
    const currencySelect = document.querySelector(".currencySelectValue")

    //Currrency in Real
    const dolarToday = 5.0
    const euroToday = 5.40
    const libraToday = 0.16
    const bitcoinToday = 313465.72
    //////////////////////////////


    //Currency in Dolar
    const realInDolar = 5.13
    const euroInDolar = 0.94
    const libraInDolar = 0.80
    const bitcoinInDolar = 70557.50
    ///////////////////////////////

    //currency in Euro
    const dolarInEuro = 1.06
    const libraInEuro = 0.85
    const bitcoinInEuro = 0.000015
    const realInEuro = 5.47
    ///////////////////

    

    //Currrency in libra
    const dolarInLibra = 1.25
    const euroInLibra = 1.17
    const bitcoinInLibra = 0.000019
    const realInLibra = 0.16

    //Currency in BitCoin
    const dolarInBitCoin = 65293.20
    const euroInBitCoin = 61308.68
    const libraInBitCoin = 52409.55
    const realInBitCoin = 334305.61



    

    //Real
    if(currencySelectFrom.value == "real" && currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if(currencySelectFrom.value == "real" && currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    

    if(currencySelectFrom.value == "real" && currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraToday)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }   
    

    if(currencySelectFrom.value == "real" && currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/bitcoinToday)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
}
    

////////////////////////////////////////////////////////////////////////////////////////////



    //Dolar
    if (currencySelectFrom.value == "dolar" && currencySelect.value == "real" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realInDolar)
    
    }

    if (currencySelectFrom.value == "dolar" && currencySelect.value == "euro" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroInDolar)
    
    }

    if (currencySelectFrom.value == "dolar" && currencySelect.value == "libra" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraInDolar)
    
    }

    if (currencySelectFrom.value == "dolar" && currencySelect.value == "bitcoin" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinInDolar)
    
    }
    ////////////////////////////////////////





    //Euro
    if(currencySelectFrom.value == "euro" && currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarInEuro)
    }

    if(currencySelectFrom.value == "euro" && currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraInEuro)
    }

    
    if(currencySelectFrom.value == "euro" && currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinInEuro)
    }

    if(currencySelectFrom.value == "euro" && currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realInEuro)
    }
    /////////////////////




    //libra
    if(currencySelectFrom.value == "libra" && currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarInLibra)
    }

    if(currencySelectFrom.value == "libra" && currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroInLibra)
    }


    if(currencySelectFrom.value == "libra" && currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinInLibra)
    }

    if(currencySelectFrom.value == "libra" && currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realInLibra)
    }
    ///////////////////////////////////////////////////////////////////////

    //BitCoin
    if(currencySelectFrom.value == "bitcoin" && currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarInBitCoin)
    }

    if(currencySelectFrom.value == "bitcoin" && currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroInBitCoin)
    }

    if(currencySelectFrom.value == "bitcoin" && currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraInBitCoin)
    }
    
    if(currencySelectFrom.value == "bitcoin" && currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realInBitCoin)
    }

}






function changeCurrencyFrom() {
    const currencyImgFrom = document.querySelector("#imgConverter")
    const currencyNameFrom = document.querySelector("#pSelected")
    const inputCurrencyValue = document.querySelector("#valueDigited").value 

    const currencyValueToConvert = document.querySelector("#currencyToConvert")



    //////////////////////////Values From///////////////////////////////////////////////////////////

    if (currencySelectFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real"
        currencyImgFrom.src = "./Assets/icon/real_icon.png"

        
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if(currencySelectFrom.value == "dolar") {
        currencyNameFrom.innerHTML = "Dolar Americano"
        currencyImgFrom.src = "./Assets/icon/dolar_Icon.png"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImgFrom.src = "./Assets/icon/euro_icon.png"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImgFrom.src = "./Assets/icon/libra_icon.png"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    
    if(currencySelectFrom.value == "bitcoin"){
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyImgFrom.src = "./Assets/icon/bitcoin_icon.png"
    }


    ////////////////////////////////Value To//////////////////////////////////////////

 
    conveterValues()
}

function changeCurrencyTo() {
    const currencySelect = document.querySelector(".currencySelectValue")
    const currencyName = document.querySelector("#pConverted")
    const currencyImg = document.querySelector("#imgConverted")
    const inputCurrencyValue = document.querySelector("#valueDigited").value
    const currencyValueConverted = document.querySelector("#convertedCurrency")
   

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./Assets/icon/dolar_Icon.png"

    }


    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./Assets/icon/real_icon.png"

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }



    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/icon/euro_icon.png"

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
 


    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./Assets/icon/libra_icon.png"

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/icon/bitcoin_icon.png"

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

 
    conveterValues()
}

function blockEqualCoins(){  
    const currencySelectFrom = document.querySelector("#valueFrom")
    const currencySelect = document.querySelector(".currencySelectValue")
    const currencyImgFrom = document.querySelector("#imgConverter")
    const currencyNameFrom = document.querySelector("#pSelected")
    const currencyName = document.querySelector("#pConverted")
    const currencyImg = document.querySelector("#imgConverted")
    const inputCurrencyValue = document.querySelector("#valueDigited").value
    const currencyValueConverted = document.querySelector("#convertedCurrency")
    const currencyValueToConvert = document.querySelector("#currencyToConvert")
    const value = 0
  
    if(currencySelectFrom.value === currencySelect.value){
        alert("Não é possível selecionar moedas iguais")

        currencySelectFrom.selectedIndex = 0
        currencySelect.selectedIndex = 0;

        currencyNameFrom.innerHTML = "Real"
        currencyImgFrom.src = "./Assets/icon/real_icon.png"

        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./Assets/icon/dolar_Icon.png"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value)
    }

}



currencySelectFrom.addEventListener("change", changeCurrencyFrom)
currencySelect.addEventListener("change", changeCurrencyTo)
convertbutton.addEventListener("click", conveterValues)
convertbutton.addEventListener("click", blockEqualCoins)
currencySelectFrom.addEventListener("change", blockEqualCoins)
currencySelect.addEventListener("change", blockEqualCoins)