import "./css/index.css"

const creditCardBgColor01 = document.querySelector(
  ".cc-bg-mask-color-1 ellipse"
)
const creditCardBgColor02 = document.querySelector(
  ".cc-bg-mask-color-2 ellipse"
)
const creditCardBgColor03 = document.querySelector(
  ".cc-bg-mask-color-3 ellipse"
)
const creditCardBgColor04 = document.querySelector(".cc-bg-mask-color-4 path")
const creditCardBgColor05 = document.querySelector(".cc-bg-mask-color-5 path")
const creditCardLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#DFA43B", "#1248FF", "#2051FE", "#244FEA", "#121212"],
    mastercard: ["#F79E1B", "#CC0018", "#EB001B", "#FF334B", "#121212"],
    elo: ["#ef4123", "#00a4e0", "#00bbff", "#4dcfff", "#121212"],
    amex: ["#ffffff", "#00374D", "#005B80", "#0077A6", "#121212"],
    hipercard: ["#822124", "#822124", "#A3292D", "#CC3338", "#121212"],
    banrisul: ["#00D9CB", "#0788FE", "#A06FFE", "#00D9CB", "#121212"],
    diners: ["#1C3163", "#00374D", "#2D4F9E", "#9CB1E3", "#121212"],
    default: ["#ffffff", "#999797", "#5e5e5e", "#424242", "#121212"],
  }

  creditCardBgColor01.setAttribute("fill", colors[type][0])
  creditCardBgColor02.setAttribute("fill", colors[type][1])
  creditCardBgColor03.setAttribute("fill", colors[type][2])
  creditCardBgColor04.setAttribute("fill", colors[type][3])
  creditCardBgColor05.setAttribute("fill", colors[type][4])

  creditCardLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType
