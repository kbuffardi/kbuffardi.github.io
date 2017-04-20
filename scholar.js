window.onload = loadResearchData;

var DATAFILE = "research.json";
var DONE_READYSTATE = 4;
var DONE_STATUS = 200;

var references = {};

function loadResearchData()
{
  var json = new XMLHttpRequest();
  json.overrideMimeType("application/json");
  //event listener: when json file load is "done"
  json.onreadystatechange = function() {
    if (this.readyState == DONE_READYSTATE
        && this.status == DONE_STATUS) 
    {
      references=JSON.parse(this.responseText);
      console.log(references);
    }
  }
  json.open("GET", DATAFILE);
  json.send();
}