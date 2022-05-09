let pricerParent = ""


// Base settings
function initPricer() {
   let baseHtml = `
   <div class="wrapper">
   <div class="less element" price="--">-5%</div>
   <div class="less element" price="--">-4%</div>
   <div class="less element" price="--">-3%</div>
   <div class="less element" price="--">-2%</div>
   <div class="less element" price="--">-1%</div>
   <div class="separator">&#60; &nbsp; &#62;</div>
   <div class="more element" price="--">+1%</div>
   <div class="more element" price="--">+2%</div>
   <div class="more element" price="--">+3%</div>
   <div class="more element" price="--">+4%</div>
   <div class="more element" price="--">+5%</div>
</div >`

   pricer = document.createElement("pricer")
   pricer.innerHTML = baseHtml


   hidePricer()
   createButtonActions()
}

function createInputsListeners(inputs) {
   for (input of inputs) {
      input.addEventListener('contextmenu', (e) => {
         e.preventDefault()
         attachPricer(e)
         calculatePrices(e)
      })
   }
}

function createButtonActions() {

   console.log($("pricer .element"))
   for (const button of $("pricer .element")) {
      button.addEventListener("click", (e) => {
         console.log(pricerParent)
         pricerParent.value = button.attributes.price.value
         pricerParent.onchange()
      })
   }
}


function attachPricer(e) {
   console.log(e)
   pricerParent = e.target
   $("pricer").show()
   let parentRect = pricerParent.parentElement.getBoundingClientRect()
   let pricerRect = $("pricer")[0].getBoundingClientRect();
   $("pricer")[0].style.top = parentRect.y + parentRect.height;
   $("pricer")[0].style.left = (parentRect.x + parentRect.width / 2) - (pricerRect.width / 2) - 33;
   $(pricerParent.parentElement).append($("pricer"))
}

function hidePricer() {
   document.getElementById("content").appendChild(pricer)
   $("pricer").hide()
}

function calculatePrices(e) {
   let bp = getBasePrice(e)
   let prices = [parseInt(bp * 0.95), parseInt(bp * 0.96), parseInt(bp * 0.97), parseInt(bp * 0.98), parseInt(bp * 0.99), parseInt(bp * 1.01), parseInt(bp * 1.02), parseInt(bp * 1.03), parseInt(bp * 1.04), parseInt(bp * 1.05)]


   $("pricer .element").each((index, element) => {
      element.setAttribute("price", prices[index])
   })
}

function getBasePrice(e) {
   console.log(e.target)
   return parseInt(e.target.defaultValue.replace(' ', ''))
}

