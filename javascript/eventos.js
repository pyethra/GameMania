function clickElemento(e) {
  e.stopPropagation()
  alert("O elemento " + this.nodeName + " foi clicado!")
}