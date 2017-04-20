window.onload = initialize;

var DATAFILE = "research.json";
var DONE_READYSTATE = 4;
var DONE_STATUS = 200;
var OFFICIAL_URL = "https://www.ecst.csuchico.edu/~kbuffardi/";

var references = {};

function initialize()
{
  validateHost();
  loadExternalData();
}

function validateHost()
{
  if( window.location.hostname != "www.ecst.csuchico.edu" )
  {
    window.location.href = OFFICIAL_URL;
  }
}

function loadExternalData()
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