const elemList = figma.currentPage.parent.findAll(n => n.name === "#url")
let str: string = "www.youtube.com"
let elemLayerName: string



elemList.forEach(function(elem){
  elemLayerName = elem.characters;
  let aperiaLinks = {
    type: "URL",
    value: elem.characters
  }
  elem.hyperlink = aperiaLinks
})



console.log(elemList)