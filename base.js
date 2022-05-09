let view = {
   priceInputs: getAllPriceInputs()
}



if (view.priceInputs.length) {
   createDocumentListeners()
   initPricer()
   createInputsListeners(view.priceInputs)
   // removeSliders(view.priceInputs)
}