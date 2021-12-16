function menuMobile() {
  let ele = document.querySelector("#menuMobile")

  if (ele.classList.contains("hide"))
  ele.classList.remove("hide")
  else ele.classList.add("hide")
}