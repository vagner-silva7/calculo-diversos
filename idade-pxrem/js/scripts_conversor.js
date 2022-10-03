let inpBase = document.getElementById("inp-base-px");
let inpPX = document.getElementById("inp-px");
let inpREM = document.getElementById("inp-rem");


/* passo 2 */
let pxTOrem = () => {
    let inpBaseValue = inpBase.value;
    let pxValue = inpPX.value;
    if(pxValue.length!=0){
        inpREM.value = pxValue / inpBaseValue;
    }else{
        inpREM.value = "";
    }

};

/* passo 4 */
let remTOpx = () => {
    let inpBaseValue = inpBase.value;
    let remValue = inpREM.value;
    if(remValue.length!=0){
        inpPX.value = remValue * inpBaseValue;
    }else{
        inpPX.value = "";
    }

};


/* passo 1 */
inpPX.oninput = pxTOrem;

/* passo 3 */
inpREM.oninput = remTOpx;
