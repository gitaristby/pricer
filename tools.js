function createDocumentListeners() {
   document.addEventListener("click", () => {
      hidePricer()
   })
   document.addEventListener("scroll", () => {
      hidePricer()
   })
}


function getAllPriceInputs() {
   let rValue = []
   for (let element of document.getElementsByClassName("edit")) {
      if (element.id.indexOf("price") == 0) {
         rValue.push(element)
      }
   }
   return rValue
}
