(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*************************************************
              Board Rotation                    
*************************************************/
var storage
var storagePrefix = 'KiCad_HTML_BOM__' + pcbdata.metadata.title + '__' + pcbdata.metadata.revision + '__'

function initStorage (key) {
  try {
    window.localStorage.getItem("blank");
    storage = window.localStorage;
  } catch (e) {
    console.log("Storage init error");
    // localStorage not available
  }
  if (!storage) {
    try {
      window.sessionStorage.getItem("blank");
      storage = window.sessionStorage;
    } catch (e) {
      // sessionStorage also not available
    }
  }
}

function readStorage(key) {
  if (storage) {
    return storage.getItem(storagePrefix + '#' + key);
  } else {
    return null;
  }
}

function writeStorage(key, value) {
  if (storage) {
    storage.setItem(storagePrefix + '#' + key, value);
  }
}

/************************************************/

/*************************************************
              Highlighted Refs                    
*************************************************/
var highlightedRefs = "";

function setHighlightedRefs(refs){
    highlightedRefs = refs;
}

function getHighlightedRefs(){
    return highlightedRefs;
}
/************************************************/

/*************************************************
              Redraw On Drag                      
*************************************************/
var redrawOnDrag = true;

  
function setRedrawOnDrag(value){
    redrawOnDrag = value;
    writeStorage("redrawOnDrag", value);
}

function getRedrawOnDrag(){
    return redrawOnDrag;
}

/************************************************/

/*************************************************
BOM Split
*************************************************/
var bomsplit;

function setBomSplit(value){
    bomsplit = value;
}

function getBomSplit(){
    return bomsplit;
}

function destroyBomSplit(){
    bomsplit.destroy()
}

/************************************************/

/*************************************************
Canvas Split
*************************************************/
var canvassplit;

function setCanvasSplit(value){
    canvassplit = value;
}

function getCanvasSplit(){
    return canvassplit;
}

function destroyCanvasSplit(){
    canvassplit.destroy()
}

function collapseCanvasSplit(value)
{
    canvassplit.collapse(value);
}

function setSizesCanvasSplit(value){
    canvassplit.setSizes([50, 50]);
}

/************************************************/

/*************************************************
Canvas Layout
*************************************************/
var canvaslayout = "FB";

/*XXX Found a bug at startup. Code assumes that canvas layout 
is in one of three states. then system fails. he bug was that the 
canvasLayout was being set to 'default' which is not a valid state. 
So no is check that if default is sent in then set the layout to FB mode.
*/
/* TODO: Make the default check below actually check that the item 
is in one of the three valid states. If not then set to FB, otherwise set to one of
the three valid states
*/
function setCanvasLayout(value){
    if(value == 'default'){
        canvaslayout = 'FB'
    }
    else {
        canvaslayout = value;
    }
}

function getCanvasLayout(){
    return canvaslayout;
}

/************************************************/

/*************************************************
BOM Layout
*************************************************/
var bomlayout = "default";

function setBomLayout(value){
    bomlayout = value;
}

function getBomLayout(){
    return bomlayout;
}

/************************************************/

/*************************************************
BOM Sort Function
*************************************************/
var bomSortFunction = null;

function setBomSortFunction(value){
    bomSortFunction = value;
}

function getBomSortFunction(){
    return bomSortFunction;
}

/************************************************/

/*************************************************
Current Sort Column
*************************************************/
var currentSortColumn = null;

function setCurrentSortColumn(value){
    currentSortColumn = value;
}

function getCurrentSortColumn(){
    return currentSortColumn;
}

/************************************************/

/*************************************************
Current Sort Order
*************************************************/
var currentSortOrder = null;

function setCurrentSortOrder(value){
    currentSortOrder = value;
}

function getCurrentSortOrder(){
    return currentSortOrder;
}

/************************************************/

/*************************************************
Current Highlighted Row ID
*************************************************/
var currentHighlightedRowId;

function setCurrentHighlightedRowId(value){
    currentHighlightedRowId = value;
}

function getCurrentHighlightedRowId(){
    return currentHighlightedRowId;
}

/************************************************/

/*************************************************
Highlight Handlers
*************************************************/
var highlightHandlers = [];

function setHighlightHandlers(values){
    highlightHandlers = values;
}

function getHighlightHandlers(){
    return highlightHandlers;
}

function pushHighlightHandlers(value){
    highlightHandlers.push(value);
}

/************************************************/

/*************************************************
Checkboxes
*************************************************/
var checkboxes = [];

function setCheckboxes(values){
    checkboxes = values;
}

function getCheckboxes(){
    return checkboxes;
}

/************************************************/

/*************************************************
BOM Checkboxes
*************************************************/
var bomCheckboxes = "";

function setBomCheckboxes(values){
    bomCheckboxes = values;
}

function getBomCheckboxes(){
    return bomCheckboxes;
}
/************************************************/

/*************************************************
Remove BOM Entries
*************************************************/
var removeBOMEntries = "";

function setRemoveBOMEntries(values){
    removeBOMEntries = values;
}

function getRemoveBOMEntries(){
    return removeBOMEntries;
}
/************************************************/


/*************************************************
Remove BOM Entries
*************************************************/
var additionalAttributes = "";

function setAdditionalAttributes(values){
    additionalAttributes = values;
}

function getAdditionalAttributes(){
    return additionalAttributes;
}
/************************************************/


/*************************************************
Highlight Pin 1
*************************************************/
var highlightpin1 = false;

function setHighlightPin1(value) {
  writeStorage("highlightpin1", value);
  highlightpin1 = value;
}

function getHighlightPin1(){
    return highlightpin1;
}

/************************************************/

/*************************************************
Last Clicked Ref
*************************************************/
var lastClickedRef;

function setLastClickedRef(value) {
    lastClickedRef = value;
}

function getLastClickedRef() {
  return lastClickedRef;
}

/************************************************/


/*************************************************
Combine Values
*************************************************/
var combineValues = false;

function setCombineValues(value) {
  writeStorage("combineValues", value);
  combineValues = value;
}

function getCombineValues(){
    return combineValues;
}
/************************************************/


module.exports = {
  initStorage                , readStorage                , writeStorage       ,
  setHighlightedRefs         , getHighlightedRefs         ,
  setRedrawOnDrag            , getRedrawOnDrag            ,
  setBomSplit                , getBomSplit                , destroyBomSplit    ,
  setCanvasSplit             , getCanvasSplit             , destroyCanvasSplit , collapseCanvasSplit , setSizesCanvasSplit,
  setCanvasLayout            , getCanvasLayout            ,
  setBomLayout               , getBomLayout               ,
  setBomSortFunction         , getBomSortFunction         ,
  setCurrentSortColumn       , getCurrentSortColumn       ,
  setCurrentSortOrder        , getCurrentSortOrder        ,
  setCurrentHighlightedRowId , getCurrentHighlightedRowId ,
  setHighlightHandlers       , getHighlightHandlers       , pushHighlightHandlers ,
  setCheckboxes              , getCheckboxes              ,
  setBomCheckboxes           , getBomCheckboxes           ,
  setRemoveBOMEntries        , getRemoveBOMEntries        ,
  setAdditionalAttributes    , getAdditionalAttributes    ,
  setHighlightPin1           , getHighlightPin1           ,
  setLastClickedRef          , getLastClickedRef          ,
  setCombineValues           , getCombineValues

};
},{}],2:[function(require,module,exports){

var globalData = require('./global.js')
var render     = require('./render.js')
var ibom       = require('./ibom.js')

const boardRotation = document.getElementById('boardRotation');
boardRotation.oninput=function()
{
  render.setBoardRotation(boardRotation.value);
}

const darkModeBox = document.getElementById('darkmodeCheckbox');
darkModeBox.onchange = function () {
  ibom.setDarkMode(darkModeBox.checked)
}

const silkscreenCheckbox = document.getElementById('silkscreenCheckbox');
silkscreenCheckbox.checked=function(){
  ibom.silkscreenVisible(silkscreenCheckbox.checked)
}
silkscreenCheckbox.onchange=function(){
  ibom.silkscreenVisible(silkscreenCheckbox.checked)
}

const highlightpin1Checkbox =document.getElementById('highlightpin1Checkbox');
highlightpin1Checkbox.onchange=function(){
  globalData.setHighlightPin1(highlightpin1Checkbox.checked);
  render.redrawCanvas(allcanvas.front);
  render.redrawCanvas(allcanvas.back);
}

const dragCheckbox = document.getElementById('dragCheckbox');
dragCheckbox.checked=function(){
  globalData.setRedrawOnDrag(dragCheckbox.checked)
}
dragCheckbox.onchange=function(){
  globalData.setRedrawOnDrag(dragCheckbox.checked)
}


const combineValues = document.getElementById('combineValues');
combineValues.onchange=function(){
  globalData.setCombineValues(combineValues.checked);
  ibom.populateBomTable();
}

const filter = document.getElementById('filter');
filter.oninput=function(){
  ibom.setFilter(filter.value)
}

const bomCheckboxes = document.getElementById('bomCheckboxes');
bomCheckboxes.oninput=function(){
  ibom.setBomCheckboxes(bomCheckboxes.value);
}

const removeBOMEntries = document.getElementById('removeBOMEntries');
removeBOMEntries.oninput=function(){
  ibom.setRemoveBOMEntries(removeBOMEntries.value);
}

const additionalAttributes = document.getElementById('additionalAttributes');
additionalAttributes.oninput=function(){
  ibom.setAdditionalAttributes(additionalAttributes.value);
}

const fl_btn = document.getElementById('fl-btn');
fl_btn.onclick=function(){
  ibom.changeCanvasLayout('F');
}

const fb_btn = document.getElementById('fb-btn');
fb_btn.onclick=function(){
  ibom.changeCanvasLayout('FB');
}


const bl_btn = document.getElementById('bl-btn');
bl_btn.onclick=function(){
  ibom.changeCanvasLayout('B');
}

const bom_btn = document.getElementById('bom-btn');
bom_btn.onclick=function(){
  ibom.changeBomLayout('BOM')
}

const lr_btn = document.getElementById('lr-btn');
lr_btn.onclick=function(){
  ibom.changeBomLayout('LR')
}

const tb_btn = document.getElementById('tb-btn');
tb_btn.onclick=function(){
  ibom.changeBomLayout('TB')
}

},{"./global.js":1,"./ibom.js":3,"./render.js":6}],3:[function(require,module,exports){
/* DOM manipulation and misc code */


var Split = require('../vender/split.js')
var globalData = require('./global.js')
var render = require('./render.js')
var pcb    = require('./pcb.js')


//TODO:  GLOBAL VARIABLE REFACTOR
var filter = "";
function getFilter(input) {
  return filter;
}

function setFilter(input) {
  filter = input.toLowerCase();
  populateBomTable();
}

function dbg(html) {
  dbgdiv.innerHTML = html;
}

function setDarkMode(value) {
  if (value) {
    topmostdiv.classList.add("dark");
  } else {
    topmostdiv.classList.remove("dark");
  }
  globalData.writeStorage("darkmode", value);
  render.redrawCanvas(allcanvas.front);
  render.redrawCanvas(allcanvas.back);
}

function getStoredCheckboxRefs(checkbox) {
  var existingRefs = globalData.readStorage("checkbox_" + checkbox);
  if (!existingRefs) {
    return new Set();
  } else {
    return new Set(existingRefs.split(","));
  }
}

function getCheckboxState(checkbox, references) {
  var storedRefsSet = getStoredCheckboxRefs(checkbox);
  var currentRefsSet = new Set(references);
  // Get difference of current - stored
  var difference = new Set(currentRefsSet);
  for (ref of storedRefsSet) {
    difference.delete(ref);
  }
  if (difference.size == 0) {
    // All the current refs are stored
    return "checked";
  } else if (difference.size == currentRefsSet.size) {
    // None of the current refs are stored
    return "unchecked";
  } else {
    // Some of the refs are stored
    return "indeterminate";
  }
}

function setBomCheckboxState(checkbox, element, references) {
  var state = getCheckboxState(checkbox, references);
  element.checked = (state == "checked");
  element.indeterminate = (state == "indeterminate");
}

function createCheckboxChangeHandler(checkbox, references) {
  return function() {
    refsSet = getStoredCheckboxRefs(checkbox);
    if (this.checked) {
      // checkbox ticked
      for (var ref of references) {
        refsSet.add(ref);
      }
    } else {
      // checkbox unticked
      for (var ref of references) {
        refsSet.delete(ref);
      }
    }
    globalData.writeStorage("checkbox_" + checkbox, [...refsSet].join(","));
  }
}

function createRowHighlightHandler(rowid, refs) {
  return function() {
    if (globalData.getCurrentHighlightedRowId()) {
      if (globalData.getCurrentHighlightedRowId() == rowid) {
        return;
      }
      document.getElementById(globalData.getCurrentHighlightedRowId()).classList.remove("highlighted");
    }
    document.getElementById(rowid).classList.add("highlighted");
    globalData.setCurrentHighlightedRowId(rowid);
    globalData.setHighlightedRefs(refs);
    render.drawHighlights();
  }
}

function entryMatches(part) {
  // check refs
  if (part.reference.toLowerCase().indexOf(getFilter()) >= 0) {
      return true;
    }
  // check value
  if (part.value.toLowerCase().indexOf(getFilter())>= 0) {
    return true;
  }
  // check footprint
  if (part.package.toLowerCase().indexOf(getFilter())>= 0) {
    return true;
  }

  // Check the displayed attributes
  var additionalAttributes = globalData.getAdditionalAttributes().split(',');
  additionalAttributes     = additionalAttributes.filter(function(e){return e});
  for (var x of additionalAttributes) {
      // remove beginning and trailing whitespace
      x = x.trim()
      if (part.attributes.has(x)) {
        if(part.attributes.get(x).indexOf(getFilter()) >= 0){
          return true;
        }
      }
    }

  return false;
}


function highlightFilter(s) {
  if (!getFilter()) {
    return s;
  }
  var parts = s.toLowerCase().split(getFilter());
  if (parts.length == 1) {
    return s;
  }
  var r = "";
  var pos = 0;
  for (var i in parts) {
    if (i > 0) {
      r += '<mark class="highlight">' +
        s.substring(pos, pos + getFilter().length) +
        '</mark>';
      pos += getFilter().length;
    }
    r += s.substring(pos, pos + parts[i].length);
    pos += parts[i].length;
  }
  return r;
}

function checkboxSetUnsetAllHandler(checkboxname) {
  return function() {
    var checkboxnum = 0;
    while (checkboxnum < globalData.getCheckboxes().length &&
      globalData.getCheckboxes()[checkboxnum].toLowerCase() != checkboxname.toLowerCase()) {
      checkboxnum++;
    }
    if (checkboxnum >= globalData.getCheckboxes().length) {
      return;
    }
    var allset = true;
    var checkbox;
    var row;
    for (row of bombody.childNodes) {
      checkbox = row.childNodes[checkboxnum + 1].childNodes[0];
      if (!checkbox.checked || checkbox.indeterminate) {
        allset = false;
        break;
      }
    }
    for (row of bombody.childNodes) {
      checkbox = row.childNodes[checkboxnum + 1].childNodes[0];
      checkbox.checked = !allset;
      checkbox.indeterminate = false;
      checkbox.onchange();
    }
  }
}

function createColumnHeader(name, cls, comparator) {
  var th = document.createElement("TH");
  th.innerHTML = name;
  th.classList.add(cls);
  th.style.cursor = "pointer";
  var span = document.createElement("SPAN");
  span.classList.add("sortmark");
  span.classList.add("none");
  th.appendChild(span);
  th.onclick = function() {
    if (globalData.getCurrentSortColumn() && this !== globalData.getCurrentSortColumn()) {
      // Currently sorted by another column
      globalData.getCurrentSortColumn().childNodes[1].classList.remove(globalData.getCurrentSortOrder());
      globalData.getCurrentSortColumn().childNodes[1].classList.add("none");
      globalData.setCurrentSortColumn(null);
      globalData.setCurrentSortOrder(null);
    }
    if (globalData.getCurrentSortColumn() && this === globalData.getCurrentSortColumn()) {
      // Already sorted by this column
      if (globalData.getCurrentSortOrder() == "asc") {
        // Sort by this column, descending order
        globalData.setBomSortFunction(function(a, b) {
          return -comparator(a, b);
        });
        globalData.getCurrentSortColumn().childNodes[1].classList.remove("asc");
        globalData.getCurrentSortColumn().childNodes[1].classList.add("desc");
        globalData.setCurrentSortOrder("desc");
      } else {
        // Unsort
        globalData.setBomSortFunction(null);
        globalData.getCurrentSortColumn().childNodes[1].classList.remove("desc");
        globalData.getCurrentSortColumn().childNodes[1].classList.add("none");
        globalData.setCurrentSortColumn(null);
        globalData.setCurrentSortOrder(null);
      }
    } else {
      // Sort by this column, ascending order
      globalData.setBomSortFunction(comparator);
      globalData.setCurrentSortColumn(this);
      globalData.getCurrentSortColumn().childNodes[1].classList.remove("none");
      globalData.getCurrentSortColumn().childNodes[1].classList.add("asc");
      globalData.setCurrentSortOrder("asc");
    }
    populateBomBody();
  }
  return th;
}

function fancyDblClickHandler(el, onsingle, ondouble) {
  return function() {
    if (el.getAttribute("data-dblclick") == null) {
      el.setAttribute("data-dblclick", 1);
      setTimeout(function() {
        if (el.getAttribute("data-dblclick") == 1) {
          onsingle();
        }
        el.removeAttribute("data-dblclick");
      }, 200);
    } else {
      el.removeAttribute("data-dblclick");
      ondouble();
    }
  }
}

function populateBomHeader() {
  while (bomhead.firstChild) {
    bomhead.removeChild(bomhead.firstChild);
  }
  var tr = document.createElement("TR");
  var th = document.createElement("TH");
  th.classList.add("numCol");
  tr.appendChild(th);
  globalData.setCheckboxes(globalData.getBomCheckboxes().split(",").filter((e) => e));
  //XXX: There is something weird with this. The behavior is to sort the buttons but 
  // in the gui it actis funny
  var checkboxCompareClosure = function(checkbox) {
    return (a, b) => {
      var stateA = getCheckboxState(checkbox, a[3]);
      var stateB = getCheckboxState(checkbox, b[3]);
      if (stateA > stateB) return -1;
      if (stateA < stateB) return 1;
      return 0;
    }
  }

  for (var checkbox of globalData.getCheckboxes()) {
    th = createColumnHeader(
      checkbox, checkbox, checkboxCompareClosure(checkbox));
    th.onclick = fancyDblClickHandler(
      th, th.onclick.bind(th), checkboxSetUnsetAllHandler(checkbox));
    tr.appendChild(th);
  }

  tr.appendChild(createColumnHeader("References", "References", (partA, partB) => {
      if (partA.reference != partB.reference) return partA.reference > partB.reference ? 1 : -1;
      else return 0;
  }));

  tr.appendChild(createColumnHeader("Value", "Value", (partA, partB) => {
    if (partA.value != partB.value) return partA.value > partB.value ? 1 : -1;
    else return 0;
  }));

  tr.appendChild(createColumnHeader("Footprint", "Footprint", (partA, partB) => {
    if (partA.package != partB.package) return partA.package > partB.package ? 1 : -1;
    else return 0;
  }));

  var additionalAttributes = globalData.getAdditionalAttributes().split(',');
  // Remove null, "", undefined, and 0 values
  additionalAttributes    =additionalAttributes.filter(function(e){return e});
  for (var x of additionalAttributes) {
      // remove beginning and trailing whitespace
      x = x.trim()
      if (x) {
        tr.appendChild(createColumnHeader(x, "Attributes", (partA, partB) => {
          if (partA.attributes.get(x) != partB.attributes.get(x)) return  partA.attributes.get(x) > partB.attributes.get(x) ? 1 : -1;
          else return 0;
        }));
      }
    }

  if(globalData.getCombineValues())
  {
    //XXX: This comparison function is using positive and negative implicit
    tr.appendChild(createColumnHeader("Quantity", "Quantity", (partA, partB) => {
      return partA.quantity - partB.quantity;
    }));
  }

  bomhead.appendChild(tr);

}

////////////////////////////////////////////////////////////////////////////////
// Filter functions are defined here. These let the application filter 
// elements out of the complete bom. 
//
// The filtering function should return true if the part should be filtered out
// otherwise it returns false
////////////////////////////////////////////////////////////////////////////////
function GetBOMForSideOfBoard(location){
  var result = pcb.GetBOM();
    switch (location) {
    case 'F':
      result = pcb.filterBOMTable(result, filterBOM_Front);
      break;
    case 'B':
      result = pcb.filterBOMTable(result, filterBOM_Back);
      break;
    default:
      break;
  }
  return result;
}

function filterBOM_Front(part){
  var result = true;
  if(part.location == "F"){
    result = false;
  }
  return result;
}

function filterBOM_Back(part){
  var result = true;
  if(part.location == "B"){
    result = false;
  }
  return result;
}

function filterBOM_ByAttribute(part){
  var result = false;
  var splitFilterString = globalData.getRemoveBOMEntries().split(',');
  // Remove null, "", undefined, and 0 values
  splitFilterString    = splitFilterString.filter(function(e){return e});

  if(splitFilterString.length > 0 )
  {
    for(var i of splitFilterString){
      // removing beginning and trailing whitespace
      i = i.trim()
      if(part.attributes.has(i)){
        // Id the value is an empty string then dont filter out the entry. 
        // if the value is anything then filter out the bom entry
        if(part.attributes.get(i) != "")
        {
          result = true;
        }
      }
    }
  }

  return result;
}
////////////////////////////////////////////////////////////////////////////////

function GenerateBOMTable()
{
  // Get bom table with elements for the side of board the user has selected
  var bomtableTemp = GetBOMForSideOfBoard(globalData.getCanvasLayout());

  // Apply attribute filter to board
  bomtableTemp = pcb.filterBOMTable(bomtableTemp, filterBOM_ByAttribute);

  // If the parts are displayed one per line (not combined values), then the the bom table needs to be flattened. 
  // By default the data in the json file is combined
  bomtable = globalData.getCombineValues() ? pcb.GetBOMCombinedValues(bomtableTemp) : bomtableTemp;

  return bomtable;
}

//TODO: This should be rewritten to interact with json using the tags instead of 
//      having all of the elements hardcoded.
function populateBomBody() {
  while (bom.firstChild) {
    bom.removeChild(bom.firstChild);
  }
  globalData.setHighlightHandlers([]);
  globalData.setCurrentHighlightedRowId(null);
  var first = true;

  bomtable = GenerateBOMTable();

  if (globalData.getBomSortFunction()) {
    bomtable = bomtable.slice().sort(globalData.getBomSortFunction());
  }
  for (var i in bomtable) {
    var bomentry = bomtable[i];
    var references = bomentry.reference;

    if (getFilter() != ""){
      if(!entryMatches(bomentry)){
        continue;
      }
    }


    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    var rownum = +i + 1;
    tr.id = "bomrow" + rownum;
    td.textContent = rownum;
    tr.appendChild(td);

    // Checkboxes
    for (var checkbox of globalData.getCheckboxes()) {
      if (checkbox) {
        td = document.createElement("TD");
        var input = document.createElement("input");
        input.type = "checkbox";
        input.onchange = createCheckboxChangeHandler(checkbox, references);
        setBomCheckboxState(checkbox, input, references);
        td.appendChild(input);
        tr.appendChild(td);
      }
    }

    //INFO: The lines below add the control the columns on the bom table
    // References
    td = document.createElement("TD");
    td.innerHTML = highlightFilter(references);
    tr.appendChild(td);
    // Value
    td = document.createElement("TD");
    td.innerHTML = highlightFilter(bomentry.value);
    tr.appendChild(td);
    // Footprint
    td = document.createElement("TD");
    td.innerHTML = highlightFilter(bomentry.package);
    tr.appendChild(td);
    
    // Attributes
    var additionalAttributes = globalData.getAdditionalAttributes().split(',');
    for (var x of additionalAttributes) {
      x = x.trim()
      if (x) {
        td = document.createElement("TD");
        td.innerHTML = highlightFilter(pcb.getAttributeValue(bomentry, x.toLowerCase()));
        tr.appendChild(td);
      }
    }

    if(globalData.getCombineValues())
    {

      td = document.createElement("TD");
      td.textContent = bomentry.quantity;
      tr.appendChild(td);
    }
    bom.appendChild(tr);


    bom.appendChild(tr);
    var handler = createRowHighlightHandler(tr.id, references);
    tr.onmousemove = handler;
    globalData.pushHighlightHandlers({
      id: tr.id,
      handler: handler,
      refs: references
    });
    if (getFilter() && first) {
      handler();
      first = false;
    }
  }
}

function highlightPreviousRow() {
  if (!globalData.getCurrentHighlightedRowId()) {
    globalData.getHighlightHandlers()[globalData.getHighlightHandlers().length - 1].handler();
  } else {
    if (globalData.getHighlightHandlers().length > 1 &&
      globalData.getHighlightHandlers()[0].id == globalData.getCurrentHighlightedRowId()) {
      globalData.getHighlightHandlers()[globalData.getHighlightHandlers().length - 1].handler();
    } else {
      for (var i = 0; i < globalData.getHighlightHandlers().length - 1; i++) {
        if (globalData.getHighlightHandlers()[i + 1].id == globalData.getCurrentHighlightedRowId()) {
          globalData.getHighlightHandlers()[i].handler();
          break;
        }
      }
    }
  }
  render.smoothScrollToRow(globalData.getCurrentHighlightedRowId());
}

function highlightNextRow() {
  if (!globalData.getCurrentHighlightedRowId()) {
    globalData.getHighlightHandlers()[0].handler();
  } else {
    if (globalData.getHighlightHandlers().length > 1 &&
      globalData.getHighlightHandlers()[globalData.getHighlightHandlers().length - 1].id == globalData.getCurrentHighlightedRowId()) {
      globalData.getHighlightHandlers()[0].handler();
    } else {
      for (var i = 1; i < globalData.getHighlightHandlers().length; i++) {
        if (globalData.getHighlightHandlers()[i - 1].id == globalData.getCurrentHighlightedRowId()) {
          globalData.getHighlightHandlers()[i].handler();
          break;
        }
      }
    }
  }
  smoothScrollToRow(globalData.getCurrentHighlightedRowId());
}

function populateBomTable() {
  populateBomHeader();
  populateBomBody();
}

function modulesClicked(references) {
  var lastClickedIndex = references.indexOf(globalData.getLastClickedRef());
  var ref = references[(lastClickedIndex + 1) % references.length];
  for (var handler of globalData.getHighlightHandlers()) {
    if (handler.refs.indexOf(ref) >= 0) {
      globalData.setLastClickedRef(ref);
      handler.handler();
      smoothScrollToRow(globalData.getCurrentHighlightedRowId());
      break;
    }
  }
}

function silkscreenVisible(visible) {
  if (visible) {
    allcanvas.front.silk.style.display = "";
    allcanvas.back.silk.style.display = "";
    globalData.writeStorage("silkscreenVisible", true);
  } else {
    allcanvas.front.silk.style.display = "none";
    allcanvas.back.silk.style.display = "none";
    globalData.writeStorage("silkscreenVisible", false);
  }
}

function changeCanvasLayout(layout) {
  document.getElementById("fl-btn").classList.remove("depressed");
  document.getElementById("fb-btn").classList.remove("depressed");
  document.getElementById("bl-btn").classList.remove("depressed");
  switch (layout) {
    case 'F':
      document.getElementById("fl-btn").classList.add("depressed");
      if (globalData.getBomLayout() != "BOM") {
        globalData.collapseCanvasSplit(1);
      }
      break;
    case 'B':
      document.getElementById("bl-btn").classList.add("depressed");
      if (globalData.getBomLayout() != "BOM") {
        globalData.collapseCanvasSplit(0);
      }
      break;
    default:
      document.getElementById("fb-btn").classList.add("depressed");
      if (globalData.getBomLayout() != "BOM") {
        globalData.setSizesCanvasSplit([50, 50]);
      }
  }
  globalData.setCanvasLayout(layout);
  globalData.writeStorage("canvaslayout", layout);
  render.resizeAll();
  populateBomTable();
}

function populateMetadata() {
  var metadata  = pcb.GetMetadata();
  
  if(metadata.revision == "")
  {
    document.getElementById("title").innerHTML    = ""
    document.getElementById("revision").innerHTML = metadata.title;
  }
  else{
    document.getElementById("title").innerHTML    = metadata.title;
    document.getElementById("revision").innerHTML = "Revision: " + metadata.revision;
  }

  
  document.getElementById("company").innerHTML  = metadata.company;
  document.getElementById("filedate").innerHTML = metadata.date;
  if (metadata.title != "") {
    document.title = metadata.title + " BOM";
  }
}

function changeBomLayout(layout) {
  document.getElementById("bom-btn").classList.remove("depressed");
  document.getElementById("lr-btn").classList.remove("depressed");
  document.getElementById("tb-btn").classList.remove("depressed");
  switch (layout) {
    case 'BOM':
      document.getElementById("bom-btn").classList.add("depressed");
      if (globalData.getBomSplit()) {
        globalData.destroyBomSplit();
        globalData.setBomSplit(null);
        globalData.destroyCanvasSplit();
        globalData.setCanvasSplit(null);
      }
      document.getElementById("frontcanvas").style.display = "none";
      document.getElementById("backcanvas").style.display = "none";
      document.getElementById("bot").style.height = "";
      break;
    case 'TB':
      document.getElementById("tb-btn").classList.add("depressed");
      document.getElementById("frontcanvas").style.display = "";
      document.getElementById("backcanvas").style.display = "";
      document.getElementById("bot").style.height = "calc(100% - 80px)";
      document.getElementById("bomdiv").classList.remove("split-horizontal");
      document.getElementById("canvasdiv").classList.remove("split-horizontal");
      document.getElementById("frontcanvas").classList.add("split-horizontal");
      document.getElementById("backcanvas").classList.add("split-horizontal");
      if (globalData.getBomSplit()) {
        globalData.destroyBomSplit();
        globalData.setBomSplit(null);
        globalData.destroyCanvasSplit();
        globalData.setCanvasSplit(null);
      }
      globalData.setBomSplit(Split(['#bomdiv', '#canvasdiv'], {
        sizes: [50, 50],
        onDragEnd: render.resizeAll,
        direction: "vertical",
        gutterSize: 5
      }));
      globalData.setCanvasSplit(Split(['#frontcanvas', '#backcanvas'], {
        sizes: [50, 50],
        gutterSize: 5,
        onDragEnd: render.resizeAll
      }));
      break;
    case 'LR':
      document.getElementById("lr-btn").classList.add("depressed");
      document.getElementById("frontcanvas").style.display = "";
      document.getElementById("backcanvas").style.display = "";
      document.getElementById("bot").style.height = "calc(100% - 80px)";
      document.getElementById("bomdiv").classList.add("split-horizontal");
      document.getElementById("canvasdiv").classList.add("split-horizontal");
      document.getElementById("frontcanvas").classList.remove("split-horizontal");
      document.getElementById("backcanvas").classList.remove("split-horizontal");
      if (globalData.getBomSplit()) {
        globalData.destroyBomSplit();
        globalData.setBomSplit(null);
        globalData.destroyCanvasSplit();
        globalData.setCanvasSplit(null);
      }
      globalData.setBomSplit(Split(['#bomdiv', '#canvasdiv'], {
        sizes: [50, 50],
        onDragEnd: render.resizeAll,
        gutterSize: 5
      }));
      globalData.setCanvasSplit(Split(['#frontcanvas', '#backcanvas'], {
        sizes: [50, 50],
        gutterSize: 5,
        direction: "vertical",
        onDragEnd: render.resizeAll
      }));
  }
  globalData.setBomLayout(layout);
  globalData.writeStorage("bomlayout", layout);
  changeCanvasLayout(globalData.getCanvasLayout());
}

function focusInputField(input) {
  input.scrollIntoView(false);
  input.focus();
  input.select();
}

function focusFilterField() {
  focusInputField(document.getElementById("filter"));
}

function toggleBomCheckbox(bomrowid, checkboxnum) {
  if (!bomrowid || checkboxnum > globalData.getCheckboxes().length) {
    return;
  }
  var bomrow = document.getElementById(bomrowid);
  var checkbox = bomrow.childNodes[checkboxnum].childNodes[0];
  checkbox.checked = !checkbox.checked;
  checkbox.indeterminate = false;
  checkbox.onchange();
}

function checkBomCheckbox(bomrowid, checkboxname) {
  var checkboxnum = 0;
  while (checkboxnum < globalData.getCheckboxes().length &&
    globalData.getCheckboxes()[checkboxnum].toLowerCase() != checkboxname.toLowerCase()) {
    checkboxnum++;
  }
  if (!bomrowid || checkboxnum >= globalData.getCheckboxes().length) {
    return;
  }
  var bomrow = document.getElementById(bomrowid);
  var checkbox = bomrow.childNodes[checkboxnum + 1].childNodes[0];
  checkbox.checked = true;
  checkbox.indeterminate = false;
  checkbox.onchange();
}


function removeGutterNode(node) {
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].classList &&
      node.childNodes[i].classList.contains("gutter")) {
      node.removeChild(node.childNodes[i]);
      break;
    }
  }
}

function cleanGutters() {
  removeGutterNode(document.getElementById("bot"));
  removeGutterNode(document.getElementById("canvasdiv"));
}

function setBomCheckboxes(value) {
  globalData.setBomCheckboxes(value);
  globalData.writeStorage("bomCheckboxes", value);
  populateBomTable();
}

function setRemoveBOMEntries(value) {
  globalData.setRemoveBOMEntries(value);
  globalData.writeStorage("removeBOMEntries", value);
  populateBomTable();
}

function setAdditionalAttributes(value) {
  globalData.setAdditionalAttributes(value);
  globalData.writeStorage("additionalAttributes", value);
  populateBomTable();
}

// XXX: None of this seems to be working. 
document.onkeydown = function(e) {
  switch (e.key) {
    case "n":
      if (document.activeElement.type == "text") {
        return;
      }
      if (globalData.getCurrentHighlightedRowId() !== null) {
        checkBomCheckbox(globalData.getCurrentHighlightedRowId(), "placed");
        highlightNextRow();
        e.preventDefault();
      }
      break;
    case "ArrowUp":
      highlightPreviousRow();
      e.preventDefault();
      break;
    case "ArrowDown":
      highlightNextRow();
      e.preventDefault();
      break;
    default:
      break;
  }
  if (e.altKey) {
    switch (e.key) {
      case "f":
        focusFilterField();
        e.preventDefault();
        break;
      case "z":
        changeBomLayout("BOM");
        e.preventDefault();
        break;
      case "x":
        changeBomLayout("LR");
        e.preventDefault();
        break;
      case "c":
        changeBomLayout("TB");
        e.preventDefault();
        break;
      case "v":
        changeCanvasLayout("F");
        e.preventDefault();
        break;
      case "b":
        changeCanvasLayout("FB");
        e.preventDefault();
        break;
      case "n":
        changeCanvasLayout("B");
        e.preventDefault();
        break;
      default:
        break;
    }
    if (e.key >= '1' && e.key <= '9') {
      toggleBomCheckbox(currentHighlightedRowId, parseInt(e.key));
    }
  }
}

//XXX: I would like this to be in the html functions js file. But this function needs to be 
//     placed here, otherwise the application rendering becomes very very weird.
window.onload = function(e) {
  
  // This function makes so that the user data for the pcb is converted to our internal structure
  pcb.OpenPcbData(pcbdata)
  

  globalData.initStorage();
  cleanGutters();
  render.initRender();
  dbgdiv = document.getElementById("dbg");
  bom = document.getElementById("bombody");
  bomhead = document.getElementById("bomhead");
  globalData.setBomLayout(globalData.readStorage("bomlayout"));
  if (!globalData.getBomLayout()) {
    globalData.setBomLayout("LR");
  }
  globalData.setCanvasLayout(globalData.readStorage("canvaslayout"));
  if (!globalData.getCanvasLayout()) {
    globalData.setCanvasLayout("FB");
  }

  populateMetadata();
  globalData.setBomCheckboxes(globalData.readStorage("bomCheckboxes"));
  if (globalData.getBomCheckboxes() === null) {
    globalData.setBomCheckboxes("Placed");
  }
  globalData.setRemoveBOMEntries(globalData.readStorage("removeBOMEntries"));
  if (globalData.getRemoveBOMEntries() === null) {
    globalData.setRemoveBOMEntries("");
  }
  globalData.setAdditionalAttributes(globalData.readStorage("additionalAttributes"));
  if (globalData.getAdditionalAttributes() === null) {
    globalData.setAdditionalAttributes("");
  }
  document.getElementById("bomCheckboxes").value = globalData.getBomCheckboxes();
  if (globalData.readStorage("silkscreenVisible") === "false") {
    document.getElementById("silkscreenCheckbox").checked = false;
    silkscreenVisible(false);
  }
  if (globalData.readStorage("redrawOnDrag") === "false") {
    document.getElementById("dragCheckbox").checked = false;
    globalData.setRedrawOnDrag(false);
  }
  if (globalData.readStorage("darkmode") === "true") {
    document.getElementById("darkmodeCheckbox").checked = true;
    setDarkMode(true);
  }
  if (globalData.readStorage("highlightpin1") === "true") {
    document.getElementById("highlightpin1Checkbox").checked = true;
    globalData.setHighlightPin1(true);
    render.redrawCanvas(allcanvas.front);
    render.redrawCanvas(allcanvas.back);
  }
  // If this is true then combine parts and display quantity
  if (globalData.readStorage("combineValues") === "true") {
    document.getElementById("combineValues").checked = true;
    globalData.setCombineValues(true);
  }
  boardRotation = globalData.readStorage("boardRotation");
  if (boardRotation === null) {
    boardRotation = 0;
  } else {
    boardRotation = parseInt(boardRotation);
  }
  document.getElementById("boardRotation").value = boardRotation / 5;
  document.getElementById("rotationDegree").textContent = boardRotation;
  // Triggers render
  changeBomLayout(globalData.getBomLayout());
}

window.onresize = render.resizeAll;
window.matchMedia("print").addListener(render.resizeAll);

module.exports = {
  setDarkMode        , silkscreenVisible      , changeBomLayout, changeCanvasLayout,
  setBomCheckboxes   , populateBomTable       , setFilter      , getFilter         ,
  setRemoveBOMEntries, setAdditionalAttributes
}

},{"../vender/split.js":7,"./global.js":1,"./pcb.js":4,"./render.js":6}],4:[function(require,module,exports){
/*
    This file contains all of the definitions for working with pcbdata.json. 
    This file declares all of the access functions and interfaces for converting 
    the json file into an internal data structure. 
*/

/***************************************************************************************************
                                         PCB Part Interfaces
**************************************************************************************************/
// Read the ecad property. This property lets the application know what 
// ecad software generated the json file. 
function GetCADType(pcbdataStructure)
{
    if(pcbdataStructure.hasOwnProperty("ecad")){
        return pcbdataStructure.ecad;
    }
}

// This will hold the part objects. There is one entry per part
// Format of a part is as follows
// [VALUE,PACKAGE,REFRENECE DESIGNATOR, ,LOCATION, ATTRIBUTE],
// where ATTRIBUTE is a dict of ATTRIBUTE NAME : ATTRIBUTE VALUE
var BOM = [];

// Constructor for creating a part.
function Part(value, package, reference, location, attributes) {
    this.quantity   = 1;
    this.value      = value;
    this.package    = package;
    this.reference  = reference;
    this.location   = location;
    this.attributes = attributes;
}

function CopyPart(inputPart){
  // XXX: This is not performing a deep copy, attributes is a map and this is being copied by 
  //      reference which is not quite what we want here. It should be a deep copy so once called
  //      this will result in a completely new object that will not reference one another
  return new Part(inputPart.value, inputPart.package, inputPart.reference, inputPart.location, inputPart.attributes);
}

//TODO: There should be steps here for validating the data and putting it into a 
//      format that is valid for our application
function CreateBOM(pcbdataStructure){
    // For every part in the input file, convert it to our internal 
    // representation data structure.
    for(var part of pcbdataStructure.bom.both){
        // extract the part data. This is here so I can iterate the design 
        // when I make changes to the underlying json file.
        var value     = part[1];
        var package   = part[2];
        var reference = part[3][0];
        var location  = part[6];

        // AttributeName and AttributeValue are two strings that are deliminated by ';'. 
        // Split the strings by ';' and then zip them together
        var attributeNames = part[4].split(';');
        var attributeValues = part[5].split(';');

        //XXX: ASSUMTION that attributeNames is the same length as attributeValues
        attributes = new Map(); // Create a empty dictionary
        for(var i in attributeNames){
            attributes.set(attributeNames[i].toLowerCase(),attributeValues[i].toLowerCase());
        }
        // Add the par to the global part array
        BOM.push(new Part(value, package, reference, location, attributes));
    }
}

function GetBOM(){
      return BOM;
}

// TAkes a BOM table and a filter function. The filter 
// function is used onthe provided table to remove 
// any part that satisfy the filter
function filterBOMTable(bomtable, filterFunction){
  var result = [];

  // Makes sure that thE filter function is defined. 
  // if not defined then nothing should be filtered. 
  if(filterFunction != null){
    for(var i in bomtable){
      // If the filter returns false -> do not remove part, it does not need to be filtered
      if(!filterFunction(bomtable[i])){
        result.push(CopyPart(bomtable[i]));
      }
    }
  }
  else{
    result = bomtable;
  }
  return result;
}

// Takes a bom table and combines entries that are the same
function GetBOMCombinedValues(bomtableTemp){
    result = [];

    // TODO: sort bomtableTemp. Assumption here is that the bomtableTemp is presorted

    if(bomtableTemp.length>0){
      // XXX: Assuming that the input json data has bom entries presorted
      // TODO: Start at index 1, and compare the current to the last, this should simplify the logic
      // Need to create a new object by deep copy. this is because objects by default are passed by reference and i dont 
      // want to modify them.
      result.push(CopyPart(bomtableTemp[0]));
      count = 0;
      for (var n = 1; n < bomtableTemp.length;n++)
      {
        if(result[count].value == bomtableTemp[n].value)
        {
          // For parts that are listed as combined, store the references as an array.
          // This is because the logic for highlighting needs to match strings and 
          // If an appended string is used it might not work right
          refString = result[count].reference + "," + bomtableTemp[n].reference;
          result[count].quantity += 1;
          result[count].reference = refString;
        }
        else
        {
          result.push(CopyPart(bomtableTemp[n]));
          count++;
        }
      }
    }
    return result;
}

function getAttributeValue(part, attributeToLookup){
    var attributes = part.attributes;
    var result = "";

    if(attributeToLookup == "name")
    {
      result = part.reference;
    }
    else
    {
      result = (attributes.has(attributeToLookup) ? attributes.get(attributeToLookup) : "");
    }
    // Check that the attribute exists by looking up its name. If it exists
    // the return the value for the attribute, otherwise return an empty string. 
    return result;
}

/***************************************************************************************************
                                         PCB Metadata Interfaces
***************************************************************************************************/
var metadata;
// Constructor for creating a part.
function Metadata(title, revision, company, date) {
    this.title    = title;
    this.revision = revision;
    this.company  = company;
    this.date     = date;
}

function CreateMetadata(pcbdataStructure){
  metadata = new Metadata(pcbdataStructure.metadata.title  , pcbdataStructure.metadata.revision, 
                      pcbdataStructure.metadata.company, pcbdataStructure.metadata.date);
}

function GetMetadata(){
  return metadata;
}



function OpenPcbData(pcbdata){
  CreateBOM(pcbdata);
  CreateMetadata(pcbdata);
}

module.exports = {
  OpenPcbData, GetBOM, getAttributeValue, GetBOMCombinedValues, filterBOMTable, GetMetadata
}
},{}],5:[function(require,module,exports){
var pcbFont = {
    "font_data": {
        " ": {
            "l": [],
            "w": 0.7619047619047619
        },
        "#": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.7142857142857142
                    ],
                    [
                        0.9047619047619047,
                        -0.7142857142857142
                    ]
                ],
                [
                    [
                        0.47619047619047616,
                        -1.1428571428571428
                    ],
                    [
                        0.19047619047619047,
                        0.14285714285714285
                    ]
                ],
                [
                    [
                        0.8095238095238095,
                        -0.2857142857142857
                    ],
                    [
                        0.09523809523809523,
                        -0.2857142857142857
                    ]
                ],
                [
                    [
                        0.5238095238095237,
                        0.14285714285714285
                    ],
                    [
                        0.8095238095238095,
                        -1.1428571428571428
                    ]
                ]
            ],
            "w": 1.0
        },
        "-": {
            "l": [
                [
                    [
                        0.23809523809523814,
                        -0.42857142857142855
                    ],
                    [
                        1.0,
                        -0.42857142857142855
                    ]
                ]
            ],
            "w": 1.2380952380952381
        },
        ".": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.47619047619047616
        },
        "0": {
            "l": [
                [
                    [
                        0.42857142857142855,
                        -1.0476190476190474
                    ],
                    [
                        0.5238095238095237,
                        -1.0476190476190474
                    ],
                    [
                        0.6190476190476191,
                        -1.0
                    ],
                    [
                        0.6666666666666666,
                        -0.9523809523809523
                    ],
                    [
                        0.7142857142857142,
                        -0.8571428571428571
                    ],
                    [
                        0.7619047619047619,
                        -0.6666666666666666
                    ],
                    [
                        0.7619047619047619,
                        -0.42857142857142855
                    ],
                    [
                        0.7142857142857142,
                        -0.23809523809523808
                    ],
                    [
                        0.6666666666666666,
                        -0.14285714285714285
                    ],
                    [
                        0.6190476190476191,
                        -0.09523809523809523
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.42857142857142855,
                        -0.047619047619047616
                    ],
                    [
                        0.3333333333333333,
                        -0.09523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -0.14285714285714285
                    ],
                    [
                        0.23809523809523808,
                        -0.23809523809523808
                    ],
                    [
                        0.19047619047619047,
                        -0.42857142857142855
                    ],
                    [
                        0.19047619047619047,
                        -0.6666666666666666
                    ],
                    [
                        0.23809523809523808,
                        -0.8571428571428571
                    ],
                    [
                        0.2857142857142857,
                        -0.9523809523809523
                    ],
                    [
                        0.3333333333333333,
                        -1.0
                    ],
                    [
                        0.42857142857142855,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "1": {
            "l": [
                [
                    [
                        0.7619047619047619,
                        -0.047619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.47619047619047616,
                        -0.047619047619047616
                    ],
                    [
                        0.47619047619047616,
                        -1.0476190476190474
                    ],
                    [
                        0.38095238095238093,
                        -0.9047619047619047
                    ],
                    [
                        0.2857142857142857,
                        -0.8095238095238095
                    ],
                    [
                        0.19047619047619047,
                        -0.7619047619047619
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "2": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.9523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -1.0
                    ],
                    [
                        0.3333333333333333,
                        -1.0476190476190474
                    ],
                    [
                        0.5714285714285714,
                        -1.0476190476190474
                    ],
                    [
                        0.6666666666666666,
                        -1.0
                    ],
                    [
                        0.7142857142857142,
                        -0.9523809523809523
                    ],
                    [
                        0.7619047619047619,
                        -0.8571428571428571
                    ],
                    [
                        0.7619047619047619,
                        -0.7619047619047619
                    ],
                    [
                        0.7142857142857142,
                        -0.6190476190476191
                    ],
                    [
                        0.14285714285714285,
                        -0.047619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "3": {
            "l": [
                [
                    [
                        0.14285714285714285,
                        -1.0476190476190474
                    ],
                    [
                        0.7619047619047619,
                        -1.0476190476190474
                    ],
                    [
                        0.42857142857142855,
                        -0.6666666666666666
                    ],
                    [
                        0.5714285714285714,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5714285714285714
                    ],
                    [
                        0.7619047619047619,
                        -0.47619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.23809523809523808
                    ],
                    [
                        0.7142857142857142,
                        -0.14285714285714285
                    ],
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.047619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.14285714285714285,
                        -0.14285714285714285
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "4": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.42857142857142855,
                        -1.0952380952380951
                    ],
                    [
                        0.19047619047619047,
                        -0.38095238095238093
                    ],
                    [
                        0.8095238095238095,
                        -0.38095238095238093
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "5": {
            "l": [
                [
                    [
                        0.7142857142857142,
                        -1.0476190476190474
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.19047619047619047,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.3333333333333333,
                        -0.6666666666666666
                    ],
                    [
                        0.5714285714285714,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5714285714285714
                    ],
                    [
                        0.7619047619047619,
                        -0.47619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.23809523809523808
                    ],
                    [
                        0.7142857142857142,
                        -0.14285714285714285
                    ],
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.3333333333333333,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.09523809523809523
                    ],
                    [
                        0.19047619047619047,
                        -0.14285714285714285
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        ":": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.2857142857142857,
                        -0.6190476190476191
                    ],
                    [
                        0.23809523809523808,
                        -0.5714285714285714
                    ],
                    [
                        0.19047619047619047,
                        -0.6190476190476191
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.23809523809523808,
                        -0.5714285714285714
                    ]
                ]
            ],
            "w": 0.47619047619047616
        },
        "A": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.3333333333333333
                    ],
                    [
                        0.6666666666666666,
                        -0.3333333333333333
                    ]
                ],
                [
                    [
                        0.09523809523809523,
                        -0.047619047619047616
                    ],
                    [
                        0.42857142857142855,
                        -1.0476190476190474
                    ],
                    [
                        0.7619047619047619,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.8571428571428571
        },
        "B": {
            "l": [
                [
                    [
                        0.5714285714285714,
                        -0.5714285714285714
                    ],
                    [
                        0.7142857142857142,
                        -0.5238095238095237
                    ],
                    [
                        0.7619047619047619,
                        -0.47619047619047616
                    ],
                    [
                        0.8095238095238094,
                        -0.38095238095238093
                    ],
                    [
                        0.8095238095238094,
                        -0.23809523809523808
                    ],
                    [
                        0.7619047619047619,
                        -0.14285714285714285
                    ],
                    [
                        0.7142857142857142,
                        -0.09523809523809523
                    ],
                    [
                        0.619047619047619,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.5714285714285714,
                        -1.0476190476190474
                    ],
                    [
                        0.6666666666666665,
                        -1.0
                    ],
                    [
                        0.7142857142857142,
                        -0.9523809523809523
                    ],
                    [
                        0.7619047619047619,
                        -0.8571428571428571
                    ],
                    [
                        0.7619047619047619,
                        -0.7619047619047619
                    ],
                    [
                        0.7142857142857142,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666665,
                        -0.6190476190476191
                    ],
                    [
                        0.5714285714285714,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523803,
                        -0.5714285714285714
                    ]
                ]
            ],
            "w": 1.0
        },
        "C": {
            "l": [
                [
                    [
                        0.8095238095238095,
                        -0.14285714285714285
                    ],
                    [
                        0.7619047619047619,
                        -0.09523809523809523
                    ],
                    [
                        0.6190476190476191,
                        -0.047619047619047616
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.38095238095238093,
                        -0.09523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -0.19047619047619047
                    ],
                    [
                        0.23809523809523808,
                        -0.2857142857142857
                    ],
                    [
                        0.19047619047619047,
                        -0.47619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.6190476190476191
                    ],
                    [
                        0.23809523809523808,
                        -0.8095238095238095
                    ],
                    [
                        0.2857142857142857,
                        -0.9047619047619047
                    ],
                    [
                        0.38095238095238093,
                        -1.0
                    ],
                    [
                        0.5238095238095237,
                        -1.0476190476190474
                    ],
                    [
                        0.6190476190476191,
                        -1.0476190476190474
                    ],
                    [
                        0.7619047619047619,
                        -1.0
                    ],
                    [
                        0.8095238095238095,
                        -0.9523809523809523
                    ]
                ]
            ],
            "w": 1.0
        },
        "D": {
            "l": [
                [
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.4761904761904761,
                        -1.0476190476190474
                    ],
                    [
                        0.619047619047619,
                        -1.0
                    ],
                    [
                        0.7142857142857142,
                        -0.9047619047619047
                    ],
                    [
                        0.7619047619047619,
                        -0.8095238095238095
                    ],
                    [
                        0.8095238095238094,
                        -0.6190476190476191
                    ],
                    [
                        0.8095238095238094,
                        -0.47619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.2857142857142857
                    ],
                    [
                        0.7142857142857142,
                        -0.19047619047619047
                    ],
                    [
                        0.619047619047619,
                        -0.09523809523809523
                    ],
                    [
                        0.4761904761904761,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 1.0
        },
        "E": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.5714285714285714
                    ],
                    [
                        0.5714285714285714,
                        -0.5714285714285714
                    ]
                ],
                [
                    [
                        0.7142857142857142,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.7142857142857142,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "F": {
            "l": [
                [
                    [
                        0.5714285714285714,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523808,
                        -0.5714285714285714
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.7142857142857142,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.8571428571428571
        },
        "G": {
            "l": [
                [
                    [
                        0.7619047619047619,
                        -1.0
                    ],
                    [
                        0.6666666666666666,
                        -1.0476190476190474
                    ],
                    [
                        0.5238095238095237,
                        -1.0476190476190474
                    ],
                    [
                        0.38095238095238093,
                        -1.0
                    ],
                    [
                        0.2857142857142857,
                        -0.9047619047619047
                    ],
                    [
                        0.23809523809523808,
                        -0.8095238095238095
                    ],
                    [
                        0.19047619047619047,
                        -0.6190476190476191
                    ],
                    [
                        0.19047619047619047,
                        -0.47619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.2857142857142857
                    ],
                    [
                        0.2857142857142857,
                        -0.19047619047619047
                    ],
                    [
                        0.38095238095238093,
                        -0.09523809523809523
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.6190476190476191,
                        -0.047619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -0.09523809523809523
                    ],
                    [
                        0.8095238095238095,
                        -0.14285714285714285
                    ],
                    [
                        0.8095238095238095,
                        -0.47619047619047616
                    ],
                    [
                        0.6190476190476191,
                        -0.47619047619047616
                    ]
                ]
            ],
            "w": 1.0
        },
        "I": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.47619047619047616
        },
        "J": {
            "l": [
                [
                    [
                        0.5238095238095237,
                        -1.0476190476190474
                    ],
                    [
                        0.5238095238095237,
                        -0.3333333333333333
                    ],
                    [
                        0.47619047619047616,
                        -0.19047619047619047
                    ],
                    [
                        0.38095238095238093,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.14285714285714285,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.7619047619047619
        },
        "L": {
            "l": [
                [
                    [
                        0.7142857142857142,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.8095238095238095
        },
        "M": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.5714285714285714,
                        -0.3333333333333333
                    ],
                    [
                        0.9047619047619047,
                        -1.0476190476190474
                    ],
                    [
                        0.9047619047619047,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 1.1428571428571428
        },
        "N": {
            "l": [
                [
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.8095238095238094,
                        -0.047619047619047616
                    ],
                    [
                        0.8095238095238094,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 1.0476190476190474
        },
        "P": {
            "l": [
                [
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.619047619047619,
                        -1.0476190476190474
                    ],
                    [
                        0.7142857142857142,
                        -1.0
                    ],
                    [
                        0.7619047619047619,
                        -0.9523809523809523
                    ],
                    [
                        0.8095238095238094,
                        -0.8571428571428571
                    ],
                    [
                        0.8095238095238094,
                        -0.7142857142857142
                    ],
                    [
                        0.7619047619047619,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5714285714285714
                    ],
                    [
                        0.619047619047619,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523803,
                        -0.5238095238095237
                    ]
                ]
            ],
            "w": 1.0
        },
        "R": {
            "l": [
                [
                    [
                        0.8095238095238094,
                        -0.047619047619047616
                    ],
                    [
                        0.4761904761904761,
                        -0.5238095238095237
                    ]
                ],
                [
                    [
                        0.23809523809523803,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.619047619047619,
                        -1.0476190476190474
                    ],
                    [
                        0.7142857142857142,
                        -1.0
                    ],
                    [
                        0.7619047619047619,
                        -0.9523809523809523
                    ],
                    [
                        0.8095238095238094,
                        -0.8571428571428571
                    ],
                    [
                        0.8095238095238094,
                        -0.7142857142857142
                    ],
                    [
                        0.7619047619047619,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5714285714285714
                    ],
                    [
                        0.619047619047619,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523803,
                        -0.5238095238095237
                    ]
                ]
            ],
            "w": 1.0
        },
        "S": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.3333333333333333,
                        -0.047619047619047616
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.7142857142857142,
                        -0.14285714285714285
                    ],
                    [
                        0.7619047619047619,
                        -0.23809523809523808
                    ],
                    [
                        0.7619047619047619,
                        -0.3333333333333333
                    ],
                    [
                        0.7142857142857142,
                        -0.42857142857142855
                    ],
                    [
                        0.6666666666666666,
                        -0.47619047619047616
                    ],
                    [
                        0.5714285714285714,
                        -0.5238095238095237
                    ],
                    [
                        0.38095238095238093,
                        -0.5714285714285714
                    ],
                    [
                        0.2857142857142857,
                        -0.6190476190476191
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.19047619047619047,
                        -0.7619047619047619
                    ],
                    [
                        0.19047619047619047,
                        -0.8571428571428571
                    ],
                    [
                        0.23809523809523808,
                        -0.9523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -1.0
                    ],
                    [
                        0.38095238095238093,
                        -1.0476190476190474
                    ],
                    [
                        0.6190476190476191,
                        -1.0476190476190474
                    ],
                    [
                        0.7619047619047619,
                        -1.0
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "U": {
            "l": [
                [
                    [
                        0.23809523809523803,
                        -1.0476190476190474
                    ],
                    [
                        0.23809523809523803,
                        -0.23809523809523808
                    ],
                    [
                        0.28571428571428564,
                        -0.14285714285714285
                    ],
                    [
                        0.33333333333333326,
                        -0.09523809523809523
                    ],
                    [
                        0.4285714285714285,
                        -0.047619047619047616
                    ],
                    [
                        0.619047619047619,
                        -0.047619047619047616
                    ],
                    [
                        0.7142857142857142,
                        -0.09523809523809523
                    ],
                    [
                        0.7619047619047619,
                        -0.14285714285714285
                    ],
                    [
                        0.8095238095238094,
                        -0.23809523809523808
                    ],
                    [
                        0.8095238095238094,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 1.0476190476190474
        },
        "V": {
            "l": [
                [
                    [
                        0.09523809523809523,
                        -1.0476190476190474
                    ],
                    [
                        0.42857142857142855,
                        -0.047619047619047616
                    ],
                    [
                        0.7619047619047619,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.8571428571428571
        },
        "W": {
            "l": [
                [
                    [
                        0.14285714285714285,
                        -1.0476190476190474
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.5714285714285714,
                        -0.7619047619047619
                    ],
                    [
                        0.7619047619047619,
                        -0.047619047619047616
                    ],
                    [
                        1.0,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 1.1428571428571428
        },
        "X": {
            "l": [
                [
                    [
                        0.14285714285714285,
                        -1.0476190476190474
                    ],
                    [
                        0.8095238095238095,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.8095238095238095,
                        -1.0476190476190474
                    ],
                    [
                        0.14285714285714285,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.9523809523809523
        },
        "a": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ],
                    [
                        0.6666666666666666,
                        -0.5714285714285714
                    ],
                    [
                        0.6190476190476191,
                        -0.6666666666666666
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ],
                    [
                        0.3333333333333333,
                        -0.7142857142857142
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ]
                ],
                [
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.3333333333333333,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.09523809523809523
                    ],
                    [
                        0.19047619047619047,
                        -0.19047619047619047
                    ],
                    [
                        0.19047619047619047,
                        -0.2857142857142857
                    ],
                    [
                        0.23809523809523808,
                        -0.38095238095238093
                    ],
                    [
                        0.3333333333333333,
                        -0.42857142857142855
                    ],
                    [
                        0.5714285714285714,
                        -0.42857142857142855
                    ],
                    [
                        0.6666666666666666,
                        -0.47619047619047616
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "d": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ],
                    [
                        0.6666666666666666,
                        -1.0476190476190474
                    ]
                ],
                [
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.19047619047619047,
                        -0.23809523809523808
                    ],
                    [
                        0.19047619047619047,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.2857142857142857,
                        -0.6666666666666666
                    ],
                    [
                        0.38095238095238093,
                        -0.7142857142857142
                    ],
                    [
                        0.5714285714285714,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        -0.6666666666666666
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "e": {
            "l": [
                [
                    [
                        0.6190476190476191,
                        -0.09523809523809523
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.3333333333333333,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.09523809523809523
                    ],
                    [
                        0.19047619047619047,
                        -0.19047619047619047
                    ],
                    [
                        0.19047619047619047,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.3333333333333333,
                        -0.7142857142857142
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ],
                    [
                        0.6190476190476191,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.5714285714285714
                    ],
                    [
                        0.6666666666666666,
                        -0.47619047619047616
                    ],
                    [
                        0.19047619047619047,
                        -0.38095238095238093
                    ]
                ]
            ],
            "w": 0.8571428571428571
        },
        "g": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        0.09523809523809523
                    ],
                    [
                        0.6190476190476191,
                        0.19047619047619047
                    ],
                    [
                        0.5714285714285714,
                        0.23809523809523808
                    ],
                    [
                        0.47619047619047616,
                        0.2857142857142857
                    ],
                    [
                        0.3333333333333333,
                        0.2857142857142857
                    ],
                    [
                        0.23809523809523808,
                        0.23809523809523808
                    ]
                ],
                [
                    [
                        0.6666666666666666,
                        -0.09523809523809523
                    ],
                    [
                        0.5714285714285714,
                        -0.047619047619047616
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.19047619047619047,
                        -0.23809523809523808
                    ],
                    [
                        0.19047619047619047,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.2857142857142857,
                        -0.6666666666666666
                    ],
                    [
                        0.38095238095238093,
                        -0.7142857142857142
                    ],
                    [
                        0.5714285714285714,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        -0.6666666666666666
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "i": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.7142857142857142
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.19047619047619047,
                        -1.0
                    ],
                    [
                        0.23809523809523808,
                        -0.9523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -1.0
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.23809523809523808,
                        -0.9523809523809523
                    ]
                ]
            ],
            "w": 0.47619047619047616
        },
        "k": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ]
                ],
                [
                    [
                        0.3333333333333333,
                        -0.42857142857142855
                    ],
                    [
                        0.6190476190476191,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.6190476190476191,
                        -0.7142857142857142
                    ],
                    [
                        0.23809523809523808,
                        -0.3333333333333333
                    ]
                ]
            ],
            "w": 0.8095238095238095
        },
        "l": {
            "l": [
                [
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.19047619047619047
                    ],
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ]
                ]
            ],
            "w": 0.5238095238095237
        },
        "n": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.7142857142857142
                    ],
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.2857142857142857,
                        -0.6666666666666666
                    ],
                    [
                        0.38095238095238093,
                        -0.7142857142857142
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ],
                    [
                        0.6190476190476191,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.5714285714285714
                    ],
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "o": {
            "l": [
                [
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.23809523809523808,
                        -0.14285714285714285
                    ],
                    [
                        0.19047619047619047,
                        -0.23809523809523808
                    ],
                    [
                        0.19047619047619047,
                        -0.5238095238095237
                    ],
                    [
                        0.23809523809523808,
                        -0.6190476190476191
                    ],
                    [
                        0.2857142857142857,
                        -0.6666666666666666
                    ],
                    [
                        0.38095238095238093,
                        -0.7142857142857142
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ],
                    [
                        0.6190476190476191,
                        -0.6666666666666666
                    ],
                    [
                        0.6666666666666666,
                        -0.6190476190476191
                    ],
                    [
                        0.7142857142857142,
                        -0.5238095238095237
                    ],
                    [
                        0.7142857142857142,
                        -0.23809523809523808
                    ],
                    [
                        0.6666666666666666,
                        -0.14285714285714285
                    ],
                    [
                        0.6190476190476191,
                        -0.09523809523809523
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "r": {
            "l": [
                [
                    [
                        0.23809523809523808,
                        -0.047619047619047616
                    ],
                    [
                        0.23809523809523808,
                        -0.7142857142857142
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.5238095238095237
                    ],
                    [
                        0.2857142857142857,
                        -0.6190476190476191
                    ],
                    [
                        0.3333333333333333,
                        -0.6666666666666666
                    ],
                    [
                        0.42857142857142855,
                        -0.7142857142857142
                    ],
                    [
                        0.5238095238095237,
                        -0.7142857142857142
                    ]
                ]
            ],
            "w": 0.6190476190476191
        },
        "s": {
            "l": [
                [
                    [
                        0.19047619047619047,
                        -0.09523809523809523
                    ],
                    [
                        0.2857142857142857,
                        -0.047619047619047616
                    ],
                    [
                        0.47619047619047616,
                        -0.047619047619047616
                    ],
                    [
                        0.5714285714285714,
                        -0.09523809523809523
                    ],
                    [
                        0.6190476190476191,
                        -0.19047619047619047
                    ],
                    [
                        0.6190476190476191,
                        -0.23809523809523808
                    ],
                    [
                        0.5714285714285714,
                        -0.3333333333333333
                    ],
                    [
                        0.47619047619047616,
                        -0.38095238095238093
                    ],
                    [
                        0.3333333333333333,
                        -0.38095238095238093
                    ],
                    [
                        0.23809523809523808,
                        -0.42857142857142855
                    ],
                    [
                        0.19047619047619047,
                        -0.5238095238095237
                    ],
                    [
                        0.19047619047619047,
                        -0.5714285714285714
                    ],
                    [
                        0.23809523809523808,
                        -0.6666666666666666
                    ],
                    [
                        0.3333333333333333,
                        -0.7142857142857142
                    ],
                    [
                        0.47619047619047616,
                        -0.7142857142857142
                    ],
                    [
                        0.5714285714285714,
                        -0.6666666666666666
                    ]
                ]
            ],
            "w": 0.8095238095238095
        },
        "t": {
            "l": [
                [
                    [
                        0.09523809523809523,
                        -0.7142857142857142
                    ],
                    [
                        0.47619047619047616,
                        -0.7142857142857142
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -1.0476190476190474
                    ],
                    [
                        0.23809523809523808,
                        -0.19047619047619047
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.47619047619047616,
                        -0.047619047619047616
                    ]
                ]
            ],
            "w": 0.5714285714285714
        },
        "u": {
            "l": [
                [
                    [
                        0.6666666666666666,
                        -0.7142857142857142
                    ],
                    [
                        0.6666666666666666,
                        -0.047619047619047616
                    ]
                ],
                [
                    [
                        0.23809523809523808,
                        -0.7142857142857142
                    ],
                    [
                        0.23809523809523808,
                        -0.19047619047619047
                    ],
                    [
                        0.2857142857142857,
                        -0.09523809523809523
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.5238095238095237,
                        -0.047619047619047616
                    ],
                    [
                        0.6190476190476191,
                        -0.09523809523809523
                    ],
                    [
                        0.6666666666666666,
                        -0.14285714285714285
                    ]
                ]
            ],
            "w": 0.9047619047619047
        },
        "v": {
            "l": [
                [
                    [
                        0.14285714285714285,
                        -0.7142857142857142
                    ],
                    [
                        0.38095238095238093,
                        -0.047619047619047616
                    ],
                    [
                        0.6190476190476191,
                        -0.7142857142857142
                    ]
                ]
            ],
            "w": 0.7619047619047619
        }
    }
}
},{}],6:[function(require,module,exports){
/* PCB rendering code */

var globalData = require('./global.js')

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function calcFontPoint(linepoint, text, offsetx, offsety, tilt) {
  var point = [
    linepoint[0] * text.width + offsetx,
    linepoint[1] * text.height + offsety
  ];
  // Adding half a line height here is technically a bug
  // but pcbnew currently does the same, text is slightly shifted.
  point[0] -= (point[1] + text.height * 0.5) * tilt;
  return point;
}

function drawtext(ctx, text, color, flip) {
  ctx.save();
  ctx.translate(...text.pos);
  var angle = -text.angle;
  if (text.attr.includes("mirrored")) {
    ctx.scale(-1, 1);
    angle = -angle;
  }
  var tilt = 0;
  if (text.attr.includes("italic")) {
    tilt = 0.125;
  }
  var interline = (text.height * 1.5 + text.thickness) / 2;
  var txt = text.text.split("\n");
  ctx.rotate(deg2rad(angle));
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  ctx.lineWidth = text.thickness;
  for (var i in txt) {
    var offsety = (-(txt.length - 1) + i * 2) * interline + text.height / 2;
    var lineWidth = 0;
    for (var c of txt[i]) {
      lineWidth += pcbFont.font_data[c].w * text.width;
    }
    var offsetx = 0;
    switch (text.horiz_justify) {
      case -1:
        // Justify left, do nothing
        break;
      case 0:
        // Justify center
        offsetx -= lineWidth / 2;
        break;
      case 1:
        // Justify right
        offsetx -= lineWidth;
        break;
    }
    for (var c of txt[i]) {
      for (var line of pcbFont.font_data[c].l) {
        // Drawing each segment separately instead of
        // polyline because round line caps don't work in joints
        for (var i = 0; i < line.length - 1; i++) {
          ctx.beginPath();
          ctx.moveTo(...calcFontPoint(line[i], text, offsetx, offsety, tilt));
          ctx.lineTo(...calcFontPoint(line[i + 1], text, offsetx, offsety, tilt));
          ctx.stroke();
        }
      }
      offsetx += pcbFont.font_data[c].w * text.width;
    }
  }
  ctx.restore();
}

function drawedge(ctx, scalefactor, edge, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1 / scalefactor, edge.width);
  ctx.lineCap = "round";
  if (edge.type == "segment") 
  {
    ctx.beginPath();
    ctx.moveTo(...edge.start);
    ctx.lineTo(...edge.end);
    ctx.stroke();
  }
  if (edge.type == "arc") {
    ctx.beginPath();
    ctx.arc(
      ...edge.start,
      edge.radius,
      deg2rad(edge.startangle),
      deg2rad(edge.endangle));
    ctx.stroke();
  }
  if (edge.type == "circle") {
    ctx.beginPath();
    ctx.arc(
      ...edge.start,
      edge.radius,
      0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
  }
}

function drawRoundRect(ctx, color, size, radius, ctxmethod) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  var x = size[0] * -0.5;
  var y = size[1] * -0.5;
  var width = size[0];
  var height = size[1];
  ctx.moveTo(x, 0);
  ctx.arcTo(x, y + height, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y, radius);
  ctx.arcTo(x + width, y, x, y, radius);
  ctx.arcTo(x, y, x, y + height, radius);
  ctx.closePath();
  ctxmethod();
}

function drawOblong(ctx, color, size, ctxmethod) {
  drawRoundRect(ctx, color, size, Math.min(size[0], size[1]) / 2, ctxmethod);
}

function drawPolygons(ctx, color, polygons, ctxmethod) {
  ctx.fillStyle = color;
  if(polygons.length>0)
  {
    for (var polygon of polygons) {
      ctx.beginPath();
      for (var vertex of polygon) {
        ctx.lineTo(...vertex)
      }
      ctx.closePath();
      ctxmethod();
    }
  }
}

function drawPolygonShape(ctx, shape, color) {
  ctx.save();
  ctx.translate(...shape.pos);
  ctx.rotate(deg2rad(-shape.angle));
  drawPolygons(ctx, color, shape.polygons, ctx.fill.bind(ctx));
  ctx.restore();
}

function drawDrawing(ctx, layer, scalefactor, drawing, color) {
  if (["segment", "arc", "circle"].includes(drawing.type)) {
    drawedge(ctx, scalefactor, drawing, color);
  } else if (drawing.type == "polygon") {
    drawPolygonShape(ctx, drawing, color);
  } else {
    drawtext(ctx, drawing, color, layer == "B");
  }
}

function drawCircle(ctx, radius, ctxmethod) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctxmethod();
}

function drawPad(ctx, pad, color, outline) {
  ctx.save();
  ctx.translate(...pad.pos);
  ctx.rotate(deg2rad(pad.angle));
  if (pad.offset) {
    ctx.translate(...pad.offset);
  }
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  var ctxmethod = outline ? ctx.stroke.bind(ctx) : ctx.fill.bind(ctx);
  if (pad.shape == "rect") {
    var rect = [...pad.size.map(c => -c * 0.5), ...pad.size];
    if (outline) {
      ctx.strokeRect(...rect);
    } else {
      ctx.fillRect(...rect);
    }
  } else if (pad.shape == "oval") {
    drawOblong(ctx, color, pad.size, ctxmethod);
  } else if (pad.shape == "circle") {
    drawCircle(ctx, pad.size[0] / 2, ctxmethod);
  } else if (pad.shape == "roundrect") {
    drawRoundRect(ctx, color, pad.size, pad.radius, ctxmethod);
  } else if (pad.shape == "custom") {
    drawPolygons(ctx, color, pad.polygons, ctxmethod);
  }
  if (pad.type == "th" && !outline) {
    ctx.fillStyle = "#CCCCCC";
    if (pad.drillshape == "oblong") {
      drawOblong(ctx, "#CCCCCC", pad.drillsize, ctxmethod);
    } else {
      drawCircle(ctx, pad.drillsize[0] / 2, ctxmethod);
    }
  }
  ctx.restore();
}

function drawModule(ctx, layer, scalefactor, module, padcolor, outlinecolor, highlight) {
  if (highlight) {
    // draw bounding box
    if (module.layer == layer) {
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.translate(...module.bbox.pos);
      ctx.fillStyle = padcolor;
      ctx.fillRect(0, 0,...module.bbox.size);
      ctx.globalAlpha = 1;
      ctx.strokeStyle = padcolor;
      ctx.strokeRect(
        0, 0,
        ...module.bbox.size);
      ctx.restore();
    }
  }
  // draw drawings
  for (var drawing of module.drawings) {
    if (drawing.layer == layer) {
      drawDrawing(ctx, layer, scalefactor, drawing.drawing, padcolor);
    }
  }
  // draw pads
  for (var pad of module.pads) {
    if (pad.layers.includes(layer)) {
      drawPad(ctx, pad, padcolor, false);
      
      
      if (pad.pin1 && globalData.getHighlightPin1()) 
      {
        drawPad(ctx, pad, outlinecolor, true);
      }
    }
  }
}

function drawEdges(canvas, scalefactor) {
  var ctx = canvas.getContext("2d");
  var edgecolor = getComputedStyle(topmostdiv).getPropertyValue('--pcb-edge-color');
  for (var edge of pcbdata.edges) {
    drawedge(ctx, scalefactor, edge, edgecolor);
  }
}

function drawModules(canvas, layer, scalefactor, highlightedRefs) {
  // The rest of this function assumes that the references are in an array structure. 
  // Since they are not, have to use split. But this function is getting called befroe
  // the global variable exists which causes a crash since the ref variable will look 
  // like an array. Here I am checking that the length of highlight ref is greater than 0, if 
  // it is then the system will be split the string. This is kinda a hacky way to resolve the 
  // issue. This will only be true if the string has more than one character. 
  //TODO: change the reference variable from a string to an array. This needs to be done in ibom.js
  if(highlightedRefs.length>0){
    highlightedRefs = highlightedRefs.split(',');
  }

  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 3 / scalefactor;
  var style = getComputedStyle(topmostdiv);
  var padcolor = style.getPropertyValue('--pad-color');
  var outlinecolor = style.getPropertyValue('--pin1-outline-color');
  if (highlightedRefs.length > 0) {
    padcolor = style.getPropertyValue('--pad-color-highlight');
    outlinecolor = style.getPropertyValue('--pin1-outline-color-highlight');
  }
  for (var i in pcbdata.modules) {
    var mod = pcbdata.modules[i];
    var highlight = highlightedRefs.includes(mod.ref);

    if (highlightedRefs.length == 0 || highlight) {
      drawModule(ctx, layer, scalefactor, mod, padcolor, outlinecolor, highlight);
    }
  }
}

function drawSilkscreen(canvas, layer, scalefactor)
{
  var ctx = canvas.getContext("2d");
  for (var d of pcbdata.silkscreen[layer])
  {
    if (["segment", "arc", "circle"].includes(d.type))
    {
      drawedge(ctx, scalefactor, d, "#aa4");
    }
    else if (d.type == "polygon")
    {
      drawPolygonShape(ctx, d, "#4aa");
    }
    else
    {
      drawtext(ctx, d, "#4aa", layer == "B");
    }
  }
}

function clearCanvas(canvas) {
  var ctx = canvas.getContext("2d");
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function drawHighlightsOnLayer(canvasdict) {
  clearCanvas(canvasdict.highlight);
  drawModules(canvasdict.highlight, canvasdict.layer,
    canvasdict.transform.s, globalData.getHighlightedRefs());
}

function drawHighlights() {
  drawHighlightsOnLayer(allcanvas.front);
  drawHighlightsOnLayer(allcanvas.back);
}

function drawBackground(canvasdict) {
  clearCanvas(canvasdict.bg);
  clearCanvas(canvasdict.silk);
  drawEdges(canvasdict.bg, canvasdict.transform.s);
  drawModules(canvasdict.bg, canvasdict.layer, canvasdict.transform.s, []);
  drawSilkscreen(canvasdict.silk, canvasdict.layer, canvasdict.transform.s);
}

function prepareCanvas(canvas, flip, transform) {
  var ctx = canvas.getContext("2d");
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  var fontsize = 1.55;
  ctx.scale(transform.zoom, transform.zoom);
  ctx.translate(transform.panx, transform.pany);
  if (flip) {
    ctx.scale(-1, 1);
  }
  ctx.translate(transform.x, transform.y);
  ctx.rotate(deg2rad(boardRotation));
  ctx.scale(transform.s, transform.s);
}

function prepareLayer(canvasdict) {
  var flip = (canvasdict.layer != "B");
  for (var c of ["bg", "silk", "highlight"]) {
    prepareCanvas(canvasdict[c], flip, canvasdict.transform);
  }
}

function rotateVector(v, angle) {
  angle = deg2rad(angle);
  return [
    v[0] * Math.cos(angle) - v[1] * Math.sin(angle),
    v[0] * Math.sin(angle) + v[1] * Math.cos(angle)
  ];
}

function applyRotation(bbox) {
  var corners = [
    [bbox.minx, bbox.miny],
    [bbox.minx, bbox.maxy],
    [bbox.maxx, bbox.miny],
    [bbox.maxx, bbox.maxy],
  ];
  corners = corners.map((v) => rotateVector(v, boardRotation));
  return {
    minx: corners.reduce((a, v) => Math.min(a, v[0]), Infinity),
    miny: corners.reduce((a, v) => Math.min(a, v[1]), Infinity),
    maxx: corners.reduce((a, v) => Math.max(a, v[0]), -Infinity),
    maxy: corners.reduce((a, v) => Math.max(a, v[1]), -Infinity),
  }
}

function recalcLayerScale(canvasdict) {
  var canvasdivid = {
    "F": "frontcanvas",
    "B": "backcanvas"
  } [canvasdict.layer];
  var width = document.getElementById(canvasdivid).clientWidth * 2;
  var height = document.getElementById(canvasdivid).clientHeight * 2;
  var bbox = applyRotation(pcbdata.edges_bbox);
  var scalefactor = 0.98 * Math.min(
    width / (bbox.maxx - bbox.minx),
    height / (bbox.maxy - bbox.miny)
  );
  if (scalefactor < 0.1) {
    scalefactor = 1;
  }
  canvasdict.transform.s = scalefactor;
  var flip = (canvasdict.layer != "B");
  if (flip) {
    canvasdict.transform.x = -((bbox.maxx + bbox.minx) * scalefactor + width) * 0.5;
  } else {
    canvasdict.transform.x = -((bbox.maxx + bbox.minx) * scalefactor - width) * 0.5;
  }
  canvasdict.transform.y = -((bbox.maxy + bbox.miny) * scalefactor - height) * 0.5;
  for (var c of ["bg", "silk", "highlight"]) {
    canvas = canvasdict[c];
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = (width / 2) + "px";
    canvas.style.height = (height / 2) + "px";
  }
}

function redrawCanvas(layerdict) {
  prepareLayer(layerdict);
  drawBackground(layerdict);
  drawHighlightsOnLayer(layerdict);
}

function resizeCanvas(layerdict) {
  recalcLayerScale(layerdict);
  redrawCanvas(layerdict);
}

function resizeAll() {
  resizeCanvas(allcanvas.front);
  resizeCanvas(allcanvas.back);
}

function bboxScan(layer, x, y, transform) {
  var result = [];
  for (var i in pcbdata.modules) {
    var module = pcbdata.modules[i];
    if (module.layer == layer) {
      var b = module.bbox;
      if (b.pos[0] <= x && b.pos[0] + b.size[0] >= x &&
          b.pos[1] <= y && b.pos[1] + b.size[1] >= y) {
        result.push(module.ref);
      }
    }
  }
  return result;
}

function handleMouseDown(e, layerdict) {
  if (e.which != 1) {
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  layerdict.transform.mousestartx = e.offsetX;
  layerdict.transform.mousestarty = e.offsetY;
  layerdict.transform.mousedownx = e.offsetX;
  layerdict.transform.mousedowny = e.offsetY;
  layerdict.transform.mousedown = true;
}

function smoothScrollToRow(rowid) {
  document.getElementById(rowid).scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });
}

function modulesClicked(references) {
  var lastClickedIndex = references.indexOf(globalData.getLastClickedRef());
  var ref = references[(lastClickedIndex + 1) % references.length];
  for (var handler of globalData.getHighlightHandlers()) {
    if (handler.refs.indexOf(ref) >= 0) {
      globalData.setLastClickedRef(ref);
      handler.handler();
      smoothScrollToRow(globalData.getCurrentHighlightedRowId());
      break;
    }
  }
}


function handleMouseClick(e, layerdict) {
  var x = e.offsetX;
  var y = e.offsetY;
  var t = layerdict.transform;
  if (layerdict.layer != "B") {
    x = (2 * x / t.zoom - t.panx + t.x) / -t.s;
  } else {
    x = (2 * x / t.zoom - t.panx - t.x) / t.s;
  }
  y = (2 * y / t.zoom - t.y - t.pany) / t.s;
  var v = rotateVector([x, y], -boardRotation);
  var reflist = bboxScan(layerdict.layer, v[0], v[1], t);
  if (reflist.length > 0) {
    modulesClicked(reflist);
    drawHighlights();
  }
}

function handleMouseUp(e, layerdict) {
  e.preventDefault();
  e.stopPropagation();
  if (e.which == 1 &&
    layerdict.transform.mousedown &&
    layerdict.transform.mousedownx == e.offsetX &&
    layerdict.transform.mousedowny == e.offsetY) {
    // This is just a click
    handleMouseClick(e, layerdict);
    layerdict.transform.mousedown = false;
    return;
  }
  if (e.which == 3) {
    // Reset pan and zoom on right click.
    layerdict.transform.panx = 0;
    layerdict.transform.pany = 0;
    layerdict.transform.zoom = 1;
    redrawCanvas(layerdict);
  } else if (!globalData.getRedrawOnDrag()) {
    redrawCanvas(layerdict);
  }
  layerdict.transform.mousedown = false;
}

function handleMouseMove(e, layerdict) {
  if (!layerdict.transform.mousedown) {
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  var dx = e.offsetX - layerdict.transform.mousestartx;
  var dy = e.offsetY - layerdict.transform.mousestarty;
  layerdict.transform.panx += 2 * dx / layerdict.transform.zoom;
  layerdict.transform.pany += 2 * dy / layerdict.transform.zoom;
  layerdict.transform.mousestartx = e.offsetX;
  layerdict.transform.mousestarty = e.offsetY;
  if (globalData.getRedrawOnDrag()) {
    redrawCanvas(layerdict);
  }
}

function handleMouseWheel(e, layerdict) {
  e.preventDefault();
  e.stopPropagation();
  var t = layerdict.transform;
  var wheeldelta = e.deltaY;
  if (e.deltaMode == 1) {
    // FF only, scroll by lines
    wheeldelta *= 30;
  } else if (e.deltaMode == 2) {
    wheeldelta *= 300;
  }
  var m = Math.pow(1.1, -wheeldelta / 40);
  // Limit amount of zoom per tick.
  if (m > 2) {
    m = 2;
  } else if (m < 0.5) {
    m = 0.5;
  }
  t.zoom *= m;
  var zoomd = (1 - m) / t.zoom;
  t.panx += 2 * e.offsetX * zoomd;
  t.pany += 2 * e.offsetY * zoomd;
  redrawCanvas(layerdict);
}

function addMouseHandlers(div, layerdict) {
  div.onmouseclick = function(e){
    handleMouseClick(e, layerdict);
  }

  div.onmousedown = function(e) {
    handleMouseDown(e, layerdict);
  };
  div.onmousemove = function(e) {
    handleMouseMove(e, layerdict);
  };
  div.onmouseup = function(e) {
    handleMouseUp(e, layerdict);
  };
  div.onmouseout = function(e) {
    handleMouseUp(e, layerdict);
  }
  div.onwheel = function(e) {
    handleMouseWheel(e, layerdict);
  }
  for (var element of [div, layerdict.bg, layerdict.silk, layerdict.highlight]) {
    element.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }, false);
  }
}

function setBoardRotation(value) {
  boardRotation = value * 5;
  globalData.writeStorage("boardRotation", boardRotation);
  document.getElementById("rotationDegree").textContent = boardRotation;
  resizeAll();
}

function initRender() {
  allcanvas = {
    front: {
      transform: {
        x: 0,
        y: 0,
        s: 1,
        panx: 0,
        pany: 0,
        zoom: 1,
        mousestartx: 0,
        mousestarty: 0,
        mousedown: false,
      },
      bg: document.getElementById("F_bg"),
      silk: document.getElementById("F_slk"),
      highlight: document.getElementById("F_hl"),
      layer: "F",
    },
    back: {
      transform: {
        x: 0,
        y: 0,
        s: 1,
        panx: 0,
        pany: 0,
        zoom: 1,
        mousestartx: 0,
        mousestarty: 0,
        mousedown: false,
      },
      bg: document.getElementById("B_bg"),
      silk: document.getElementById("B_slk"),
      highlight: document.getElementById("B_hl"),
      layer: "B",
    }
  };
  addMouseHandlers(document.getElementById("frontcanvas"), allcanvas.front);
  addMouseHandlers(document.getElementById("backcanvas"), allcanvas.back);
}

module.exports = {
  resizeAll,
  initRender,
  redrawCanvas,
  drawHighlights,
  setBoardRotation,
  smoothScrollToRow
};
},{"./global.js":1}],7:[function(require,module,exports){
/*
  Split.js - v1.3.5
  MIT License
  https://github.com/nathancahill/Split.js
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Split=t()}(this,function(){"use strict";var e=window,t=e.document,n="addEventListener",i="removeEventListener",r="getBoundingClientRect",s=function(){return!1},o=e.attachEvent&&!e[n],a=["","-webkit-","-moz-","-o-"].filter(function(e){var n=t.createElement("div");return n.style.cssText="width:"+e+"calc(9px)",!!n.style.length}).shift()+"calc",l=function(e){return"string"==typeof e||e instanceof String?t.querySelector(e):e};return function(u,c){function z(e,t,n){var i=A(y,t,n);Object.keys(i).forEach(function(t){return e.style[t]=i[t]})}function h(e,t){var n=B(y,t);Object.keys(n).forEach(function(t){return e.style[t]=n[t]})}function f(e){var t=E[this.a],n=E[this.b],i=t.size+n.size;t.size=e/this.size*i,n.size=i-e/this.size*i,z(t.element,t.size,this.aGutterSize),z(n.element,n.size,this.bGutterSize)}function m(e){var t;this.dragging&&((t="touches"in e?e.touches[0][b]-this.start:e[b]-this.start)<=E[this.a].minSize+M+this.aGutterSize?t=E[this.a].minSize+this.aGutterSize:t>=this.size-(E[this.b].minSize+M+this.bGutterSize)&&(t=this.size-(E[this.b].minSize+this.bGutterSize)),f.call(this,t),c.onDrag&&c.onDrag())}function g(){var e=E[this.a].element,t=E[this.b].element;this.size=e[r]()[y]+t[r]()[y]+this.aGutterSize+this.bGutterSize,this.start=e[r]()[G]}function d(){var t=this,n=E[t.a].element,r=E[t.b].element;t.dragging&&c.onDragEnd&&c.onDragEnd(),t.dragging=!1,e[i]("mouseup",t.stop),e[i]("touchend",t.stop),e[i]("touchcancel",t.stop),t.parent[i]("mousemove",t.move),t.parent[i]("touchmove",t.move),delete t.stop,delete t.move,n[i]("selectstart",s),n[i]("dragstart",s),r[i]("selectstart",s),r[i]("dragstart",s),n.style.userSelect="",n.style.webkitUserSelect="",n.style.MozUserSelect="",n.style.pointerEvents="",r.style.userSelect="",r.style.webkitUserSelect="",r.style.MozUserSelect="",r.style.pointerEvents="",t.gutter.style.cursor="",t.parent.style.cursor=""}function S(t){var i=this,r=E[i.a].element,o=E[i.b].element;!i.dragging&&c.onDragStart&&c.onDragStart(),t.preventDefault(),i.dragging=!0,i.move=m.bind(i),i.stop=d.bind(i),e[n]("mouseup",i.stop),e[n]("touchend",i.stop),e[n]("touchcancel",i.stop),i.parent[n]("mousemove",i.move),i.parent[n]("touchmove",i.move),r[n]("selectstart",s),r[n]("dragstart",s),o[n]("selectstart",s),o[n]("dragstart",s),r.style.userSelect="none",r.style.webkitUserSelect="none",r.style.MozUserSelect="none",r.style.pointerEvents="none",o.style.userSelect="none",o.style.webkitUserSelect="none",o.style.MozUserSelect="none",o.style.pointerEvents="none",i.gutter.style.cursor=j,i.parent.style.cursor=j,g.call(i)}function v(e){e.forEach(function(t,n){if(n>0){var i=F[n-1],r=E[i.a],s=E[i.b];r.size=e[n-1],s.size=t,z(r.element,r.size,i.aGutterSize),z(s.element,s.size,i.bGutterSize)}})}function p(){F.forEach(function(e){e.parent.removeChild(e.gutter),E[e.a].element.style[y]="",E[e.b].element.style[y]=""})}void 0===c&&(c={});var y,b,G,E,w=l(u[0]).parentNode,D=e.getComputedStyle(w).flexDirection,U=c.sizes||u.map(function(){return 100/u.length}),k=void 0!==c.minSize?c.minSize:100,x=Array.isArray(k)?k:u.map(function(){return k}),L=void 0!==c.gutterSize?c.gutterSize:10,M=void 0!==c.snapOffset?c.snapOffset:30,O=c.direction||"horizontal",j=c.cursor||("horizontal"===O?"ew-resize":"ns-resize"),C=c.gutter||function(e,n){var i=t.createElement("div");return i.className="gutter gutter-"+n,i},A=c.elementStyle||function(e,t,n){var i={};return"string"==typeof t||t instanceof String?i[e]=t:i[e]=o?t+"%":a+"("+t+"% - "+n+"px)",i},B=c.gutterStyle||function(e,t){return n={},n[e]=t+"px",n;var n};"horizontal"===O?(y="width","clientWidth",b="clientX",G="left","paddingLeft"):"vertical"===O&&(y="height","clientHeight",b="clientY",G="top","paddingTop");var F=[];return E=u.map(function(e,t){var i,s={element:l(e),size:U[t],minSize:x[t]};if(t>0&&(i={a:t-1,b:t,dragging:!1,isFirst:1===t,isLast:t===u.length-1,direction:O,parent:w},i.aGutterSize=L,i.bGutterSize=L,i.isFirst&&(i.aGutterSize=L/2),i.isLast&&(i.bGutterSize=L/2),"row-reverse"===D||"column-reverse"===D)){var a=i.a;i.a=i.b,i.b=a}if(!o&&t>0){var c=C(t,O);h(c,L),c[n]("mousedown",S.bind(i)),c[n]("touchstart",S.bind(i)),w.insertBefore(c,s.element),i.gutter=c}0===t||t===u.length-1?z(s.element,s.size,L/2):z(s.element,s.size,L);var f=s.element[r]()[y];return f<s.minSize&&(s.minSize=f),t>0&&F.push(i),s}),o?{setSizes:v,destroy:p}:{setSizes:v,getSizes:function(){return E.map(function(e){return e.size})},collapse:function(e){if(e===F.length){var t=F[e-1];g.call(t),o||f.call(t,t.size-t.bGutterSize)}else{var n=F[e];g.call(n),o||f.call(n,n.aGutterSize)}},destroy:p}}});

},{}]},{},[5,3,6,2,4,7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ2xvYmFsLmpzIiwic3JjL2h0bWxGdW5jdGlvbnMuanMiLCJzcmMvaWJvbS5qcyIsInNyYy9wY2IuanMiLCJzcmMvcGNiZm9udC5qcyIsInNyYy9yZW5kZXIuanMiLCJ2ZW5kZXIvc3BsaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeDRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICBCb2FyZCBSb3RhdGlvbiAgICAgICAgICAgICAgICAgICAgXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBzdG9yYWdlXHJcbnZhciBzdG9yYWdlUHJlZml4ID0gJ0tpQ2FkX0hUTUxfQk9NX18nICsgcGNiZGF0YS5tZXRhZGF0YS50aXRsZSArICdfXycgKyBwY2JkYXRhLm1ldGFkYXRhLnJldmlzaW9uICsgJ19fJ1xyXG5cclxuZnVuY3Rpb24gaW5pdFN0b3JhZ2UgKGtleSkge1xyXG4gIHRyeSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibGFua1wiKTtcclxuICAgIHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU3RvcmFnZSBpbml0IGVycm9yXCIpO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlIG5vdCBhdmFpbGFibGVcclxuICB9XHJcbiAgaWYgKCFzdG9yYWdlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJsYW5rXCIpO1xyXG4gICAgICBzdG9yYWdlID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBzZXNzaW9uU3RvcmFnZSBhbHNvIG5vdCBhdmFpbGFibGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRTdG9yYWdlKGtleSkge1xyXG4gIGlmIChzdG9yYWdlKSB7XHJcbiAgICByZXR1cm4gc3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VQcmVmaXggKyAnIycgKyBrZXkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlU3RvcmFnZShrZXksIHZhbHVlKSB7XHJcbiAgaWYgKHN0b3JhZ2UpIHtcclxuICAgIHN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlUHJlZml4ICsgJyMnICsga2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICBIaWdobGlnaHRlZCBSZWZzICAgICAgICAgICAgICAgICAgICBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGhpZ2hsaWdodGVkUmVmcyA9IFwiXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRIaWdobGlnaHRlZFJlZnMocmVmcyl7XHJcbiAgICBoaWdobGlnaHRlZFJlZnMgPSByZWZzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIaWdobGlnaHRlZFJlZnMoKXtcclxuICAgIHJldHVybiBoaWdobGlnaHRlZFJlZnM7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgUmVkcmF3IE9uIERyYWcgICAgICAgICAgICAgICAgICAgICAgXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciByZWRyYXdPbkRyYWcgPSB0cnVlO1xyXG5cclxuICBcclxuZnVuY3Rpb24gc2V0UmVkcmF3T25EcmFnKHZhbHVlKXtcclxuICAgIHJlZHJhd09uRHJhZyA9IHZhbHVlO1xyXG4gICAgd3JpdGVTdG9yYWdlKFwicmVkcmF3T25EcmFnXCIsIHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVkcmF3T25EcmFnKCl7XHJcbiAgICByZXR1cm4gcmVkcmF3T25EcmFnO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQk9NIFNwbGl0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBib21zcGxpdDtcclxuXHJcbmZ1bmN0aW9uIHNldEJvbVNwbGl0KHZhbHVlKXtcclxuICAgIGJvbXNwbGl0ID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJvbVNwbGl0KCl7XHJcbiAgICByZXR1cm4gYm9tc3BsaXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lCb21TcGxpdCgpe1xyXG4gICAgYm9tc3BsaXQuZGVzdHJveSgpXHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5DYW52YXMgU3BsaXRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGNhbnZhc3NwbGl0O1xyXG5cclxuZnVuY3Rpb24gc2V0Q2FudmFzU3BsaXQodmFsdWUpe1xyXG4gICAgY2FudmFzc3BsaXQgPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2FudmFzU3BsaXQoKXtcclxuICAgIHJldHVybiBjYW52YXNzcGxpdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveUNhbnZhc1NwbGl0KCl7XHJcbiAgICBjYW52YXNzcGxpdC5kZXN0cm95KClcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGFwc2VDYW52YXNTcGxpdCh2YWx1ZSlcclxue1xyXG4gICAgY2FudmFzc3BsaXQuY29sbGFwc2UodmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTaXplc0NhbnZhc1NwbGl0KHZhbHVlKXtcclxuICAgIGNhbnZhc3NwbGl0LnNldFNpemVzKFs1MCwgNTBdKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNhbnZhcyBMYXlvdXRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGNhbnZhc2xheW91dCA9IFwiRkJcIjtcclxuXHJcbi8qWFhYIEZvdW5kIGEgYnVnIGF0IHN0YXJ0dXAuIENvZGUgYXNzdW1lcyB0aGF0IGNhbnZhcyBsYXlvdXQgXHJcbmlzIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXMuIHRoZW4gc3lzdGVtIGZhaWxzLiBoZSBidWcgd2FzIHRoYXQgdGhlIFxyXG5jYW52YXNMYXlvdXQgd2FzIGJlaW5nIHNldCB0byAnZGVmYXVsdCcgd2hpY2ggaXMgbm90IGEgdmFsaWQgc3RhdGUuIFxyXG5TbyBubyBpcyBjaGVjayB0aGF0IGlmIGRlZmF1bHQgaXMgc2VudCBpbiB0aGVuIHNldCB0aGUgbGF5b3V0IHRvIEZCIG1vZGUuXHJcbiovXHJcbi8qIFRPRE86IE1ha2UgdGhlIGRlZmF1bHQgY2hlY2sgYmVsb3cgYWN0dWFsbHkgY2hlY2sgdGhhdCB0aGUgaXRlbSBcclxuaXMgaW4gb25lIG9mIHRoZSB0aHJlZSB2YWxpZCBzdGF0ZXMuIElmIG5vdCB0aGVuIHNldCB0byBGQiwgb3RoZXJ3aXNlIHNldCB0byBvbmUgb2ZcclxudGhlIHRocmVlIHZhbGlkIHN0YXRlc1xyXG4qL1xyXG5mdW5jdGlvbiBzZXRDYW52YXNMYXlvdXQodmFsdWUpe1xyXG4gICAgaWYodmFsdWUgPT0gJ2RlZmF1bHQnKXtcclxuICAgICAgICBjYW52YXNsYXlvdXQgPSAnRkInXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjYW52YXNsYXlvdXQgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2FudmFzTGF5b3V0KCl7XHJcbiAgICByZXR1cm4gY2FudmFzbGF5b3V0O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQk9NIExheW91dFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgYm9tbGF5b3V0ID0gXCJkZWZhdWx0XCI7XHJcblxyXG5mdW5jdGlvbiBzZXRCb21MYXlvdXQodmFsdWUpe1xyXG4gICAgYm9tbGF5b3V0ID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJvbUxheW91dCgpe1xyXG4gICAgcmV0dXJuIGJvbWxheW91dDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkJPTSBTb3J0IEZ1bmN0aW9uXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBib21Tb3J0RnVuY3Rpb24gPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gc2V0Qm9tU29ydEZ1bmN0aW9uKHZhbHVlKXtcclxuICAgIGJvbVNvcnRGdW5jdGlvbiA9IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCb21Tb3J0RnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBib21Tb3J0RnVuY3Rpb247XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5DdXJyZW50IFNvcnQgQ29sdW1uXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBjdXJyZW50U29ydENvbHVtbiA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50U29ydENvbHVtbih2YWx1ZSl7XHJcbiAgICBjdXJyZW50U29ydENvbHVtbiA9IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50U29ydENvbHVtbigpe1xyXG4gICAgcmV0dXJuIGN1cnJlbnRTb3J0Q29sdW1uO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ3VycmVudCBTb3J0IE9yZGVyXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBjdXJyZW50U29ydE9yZGVyID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRTb3J0T3JkZXIodmFsdWUpe1xyXG4gICAgY3VycmVudFNvcnRPcmRlciA9IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50U29ydE9yZGVyKCl7XHJcbiAgICByZXR1cm4gY3VycmVudFNvcnRPcmRlcjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkN1cnJlbnQgSGlnaGxpZ2h0ZWQgUm93IElEXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBjdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZDtcclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKHZhbHVlKXtcclxuICAgIGN1cnJlbnRIaWdobGlnaHRlZFJvd0lkID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCl7XHJcbiAgICByZXR1cm4gY3VycmVudEhpZ2hsaWdodGVkUm93SWQ7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5IaWdobGlnaHQgSGFuZGxlcnNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGhpZ2hsaWdodEhhbmRsZXJzID0gW107XHJcblxyXG5mdW5jdGlvbiBzZXRIaWdobGlnaHRIYW5kbGVycyh2YWx1ZXMpe1xyXG4gICAgaGlnaGxpZ2h0SGFuZGxlcnMgPSB2YWx1ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhpZ2hsaWdodEhhbmRsZXJzKCl7XHJcbiAgICByZXR1cm4gaGlnaGxpZ2h0SGFuZGxlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hIaWdobGlnaHRIYW5kbGVycyh2YWx1ZSl7XHJcbiAgICBoaWdobGlnaHRIYW5kbGVycy5wdXNoKHZhbHVlKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNoZWNrYm94ZXNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGNoZWNrYm94ZXMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNldENoZWNrYm94ZXModmFsdWVzKXtcclxuICAgIGNoZWNrYm94ZXMgPSB2YWx1ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENoZWNrYm94ZXMoKXtcclxuICAgIHJldHVybiBjaGVja2JveGVzO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQk9NIENoZWNrYm94ZXNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGJvbUNoZWNrYm94ZXMgPSBcIlwiO1xyXG5cclxuZnVuY3Rpb24gc2V0Qm9tQ2hlY2tib3hlcyh2YWx1ZXMpe1xyXG4gICAgYm9tQ2hlY2tib3hlcyA9IHZhbHVlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Qm9tQ2hlY2tib3hlcygpe1xyXG4gICAgcmV0dXJuIGJvbUNoZWNrYm94ZXM7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblJlbW92ZSBCT00gRW50cmllc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgcmVtb3ZlQk9NRW50cmllcyA9IFwiXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRSZW1vdmVCT01FbnRyaWVzKHZhbHVlcyl7XHJcbiAgICByZW1vdmVCT01FbnRyaWVzID0gdmFsdWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZW1vdmVCT01FbnRyaWVzKCl7XHJcbiAgICByZXR1cm4gcmVtb3ZlQk9NRW50cmllcztcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblJlbW92ZSBCT00gRW50cmllc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgYWRkaXRpb25hbEF0dHJpYnV0ZXMgPSBcIlwiO1xyXG5cclxuZnVuY3Rpb24gc2V0QWRkaXRpb25hbEF0dHJpYnV0ZXModmFsdWVzKXtcclxuICAgIGFkZGl0aW9uYWxBdHRyaWJ1dGVzID0gdmFsdWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBZGRpdGlvbmFsQXR0cmlidXRlcygpe1xyXG4gICAgcmV0dXJuIGFkZGl0aW9uYWxBdHRyaWJ1dGVzO1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuSGlnaGxpZ2h0IFBpbiAxXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBoaWdobGlnaHRwaW4xID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzZXRIaWdobGlnaHRQaW4xKHZhbHVlKSB7XHJcbiAgd3JpdGVTdG9yYWdlKFwiaGlnaGxpZ2h0cGluMVwiLCB2YWx1ZSk7XHJcbiAgaGlnaGxpZ2h0cGluMSA9IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIaWdobGlnaHRQaW4xKCl7XHJcbiAgICByZXR1cm4gaGlnaGxpZ2h0cGluMTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkxhc3QgQ2xpY2tlZCBSZWZcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGxhc3RDbGlja2VkUmVmO1xyXG5cclxuZnVuY3Rpb24gc2V0TGFzdENsaWNrZWRSZWYodmFsdWUpIHtcclxuICAgIGxhc3RDbGlja2VkUmVmID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExhc3RDbGlja2VkUmVmKCkge1xyXG4gIHJldHVybiBsYXN0Q2xpY2tlZFJlZjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db21iaW5lIFZhbHVlc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgY29tYmluZVZhbHVlcyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gc2V0Q29tYmluZVZhbHVlcyh2YWx1ZSkge1xyXG4gIHdyaXRlU3RvcmFnZShcImNvbWJpbmVWYWx1ZXNcIiwgdmFsdWUpO1xyXG4gIGNvbWJpbmVWYWx1ZXMgPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tYmluZVZhbHVlcygpe1xyXG4gICAgcmV0dXJuIGNvbWJpbmVWYWx1ZXM7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBpbml0U3RvcmFnZSAgICAgICAgICAgICAgICAsIHJlYWRTdG9yYWdlICAgICAgICAgICAgICAgICwgd3JpdGVTdG9yYWdlICAgICAgICxcclxuICBzZXRIaWdobGlnaHRlZFJlZnMgICAgICAgICAsIGdldEhpZ2hsaWdodGVkUmVmcyAgICAgICAgICxcclxuICBzZXRSZWRyYXdPbkRyYWcgICAgICAgICAgICAsIGdldFJlZHJhd09uRHJhZyAgICAgICAgICAgICxcclxuICBzZXRCb21TcGxpdCAgICAgICAgICAgICAgICAsIGdldEJvbVNwbGl0ICAgICAgICAgICAgICAgICwgZGVzdHJveUJvbVNwbGl0ICAgICxcclxuICBzZXRDYW52YXNTcGxpdCAgICAgICAgICAgICAsIGdldENhbnZhc1NwbGl0ICAgICAgICAgICAgICwgZGVzdHJveUNhbnZhc1NwbGl0ICwgY29sbGFwc2VDYW52YXNTcGxpdCAsIHNldFNpemVzQ2FudmFzU3BsaXQsXHJcbiAgc2V0Q2FudmFzTGF5b3V0ICAgICAgICAgICAgLCBnZXRDYW52YXNMYXlvdXQgICAgICAgICAgICAsXHJcbiAgc2V0Qm9tTGF5b3V0ICAgICAgICAgICAgICAgLCBnZXRCb21MYXlvdXQgICAgICAgICAgICAgICAsXHJcbiAgc2V0Qm9tU29ydEZ1bmN0aW9uICAgICAgICAgLCBnZXRCb21Tb3J0RnVuY3Rpb24gICAgICAgICAsXHJcbiAgc2V0Q3VycmVudFNvcnRDb2x1bW4gICAgICAgLCBnZXRDdXJyZW50U29ydENvbHVtbiAgICAgICAsXHJcbiAgc2V0Q3VycmVudFNvcnRPcmRlciAgICAgICAgLCBnZXRDdXJyZW50U29ydE9yZGVyICAgICAgICAsXHJcbiAgc2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQgLCBnZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZCAsXHJcbiAgc2V0SGlnaGxpZ2h0SGFuZGxlcnMgICAgICAgLCBnZXRIaWdobGlnaHRIYW5kbGVycyAgICAgICAsIHB1c2hIaWdobGlnaHRIYW5kbGVycyAsXHJcbiAgc2V0Q2hlY2tib3hlcyAgICAgICAgICAgICAgLCBnZXRDaGVja2JveGVzICAgICAgICAgICAgICAsXHJcbiAgc2V0Qm9tQ2hlY2tib3hlcyAgICAgICAgICAgLCBnZXRCb21DaGVja2JveGVzICAgICAgICAgICAsXHJcbiAgc2V0UmVtb3ZlQk9NRW50cmllcyAgICAgICAgLCBnZXRSZW1vdmVCT01FbnRyaWVzICAgICAgICAsXHJcbiAgc2V0QWRkaXRpb25hbEF0dHJpYnV0ZXMgICAgLCBnZXRBZGRpdGlvbmFsQXR0cmlidXRlcyAgICAsXHJcbiAgc2V0SGlnaGxpZ2h0UGluMSAgICAgICAgICAgLCBnZXRIaWdobGlnaHRQaW4xICAgICAgICAgICAsXHJcbiAgc2V0TGFzdENsaWNrZWRSZWYgICAgICAgICAgLCBnZXRMYXN0Q2xpY2tlZFJlZiAgICAgICAgICAsXHJcbiAgc2V0Q29tYmluZVZhbHVlcyAgICAgICAgICAgLCBnZXRDb21iaW5lVmFsdWVzXHJcblxyXG59OyIsIlxyXG52YXIgZ2xvYmFsRGF0YSA9IHJlcXVpcmUoJy4vZ2xvYmFsLmpzJylcclxudmFyIHJlbmRlciAgICAgPSByZXF1aXJlKCcuL3JlbmRlci5qcycpXHJcbnZhciBpYm9tICAgICAgID0gcmVxdWlyZSgnLi9pYm9tLmpzJylcclxuXHJcbmNvbnN0IGJvYXJkUm90YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmRSb3RhdGlvbicpO1xyXG5ib2FyZFJvdGF0aW9uLm9uaW5wdXQ9ZnVuY3Rpb24oKVxyXG57XHJcbiAgcmVuZGVyLnNldEJvYXJkUm90YXRpb24oYm9hcmRSb3RhdGlvbi52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IGRhcmtNb2RlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rhcmttb2RlQ2hlY2tib3gnKTtcclxuZGFya01vZGVCb3gub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWJvbS5zZXREYXJrTW9kZShkYXJrTW9kZUJveC5jaGVja2VkKVxyXG59XHJcblxyXG5jb25zdCBzaWxrc2NyZWVuQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lsa3NjcmVlbkNoZWNrYm94Jyk7XHJcbnNpbGtzY3JlZW5DaGVja2JveC5jaGVja2VkPWZ1bmN0aW9uKCl7XHJcbiAgaWJvbS5zaWxrc2NyZWVuVmlzaWJsZShzaWxrc2NyZWVuQ2hlY2tib3guY2hlY2tlZClcclxufVxyXG5zaWxrc2NyZWVuQ2hlY2tib3gub25jaGFuZ2U9ZnVuY3Rpb24oKXtcclxuICBpYm9tLnNpbGtzY3JlZW5WaXNpYmxlKHNpbGtzY3JlZW5DaGVja2JveC5jaGVja2VkKVxyXG59XHJcblxyXG5jb25zdCBoaWdobGlnaHRwaW4xQ2hlY2tib3ggPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWdobGlnaHRwaW4xQ2hlY2tib3gnKTtcclxuaGlnaGxpZ2h0cGluMUNoZWNrYm94Lm9uY2hhbmdlPWZ1bmN0aW9uKCl7XHJcbiAgZ2xvYmFsRGF0YS5zZXRIaWdobGlnaHRQaW4xKGhpZ2hsaWdodHBpbjFDaGVja2JveC5jaGVja2VkKTtcclxuICByZW5kZXIucmVkcmF3Q2FudmFzKGFsbGNhbnZhcy5mcm9udCk7XHJcbiAgcmVuZGVyLnJlZHJhd0NhbnZhcyhhbGxjYW52YXMuYmFjayk7XHJcbn1cclxuXHJcbmNvbnN0IGRyYWdDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmFnQ2hlY2tib3gnKTtcclxuZHJhZ0NoZWNrYm94LmNoZWNrZWQ9ZnVuY3Rpb24oKXtcclxuICBnbG9iYWxEYXRhLnNldFJlZHJhd09uRHJhZyhkcmFnQ2hlY2tib3guY2hlY2tlZClcclxufVxyXG5kcmFnQ2hlY2tib3gub25jaGFuZ2U9ZnVuY3Rpb24oKXtcclxuICBnbG9iYWxEYXRhLnNldFJlZHJhd09uRHJhZyhkcmFnQ2hlY2tib3guY2hlY2tlZClcclxufVxyXG5cclxuXHJcbmNvbnN0IGNvbWJpbmVWYWx1ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tYmluZVZhbHVlcycpO1xyXG5jb21iaW5lVmFsdWVzLm9uY2hhbmdlPWZ1bmN0aW9uKCl7XHJcbiAgZ2xvYmFsRGF0YS5zZXRDb21iaW5lVmFsdWVzKGNvbWJpbmVWYWx1ZXMuY2hlY2tlZCk7XHJcbiAgaWJvbS5wb3B1bGF0ZUJvbVRhYmxlKCk7XHJcbn1cclxuXHJcbmNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcclxuZmlsdGVyLm9uaW5wdXQ9ZnVuY3Rpb24oKXtcclxuICBpYm9tLnNldEZpbHRlcihmaWx0ZXIudmFsdWUpXHJcbn1cclxuXHJcbmNvbnN0IGJvbUNoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9tQ2hlY2tib3hlcycpO1xyXG5ib21DaGVja2JveGVzLm9uaW5wdXQ9ZnVuY3Rpb24oKXtcclxuICBpYm9tLnNldEJvbUNoZWNrYm94ZXMoYm9tQ2hlY2tib3hlcy52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUJPTUVudHJpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQk9NRW50cmllcycpO1xyXG5yZW1vdmVCT01FbnRyaWVzLm9uaW5wdXQ9ZnVuY3Rpb24oKXtcclxuICBpYm9tLnNldFJlbW92ZUJPTUVudHJpZXMocmVtb3ZlQk9NRW50cmllcy52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IGFkZGl0aW9uYWxBdHRyaWJ1dGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGl0aW9uYWxBdHRyaWJ1dGVzJyk7XHJcbmFkZGl0aW9uYWxBdHRyaWJ1dGVzLm9uaW5wdXQ9ZnVuY3Rpb24oKXtcclxuICBpYm9tLnNldEFkZGl0aW9uYWxBdHRyaWJ1dGVzKGFkZGl0aW9uYWxBdHRyaWJ1dGVzLnZhbHVlKTtcclxufVxyXG5cclxuY29uc3QgZmxfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsLWJ0bicpO1xyXG5mbF9idG4ub25jbGljaz1mdW5jdGlvbigpe1xyXG4gIGlib20uY2hhbmdlQ2FudmFzTGF5b3V0KCdGJyk7XHJcbn1cclxuXHJcbmNvbnN0IGZiX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYi1idG4nKTtcclxuZmJfYnRuLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICBpYm9tLmNoYW5nZUNhbnZhc0xheW91dCgnRkInKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGJsX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibC1idG4nKTtcclxuYmxfYnRuLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICBpYm9tLmNoYW5nZUNhbnZhc0xheW91dCgnQicpO1xyXG59XHJcblxyXG5jb25zdCBib21fYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvbS1idG4nKTtcclxuYm9tX2J0bi5vbmNsaWNrPWZ1bmN0aW9uKCl7XHJcbiAgaWJvbS5jaGFuZ2VCb21MYXlvdXQoJ0JPTScpXHJcbn1cclxuXHJcbmNvbnN0IGxyX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsci1idG4nKTtcclxubHJfYnRuLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICBpYm9tLmNoYW5nZUJvbUxheW91dCgnTFInKVxyXG59XHJcblxyXG5jb25zdCB0Yl9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGItYnRuJyk7XHJcbnRiX2J0bi5vbmNsaWNrPWZ1bmN0aW9uKCl7XHJcbiAgaWJvbS5jaGFuZ2VCb21MYXlvdXQoJ1RCJylcclxufVxyXG4iLCIvKiBET00gbWFuaXB1bGF0aW9uIGFuZCBtaXNjIGNvZGUgKi9cclxuXHJcblxyXG52YXIgU3BsaXQgPSByZXF1aXJlKCcuLi92ZW5kZXIvc3BsaXQuanMnKVxyXG52YXIgZ2xvYmFsRGF0YSA9IHJlcXVpcmUoJy4vZ2xvYmFsLmpzJylcclxudmFyIHJlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyLmpzJylcclxudmFyIHBjYiAgICA9IHJlcXVpcmUoJy4vcGNiLmpzJylcclxuXHJcblxyXG4vL1RPRE86ICBHTE9CQUwgVkFSSUFCTEUgUkVGQUNUT1JcclxudmFyIGZpbHRlciA9IFwiXCI7XHJcbmZ1bmN0aW9uIGdldEZpbHRlcihpbnB1dCkge1xyXG4gIHJldHVybiBmaWx0ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZpbHRlcihpbnB1dCkge1xyXG4gIGZpbHRlciA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgcG9wdWxhdGVCb21UYWJsZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYmcoaHRtbCkge1xyXG4gIGRiZ2Rpdi5pbm5lckhUTUwgPSBodG1sO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXJrTW9kZSh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgdG9wbW9zdGRpdi5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9wbW9zdGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcclxuICB9XHJcbiAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJkYXJrbW9kZVwiLCB2YWx1ZSk7XHJcbiAgcmVuZGVyLnJlZHJhd0NhbnZhcyhhbGxjYW52YXMuZnJvbnQpO1xyXG4gIHJlbmRlci5yZWRyYXdDYW52YXMoYWxsY2FudmFzLmJhY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdG9yZWRDaGVja2JveFJlZnMoY2hlY2tib3gpIHtcclxuICB2YXIgZXhpc3RpbmdSZWZzID0gZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZShcImNoZWNrYm94X1wiICsgY2hlY2tib3gpO1xyXG4gIGlmICghZXhpc3RpbmdSZWZzKSB7XHJcbiAgICByZXR1cm4gbmV3IFNldCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbmV3IFNldChleGlzdGluZ1JlZnMuc3BsaXQoXCIsXCIpKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENoZWNrYm94U3RhdGUoY2hlY2tib3gsIHJlZmVyZW5jZXMpIHtcclxuICB2YXIgc3RvcmVkUmVmc1NldCA9IGdldFN0b3JlZENoZWNrYm94UmVmcyhjaGVja2JveCk7XHJcbiAgdmFyIGN1cnJlbnRSZWZzU2V0ID0gbmV3IFNldChyZWZlcmVuY2VzKTtcclxuICAvLyBHZXQgZGlmZmVyZW5jZSBvZiBjdXJyZW50IC0gc3RvcmVkXHJcbiAgdmFyIGRpZmZlcmVuY2UgPSBuZXcgU2V0KGN1cnJlbnRSZWZzU2V0KTtcclxuICBmb3IgKHJlZiBvZiBzdG9yZWRSZWZzU2V0KSB7XHJcbiAgICBkaWZmZXJlbmNlLmRlbGV0ZShyZWYpO1xyXG4gIH1cclxuICBpZiAoZGlmZmVyZW5jZS5zaXplID09IDApIHtcclxuICAgIC8vIEFsbCB0aGUgY3VycmVudCByZWZzIGFyZSBzdG9yZWRcclxuICAgIHJldHVybiBcImNoZWNrZWRcIjtcclxuICB9IGVsc2UgaWYgKGRpZmZlcmVuY2Uuc2l6ZSA9PSBjdXJyZW50UmVmc1NldC5zaXplKSB7XHJcbiAgICAvLyBOb25lIG9mIHRoZSBjdXJyZW50IHJlZnMgYXJlIHN0b3JlZFxyXG4gICAgcmV0dXJuIFwidW5jaGVja2VkXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFNvbWUgb2YgdGhlIHJlZnMgYXJlIHN0b3JlZFxyXG4gICAgcmV0dXJuIFwiaW5kZXRlcm1pbmF0ZVwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Qm9tQ2hlY2tib3hTdGF0ZShjaGVja2JveCwgZWxlbWVudCwgcmVmZXJlbmNlcykge1xyXG4gIHZhciBzdGF0ZSA9IGdldENoZWNrYm94U3RhdGUoY2hlY2tib3gsIHJlZmVyZW5jZXMpO1xyXG4gIGVsZW1lbnQuY2hlY2tlZCA9IChzdGF0ZSA9PSBcImNoZWNrZWRcIik7XHJcbiAgZWxlbWVudC5pbmRldGVybWluYXRlID0gKHN0YXRlID09IFwiaW5kZXRlcm1pbmF0ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3hDaGFuZ2VIYW5kbGVyKGNoZWNrYm94LCByZWZlcmVuY2VzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgcmVmc1NldCA9IGdldFN0b3JlZENoZWNrYm94UmVmcyhjaGVja2JveCk7XHJcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgIC8vIGNoZWNrYm94IHRpY2tlZFxyXG4gICAgICBmb3IgKHZhciByZWYgb2YgcmVmZXJlbmNlcykge1xyXG4gICAgICAgIHJlZnNTZXQuYWRkKHJlZik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNoZWNrYm94IHVudGlja2VkXHJcbiAgICAgIGZvciAodmFyIHJlZiBvZiByZWZlcmVuY2VzKSB7XHJcbiAgICAgICAgcmVmc1NldC5kZWxldGUocmVmKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJjaGVja2JveF9cIiArIGNoZWNrYm94LCBbLi4ucmVmc1NldF0uam9pbihcIixcIikpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUm93SGlnaGxpZ2h0SGFuZGxlcihyb3dpZCwgcmVmcykge1xyXG4gIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgIGlmIChnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpIHtcclxuICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSA9PSByb3dpZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRlZFwiKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvd2lkKS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0ZWRcIik7XHJcbiAgICBnbG9iYWxEYXRhLnNldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKHJvd2lkKTtcclxuICAgIGdsb2JhbERhdGEuc2V0SGlnaGxpZ2h0ZWRSZWZzKHJlZnMpO1xyXG4gICAgcmVuZGVyLmRyYXdIaWdobGlnaHRzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRyeU1hdGNoZXMocGFydCkge1xyXG4gIC8vIGNoZWNrIHJlZnNcclxuICBpZiAocGFydC5yZWZlcmVuY2UudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdldEZpbHRlcigpKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIC8vIGNoZWNrIHZhbHVlXHJcbiAgaWYgKHBhcnQudmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdldEZpbHRlcigpKT49IDApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvLyBjaGVjayBmb290cHJpbnRcclxuICBpZiAocGFydC5wYWNrYWdlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihnZXRGaWx0ZXIoKSk+PSAwKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIHRoZSBkaXNwbGF5ZWQgYXR0cmlidXRlc1xyXG4gIHZhciBhZGRpdGlvbmFsQXR0cmlidXRlcyA9IGdsb2JhbERhdGEuZ2V0QWRkaXRpb25hbEF0dHJpYnV0ZXMoKS5zcGxpdCgnLCcpO1xyXG4gIGFkZGl0aW9uYWxBdHRyaWJ1dGVzICAgICA9IGFkZGl0aW9uYWxBdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pO1xyXG4gIGZvciAodmFyIHggb2YgYWRkaXRpb25hbEF0dHJpYnV0ZXMpIHtcclxuICAgICAgLy8gcmVtb3ZlIGJlZ2lubmluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZVxyXG4gICAgICB4ID0geC50cmltKClcclxuICAgICAgaWYgKHBhcnQuYXR0cmlidXRlcy5oYXMoeCkpIHtcclxuICAgICAgICBpZihwYXJ0LmF0dHJpYnV0ZXMuZ2V0KHgpLmluZGV4T2YoZ2V0RmlsdGVyKCkpID49IDApe1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZ2hsaWdodEZpbHRlcihzKSB7XHJcbiAgaWYgKCFnZXRGaWx0ZXIoKSkge1xyXG4gICAgcmV0dXJuIHM7XHJcbiAgfVxyXG4gIHZhciBwYXJ0cyA9IHMudG9Mb3dlckNhc2UoKS5zcGxpdChnZXRGaWx0ZXIoKSk7XHJcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICByZXR1cm4gcztcclxuICB9XHJcbiAgdmFyIHIgPSBcIlwiO1xyXG4gIHZhciBwb3MgPSAwO1xyXG4gIGZvciAodmFyIGkgaW4gcGFydHMpIHtcclxuICAgIGlmIChpID4gMCkge1xyXG4gICAgICByICs9ICc8bWFyayBjbGFzcz1cImhpZ2hsaWdodFwiPicgK1xyXG4gICAgICAgIHMuc3Vic3RyaW5nKHBvcywgcG9zICsgZ2V0RmlsdGVyKCkubGVuZ3RoKSArXHJcbiAgICAgICAgJzwvbWFyaz4nO1xyXG4gICAgICBwb3MgKz0gZ2V0RmlsdGVyKCkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgciArPSBzLnN1YnN0cmluZyhwb3MsIHBvcyArIHBhcnRzW2ldLmxlbmd0aCk7XHJcbiAgICBwb3MgKz0gcGFydHNbaV0ubGVuZ3RoO1xyXG4gIH1cclxuICByZXR1cm4gcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tib3hTZXRVbnNldEFsbEhhbmRsZXIoY2hlY2tib3huYW1lKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNoZWNrYm94bnVtID0gMDtcclxuICAgIHdoaWxlIChjaGVja2JveG51bSA8IGdsb2JhbERhdGEuZ2V0Q2hlY2tib3hlcygpLmxlbmd0aCAmJlxyXG4gICAgICBnbG9iYWxEYXRhLmdldENoZWNrYm94ZXMoKVtjaGVja2JveG51bV0udG9Mb3dlckNhc2UoKSAhPSBjaGVja2JveG5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICBjaGVja2JveG51bSsrO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrYm94bnVtID49IGdsb2JhbERhdGEuZ2V0Q2hlY2tib3hlcygpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgYWxsc2V0ID0gdHJ1ZTtcclxuICAgIHZhciBjaGVja2JveDtcclxuICAgIHZhciByb3c7XHJcbiAgICBmb3IgKHJvdyBvZiBib21ib2R5LmNoaWxkTm9kZXMpIHtcclxuICAgICAgY2hlY2tib3ggPSByb3cuY2hpbGROb2Rlc1tjaGVja2JveG51bSArIDFdLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgIGlmICghY2hlY2tib3guY2hlY2tlZCB8fCBjaGVja2JveC5pbmRldGVybWluYXRlKSB7XHJcbiAgICAgICAgYWxsc2V0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAocm93IG9mIGJvbWJvZHkuY2hpbGROb2Rlcykge1xyXG4gICAgICBjaGVja2JveCA9IHJvdy5jaGlsZE5vZGVzW2NoZWNrYm94bnVtICsgMV0uY2hpbGROb2Rlc1swXTtcclxuICAgICAgY2hlY2tib3guY2hlY2tlZCA9ICFhbGxzZXQ7XHJcbiAgICAgIGNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgY2hlY2tib3gub25jaGFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbHVtbkhlYWRlcihuYW1lLCBjbHMsIGNvbXBhcmF0b3IpIHtcclxuICB2YXIgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEhcIik7XHJcbiAgdGguaW5uZXJIVE1MID0gbmFtZTtcclxuICB0aC5jbGFzc0xpc3QuYWRkKGNscyk7XHJcbiAgdGguc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJzb3J0bWFya1wiKTtcclxuICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gIHRoLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gIHRoLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChnbG9iYWxEYXRhLmdldEN1cnJlbnRTb3J0Q29sdW1uKCkgJiYgdGhpcyAhPT0gZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydENvbHVtbigpKSB7XHJcbiAgICAgIC8vIEN1cnJlbnRseSBzb3J0ZWQgYnkgYW5vdGhlciBjb2x1bW5cclxuICAgICAgZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydENvbHVtbigpLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlbW92ZShnbG9iYWxEYXRhLmdldEN1cnJlbnRTb3J0T3JkZXIoKSk7XHJcbiAgICAgIGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gICAgICBnbG9iYWxEYXRhLnNldEN1cnJlbnRTb3J0Q29sdW1uKG51bGwpO1xyXG4gICAgICBnbG9iYWxEYXRhLnNldEN1cnJlbnRTb3J0T3JkZXIobnVsbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydENvbHVtbigpICYmIHRoaXMgPT09IGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKSkge1xyXG4gICAgICAvLyBBbHJlYWR5IHNvcnRlZCBieSB0aGlzIGNvbHVtblxyXG4gICAgICBpZiAoZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydE9yZGVyKCkgPT0gXCJhc2NcIikge1xyXG4gICAgICAgIC8vIFNvcnQgYnkgdGhpcyBjb2x1bW4sIGRlc2NlbmRpbmcgb3JkZXJcclxuICAgICAgICBnbG9iYWxEYXRhLnNldEJvbVNvcnRGdW5jdGlvbihmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICByZXR1cm4gLWNvbXBhcmF0b3IoYSwgYik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5nZXRDdXJyZW50U29ydENvbHVtbigpLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlbW92ZShcImFzY1wiKTtcclxuICAgICAgICBnbG9iYWxEYXRhLmdldEN1cnJlbnRTb3J0Q29sdW1uKCkuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcclxuICAgICAgICBnbG9iYWxEYXRhLnNldEN1cnJlbnRTb3J0T3JkZXIoXCJkZXNjXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFVuc29ydFxyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0Qm9tU29ydEZ1bmN0aW9uKG51bGwpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNjXCIpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0Q3VycmVudFNvcnRDb2x1bW4obnVsbCk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRDdXJyZW50U29ydE9yZGVyKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTb3J0IGJ5IHRoaXMgY29sdW1uLCBhc2NlbmRpbmcgb3JkZXJcclxuICAgICAgZ2xvYmFsRGF0YS5zZXRCb21Tb3J0RnVuY3Rpb24oY29tcGFyYXRvcik7XHJcbiAgICAgIGdsb2JhbERhdGEuc2V0Q3VycmVudFNvcnRDb2x1bW4odGhpcyk7XHJcbiAgICAgIGdsb2JhbERhdGEuZ2V0Q3VycmVudFNvcnRDb2x1bW4oKS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xyXG4gICAgICBnbG9iYWxEYXRhLmdldEN1cnJlbnRTb3J0Q29sdW1uKCkuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QuYWRkKFwiYXNjXCIpO1xyXG4gICAgICBnbG9iYWxEYXRhLnNldEN1cnJlbnRTb3J0T3JkZXIoXCJhc2NcIik7XHJcbiAgICB9XHJcbiAgICBwb3B1bGF0ZUJvbUJvZHkoKTtcclxuICB9XHJcbiAgcmV0dXJuIHRoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmYW5jeURibENsaWNrSGFuZGxlcihlbCwgb25zaW5nbGUsIG9uZG91YmxlKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZGJsY2xpY2tcIikgPT0gbnVsbCkge1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRibGNsaWNrXCIsIDEpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRibGNsaWNrXCIpID09IDEpIHtcclxuICAgICAgICAgIG9uc2luZ2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtZGJsY2xpY2tcIik7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWRibGNsaWNrXCIpO1xyXG4gICAgICBvbmRvdWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVCb21IZWFkZXIoKSB7XHJcbiAgd2hpbGUgKGJvbWhlYWQuZmlyc3RDaGlsZCkge1xyXG4gICAgYm9taGVhZC5yZW1vdmVDaGlsZChib21oZWFkLmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxuICB2YXIgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgdmFyIHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRIXCIpO1xyXG4gIHRoLmNsYXNzTGlzdC5hZGQoXCJudW1Db2xcIik7XHJcbiAgdHIuYXBwZW5kQ2hpbGQodGgpO1xyXG4gIGdsb2JhbERhdGEuc2V0Q2hlY2tib3hlcyhnbG9iYWxEYXRhLmdldEJvbUNoZWNrYm94ZXMoKS5zcGxpdChcIixcIikuZmlsdGVyKChlKSA9PiBlKSk7XHJcbiAgLy9YWFg6IFRoZXJlIGlzIHNvbWV0aGluZyB3ZWlyZCB3aXRoIHRoaXMuIFRoZSBiZWhhdmlvciBpcyB0byBzb3J0IHRoZSBidXR0b25zIGJ1dCBcclxuICAvLyBpbiB0aGUgZ3VpIGl0IGFjdGlzIGZ1bm55XHJcbiAgdmFyIGNoZWNrYm94Q29tcGFyZUNsb3N1cmUgPSBmdW5jdGlvbihjaGVja2JveCkge1xyXG4gICAgcmV0dXJuIChhLCBiKSA9PiB7XHJcbiAgICAgIHZhciBzdGF0ZUEgPSBnZXRDaGVja2JveFN0YXRlKGNoZWNrYm94LCBhWzNdKTtcclxuICAgICAgdmFyIHN0YXRlQiA9IGdldENoZWNrYm94U3RhdGUoY2hlY2tib3gsIGJbM10pO1xyXG4gICAgICBpZiAoc3RhdGVBID4gc3RhdGVCKSByZXR1cm4gLTE7XHJcbiAgICAgIGlmIChzdGF0ZUEgPCBzdGF0ZUIpIHJldHVybiAxO1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAodmFyIGNoZWNrYm94IG9mIGdsb2JhbERhdGEuZ2V0Q2hlY2tib3hlcygpKSB7XHJcbiAgICB0aCA9IGNyZWF0ZUNvbHVtbkhlYWRlcihcclxuICAgICAgY2hlY2tib3gsIGNoZWNrYm94LCBjaGVja2JveENvbXBhcmVDbG9zdXJlKGNoZWNrYm94KSk7XHJcbiAgICB0aC5vbmNsaWNrID0gZmFuY3lEYmxDbGlja0hhbmRsZXIoXHJcbiAgICAgIHRoLCB0aC5vbmNsaWNrLmJpbmQodGgpLCBjaGVja2JveFNldFVuc2V0QWxsSGFuZGxlcihjaGVja2JveCkpO1xyXG4gICAgdHIuYXBwZW5kQ2hpbGQodGgpO1xyXG4gIH1cclxuXHJcbiAgdHIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29sdW1uSGVhZGVyKFwiUmVmZXJlbmNlc1wiLCBcIlJlZmVyZW5jZXNcIiwgKHBhcnRBLCBwYXJ0QikgPT4ge1xyXG4gICAgICBpZiAocGFydEEucmVmZXJlbmNlICE9IHBhcnRCLnJlZmVyZW5jZSkgcmV0dXJuIHBhcnRBLnJlZmVyZW5jZSA+IHBhcnRCLnJlZmVyZW5jZSA/IDEgOiAtMTtcclxuICAgICAgZWxzZSByZXR1cm4gMDtcclxuICB9KSk7XHJcblxyXG4gIHRyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbHVtbkhlYWRlcihcIlZhbHVlXCIsIFwiVmFsdWVcIiwgKHBhcnRBLCBwYXJ0QikgPT4ge1xyXG4gICAgaWYgKHBhcnRBLnZhbHVlICE9IHBhcnRCLnZhbHVlKSByZXR1cm4gcGFydEEudmFsdWUgPiBwYXJ0Qi52YWx1ZSA/IDEgOiAtMTtcclxuICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgfSkpO1xyXG5cclxuICB0ci5hcHBlbmRDaGlsZChjcmVhdGVDb2x1bW5IZWFkZXIoXCJGb290cHJpbnRcIiwgXCJGb290cHJpbnRcIiwgKHBhcnRBLCBwYXJ0QikgPT4ge1xyXG4gICAgaWYgKHBhcnRBLnBhY2thZ2UgIT0gcGFydEIucGFja2FnZSkgcmV0dXJuIHBhcnRBLnBhY2thZ2UgPiBwYXJ0Qi5wYWNrYWdlID8gMSA6IC0xO1xyXG4gICAgZWxzZSByZXR1cm4gMDtcclxuICB9KSk7XHJcblxyXG4gIHZhciBhZGRpdGlvbmFsQXR0cmlidXRlcyA9IGdsb2JhbERhdGEuZ2V0QWRkaXRpb25hbEF0dHJpYnV0ZXMoKS5zcGxpdCgnLCcpO1xyXG4gIC8vIFJlbW92ZSBudWxsLCBcIlwiLCB1bmRlZmluZWQsIGFuZCAwIHZhbHVlc1xyXG4gIGFkZGl0aW9uYWxBdHRyaWJ1dGVzICAgID1hZGRpdGlvbmFsQXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTtcclxuICBmb3IgKHZhciB4IG9mIGFkZGl0aW9uYWxBdHRyaWJ1dGVzKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBiZWdpbm5pbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2VcclxuICAgICAgeCA9IHgudHJpbSgpXHJcbiAgICAgIGlmICh4KSB7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29sdW1uSGVhZGVyKHgsIFwiQXR0cmlidXRlc1wiLCAocGFydEEsIHBhcnRCKSA9PiB7XHJcbiAgICAgICAgICBpZiAocGFydEEuYXR0cmlidXRlcy5nZXQoeCkgIT0gcGFydEIuYXR0cmlidXRlcy5nZXQoeCkpIHJldHVybiAgcGFydEEuYXR0cmlidXRlcy5nZXQoeCkgPiBwYXJ0Qi5hdHRyaWJ1dGVzLmdldCh4KSA/IDEgOiAtMTtcclxuICAgICAgICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIGlmKGdsb2JhbERhdGEuZ2V0Q29tYmluZVZhbHVlcygpKVxyXG4gIHtcclxuICAgIC8vWFhYOiBUaGlzIGNvbXBhcmlzb24gZnVuY3Rpb24gaXMgdXNpbmcgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIGltcGxpY2l0XHJcbiAgICB0ci5hcHBlbmRDaGlsZChjcmVhdGVDb2x1bW5IZWFkZXIoXCJRdWFudGl0eVwiLCBcIlF1YW50aXR5XCIsIChwYXJ0QSwgcGFydEIpID0+IHtcclxuICAgICAgcmV0dXJuIHBhcnRBLnF1YW50aXR5IC0gcGFydEIucXVhbnRpdHk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBib21oZWFkLmFwcGVuZENoaWxkKHRyKTtcclxuXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEZpbHRlciBmdW5jdGlvbnMgYXJlIGRlZmluZWQgaGVyZS4gVGhlc2UgbGV0IHRoZSBhcHBsaWNhdGlvbiBmaWx0ZXIgXHJcbi8vIGVsZW1lbnRzIG91dCBvZiB0aGUgY29tcGxldGUgYm9tLiBcclxuLy9cclxuLy8gVGhlIGZpbHRlcmluZyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhlIHBhcnQgc2hvdWxkIGJlIGZpbHRlcmVkIG91dFxyXG4vLyBvdGhlcndpc2UgaXQgcmV0dXJucyBmYWxzZVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBHZXRCT01Gb3JTaWRlT2ZCb2FyZChsb2NhdGlvbil7XHJcbiAgdmFyIHJlc3VsdCA9IHBjYi5HZXRCT00oKTtcclxuICAgIHN3aXRjaCAobG9jYXRpb24pIHtcclxuICAgIGNhc2UgJ0YnOlxyXG4gICAgICByZXN1bHQgPSBwY2IuZmlsdGVyQk9NVGFibGUocmVzdWx0LCBmaWx0ZXJCT01fRnJvbnQpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ0InOlxyXG4gICAgICByZXN1bHQgPSBwY2IuZmlsdGVyQk9NVGFibGUocmVzdWx0LCBmaWx0ZXJCT01fQmFjayk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckJPTV9Gcm9udChwYXJ0KXtcclxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcclxuICBpZihwYXJ0LmxvY2F0aW9uID09IFwiRlwiKXtcclxuICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJCT01fQmFjayhwYXJ0KXtcclxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcclxuICBpZihwYXJ0LmxvY2F0aW9uID09IFwiQlwiKXtcclxuICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJCT01fQnlBdHRyaWJ1dGUocGFydCl7XHJcbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xyXG4gIHZhciBzcGxpdEZpbHRlclN0cmluZyA9IGdsb2JhbERhdGEuZ2V0UmVtb3ZlQk9NRW50cmllcygpLnNwbGl0KCcsJyk7XHJcbiAgLy8gUmVtb3ZlIG51bGwsIFwiXCIsIHVuZGVmaW5lZCwgYW5kIDAgdmFsdWVzXHJcbiAgc3BsaXRGaWx0ZXJTdHJpbmcgICAgPSBzcGxpdEZpbHRlclN0cmluZy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTtcclxuXHJcbiAgaWYoc3BsaXRGaWx0ZXJTdHJpbmcubGVuZ3RoID4gMCApXHJcbiAge1xyXG4gICAgZm9yKHZhciBpIG9mIHNwbGl0RmlsdGVyU3RyaW5nKXtcclxuICAgICAgLy8gcmVtb3ZpbmcgYmVnaW5uaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlXHJcbiAgICAgIGkgPSBpLnRyaW0oKVxyXG4gICAgICBpZihwYXJ0LmF0dHJpYnV0ZXMuaGFzKGkpKXtcclxuICAgICAgICAvLyBJZCB0aGUgdmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nIHRoZW4gZG9udCBmaWx0ZXIgb3V0IHRoZSBlbnRyeS4gXHJcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGFueXRoaW5nIHRoZW4gZmlsdGVyIG91dCB0aGUgYm9tIGVudHJ5XHJcbiAgICAgICAgaWYocGFydC5hdHRyaWJ1dGVzLmdldChpKSAhPSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBHZW5lcmF0ZUJPTVRhYmxlKClcclxue1xyXG4gIC8vIEdldCBib20gdGFibGUgd2l0aCBlbGVtZW50cyBmb3IgdGhlIHNpZGUgb2YgYm9hcmQgdGhlIHVzZXIgaGFzIHNlbGVjdGVkXHJcbiAgdmFyIGJvbXRhYmxlVGVtcCA9IEdldEJPTUZvclNpZGVPZkJvYXJkKGdsb2JhbERhdGEuZ2V0Q2FudmFzTGF5b3V0KCkpO1xyXG5cclxuICAvLyBBcHBseSBhdHRyaWJ1dGUgZmlsdGVyIHRvIGJvYXJkXHJcbiAgYm9tdGFibGVUZW1wID0gcGNiLmZpbHRlckJPTVRhYmxlKGJvbXRhYmxlVGVtcCwgZmlsdGVyQk9NX0J5QXR0cmlidXRlKTtcclxuXHJcbiAgLy8gSWYgdGhlIHBhcnRzIGFyZSBkaXNwbGF5ZWQgb25lIHBlciBsaW5lIChub3QgY29tYmluZWQgdmFsdWVzKSwgdGhlbiB0aGUgdGhlIGJvbSB0YWJsZSBuZWVkcyB0byBiZSBmbGF0dGVuZWQuIFxyXG4gIC8vIEJ5IGRlZmF1bHQgdGhlIGRhdGEgaW4gdGhlIGpzb24gZmlsZSBpcyBjb21iaW5lZFxyXG4gIGJvbXRhYmxlID0gZ2xvYmFsRGF0YS5nZXRDb21iaW5lVmFsdWVzKCkgPyBwY2IuR2V0Qk9NQ29tYmluZWRWYWx1ZXMoYm9tdGFibGVUZW1wKSA6IGJvbXRhYmxlVGVtcDtcclxuXHJcbiAgcmV0dXJuIGJvbXRhYmxlO1xyXG59XHJcblxyXG4vL1RPRE86IFRoaXMgc2hvdWxkIGJlIHJld3JpdHRlbiB0byBpbnRlcmFjdCB3aXRoIGpzb24gdXNpbmcgdGhlIHRhZ3MgaW5zdGVhZCBvZiBcclxuLy8gICAgICBoYXZpbmcgYWxsIG9mIHRoZSBlbGVtZW50cyBoYXJkY29kZWQuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQm9tQm9keSgpIHtcclxuICB3aGlsZSAoYm9tLmZpcnN0Q2hpbGQpIHtcclxuICAgIGJvbS5yZW1vdmVDaGlsZChib20uZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG4gIGdsb2JhbERhdGEuc2V0SGlnaGxpZ2h0SGFuZGxlcnMoW10pO1xyXG4gIGdsb2JhbERhdGEuc2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQobnVsbCk7XHJcbiAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuXHJcbiAgYm9tdGFibGUgPSBHZW5lcmF0ZUJPTVRhYmxlKCk7XHJcblxyXG4gIGlmIChnbG9iYWxEYXRhLmdldEJvbVNvcnRGdW5jdGlvbigpKSB7XHJcbiAgICBib210YWJsZSA9IGJvbXRhYmxlLnNsaWNlKCkuc29ydChnbG9iYWxEYXRhLmdldEJvbVNvcnRGdW5jdGlvbigpKTtcclxuICB9XHJcbiAgZm9yICh2YXIgaSBpbiBib210YWJsZSkge1xyXG4gICAgdmFyIGJvbWVudHJ5ID0gYm9tdGFibGVbaV07XHJcbiAgICB2YXIgcmVmZXJlbmNlcyA9IGJvbWVudHJ5LnJlZmVyZW5jZTtcclxuXHJcbiAgICBpZiAoZ2V0RmlsdGVyKCkgIT0gXCJcIil7XHJcbiAgICAgIGlmKCFlbnRyeU1hdGNoZXMoYm9tZW50cnkpKXtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICB2YXIgcm93bnVtID0gK2kgKyAxO1xyXG4gICAgdHIuaWQgPSBcImJvbXJvd1wiICsgcm93bnVtO1xyXG4gICAgdGQudGV4dENvbnRlbnQgPSByb3dudW07XHJcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcblxyXG4gICAgLy8gQ2hlY2tib3hlc1xyXG4gICAgZm9yICh2YXIgY2hlY2tib3ggb2YgZ2xvYmFsRGF0YS5nZXRDaGVja2JveGVzKCkpIHtcclxuICAgICAgaWYgKGNoZWNrYm94KSB7XHJcbiAgICAgICAgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBjcmVhdGVDaGVja2JveENoYW5nZUhhbmRsZXIoY2hlY2tib3gsIHJlZmVyZW5jZXMpO1xyXG4gICAgICAgIHNldEJvbUNoZWNrYm94U3RhdGUoY2hlY2tib3gsIGlucHV0LCByZWZlcmVuY2VzKTtcclxuICAgICAgICB0ZC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9JTkZPOiBUaGUgbGluZXMgYmVsb3cgYWRkIHRoZSBjb250cm9sIHRoZSBjb2x1bW5zIG9uIHRoZSBib20gdGFibGVcclxuICAgIC8vIFJlZmVyZW5jZXNcclxuICAgIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgdGQuaW5uZXJIVE1MID0gaGlnaGxpZ2h0RmlsdGVyKHJlZmVyZW5jZXMpO1xyXG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgLy8gVmFsdWVcclxuICAgIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgdGQuaW5uZXJIVE1MID0gaGlnaGxpZ2h0RmlsdGVyKGJvbWVudHJ5LnZhbHVlKTtcclxuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIC8vIEZvb3RwcmludFxyXG4gICAgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICB0ZC5pbm5lckhUTUwgPSBoaWdobGlnaHRGaWx0ZXIoYm9tZW50cnkucGFja2FnZSk7XHJcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICBcclxuICAgIC8vIEF0dHJpYnV0ZXNcclxuICAgIHZhciBhZGRpdGlvbmFsQXR0cmlidXRlcyA9IGdsb2JhbERhdGEuZ2V0QWRkaXRpb25hbEF0dHJpYnV0ZXMoKS5zcGxpdCgnLCcpO1xyXG4gICAgZm9yICh2YXIgeCBvZiBhZGRpdGlvbmFsQXR0cmlidXRlcykge1xyXG4gICAgICB4ID0geC50cmltKClcclxuICAgICAgaWYgKHgpIHtcclxuICAgICAgICB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICB0ZC5pbm5lckhUTUwgPSBoaWdobGlnaHRGaWx0ZXIocGNiLmdldEF0dHJpYnV0ZVZhbHVlKGJvbWVudHJ5LCB4LnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihnbG9iYWxEYXRhLmdldENvbWJpbmVWYWx1ZXMoKSlcclxuICAgIHtcclxuXHJcbiAgICAgIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICB0ZC50ZXh0Q29udGVudCA9IGJvbWVudHJ5LnF1YW50aXR5O1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9XHJcbiAgICBib20uYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuXHJcbiAgICBib20uYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgdmFyIGhhbmRsZXIgPSBjcmVhdGVSb3dIaWdobGlnaHRIYW5kbGVyKHRyLmlkLCByZWZlcmVuY2VzKTtcclxuICAgIHRyLm9ubW91c2Vtb3ZlID0gaGFuZGxlcjtcclxuICAgIGdsb2JhbERhdGEucHVzaEhpZ2hsaWdodEhhbmRsZXJzKHtcclxuICAgICAgaWQ6IHRyLmlkLFxyXG4gICAgICBoYW5kbGVyOiBoYW5kbGVyLFxyXG4gICAgICByZWZzOiByZWZlcmVuY2VzXHJcbiAgICB9KTtcclxuICAgIGlmIChnZXRGaWx0ZXIoKSAmJiBmaXJzdCkge1xyXG4gICAgICBoYW5kbGVyKCk7XHJcbiAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdobGlnaHRQcmV2aW91c1JvdygpIHtcclxuICBpZiAoIWdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSkge1xyXG4gICAgZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpW2dsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKS5sZW5ndGggLSAxXS5oYW5kbGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKCkubGVuZ3RoID4gMSAmJlxyXG4gICAgICBnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKClbMF0uaWQgPT0gZ2xvYmFsRGF0YS5nZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZCgpKSB7XHJcbiAgICAgIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKVtnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKCkubGVuZ3RoIC0gMV0uaGFuZGxlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKCkubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKVtpICsgMV0uaWQgPT0gZ2xvYmFsRGF0YS5nZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZCgpKSB7XHJcbiAgICAgICAgICBnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKClbaV0uaGFuZGxlcigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlci5zbW9vdGhTY3JvbGxUb1JvdyhnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdobGlnaHROZXh0Um93KCkge1xyXG4gIGlmICghZ2xvYmFsRGF0YS5nZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZCgpKSB7XHJcbiAgICBnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKClbMF0uaGFuZGxlcigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpLmxlbmd0aCA+IDEgJiZcclxuICAgICAgZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpW2dsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKS5sZW5ndGggLSAxXS5pZCA9PSBnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpIHtcclxuICAgICAgZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpWzBdLmhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZ2xvYmFsRGF0YS5nZXRIaWdobGlnaHRIYW5kbGVycygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKVtpIC0gMV0uaWQgPT0gZ2xvYmFsRGF0YS5nZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZCgpKSB7XHJcbiAgICAgICAgICBnbG9iYWxEYXRhLmdldEhpZ2hsaWdodEhhbmRsZXJzKClbaV0uaGFuZGxlcigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNtb290aFNjcm9sbFRvUm93KGdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQm9tVGFibGUoKSB7XHJcbiAgcG9wdWxhdGVCb21IZWFkZXIoKTtcclxuICBwb3B1bGF0ZUJvbUJvZHkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc0NsaWNrZWQocmVmZXJlbmNlcykge1xyXG4gIHZhciBsYXN0Q2xpY2tlZEluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGdsb2JhbERhdGEuZ2V0TGFzdENsaWNrZWRSZWYoKSk7XHJcbiAgdmFyIHJlZiA9IHJlZmVyZW5jZXNbKGxhc3RDbGlja2VkSW5kZXggKyAxKSAlIHJlZmVyZW5jZXMubGVuZ3RoXTtcclxuICBmb3IgKHZhciBoYW5kbGVyIG9mIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKSkge1xyXG4gICAgaWYgKGhhbmRsZXIucmVmcy5pbmRleE9mKHJlZikgPj0gMCkge1xyXG4gICAgICBnbG9iYWxEYXRhLnNldExhc3RDbGlja2VkUmVmKHJlZik7XHJcbiAgICAgIGhhbmRsZXIuaGFuZGxlcigpO1xyXG4gICAgICBzbW9vdGhTY3JvbGxUb1JvdyhnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbGtzY3JlZW5WaXNpYmxlKHZpc2libGUpIHtcclxuICBpZiAodmlzaWJsZSkge1xyXG4gICAgYWxsY2FudmFzLmZyb250LnNpbGsuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICBhbGxjYW52YXMuYmFjay5zaWxrLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJzaWxrc2NyZWVuVmlzaWJsZVwiLCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxsY2FudmFzLmZyb250LnNpbGsuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgYWxsY2FudmFzLmJhY2suc2lsay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBnbG9iYWxEYXRhLndyaXRlU3RvcmFnZShcInNpbGtzY3JlZW5WaXNpYmxlXCIsIGZhbHNlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNhbnZhc0xheW91dChsYXlvdXQpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsLWJ0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGVwcmVzc2VkXCIpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmItYnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXByZXNzZWRcIik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibC1idG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImRlcHJlc3NlZFwiKTtcclxuICBzd2l0Y2ggKGxheW91dCkge1xyXG4gICAgY2FzZSAnRic6XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmwtYnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJkZXByZXNzZWRcIik7XHJcbiAgICAgIGlmIChnbG9iYWxEYXRhLmdldEJvbUxheW91dCgpICE9IFwiQk9NXCIpIHtcclxuICAgICAgICBnbG9iYWxEYXRhLmNvbGxhcHNlQ2FudmFzU3BsaXQoMSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdCJzpcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibC1idG5cIikuY2xhc3NMaXN0LmFkZChcImRlcHJlc3NlZFwiKTtcclxuICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0Qm9tTGF5b3V0KCkgIT0gXCJCT01cIikge1xyXG4gICAgICAgIGdsb2JhbERhdGEuY29sbGFwc2VDYW52YXNTcGxpdCgwKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmItYnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJkZXByZXNzZWRcIik7XHJcbiAgICAgIGlmIChnbG9iYWxEYXRhLmdldEJvbUxheW91dCgpICE9IFwiQk9NXCIpIHtcclxuICAgICAgICBnbG9iYWxEYXRhLnNldFNpemVzQ2FudmFzU3BsaXQoWzUwLCA1MF0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIGdsb2JhbERhdGEuc2V0Q2FudmFzTGF5b3V0KGxheW91dCk7XHJcbiAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJjYW52YXNsYXlvdXRcIiwgbGF5b3V0KTtcclxuICByZW5kZXIucmVzaXplQWxsKCk7XHJcbiAgcG9wdWxhdGVCb21UYWJsZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZU1ldGFkYXRhKCkge1xyXG4gIHZhciBtZXRhZGF0YSAgPSBwY2IuR2V0TWV0YWRhdGEoKTtcclxuICBcclxuICBpZihtZXRhZGF0YS5yZXZpc2lvbiA9PSBcIlwiKVxyXG4gIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikuaW5uZXJIVE1MICAgID0gXCJcIlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXZpc2lvblwiKS5pbm5lckhUTUwgPSBtZXRhZGF0YS50aXRsZTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikuaW5uZXJIVE1MICAgID0gbWV0YWRhdGEudGl0bGU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldmlzaW9uXCIpLmlubmVySFRNTCA9IFwiUmV2aXNpb246IFwiICsgbWV0YWRhdGEucmV2aXNpb247XHJcbiAgfVxyXG5cclxuICBcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBhbnlcIikuaW5uZXJIVE1MICA9IG1ldGFkYXRhLmNvbXBhbnk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlZGF0ZVwiKS5pbm5lckhUTUwgPSBtZXRhZGF0YS5kYXRlO1xyXG4gIGlmIChtZXRhZGF0YS50aXRsZSAhPSBcIlwiKSB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IG1ldGFkYXRhLnRpdGxlICsgXCIgQk9NXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb21MYXlvdXQobGF5b3V0KSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib20tYnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXByZXNzZWRcIik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsci1idG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImRlcHJlc3NlZFwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRiLWJ0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGVwcmVzc2VkXCIpO1xyXG4gIHN3aXRjaCAobGF5b3V0KSB7XHJcbiAgICBjYXNlICdCT00nOlxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvbS1idG5cIikuY2xhc3NMaXN0LmFkZChcImRlcHJlc3NlZFwiKTtcclxuICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0Qm9tU3BsaXQoKSkge1xyXG4gICAgICAgIGdsb2JhbERhdGEuZGVzdHJveUJvbVNwbGl0KCk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5zZXRCb21TcGxpdChudWxsKTtcclxuICAgICAgICBnbG9iYWxEYXRhLmRlc3Ryb3lDYW52YXNTcGxpdCgpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0Q2FudmFzU3BsaXQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9udGNhbnZhc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2NhbnZhc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90XCIpLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnVEInOlxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRiLWJ0blwiKS5jbGFzc0xpc3QuYWRkKFwiZGVwcmVzc2VkXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250Y2FudmFzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tjYW52YXNcIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90XCIpLnN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDAlIC0gODBweClcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib21kaXZcIikuY2xhc3NMaXN0LnJlbW92ZShcInNwbGl0LWhvcml6b250YWxcIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzZGl2XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250Y2FudmFzXCIpLmNsYXNzTGlzdC5hZGQoXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tjYW52YXNcIikuY2xhc3NMaXN0LmFkZChcInNwbGl0LWhvcml6b250YWxcIik7XHJcbiAgICAgIGlmIChnbG9iYWxEYXRhLmdldEJvbVNwbGl0KCkpIHtcclxuICAgICAgICBnbG9iYWxEYXRhLmRlc3Ryb3lCb21TcGxpdCgpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0Qm9tU3BsaXQobnVsbCk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5kZXN0cm95Q2FudmFzU3BsaXQoKTtcclxuICAgICAgICBnbG9iYWxEYXRhLnNldENhbnZhc1NwbGl0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGdsb2JhbERhdGEuc2V0Qm9tU3BsaXQoU3BsaXQoWycjYm9tZGl2JywgJyNjYW52YXNkaXYnXSwge1xyXG4gICAgICAgIHNpemVzOiBbNTAsIDUwXSxcclxuICAgICAgICBvbkRyYWdFbmQ6IHJlbmRlci5yZXNpemVBbGwsXHJcbiAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgZ3V0dGVyU2l6ZTogNVxyXG4gICAgICB9KSk7XHJcbiAgICAgIGdsb2JhbERhdGEuc2V0Q2FudmFzU3BsaXQoU3BsaXQoWycjZnJvbnRjYW52YXMnLCAnI2JhY2tjYW52YXMnXSwge1xyXG4gICAgICAgIHNpemVzOiBbNTAsIDUwXSxcclxuICAgICAgICBndXR0ZXJTaXplOiA1LFxyXG4gICAgICAgIG9uRHJhZ0VuZDogcmVuZGVyLnJlc2l6ZUFsbFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnTFInOlxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxyLWJ0blwiKS5jbGFzc0xpc3QuYWRkKFwiZGVwcmVzc2VkXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250Y2FudmFzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tjYW52YXNcIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90XCIpLnN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDAlIC0gODBweClcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib21kaXZcIikuY2xhc3NMaXN0LmFkZChcInNwbGl0LWhvcml6b250YWxcIik7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzZGl2XCIpLmNsYXNzTGlzdC5hZGQoXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb250Y2FudmFzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGxpdC1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tjYW52YXNcIikuY2xhc3NMaXN0LnJlbW92ZShcInNwbGl0LWhvcml6b250YWxcIik7XHJcbiAgICAgIGlmIChnbG9iYWxEYXRhLmdldEJvbVNwbGl0KCkpIHtcclxuICAgICAgICBnbG9iYWxEYXRhLmRlc3Ryb3lCb21TcGxpdCgpO1xyXG4gICAgICAgIGdsb2JhbERhdGEuc2V0Qm9tU3BsaXQobnVsbCk7XHJcbiAgICAgICAgZ2xvYmFsRGF0YS5kZXN0cm95Q2FudmFzU3BsaXQoKTtcclxuICAgICAgICBnbG9iYWxEYXRhLnNldENhbnZhc1NwbGl0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGdsb2JhbERhdGEuc2V0Qm9tU3BsaXQoU3BsaXQoWycjYm9tZGl2JywgJyNjYW52YXNkaXYnXSwge1xyXG4gICAgICAgIHNpemVzOiBbNTAsIDUwXSxcclxuICAgICAgICBvbkRyYWdFbmQ6IHJlbmRlci5yZXNpemVBbGwsXHJcbiAgICAgICAgZ3V0dGVyU2l6ZTogNVxyXG4gICAgICB9KSk7XHJcbiAgICAgIGdsb2JhbERhdGEuc2V0Q2FudmFzU3BsaXQoU3BsaXQoWycjZnJvbnRjYW52YXMnLCAnI2JhY2tjYW52YXMnXSwge1xyXG4gICAgICAgIHNpemVzOiBbNTAsIDUwXSxcclxuICAgICAgICBndXR0ZXJTaXplOiA1LFxyXG4gICAgICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgICAgIG9uRHJhZ0VuZDogcmVuZGVyLnJlc2l6ZUFsbFxyXG4gICAgICB9KSk7XHJcbiAgfVxyXG4gIGdsb2JhbERhdGEuc2V0Qm9tTGF5b3V0KGxheW91dCk7XHJcbiAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJib21sYXlvdXRcIiwgbGF5b3V0KTtcclxuICBjaGFuZ2VDYW52YXNMYXlvdXQoZ2xvYmFsRGF0YS5nZXRDYW52YXNMYXlvdXQoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvY3VzSW5wdXRGaWVsZChpbnB1dCkge1xyXG4gIGlucHV0LnNjcm9sbEludG9WaWV3KGZhbHNlKTtcclxuICBpbnB1dC5mb2N1cygpO1xyXG4gIGlucHV0LnNlbGVjdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb2N1c0ZpbHRlckZpZWxkKCkge1xyXG4gIGZvY3VzSW5wdXRGaWVsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlclwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUJvbUNoZWNrYm94KGJvbXJvd2lkLCBjaGVja2JveG51bSkge1xyXG4gIGlmICghYm9tcm93aWQgfHwgY2hlY2tib3hudW0gPiBnbG9iYWxEYXRhLmdldENoZWNrYm94ZXMoKS5sZW5ndGgpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdmFyIGJvbXJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvbXJvd2lkKTtcclxuICB2YXIgY2hlY2tib3ggPSBib21yb3cuY2hpbGROb2Rlc1tjaGVja2JveG51bV0uY2hpbGROb2Rlc1swXTtcclxuICBjaGVja2JveC5jaGVja2VkID0gIWNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgY2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIGNoZWNrYm94Lm9uY2hhbmdlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm9tQ2hlY2tib3goYm9tcm93aWQsIGNoZWNrYm94bmFtZSkge1xyXG4gIHZhciBjaGVja2JveG51bSA9IDA7XHJcbiAgd2hpbGUgKGNoZWNrYm94bnVtIDwgZ2xvYmFsRGF0YS5nZXRDaGVja2JveGVzKCkubGVuZ3RoICYmXHJcbiAgICBnbG9iYWxEYXRhLmdldENoZWNrYm94ZXMoKVtjaGVja2JveG51bV0udG9Mb3dlckNhc2UoKSAhPSBjaGVja2JveG5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgY2hlY2tib3hudW0rKztcclxuICB9XHJcbiAgaWYgKCFib21yb3dpZCB8fCBjaGVja2JveG51bSA+PSBnbG9iYWxEYXRhLmdldENoZWNrYm94ZXMoKS5sZW5ndGgpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdmFyIGJvbXJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvbXJvd2lkKTtcclxuICB2YXIgY2hlY2tib3ggPSBib21yb3cuY2hpbGROb2Rlc1tjaGVja2JveG51bSArIDFdLmNoaWxkTm9kZXNbMF07XHJcbiAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgY2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIGNoZWNrYm94Lm9uY2hhbmdlKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVHdXR0ZXJOb2RlKG5vZGUpIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG5vZGUuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QgJiZcclxuICAgICAgbm9kZS5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImd1dHRlclwiKSkge1xyXG4gICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuY2hpbGROb2Rlc1tpXSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5HdXR0ZXJzKCkge1xyXG4gIHJlbW92ZUd1dHRlck5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3RcIikpO1xyXG4gIHJlbW92ZUd1dHRlck5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNkaXZcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRCb21DaGVja2JveGVzKHZhbHVlKSB7XHJcbiAgZ2xvYmFsRGF0YS5zZXRCb21DaGVja2JveGVzKHZhbHVlKTtcclxuICBnbG9iYWxEYXRhLndyaXRlU3RvcmFnZShcImJvbUNoZWNrYm94ZXNcIiwgdmFsdWUpO1xyXG4gIHBvcHVsYXRlQm9tVGFibGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UmVtb3ZlQk9NRW50cmllcyh2YWx1ZSkge1xyXG4gIGdsb2JhbERhdGEuc2V0UmVtb3ZlQk9NRW50cmllcyh2YWx1ZSk7XHJcbiAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJyZW1vdmVCT01FbnRyaWVzXCIsIHZhbHVlKTtcclxuICBwb3B1bGF0ZUJvbVRhYmxlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFkZGl0aW9uYWxBdHRyaWJ1dGVzKHZhbHVlKSB7XHJcbiAgZ2xvYmFsRGF0YS5zZXRBZGRpdGlvbmFsQXR0cmlidXRlcyh2YWx1ZSk7XHJcbiAgZ2xvYmFsRGF0YS53cml0ZVN0b3JhZ2UoXCJhZGRpdGlvbmFsQXR0cmlidXRlc1wiLCB2YWx1ZSk7XHJcbiAgcG9wdWxhdGVCb21UYWJsZSgpO1xyXG59XHJcblxyXG4vLyBYWFg6IE5vbmUgb2YgdGhpcyBzZWVtcyB0byBiZSB3b3JraW5nLiBcclxuZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24oZSkge1xyXG4gIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgIGNhc2UgXCJuXCI6XHJcbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LnR5cGUgPT0gXCJ0ZXh0XCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGdsb2JhbERhdGEuZ2V0Q3VycmVudEhpZ2hsaWdodGVkUm93SWQoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNoZWNrQm9tQ2hlY2tib3goZ2xvYmFsRGF0YS5nZXRDdXJyZW50SGlnaGxpZ2h0ZWRSb3dJZCgpLCBcInBsYWNlZFwiKTtcclxuICAgICAgICBoaWdobGlnaHROZXh0Um93KCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgaGlnaGxpZ2h0UHJldmlvdXNSb3coKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgaGlnaGxpZ2h0TmV4dFJvdygpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIGlmIChlLmFsdEtleSkge1xyXG4gICAgc3dpdGNoIChlLmtleSkge1xyXG4gICAgICBjYXNlIFwiZlwiOlxyXG4gICAgICAgIGZvY3VzRmlsdGVyRmllbGQoKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ6XCI6XHJcbiAgICAgICAgY2hhbmdlQm9tTGF5b3V0KFwiQk9NXCIpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInhcIjpcclxuICAgICAgICBjaGFuZ2VCb21MYXlvdXQoXCJMUlwiKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJjXCI6XHJcbiAgICAgICAgY2hhbmdlQm9tTGF5b3V0KFwiVEJcIik7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidlwiOlxyXG4gICAgICAgIGNoYW5nZUNhbnZhc0xheW91dChcIkZcIik7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiYlwiOlxyXG4gICAgICAgIGNoYW5nZUNhbnZhc0xheW91dChcIkZCXCIpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm5cIjpcclxuICAgICAgICBjaGFuZ2VDYW52YXNMYXlvdXQoXCJCXCIpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChlLmtleSA+PSAnMScgJiYgZS5rZXkgPD0gJzknKSB7XHJcbiAgICAgIHRvZ2dsZUJvbUNoZWNrYm94KGN1cnJlbnRIaWdobGlnaHRlZFJvd0lkLCBwYXJzZUludChlLmtleSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9YWFg6IEkgd291bGQgbGlrZSB0aGlzIHRvIGJlIGluIHRoZSBodG1sIGZ1bmN0aW9ucyBqcyBmaWxlLiBCdXQgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBcclxuLy8gICAgIHBsYWNlZCBoZXJlLCBvdGhlcndpc2UgdGhlIGFwcGxpY2F0aW9uIHJlbmRlcmluZyBiZWNvbWVzIHZlcnkgdmVyeSB3ZWlyZC5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICBcclxuICAvLyBUaGlzIGZ1bmN0aW9uIG1ha2VzIHNvIHRoYXQgdGhlIHVzZXIgZGF0YSBmb3IgdGhlIHBjYiBpcyBjb252ZXJ0ZWQgdG8gb3VyIGludGVybmFsIHN0cnVjdHVyZVxyXG4gIHBjYi5PcGVuUGNiRGF0YShwY2JkYXRhKVxyXG4gIFxyXG5cclxuICBnbG9iYWxEYXRhLmluaXRTdG9yYWdlKCk7XHJcbiAgY2xlYW5HdXR0ZXJzKCk7XHJcbiAgcmVuZGVyLmluaXRSZW5kZXIoKTtcclxuICBkYmdkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRiZ1wiKTtcclxuICBib20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvbWJvZHlcIik7XHJcbiAgYm9taGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9taGVhZFwiKTtcclxuICBnbG9iYWxEYXRhLnNldEJvbUxheW91dChnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKFwiYm9tbGF5b3V0XCIpKTtcclxuICBpZiAoIWdsb2JhbERhdGEuZ2V0Qm9tTGF5b3V0KCkpIHtcclxuICAgIGdsb2JhbERhdGEuc2V0Qm9tTGF5b3V0KFwiTFJcIik7XHJcbiAgfVxyXG4gIGdsb2JhbERhdGEuc2V0Q2FudmFzTGF5b3V0KGdsb2JhbERhdGEucmVhZFN0b3JhZ2UoXCJjYW52YXNsYXlvdXRcIikpO1xyXG4gIGlmICghZ2xvYmFsRGF0YS5nZXRDYW52YXNMYXlvdXQoKSkge1xyXG4gICAgZ2xvYmFsRGF0YS5zZXRDYW52YXNMYXlvdXQoXCJGQlwiKTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlTWV0YWRhdGEoKTtcclxuICBnbG9iYWxEYXRhLnNldEJvbUNoZWNrYm94ZXMoZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZShcImJvbUNoZWNrYm94ZXNcIikpO1xyXG4gIGlmIChnbG9iYWxEYXRhLmdldEJvbUNoZWNrYm94ZXMoKSA9PT0gbnVsbCkge1xyXG4gICAgZ2xvYmFsRGF0YS5zZXRCb21DaGVja2JveGVzKFwiUGxhY2VkXCIpO1xyXG4gIH1cclxuICBnbG9iYWxEYXRhLnNldFJlbW92ZUJPTUVudHJpZXMoZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZShcInJlbW92ZUJPTUVudHJpZXNcIikpO1xyXG4gIGlmIChnbG9iYWxEYXRhLmdldFJlbW92ZUJPTUVudHJpZXMoKSA9PT0gbnVsbCkge1xyXG4gICAgZ2xvYmFsRGF0YS5zZXRSZW1vdmVCT01FbnRyaWVzKFwiXCIpO1xyXG4gIH1cclxuICBnbG9iYWxEYXRhLnNldEFkZGl0aW9uYWxBdHRyaWJ1dGVzKGdsb2JhbERhdGEucmVhZFN0b3JhZ2UoXCJhZGRpdGlvbmFsQXR0cmlidXRlc1wiKSk7XHJcbiAgaWYgKGdsb2JhbERhdGEuZ2V0QWRkaXRpb25hbEF0dHJpYnV0ZXMoKSA9PT0gbnVsbCkge1xyXG4gICAgZ2xvYmFsRGF0YS5zZXRBZGRpdGlvbmFsQXR0cmlidXRlcyhcIlwiKTtcclxuICB9XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib21DaGVja2JveGVzXCIpLnZhbHVlID0gZ2xvYmFsRGF0YS5nZXRCb21DaGVja2JveGVzKCk7XHJcbiAgaWYgKGdsb2JhbERhdGEucmVhZFN0b3JhZ2UoXCJzaWxrc2NyZWVuVmlzaWJsZVwiKSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbGtzY3JlZW5DaGVja2JveFwiKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBzaWxrc2NyZWVuVmlzaWJsZShmYWxzZSk7XHJcbiAgfVxyXG4gIGlmIChnbG9iYWxEYXRhLnJlYWRTdG9yYWdlKFwicmVkcmF3T25EcmFnXCIpID09PSBcImZhbHNlXCIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJhZ0NoZWNrYm94XCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIGdsb2JhbERhdGEuc2V0UmVkcmF3T25EcmFnKGZhbHNlKTtcclxuICB9XHJcbiAgaWYgKGdsb2JhbERhdGEucmVhZFN0b3JhZ2UoXCJkYXJrbW9kZVwiKSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya21vZGVDaGVja2JveFwiKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHNldERhcmtNb2RlKHRydWUpO1xyXG4gIH1cclxuICBpZiAoZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZShcImhpZ2hsaWdodHBpbjFcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hsaWdodHBpbjFDaGVja2JveFwiKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIGdsb2JhbERhdGEuc2V0SGlnaGxpZ2h0UGluMSh0cnVlKTtcclxuICAgIHJlbmRlci5yZWRyYXdDYW52YXMoYWxsY2FudmFzLmZyb250KTtcclxuICAgIHJlbmRlci5yZWRyYXdDYW52YXMoYWxsY2FudmFzLmJhY2spO1xyXG4gIH1cclxuICAvLyBJZiB0aGlzIGlzIHRydWUgdGhlbiBjb21iaW5lIHBhcnRzIGFuZCBkaXNwbGF5IHF1YW50aXR5XHJcbiAgaWYgKGdsb2JhbERhdGEucmVhZFN0b3JhZ2UoXCJjb21iaW5lVmFsdWVzXCIpID09PSBcInRydWVcIikge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21iaW5lVmFsdWVzXCIpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgZ2xvYmFsRGF0YS5zZXRDb21iaW5lVmFsdWVzKHRydWUpO1xyXG4gIH1cclxuICBib2FyZFJvdGF0aW9uID0gZ2xvYmFsRGF0YS5yZWFkU3RvcmFnZShcImJvYXJkUm90YXRpb25cIik7XHJcbiAgaWYgKGJvYXJkUm90YXRpb24gPT09IG51bGwpIHtcclxuICAgIGJvYXJkUm90YXRpb24gPSAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBib2FyZFJvdGF0aW9uID0gcGFyc2VJbnQoYm9hcmRSb3RhdGlvbik7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRSb3RhdGlvblwiKS52YWx1ZSA9IGJvYXJkUm90YXRpb24gLyA1O1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb25EZWdyZWVcIikudGV4dENvbnRlbnQgPSBib2FyZFJvdGF0aW9uO1xyXG4gIC8vIFRyaWdnZXJzIHJlbmRlclxyXG4gIGNoYW5nZUJvbUxheW91dChnbG9iYWxEYXRhLmdldEJvbUxheW91dCgpKTtcclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gcmVuZGVyLnJlc2l6ZUFsbDtcclxud2luZG93Lm1hdGNoTWVkaWEoXCJwcmludFwiKS5hZGRMaXN0ZW5lcihyZW5kZXIucmVzaXplQWxsKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHNldERhcmtNb2RlICAgICAgICAsIHNpbGtzY3JlZW5WaXNpYmxlICAgICAgLCBjaGFuZ2VCb21MYXlvdXQsIGNoYW5nZUNhbnZhc0xheW91dCxcclxuICBzZXRCb21DaGVja2JveGVzICAgLCBwb3B1bGF0ZUJvbVRhYmxlICAgICAgICwgc2V0RmlsdGVyICAgICAgLCBnZXRGaWx0ZXIgICAgICAgICAsXHJcbiAgc2V0UmVtb3ZlQk9NRW50cmllcywgc2V0QWRkaXRpb25hbEF0dHJpYnV0ZXNcclxufVxyXG4iLCIvKlxyXG4gICAgVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBvZiB0aGUgZGVmaW5pdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBwY2JkYXRhLmpzb24uIFxyXG4gICAgVGhpcyBmaWxlIGRlY2xhcmVzIGFsbCBvZiB0aGUgYWNjZXNzIGZ1bmN0aW9ucyBhbmQgaW50ZXJmYWNlcyBmb3IgY29udmVydGluZyBcclxuICAgIHRoZSBqc29uIGZpbGUgaW50byBhbiBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZS4gXHJcbiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUENCIFBhcnQgSW50ZXJmYWNlc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gUmVhZCB0aGUgZWNhZCBwcm9wZXJ0eS4gVGhpcyBwcm9wZXJ0eSBsZXRzIHRoZSBhcHBsaWNhdGlvbiBrbm93IHdoYXQgXHJcbi8vIGVjYWQgc29mdHdhcmUgZ2VuZXJhdGVkIHRoZSBqc29uIGZpbGUuIFxyXG5mdW5jdGlvbiBHZXRDQURUeXBlKHBjYmRhdGFTdHJ1Y3R1cmUpXHJcbntcclxuICAgIGlmKHBjYmRhdGFTdHJ1Y3R1cmUuaGFzT3duUHJvcGVydHkoXCJlY2FkXCIpKXtcclxuICAgICAgICByZXR1cm4gcGNiZGF0YVN0cnVjdHVyZS5lY2FkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUaGlzIHdpbGwgaG9sZCB0aGUgcGFydCBvYmplY3RzLiBUaGVyZSBpcyBvbmUgZW50cnkgcGVyIHBhcnRcclxuLy8gRm9ybWF0IG9mIGEgcGFydCBpcyBhcyBmb2xsb3dzXHJcbi8vIFtWQUxVRSxQQUNLQUdFLFJFRlJFTkVDRSBERVNJR05BVE9SLCAsTE9DQVRJT04sIEFUVFJJQlVURV0sXHJcbi8vIHdoZXJlIEFUVFJJQlVURSBpcyBhIGRpY3Qgb2YgQVRUUklCVVRFIE5BTUUgOiBBVFRSSUJVVEUgVkFMVUVcclxudmFyIEJPTSA9IFtdO1xyXG5cclxuLy8gQ29uc3RydWN0b3IgZm9yIGNyZWF0aW5nIGEgcGFydC5cclxuZnVuY3Rpb24gUGFydCh2YWx1ZSwgcGFja2FnZSwgcmVmZXJlbmNlLCBsb2NhdGlvbiwgYXR0cmlidXRlcykge1xyXG4gICAgdGhpcy5xdWFudGl0eSAgID0gMTtcclxuICAgIHRoaXMudmFsdWUgICAgICA9IHZhbHVlO1xyXG4gICAgdGhpcy5wYWNrYWdlICAgID0gcGFja2FnZTtcclxuICAgIHRoaXMucmVmZXJlbmNlICA9IHJlZmVyZW5jZTtcclxuICAgIHRoaXMubG9jYXRpb24gICA9IGxvY2F0aW9uO1xyXG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcclxufVxyXG5cclxuZnVuY3Rpb24gQ29weVBhcnQoaW5wdXRQYXJ0KXtcclxuICAvLyBYWFg6IFRoaXMgaXMgbm90IHBlcmZvcm1pbmcgYSBkZWVwIGNvcHksIGF0dHJpYnV0ZXMgaXMgYSBtYXAgYW5kIHRoaXMgaXMgYmVpbmcgY29waWVkIGJ5IFxyXG4gIC8vICAgICAgcmVmZXJlbmNlIHdoaWNoIGlzIG5vdCBxdWl0ZSB3aGF0IHdlIHdhbnQgaGVyZS4gSXQgc2hvdWxkIGJlIGEgZGVlcCBjb3B5IHNvIG9uY2UgY2FsbGVkXHJcbiAgLy8gICAgICB0aGlzIHdpbGwgcmVzdWx0IGluIGEgY29tcGxldGVseSBuZXcgb2JqZWN0IHRoYXQgd2lsbCBub3QgcmVmZXJlbmNlIG9uZSBhbm90aGVyXHJcbiAgcmV0dXJuIG5ldyBQYXJ0KGlucHV0UGFydC52YWx1ZSwgaW5wdXRQYXJ0LnBhY2thZ2UsIGlucHV0UGFydC5yZWZlcmVuY2UsIGlucHV0UGFydC5sb2NhdGlvbiwgaW5wdXRQYXJ0LmF0dHJpYnV0ZXMpO1xyXG59XHJcblxyXG4vL1RPRE86IFRoZXJlIHNob3VsZCBiZSBzdGVwcyBoZXJlIGZvciB2YWxpZGF0aW5nIHRoZSBkYXRhIGFuZCBwdXR0aW5nIGl0IGludG8gYSBcclxuLy8gICAgICBmb3JtYXQgdGhhdCBpcyB2YWxpZCBmb3Igb3VyIGFwcGxpY2F0aW9uXHJcbmZ1bmN0aW9uIENyZWF0ZUJPTShwY2JkYXRhU3RydWN0dXJlKXtcclxuICAgIC8vIEZvciBldmVyeSBwYXJ0IGluIHRoZSBpbnB1dCBmaWxlLCBjb252ZXJ0IGl0IHRvIG91ciBpbnRlcm5hbCBcclxuICAgIC8vIHJlcHJlc2VudGF0aW9uIGRhdGEgc3RydWN0dXJlLlxyXG4gICAgZm9yKHZhciBwYXJ0IG9mIHBjYmRhdGFTdHJ1Y3R1cmUuYm9tLmJvdGgpe1xyXG4gICAgICAgIC8vIGV4dHJhY3QgdGhlIHBhcnQgZGF0YS4gVGhpcyBpcyBoZXJlIHNvIEkgY2FuIGl0ZXJhdGUgdGhlIGRlc2lnbiBcclxuICAgICAgICAvLyB3aGVuIEkgbWFrZSBjaGFuZ2VzIHRvIHRoZSB1bmRlcmx5aW5nIGpzb24gZmlsZS5cclxuICAgICAgICB2YXIgdmFsdWUgICAgID0gcGFydFsxXTtcclxuICAgICAgICB2YXIgcGFja2FnZSAgID0gcGFydFsyXTtcclxuICAgICAgICB2YXIgcmVmZXJlbmNlID0gcGFydFszXVswXTtcclxuICAgICAgICB2YXIgbG9jYXRpb24gID0gcGFydFs2XTtcclxuXHJcbiAgICAgICAgLy8gQXR0cmlidXRlTmFtZSBhbmQgQXR0cmlidXRlVmFsdWUgYXJlIHR3byBzdHJpbmdzIHRoYXQgYXJlIGRlbGltaW5hdGVkIGJ5ICc7Jy4gXHJcbiAgICAgICAgLy8gU3BsaXQgdGhlIHN0cmluZ3MgYnkgJzsnIGFuZCB0aGVuIHppcCB0aGVtIHRvZ2V0aGVyXHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWVzID0gcGFydFs0XS5zcGxpdCgnOycpO1xyXG4gICAgICAgIHZhciBhdHRyaWJ1dGVWYWx1ZXMgPSBwYXJ0WzVdLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgIC8vWFhYOiBBU1NVTVRJT04gdGhhdCBhdHRyaWJ1dGVOYW1lcyBpcyB0aGUgc2FtZSBsZW5ndGggYXMgYXR0cmlidXRlVmFsdWVzXHJcbiAgICAgICAgYXR0cmlidXRlcyA9IG5ldyBNYXAoKTsgLy8gQ3JlYXRlIGEgZW1wdHkgZGljdGlvbmFyeVxyXG4gICAgICAgIGZvcih2YXIgaSBpbiBhdHRyaWJ1dGVOYW1lcyl7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuc2V0KGF0dHJpYnV0ZU5hbWVzW2ldLnRvTG93ZXJDYXNlKCksYXR0cmlidXRlVmFsdWVzW2ldLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgdGhlIHBhciB0byB0aGUgZ2xvYmFsIHBhcnQgYXJyYXlcclxuICAgICAgICBCT00ucHVzaChuZXcgUGFydCh2YWx1ZSwgcGFja2FnZSwgcmVmZXJlbmNlLCBsb2NhdGlvbiwgYXR0cmlidXRlcykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRCT00oKXtcclxuICAgICAgcmV0dXJuIEJPTTtcclxufVxyXG5cclxuLy8gVEFrZXMgYSBCT00gdGFibGUgYW5kIGEgZmlsdGVyIGZ1bmN0aW9uLiBUaGUgZmlsdGVyIFxyXG4vLyBmdW5jdGlvbiBpcyB1c2VkIG9udGhlIHByb3ZpZGVkIHRhYmxlIHRvIHJlbW92ZSBcclxuLy8gYW55IHBhcnQgdGhhdCBzYXRpc2Z5IHRoZSBmaWx0ZXJcclxuZnVuY3Rpb24gZmlsdGVyQk9NVGFibGUoYm9tdGFibGUsIGZpbHRlckZ1bmN0aW9uKXtcclxuICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gIC8vIE1ha2VzIHN1cmUgdGhhdCB0aEUgZmlsdGVyIGZ1bmN0aW9uIGlzIGRlZmluZWQuIFxyXG4gIC8vIGlmIG5vdCBkZWZpbmVkIHRoZW4gbm90aGluZyBzaG91bGQgYmUgZmlsdGVyZWQuIFxyXG4gIGlmKGZpbHRlckZ1bmN0aW9uICE9IG51bGwpe1xyXG4gICAgZm9yKHZhciBpIGluIGJvbXRhYmxlKXtcclxuICAgICAgLy8gSWYgdGhlIGZpbHRlciByZXR1cm5zIGZhbHNlIC0+IGRvIG5vdCByZW1vdmUgcGFydCwgaXQgZG9lcyBub3QgbmVlZCB0byBiZSBmaWx0ZXJlZFxyXG4gICAgICBpZighZmlsdGVyRnVuY3Rpb24oYm9tdGFibGVbaV0pKXtcclxuICAgICAgICByZXN1bHQucHVzaChDb3B5UGFydChib210YWJsZVtpXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICByZXN1bHQgPSBib210YWJsZTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gVGFrZXMgYSBib20gdGFibGUgYW5kIGNvbWJpbmVzIGVudHJpZXMgdGhhdCBhcmUgdGhlIHNhbWVcclxuZnVuY3Rpb24gR2V0Qk9NQ29tYmluZWRWYWx1ZXMoYm9tdGFibGVUZW1wKXtcclxuICAgIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIC8vIFRPRE86IHNvcnQgYm9tdGFibGVUZW1wLiBBc3N1bXB0aW9uIGhlcmUgaXMgdGhhdCB0aGUgYm9tdGFibGVUZW1wIGlzIHByZXNvcnRlZFxyXG5cclxuICAgIGlmKGJvbXRhYmxlVGVtcC5sZW5ndGg+MCl7XHJcbiAgICAgIC8vIFhYWDogQXNzdW1pbmcgdGhhdCB0aGUgaW5wdXQganNvbiBkYXRhIGhhcyBib20gZW50cmllcyBwcmVzb3J0ZWRcclxuICAgICAgLy8gVE9ETzogU3RhcnQgYXQgaW5kZXggMSwgYW5kIGNvbXBhcmUgdGhlIGN1cnJlbnQgdG8gdGhlIGxhc3QsIHRoaXMgc2hvdWxkIHNpbXBsaWZ5IHRoZSBsb2dpY1xyXG4gICAgICAvLyBOZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgYnkgZGVlcCBjb3B5LiB0aGlzIGlzIGJlY2F1c2Ugb2JqZWN0cyBieSBkZWZhdWx0IGFyZSBwYXNzZWQgYnkgcmVmZXJlbmNlIGFuZCBpIGRvbnQgXHJcbiAgICAgIC8vIHdhbnQgdG8gbW9kaWZ5IHRoZW0uXHJcbiAgICAgIHJlc3VsdC5wdXNoKENvcHlQYXJ0KGJvbXRhYmxlVGVtcFswXSkpO1xyXG4gICAgICBjb3VudCA9IDA7XHJcbiAgICAgIGZvciAodmFyIG4gPSAxOyBuIDwgYm9tdGFibGVUZW1wLmxlbmd0aDtuKyspXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHRbY291bnRdLnZhbHVlID09IGJvbXRhYmxlVGVtcFtuXS52YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBGb3IgcGFydHMgdGhhdCBhcmUgbGlzdGVkIGFzIGNvbWJpbmVkLCBzdG9yZSB0aGUgcmVmZXJlbmNlcyBhcyBhbiBhcnJheS5cclxuICAgICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB0aGUgbG9naWMgZm9yIGhpZ2hsaWdodGluZyBuZWVkcyB0byBtYXRjaCBzdHJpbmdzIGFuZCBcclxuICAgICAgICAgIC8vIElmIGFuIGFwcGVuZGVkIHN0cmluZyBpcyB1c2VkIGl0IG1pZ2h0IG5vdCB3b3JrIHJpZ2h0XHJcbiAgICAgICAgICByZWZTdHJpbmcgPSByZXN1bHRbY291bnRdLnJlZmVyZW5jZSArIFwiLFwiICsgYm9tdGFibGVUZW1wW25dLnJlZmVyZW5jZTtcclxuICAgICAgICAgIHJlc3VsdFtjb3VudF0ucXVhbnRpdHkgKz0gMTtcclxuICAgICAgICAgIHJlc3VsdFtjb3VudF0ucmVmZXJlbmNlID0gcmVmU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goQ29weVBhcnQoYm9tdGFibGVUZW1wW25dKSk7XHJcbiAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUocGFydCwgYXR0cmlidXRlVG9Mb29rdXApe1xyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwYXJ0LmF0dHJpYnV0ZXM7XHJcbiAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHJcbiAgICBpZihhdHRyaWJ1dGVUb0xvb2t1cCA9PSBcIm5hbWVcIilcclxuICAgIHtcclxuICAgICAgcmVzdWx0ID0gcGFydC5yZWZlcmVuY2U7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdCA9IChhdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVUb0xvb2t1cCkgPyBhdHRyaWJ1dGVzLmdldChhdHRyaWJ1dGVUb0xvb2t1cCkgOiBcIlwiKTtcclxuICAgIH1cclxuICAgIC8vIENoZWNrIHRoYXQgdGhlIGF0dHJpYnV0ZSBleGlzdHMgYnkgbG9va2luZyB1cCBpdHMgbmFtZS4gSWYgaXQgZXhpc3RzXHJcbiAgICAvLyB0aGUgcmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZSwgb3RoZXJ3aXNlIHJldHVybiBhbiBlbXB0eSBzdHJpbmcuIFxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBDQiBNZXRhZGF0YSBJbnRlcmZhY2VzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIG1ldGFkYXRhO1xyXG4vLyBDb25zdHJ1Y3RvciBmb3IgY3JlYXRpbmcgYSBwYXJ0LlxyXG5mdW5jdGlvbiBNZXRhZGF0YSh0aXRsZSwgcmV2aXNpb24sIGNvbXBhbnksIGRhdGUpIHtcclxuICAgIHRoaXMudGl0bGUgICAgPSB0aXRsZTtcclxuICAgIHRoaXMucmV2aXNpb24gPSByZXZpc2lvbjtcclxuICAgIHRoaXMuY29tcGFueSAgPSBjb21wYW55O1xyXG4gICAgdGhpcy5kYXRlICAgICA9IGRhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZU1ldGFkYXRhKHBjYmRhdGFTdHJ1Y3R1cmUpe1xyXG4gIG1ldGFkYXRhID0gbmV3IE1ldGFkYXRhKHBjYmRhdGFTdHJ1Y3R1cmUubWV0YWRhdGEudGl0bGUgICwgcGNiZGF0YVN0cnVjdHVyZS5tZXRhZGF0YS5yZXZpc2lvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwY2JkYXRhU3RydWN0dXJlLm1ldGFkYXRhLmNvbXBhbnksIHBjYmRhdGFTdHJ1Y3R1cmUubWV0YWRhdGEuZGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldE1ldGFkYXRhKCl7XHJcbiAgcmV0dXJuIG1ldGFkYXRhO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE9wZW5QY2JEYXRhKHBjYmRhdGEpe1xyXG4gIENyZWF0ZUJPTShwY2JkYXRhKTtcclxuICBDcmVhdGVNZXRhZGF0YShwY2JkYXRhKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgT3BlblBjYkRhdGEsIEdldEJPTSwgZ2V0QXR0cmlidXRlVmFsdWUsIEdldEJPTUNvbWJpbmVkVmFsdWVzLCBmaWx0ZXJCT01UYWJsZSwgR2V0TWV0YWRhdGFcclxufSIsInZhciBwY2JGb250ID0ge1xuICAgIFwiZm9udF9kYXRhXCI6IHtcbiAgICAgICAgXCIgXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjc2MTkwNDc2MTkwNDc2MTlcbiAgICAgICAgfSxcbiAgICAgICAgXCIjXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxNixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjE0Mjg1NzE0Mjg1NzE0MjhcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTQyODU3MTQyODU3MTQyODVcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yODU3MTQyODU3MTQyODU3XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDk1MjM4MDk1MjM4MDk1MjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yODU3MTQyODU3MTQyODU3XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xNDI4NTcxNDI4NTcxNDI4NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4xNDI4NTcxNDI4NTcxNDI4XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDEuMFxuICAgICAgICB9LFxuICAgICAgICBcIi1cIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40Mjg1NzE0Mjg1NzE0Mjg1NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAxLjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40Mjg1NzE0Mjg1NzE0Mjg1NVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAxLjIzODA5NTIzODA5NTIzODFcbiAgICAgICAgfSxcbiAgICAgICAgXCIuXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMC40NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICB9LFxuICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDI4NTcxNDI4NTcxNDI4NTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC45NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjg1NzE0Mjg1NzE0Mjg1NzFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40Mjg1NzE0Mjg1NzE0Mjg1NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40Mjg1NzE0Mjg1NzE0Mjg1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjM4MDk1MjM4MDk1MjM4MDhcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQyODU3MTQyODU3MTQyODU1XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC44NTcxNDI4NTcxNDI4NTcxXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQyODU3MTQyODU3MTQyODU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgfSxcbiAgICAgICAgXCIxXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxNixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjkwNDc2MTkwNDc2MTkwNDdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuODA5NTIzODA5NTIzODA5NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzYxOTA0NzYxOTA0NzYxOVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgfSxcbiAgICAgICAgXCIyXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC45NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjg1NzE0Mjg1NzE0Mjg1NzFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzYxOTA0NzYxOTA0NzYxOVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42MTkwNDc2MTkwNDc2MTkxXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTQyODU3MTQyODU3MTQyODUsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICB9LFxuICAgICAgICBcIjNcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTQyODU3MTQyODU3MTQyODUsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40Mjg1NzE0Mjg1NzE0Mjg1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42MTkwNDc2MTkwNDc2MTkxXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjM4MDk1MjM4MDk1MjM4MDhcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xNDI4NTcxNDI4NTcxNDI4NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICB9LFxuICAgICAgICBcIjRcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40Mjg1NzE0Mjg1NzE0Mjg1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA5NTIzODA5NTIzODA5NTFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjM4MDk1MjM4MDk1MjM4MDkzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjM4MDk1MjM4MDk1MjM4MDkzXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICB9LFxuICAgICAgICBcIjVcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMC45NTIzODA5NTIzODA5NTIzXG4gICAgICAgIH0sXG4gICAgICAgIFwiOlwiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgIH0sXG4gICAgICAgIFwiQVwiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjMzMzMzMzMzMzMzMzMzMzNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMzMzMzMzMzMzMzMzMzMzM1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDk1MjM4MDk1MjM4MDk1MjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40Mjg1NzE0Mjg1NzE0Mjg1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuODU3MTQyODU3MTQyODU3MVxuICAgICAgICB9LFxuICAgICAgICBcIkJcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC40NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zODA5NTIzODA5NTIzODA5M1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC45NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjg1NzE0Mjg1NzE0Mjg1NzFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzYxOTA0NzYxOTA0NzYxOVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAxLjBcbiAgICAgICAgfSxcbiAgICAgICAgXCJDXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjg1NzE0Mjg1NzE0Mjg1N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjgwOTUyMzgwOTUyMzgwOTVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjM4MDk1MjM4MDk1MjM4MDkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC45NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDEuMFxuICAgICAgICB9LFxuICAgICAgICBcIkRcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC44MDk1MjM4MDk1MjM4MDk1XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjg1NzE0Mjg1NzE0Mjg1N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDEuMFxuICAgICAgICB9LFxuICAgICAgICBcIkVcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41NzE0Mjg1NzE0Mjg1NzE0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICB9LFxuICAgICAgICBcIkZcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMC44NTcxNDI4NTcxNDI4NTcxXG4gICAgICAgIH0sXG4gICAgICAgIFwiR1wiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuODA5NTIzODA5NTIzODA5NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjI4NTcxNDI4NTcxNDI4NTdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTkwNDc2MTkwNDc2MTkwNDdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMS4wXG4gICAgICAgIH0sXG4gICAgICAgIFwiSVwiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgIH0sXG4gICAgICAgIFwiSlwiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zMzMzMzMzMzMzMzMzMzMzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjM4MDk1MjM4MDk1MjM4MDkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE0Mjg1NzE0Mjg1NzE0Mjg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuNzYxOTA0NzYxOTA0NzYxOVxuICAgICAgICB9LFxuICAgICAgICBcIkxcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuODA5NTIzODA5NTIzODA5NVxuICAgICAgICB9LFxuICAgICAgICBcIk1cIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMzMzMzMzMzMzMzMzMzMzM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAxLjE0Mjg1NzE0Mjg1NzE0MjhcbiAgICAgICAgfSxcbiAgICAgICAgXCJOXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICB9LFxuICAgICAgICBcIlBcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC44NTcxNDI4NTcxNDI4NTcxXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41NzE0Mjg1NzE0Mjg1NzE0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAxLjBcbiAgICAgICAgfSxcbiAgICAgICAgXCJSXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjgwOTUyMzgwOTUyMzgwOTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC44NTcxNDI4NTcxNDI4NTcxXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41NzE0Mjg1NzE0Mjg1NzE0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAxLjBcbiAgICAgICAgfSxcbiAgICAgICAgXCJTXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcxNDI4NTcxNDI4NTcxNDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjc2MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zMzMzMzMzMzMzMzMzMzMzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQyODU3MTQyODU3MTQyODU1XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjUyMzgwOTUyMzgwOTUyMzdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzYxOTA0NzYxOTA0NzYxOVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuODU3MTQyODU3MTQyODU3MVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJVXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjM4MDk1MjM4MDk1MjM4MDhcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMzMzMzMzMzMzMzMzMzMjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQyODU3MTQyODU3MTQyODUsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTksXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43NjE5MDQ3NjE5MDQ3NjE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjM4MDk1MjM4MDk1MjM4MDhcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC44MDk1MjM4MDk1MjM4MDk0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAxLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgfSxcbiAgICAgICAgXCJWXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjA5NTIzODA5NTIzODA5NTIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQyODU3MTQyODU3MTQyODU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMC44NTcxNDI4NTcxNDI4NTcxXG4gICAgICAgIH0sXG4gICAgICAgIFwiV1wiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xNDI4NTcxNDI4NTcxNDI4NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43NjE5MDQ3NjE5MDQ3NjE5XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzYxOTA0NzYxOTA0NzYxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAxLjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDEuMTQyODU3MTQyODU3MTQyOFxuICAgICAgICB9LFxuICAgICAgICBcIlhcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTQyODU3MTQyODU3MTQyODUsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMS4wNDc2MTkwNDc2MTkwNDc0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuODA5NTIzODA5NTIzODA5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xNDI4NTcxNDI4NTcxNDI4NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJhXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjg1NzE0Mjg1NzE0Mjg1N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMzgwOTUyMzgwOTUyMzgwOTNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDI4NTcxNDI4NTcxNDI4NTVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDI4NTcxNDI4NTcxNDI4NTVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMC45MDQ3NjE5MDQ3NjE5MDQ3XG4gICAgICAgIH0sXG4gICAgICAgIFwiZFwiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjIzODA5NTIzODA5NTIzODA4XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41MjM4MDk1MjM4MDk1MjM3XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42MTkwNDc2MTkwNDc2MTkxXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICB9LFxuICAgICAgICBcImVcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTcxNDI4NTcxNDI4NTcxNFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41NzE0Mjg1NzE0Mjg1NzE0XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zODA5NTIzODA5NTIzODA5M1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjg1NzE0Mjg1NzE0Mjg1NzFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41NzE0Mjg1NzE0Mjg1NzE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTcxNDI4NTcxNDI4NTcxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjkwNDc2MTkwNDc2MTkwNDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJpXCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjBcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgIH0sXG4gICAgICAgIFwia1wiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEuMDQ3NjE5MDQ3NjE5MDQ3NFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjQyODU3MTQyODU3MTQyODU1XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjMzMzMzMzMzMzMzMzMzMzNcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMC44MDk1MjM4MDk1MjM4MDk1XG4gICAgICAgIH0sXG4gICAgICAgIFwibFwiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTkwNDc2MTkwNDc2MTkwNDdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMC41MjM4MDk1MjM4MDk1MjM3XG4gICAgICAgIH0sXG4gICAgICAgIFwiblwiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42MTkwNDc2MTkwNDc2MTkxXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zODA5NTIzODA5NTIzODA5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICB9LFxuICAgICAgICBcIm9cIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yODU3MTQyODU3MTQyODU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE0Mjg1NzE0Mjg1NzE0Mjg1XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE5MDQ3NjE5MDQ3NjE5MDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNTIzODA5NTIzODA5NTIzN1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjE5MDQ3NjE5MDQ3NjE5MVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42MTkwNDc2MTkwNDc2MTkxXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNzE0Mjg1NzE0Mjg1NzE0MixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjUyMzgwOTUyMzgwOTUyMzdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC43MTQyODU3MTQyODU3MTQyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMjM4MDk1MjM4MDk1MjM4MDhcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMTQyODU3MTQyODU3MTQyODVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC42MTkwNDc2MTkwNDc2MTkxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDk1MjM4MDk1MjM4MDk1MjNcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC41MjM4MDk1MjM4MDk1MjM3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMC45MDQ3NjE5MDQ3NjE5MDQ3XG4gICAgICAgIH0sXG4gICAgICAgIFwiclwiOiB7XG4gICAgICAgICAgICBcImxcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC41MjM4MDk1MjM4MDk1MjM3XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjYxOTA0NzYxOTA0NzYxOTFcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNjY2NjY2NjY2NjY2NjY2NlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQyODU3MTQyODU3MTQyODU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjUyMzgwOTUyMzgwOTUyMzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuNjE5MDQ3NjE5MDQ3NjE5MVxuICAgICAgICB9LFxuICAgICAgICBcInNcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMTkwNDc2MTkwNDc2MTkwNDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxNixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4yMzgwOTUyMzgwOTUyMzgwOFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zMzMzMzMzMzMzMzMzMzMzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zODA5NTIzODA5NTIzODA5M1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4zODA5NTIzODA5NTIzODA5M1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjIzODA5NTIzODA5NTIzODA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNDI4NTcxNDI4NTcxNDI4NTVcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjUyMzgwOTUyMzgwOTUyMzdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4xOTA0NzYxOTA0NzYxOTA0NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjY2NjY2NjY2NjY2NjY2NjZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjQ3NjE5MDQ3NjE5MDQ3NjE2LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjU3MTQyODU3MTQyODU3MTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC42NjY2NjY2NjY2NjY2NjY2XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3XCI6IDAuODA5NTIzODA5NTIzODA5NVxuICAgICAgICB9LFxuICAgICAgICBcInRcIjoge1xuICAgICAgICAgICAgXCJsXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDk1MjM4MDk1MjM4MDk1MjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDc2MTkwNDc2MTkwNDc2MTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLjA0NzYxOTA0NzYxOTA0NzRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC4yMzgwOTUyMzgwOTUyMzgwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjE5MDQ3NjE5MDQ3NjE5MDQ3XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjg1NzE0Mjg1NzE0Mjg1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA5NTIzODA5NTIzODA5NTIzXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMzgwOTUyMzgwOTUyMzgwOTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wNDc2MTkwNDc2MTkwNDc2MTZcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgMC40NzYxOTA0NzYxOTA0NzYxNixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjU3MTQyODU3MTQyODU3MTRcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1XCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC43MTQyODU3MTQyODU3MTQyXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMjM4MDk1MjM4MDk1MjM4MDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xOTA0NzYxOTA0NzYxOTA0N1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI4NTcxNDI4NTcxNDI4NTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjM4MDk1MjM4MDk1MjM4MDkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNTIzODA5NTIzODA5NTIzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjA0NzYxOTA0NzYxOTA0NzYxNlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjYxOTA0NzYxOTA0NzYxOTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4wOTUyMzgwOTUyMzgwOTUyM1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAtMC4xNDI4NTcxNDI4NTcxNDI4NVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid1wiOiAwLjkwNDc2MTkwNDc2MTkwNDdcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2XCI6IHtcbiAgICAgICAgICAgIFwibFwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjE0Mjg1NzE0Mjg1NzE0Mjg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuNzE0Mjg1NzE0Mjg1NzE0MlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjM4MDk1MjM4MDk1MjM4MDkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLTAuMDQ3NjE5MDQ3NjE5MDQ3NjE2XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNjE5MDQ3NjE5MDQ3NjE5MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC0wLjcxNDI4NTcxNDI4NTcxNDJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndcIjogMC43NjE5MDQ3NjE5MDQ3NjE5XG4gICAgICAgIH1cbiAgICB9XG59IiwiLyogUENCIHJlbmRlcmluZyBjb2RlICovXHJcblxyXG52YXIgZ2xvYmFsRGF0YSA9IHJlcXVpcmUoJy4vZ2xvYmFsLmpzJylcclxuXHJcbmZ1bmN0aW9uIGRlZzJyYWQoZGVnKSB7XHJcbiAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNGb250UG9pbnQobGluZXBvaW50LCB0ZXh0LCBvZmZzZXR4LCBvZmZzZXR5LCB0aWx0KSB7XHJcbiAgdmFyIHBvaW50ID0gW1xyXG4gICAgbGluZXBvaW50WzBdICogdGV4dC53aWR0aCArIG9mZnNldHgsXHJcbiAgICBsaW5lcG9pbnRbMV0gKiB0ZXh0LmhlaWdodCArIG9mZnNldHlcclxuICBdO1xyXG4gIC8vIEFkZGluZyBoYWxmIGEgbGluZSBoZWlnaHQgaGVyZSBpcyB0ZWNobmljYWxseSBhIGJ1Z1xyXG4gIC8vIGJ1dCBwY2JuZXcgY3VycmVudGx5IGRvZXMgdGhlIHNhbWUsIHRleHQgaXMgc2xpZ2h0bHkgc2hpZnRlZC5cclxuICBwb2ludFswXSAtPSAocG9pbnRbMV0gKyB0ZXh0LmhlaWdodCAqIDAuNSkgKiB0aWx0O1xyXG4gIHJldHVybiBwb2ludDtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd3RleHQoY3R4LCB0ZXh0LCBjb2xvciwgZmxpcCkge1xyXG4gIGN0eC5zYXZlKCk7XHJcbiAgY3R4LnRyYW5zbGF0ZSguLi50ZXh0LnBvcyk7XHJcbiAgdmFyIGFuZ2xlID0gLXRleHQuYW5nbGU7XHJcbiAgaWYgKHRleHQuYXR0ci5pbmNsdWRlcyhcIm1pcnJvcmVkXCIpKSB7XHJcbiAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gICAgYW5nbGUgPSAtYW5nbGU7XHJcbiAgfVxyXG4gIHZhciB0aWx0ID0gMDtcclxuICBpZiAodGV4dC5hdHRyLmluY2x1ZGVzKFwiaXRhbGljXCIpKSB7XHJcbiAgICB0aWx0ID0gMC4xMjU7XHJcbiAgfVxyXG4gIHZhciBpbnRlcmxpbmUgPSAodGV4dC5oZWlnaHQgKiAxLjUgKyB0ZXh0LnRoaWNrbmVzcykgLyAyO1xyXG4gIHZhciB0eHQgPSB0ZXh0LnRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgY3R4LnJvdGF0ZShkZWcycmFkKGFuZ2xlKSk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSB0ZXh0LnRoaWNrbmVzcztcclxuICBmb3IgKHZhciBpIGluIHR4dCkge1xyXG4gICAgdmFyIG9mZnNldHkgPSAoLSh0eHQubGVuZ3RoIC0gMSkgKyBpICogMikgKiBpbnRlcmxpbmUgKyB0ZXh0LmhlaWdodCAvIDI7XHJcbiAgICB2YXIgbGluZVdpZHRoID0gMDtcclxuICAgIGZvciAodmFyIGMgb2YgdHh0W2ldKSB7XHJcbiAgICAgIGxpbmVXaWR0aCArPSBwY2JGb250LmZvbnRfZGF0YVtjXS53ICogdGV4dC53aWR0aDtcclxuICAgIH1cclxuICAgIHZhciBvZmZzZXR4ID0gMDtcclxuICAgIHN3aXRjaCAodGV4dC5ob3Jpel9qdXN0aWZ5KSB7XHJcbiAgICAgIGNhc2UgLTE6XHJcbiAgICAgICAgLy8gSnVzdGlmeSBsZWZ0LCBkbyBub3RoaW5nXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICAvLyBKdXN0aWZ5IGNlbnRlclxyXG4gICAgICAgIG9mZnNldHggLT0gbGluZVdpZHRoIC8gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIC8vIEp1c3RpZnkgcmlnaHRcclxuICAgICAgICBvZmZzZXR4IC09IGxpbmVXaWR0aDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGZvciAodmFyIGMgb2YgdHh0W2ldKSB7XHJcbiAgICAgIGZvciAodmFyIGxpbmUgb2YgcGNiRm9udC5mb250X2RhdGFbY10ubCkge1xyXG4gICAgICAgIC8vIERyYXdpbmcgZWFjaCBzZWdtZW50IHNlcGFyYXRlbHkgaW5zdGVhZCBvZlxyXG4gICAgICAgIC8vIHBvbHlsaW5lIGJlY2F1c2Ugcm91bmQgbGluZSBjYXBzIGRvbid0IHdvcmsgaW4gam9pbnRzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgY3R4Lm1vdmVUbyguLi5jYWxjRm9udFBvaW50KGxpbmVbaV0sIHRleHQsIG9mZnNldHgsIG9mZnNldHksIHRpbHQpKTtcclxuICAgICAgICAgIGN0eC5saW5lVG8oLi4uY2FsY0ZvbnRQb2ludChsaW5lW2kgKyAxXSwgdGV4dCwgb2Zmc2V0eCwgb2Zmc2V0eSwgdGlsdCkpO1xyXG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBvZmZzZXR4ICs9IHBjYkZvbnQuZm9udF9kYXRhW2NdLncgKiB0ZXh0LndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuICBjdHgucmVzdG9yZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3ZWRnZShjdHgsIHNjYWxlZmFjdG9yLCBlZGdlLCBjb2xvcikge1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxIC8gc2NhbGVmYWN0b3IsIGVkZ2Uud2lkdGgpO1xyXG4gIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gIGlmIChlZGdlLnR5cGUgPT0gXCJzZWdtZW50XCIpIFxyXG4gIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLi4uZWRnZS5zdGFydCk7XHJcbiAgICBjdHgubGluZVRvKC4uLmVkZ2UuZW5kKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcbiAgaWYgKGVkZ2UudHlwZSA9PSBcImFyY1wiKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKFxyXG4gICAgICAuLi5lZGdlLnN0YXJ0LFxyXG4gICAgICBlZGdlLnJhZGl1cyxcclxuICAgICAgZGVnMnJhZChlZGdlLnN0YXJ0YW5nbGUpLFxyXG4gICAgICBkZWcycmFkKGVkZ2UuZW5kYW5nbGUpKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcbiAgaWYgKGVkZ2UudHlwZSA9PSBcImNpcmNsZVwiKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKFxyXG4gICAgICAuLi5lZGdlLnN0YXJ0LFxyXG4gICAgICBlZGdlLnJhZGl1cyxcclxuICAgICAgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1JvdW5kUmVjdChjdHgsIGNvbG9yLCBzaXplLCByYWRpdXMsIGN0eG1ldGhvZCkge1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICB2YXIgeCA9IHNpemVbMF0gKiAtMC41O1xyXG4gIHZhciB5ID0gc2l6ZVsxXSAqIC0wLjU7XHJcbiAgdmFyIHdpZHRoID0gc2l6ZVswXTtcclxuICB2YXIgaGVpZ2h0ID0gc2l6ZVsxXTtcclxuICBjdHgubW92ZVRvKHgsIDApO1xyXG4gIGN0eC5hcmNUbyh4LCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHJhZGl1cyk7XHJcbiAgY3R4LmFyY1RvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoLCB5LCByYWRpdXMpO1xyXG4gIGN0eC5hcmNUbyh4ICsgd2lkdGgsIHksIHgsIHksIHJhZGl1cyk7XHJcbiAgY3R4LmFyY1RvKHgsIHksIHgsIHkgKyBoZWlnaHQsIHJhZGl1cyk7XHJcbiAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gIGN0eG1ldGhvZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3T2Jsb25nKGN0eCwgY29sb3IsIHNpemUsIGN0eG1ldGhvZCkge1xyXG4gIGRyYXdSb3VuZFJlY3QoY3R4LCBjb2xvciwgc2l6ZSwgTWF0aC5taW4oc2l6ZVswXSwgc2l6ZVsxXSkgLyAyLCBjdHhtZXRob2QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3UG9seWdvbnMoY3R4LCBjb2xvciwgcG9seWdvbnMsIGN0eG1ldGhvZCkge1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICBpZihwb2x5Z29ucy5sZW5ndGg+MClcclxuICB7XHJcbiAgICBmb3IgKHZhciBwb2x5Z29uIG9mIHBvbHlnb25zKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgZm9yICh2YXIgdmVydGV4IG9mIHBvbHlnb24pIHtcclxuICAgICAgICBjdHgubGluZVRvKC4uLnZlcnRleClcclxuICAgICAgfVxyXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgIGN0eG1ldGhvZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1BvbHlnb25TaGFwZShjdHgsIHNoYXBlLCBjb2xvcikge1xyXG4gIGN0eC5zYXZlKCk7XHJcbiAgY3R4LnRyYW5zbGF0ZSguLi5zaGFwZS5wb3MpO1xyXG4gIGN0eC5yb3RhdGUoZGVnMnJhZCgtc2hhcGUuYW5nbGUpKTtcclxuICBkcmF3UG9seWdvbnMoY3R4LCBjb2xvciwgc2hhcGUucG9seWdvbnMsIGN0eC5maWxsLmJpbmQoY3R4KSk7XHJcbiAgY3R4LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0RyYXdpbmcoY3R4LCBsYXllciwgc2NhbGVmYWN0b3IsIGRyYXdpbmcsIGNvbG9yKSB7XHJcbiAgaWYgKFtcInNlZ21lbnRcIiwgXCJhcmNcIiwgXCJjaXJjbGVcIl0uaW5jbHVkZXMoZHJhd2luZy50eXBlKSkge1xyXG4gICAgZHJhd2VkZ2UoY3R4LCBzY2FsZWZhY3RvciwgZHJhd2luZywgY29sb3IpO1xyXG4gIH0gZWxzZSBpZiAoZHJhd2luZy50eXBlID09IFwicG9seWdvblwiKSB7XHJcbiAgICBkcmF3UG9seWdvblNoYXBlKGN0eCwgZHJhd2luZywgY29sb3IpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkcmF3dGV4dChjdHgsIGRyYXdpbmcsIGNvbG9yLCBsYXllciA9PSBcIkJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Q2lyY2xlKGN0eCwgcmFkaXVzLCBjdHhtZXRob2QpIHtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4LmFyYygwLCAwLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgY3R4bWV0aG9kKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdQYWQoY3R4LCBwYWQsIGNvbG9yLCBvdXRsaW5lKSB7XHJcbiAgY3R4LnNhdmUoKTtcclxuICBjdHgudHJhbnNsYXRlKC4uLnBhZC5wb3MpO1xyXG4gIGN0eC5yb3RhdGUoZGVnMnJhZChwYWQuYW5nbGUpKTtcclxuICBpZiAocGFkLm9mZnNldCkge1xyXG4gICAgY3R4LnRyYW5zbGF0ZSguLi5wYWQub2Zmc2V0KTtcclxuICB9XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIHZhciBjdHhtZXRob2QgPSBvdXRsaW5lID8gY3R4LnN0cm9rZS5iaW5kKGN0eCkgOiBjdHguZmlsbC5iaW5kKGN0eCk7XHJcbiAgaWYgKHBhZC5zaGFwZSA9PSBcInJlY3RcIikge1xyXG4gICAgdmFyIHJlY3QgPSBbLi4ucGFkLnNpemUubWFwKGMgPT4gLWMgKiAwLjUpLCAuLi5wYWQuc2l6ZV07XHJcbiAgICBpZiAob3V0bGluZSkge1xyXG4gICAgICBjdHguc3Ryb2tlUmVjdCguLi5yZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5maWxsUmVjdCguLi5yZWN0KTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHBhZC5zaGFwZSA9PSBcIm92YWxcIikge1xyXG4gICAgZHJhd09ibG9uZyhjdHgsIGNvbG9yLCBwYWQuc2l6ZSwgY3R4bWV0aG9kKTtcclxuICB9IGVsc2UgaWYgKHBhZC5zaGFwZSA9PSBcImNpcmNsZVwiKSB7XHJcbiAgICBkcmF3Q2lyY2xlKGN0eCwgcGFkLnNpemVbMF0gLyAyLCBjdHhtZXRob2QpO1xyXG4gIH0gZWxzZSBpZiAocGFkLnNoYXBlID09IFwicm91bmRyZWN0XCIpIHtcclxuICAgIGRyYXdSb3VuZFJlY3QoY3R4LCBjb2xvciwgcGFkLnNpemUsIHBhZC5yYWRpdXMsIGN0eG1ldGhvZCk7XHJcbiAgfSBlbHNlIGlmIChwYWQuc2hhcGUgPT0gXCJjdXN0b21cIikge1xyXG4gICAgZHJhd1BvbHlnb25zKGN0eCwgY29sb3IsIHBhZC5wb2x5Z29ucywgY3R4bWV0aG9kKTtcclxuICB9XHJcbiAgaWYgKHBhZC50eXBlID09IFwidGhcIiAmJiAhb3V0bGluZSkge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0NDQ0NDQ1wiO1xyXG4gICAgaWYgKHBhZC5kcmlsbHNoYXBlID09IFwib2Jsb25nXCIpIHtcclxuICAgICAgZHJhd09ibG9uZyhjdHgsIFwiI0NDQ0NDQ1wiLCBwYWQuZHJpbGxzaXplLCBjdHhtZXRob2QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZHJhd0NpcmNsZShjdHgsIHBhZC5kcmlsbHNpemVbMF0gLyAyLCBjdHhtZXRob2QpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjdHgucmVzdG9yZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3TW9kdWxlKGN0eCwgbGF5ZXIsIHNjYWxlZmFjdG9yLCBtb2R1bGUsIHBhZGNvbG9yLCBvdXRsaW5lY29sb3IsIGhpZ2hsaWdodCkge1xyXG4gIGlmIChoaWdobGlnaHQpIHtcclxuICAgIC8vIGRyYXcgYm91bmRpbmcgYm94XHJcbiAgICBpZiAobW9kdWxlLmxheWVyID09IGxheWVyKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuMjtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSguLi5tb2R1bGUuYmJveC5wb3MpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gcGFkY29sb3I7XHJcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLC4uLm1vZHVsZS5iYm94LnNpemUpO1xyXG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBwYWRjb2xvcjtcclxuICAgICAgY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgMCwgMCxcclxuICAgICAgICAuLi5tb2R1bGUuYmJveC5zaXplKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gZHJhdyBkcmF3aW5nc1xyXG4gIGZvciAodmFyIGRyYXdpbmcgb2YgbW9kdWxlLmRyYXdpbmdzKSB7XHJcbiAgICBpZiAoZHJhd2luZy5sYXllciA9PSBsYXllcikge1xyXG4gICAgICBkcmF3RHJhd2luZyhjdHgsIGxheWVyLCBzY2FsZWZhY3RvciwgZHJhd2luZy5kcmF3aW5nLCBwYWRjb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGRyYXcgcGFkc1xyXG4gIGZvciAodmFyIHBhZCBvZiBtb2R1bGUucGFkcykge1xyXG4gICAgaWYgKHBhZC5sYXllcnMuaW5jbHVkZXMobGF5ZXIpKSB7XHJcbiAgICAgIGRyYXdQYWQoY3R4LCBwYWQsIHBhZGNvbG9yLCBmYWxzZSk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgaWYgKHBhZC5waW4xICYmIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0UGluMSgpKSBcclxuICAgICAge1xyXG4gICAgICAgIGRyYXdQYWQoY3R4LCBwYWQsIG91dGxpbmVjb2xvciwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdFZGdlcyhjYW52YXMsIHNjYWxlZmFjdG9yKSB7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgdmFyIGVkZ2Vjb2xvciA9IGdldENvbXB1dGVkU3R5bGUodG9wbW9zdGRpdikuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wY2ItZWRnZS1jb2xvcicpO1xyXG4gIGZvciAodmFyIGVkZ2Ugb2YgcGNiZGF0YS5lZGdlcykge1xyXG4gICAgZHJhd2VkZ2UoY3R4LCBzY2FsZWZhY3RvciwgZWRnZSwgZWRnZWNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdNb2R1bGVzKGNhbnZhcywgbGF5ZXIsIHNjYWxlZmFjdG9yLCBoaWdobGlnaHRlZFJlZnMpIHtcclxuICAvLyBUaGUgcmVzdCBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCB0aGUgcmVmZXJlbmNlcyBhcmUgaW4gYW4gYXJyYXkgc3RydWN0dXJlLiBcclxuICAvLyBTaW5jZSB0aGV5IGFyZSBub3QsIGhhdmUgdG8gdXNlIHNwbGl0LiBCdXQgdGhpcyBmdW5jdGlvbiBpcyBnZXR0aW5nIGNhbGxlZCBiZWZyb2VcclxuICAvLyB0aGUgZ2xvYmFsIHZhcmlhYmxlIGV4aXN0cyB3aGljaCBjYXVzZXMgYSBjcmFzaCBzaW5jZSB0aGUgcmVmIHZhcmlhYmxlIHdpbGwgbG9vayBcclxuICAvLyBsaWtlIGFuIGFycmF5LiBIZXJlIEkgYW0gY2hlY2tpbmcgdGhhdCB0aGUgbGVuZ3RoIG9mIGhpZ2hsaWdodCByZWYgaXMgZ3JlYXRlciB0aGFuIDAsIGlmIFxyXG4gIC8vIGl0IGlzIHRoZW4gdGhlIHN5c3RlbSB3aWxsIGJlIHNwbGl0IHRoZSBzdHJpbmcuIFRoaXMgaXMga2luZGEgYSBoYWNreSB3YXkgdG8gcmVzb2x2ZSB0aGUgXHJcbiAgLy8gaXNzdWUuIFRoaXMgd2lsbCBvbmx5IGJlIHRydWUgaWYgdGhlIHN0cmluZyBoYXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIuIFxyXG4gIC8vVE9ETzogY2hhbmdlIHRoZSByZWZlcmVuY2UgdmFyaWFibGUgZnJvbSBhIHN0cmluZyB0byBhbiBhcnJheS4gVGhpcyBuZWVkcyB0byBiZSBkb25lIGluIGlib20uanNcclxuICBpZihoaWdobGlnaHRlZFJlZnMubGVuZ3RoPjApe1xyXG4gICAgaGlnaGxpZ2h0ZWRSZWZzID0gaGlnaGxpZ2h0ZWRSZWZzLnNwbGl0KCcsJyk7XHJcbiAgfVxyXG5cclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBjdHgubGluZVdpZHRoID0gMyAvIHNjYWxlZmFjdG9yO1xyXG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodG9wbW9zdGRpdik7XHJcbiAgdmFyIHBhZGNvbG9yID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wYWQtY29sb3InKTtcclxuICB2YXIgb3V0bGluZWNvbG9yID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1waW4xLW91dGxpbmUtY29sb3InKTtcclxuICBpZiAoaGlnaGxpZ2h0ZWRSZWZzLmxlbmd0aCA+IDApIHtcclxuICAgIHBhZGNvbG9yID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wYWQtY29sb3ItaGlnaGxpZ2h0Jyk7XHJcbiAgICBvdXRsaW5lY29sb3IgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLXBpbjEtb3V0bGluZS1jb2xvci1oaWdobGlnaHQnKTtcclxuICB9XHJcbiAgZm9yICh2YXIgaSBpbiBwY2JkYXRhLm1vZHVsZXMpIHtcclxuICAgIHZhciBtb2QgPSBwY2JkYXRhLm1vZHVsZXNbaV07XHJcbiAgICB2YXIgaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0ZWRSZWZzLmluY2x1ZGVzKG1vZC5yZWYpO1xyXG5cclxuICAgIGlmIChoaWdobGlnaHRlZFJlZnMubGVuZ3RoID09IDAgfHwgaGlnaGxpZ2h0KSB7XHJcbiAgICAgIGRyYXdNb2R1bGUoY3R4LCBsYXllciwgc2NhbGVmYWN0b3IsIG1vZCwgcGFkY29sb3IsIG91dGxpbmVjb2xvciwgaGlnaGxpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdTaWxrc2NyZWVuKGNhbnZhcywgbGF5ZXIsIHNjYWxlZmFjdG9yKVxyXG57XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgZm9yICh2YXIgZCBvZiBwY2JkYXRhLnNpbGtzY3JlZW5bbGF5ZXJdKVxyXG4gIHtcclxuICAgIGlmIChbXCJzZWdtZW50XCIsIFwiYXJjXCIsIFwiY2lyY2xlXCJdLmluY2x1ZGVzKGQudHlwZSkpXHJcbiAgICB7XHJcbiAgICAgIGRyYXdlZGdlKGN0eCwgc2NhbGVmYWN0b3IsIGQsIFwiI2FhNFwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGQudHlwZSA9PSBcInBvbHlnb25cIilcclxuICAgIHtcclxuICAgICAgZHJhd1BvbHlnb25TaGFwZShjdHgsIGQsIFwiIzRhYVwiKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgZHJhd3RleHQoY3R4LCBkLCBcIiM0YWFcIiwgbGF5ZXIgPT0gXCJCXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDYW52YXMoY2FudmFzKSB7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgY3R4LnNhdmUoKTtcclxuICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICBjdHgucmVzdG9yZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3SGlnaGxpZ2h0c09uTGF5ZXIoY2FudmFzZGljdCkge1xyXG4gIGNsZWFyQ2FudmFzKGNhbnZhc2RpY3QuaGlnaGxpZ2h0KTtcclxuICBkcmF3TW9kdWxlcyhjYW52YXNkaWN0LmhpZ2hsaWdodCwgY2FudmFzZGljdC5sYXllcixcclxuICAgIGNhbnZhc2RpY3QudHJhbnNmb3JtLnMsIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0ZWRSZWZzKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3SGlnaGxpZ2h0cygpIHtcclxuICBkcmF3SGlnaGxpZ2h0c09uTGF5ZXIoYWxsY2FudmFzLmZyb250KTtcclxuICBkcmF3SGlnaGxpZ2h0c09uTGF5ZXIoYWxsY2FudmFzLmJhY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3QmFja2dyb3VuZChjYW52YXNkaWN0KSB7XHJcbiAgY2xlYXJDYW52YXMoY2FudmFzZGljdC5iZyk7XHJcbiAgY2xlYXJDYW52YXMoY2FudmFzZGljdC5zaWxrKTtcclxuICBkcmF3RWRnZXMoY2FudmFzZGljdC5iZywgY2FudmFzZGljdC50cmFuc2Zvcm0ucyk7XHJcbiAgZHJhd01vZHVsZXMoY2FudmFzZGljdC5iZywgY2FudmFzZGljdC5sYXllciwgY2FudmFzZGljdC50cmFuc2Zvcm0ucywgW10pO1xyXG4gIGRyYXdTaWxrc2NyZWVuKGNhbnZhc2RpY3Quc2lsaywgY2FudmFzZGljdC5sYXllciwgY2FudmFzZGljdC50cmFuc2Zvcm0ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVDYW52YXMoY2FudmFzLCBmbGlwLCB0cmFuc2Zvcm0pIHtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gIHZhciBmb250c2l6ZSA9IDEuNTU7XHJcbiAgY3R4LnNjYWxlKHRyYW5zZm9ybS56b29tLCB0cmFuc2Zvcm0uem9vbSk7XHJcbiAgY3R4LnRyYW5zbGF0ZSh0cmFuc2Zvcm0ucGFueCwgdHJhbnNmb3JtLnBhbnkpO1xyXG4gIGlmIChmbGlwKSB7XHJcbiAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gIH1cclxuICBjdHgudHJhbnNsYXRlKHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSk7XHJcbiAgY3R4LnJvdGF0ZShkZWcycmFkKGJvYXJkUm90YXRpb24pKTtcclxuICBjdHguc2NhbGUodHJhbnNmb3JtLnMsIHRyYW5zZm9ybS5zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZUxheWVyKGNhbnZhc2RpY3QpIHtcclxuICB2YXIgZmxpcCA9IChjYW52YXNkaWN0LmxheWVyICE9IFwiQlwiKTtcclxuICBmb3IgKHZhciBjIG9mIFtcImJnXCIsIFwic2lsa1wiLCBcImhpZ2hsaWdodFwiXSkge1xyXG4gICAgcHJlcGFyZUNhbnZhcyhjYW52YXNkaWN0W2NdLCBmbGlwLCBjYW52YXNkaWN0LnRyYW5zZm9ybSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByb3RhdGVWZWN0b3IodiwgYW5nbGUpIHtcclxuICBhbmdsZSA9IGRlZzJyYWQoYW5nbGUpO1xyXG4gIHJldHVybiBbXHJcbiAgICB2WzBdICogTWF0aC5jb3MoYW5nbGUpIC0gdlsxXSAqIE1hdGguc2luKGFuZ2xlKSxcclxuICAgIHZbMF0gKiBNYXRoLnNpbihhbmdsZSkgKyB2WzFdICogTWF0aC5jb3MoYW5nbGUpXHJcbiAgXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlSb3RhdGlvbihiYm94KSB7XHJcbiAgdmFyIGNvcm5lcnMgPSBbXHJcbiAgICBbYmJveC5taW54LCBiYm94Lm1pbnldLFxyXG4gICAgW2Jib3gubWlueCwgYmJveC5tYXh5XSxcclxuICAgIFtiYm94Lm1heHgsIGJib3gubWlueV0sXHJcbiAgICBbYmJveC5tYXh4LCBiYm94Lm1heHldLFxyXG4gIF07XHJcbiAgY29ybmVycyA9IGNvcm5lcnMubWFwKCh2KSA9PiByb3RhdGVWZWN0b3IodiwgYm9hcmRSb3RhdGlvbikpO1xyXG4gIHJldHVybiB7XHJcbiAgICBtaW54OiBjb3JuZXJzLnJlZHVjZSgoYSwgdikgPT4gTWF0aC5taW4oYSwgdlswXSksIEluZmluaXR5KSxcclxuICAgIG1pbnk6IGNvcm5lcnMucmVkdWNlKChhLCB2KSA9PiBNYXRoLm1pbihhLCB2WzFdKSwgSW5maW5pdHkpLFxyXG4gICAgbWF4eDogY29ybmVycy5yZWR1Y2UoKGEsIHYpID0+IE1hdGgubWF4KGEsIHZbMF0pLCAtSW5maW5pdHkpLFxyXG4gICAgbWF4eTogY29ybmVycy5yZWR1Y2UoKGEsIHYpID0+IE1hdGgubWF4KGEsIHZbMV0pLCAtSW5maW5pdHkpLFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVjYWxjTGF5ZXJTY2FsZShjYW52YXNkaWN0KSB7XHJcbiAgdmFyIGNhbnZhc2RpdmlkID0ge1xyXG4gICAgXCJGXCI6IFwiZnJvbnRjYW52YXNcIixcclxuICAgIFwiQlwiOiBcImJhY2tjYW52YXNcIlxyXG4gIH0gW2NhbnZhc2RpY3QubGF5ZXJdO1xyXG4gIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc2RpdmlkKS5jbGllbnRXaWR0aCAqIDI7XHJcbiAgdmFyIGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc2RpdmlkKS5jbGllbnRIZWlnaHQgKiAyO1xyXG4gIHZhciBiYm94ID0gYXBwbHlSb3RhdGlvbihwY2JkYXRhLmVkZ2VzX2Jib3gpO1xyXG4gIHZhciBzY2FsZWZhY3RvciA9IDAuOTggKiBNYXRoLm1pbihcclxuICAgIHdpZHRoIC8gKGJib3gubWF4eCAtIGJib3gubWlueCksXHJcbiAgICBoZWlnaHQgLyAoYmJveC5tYXh5IC0gYmJveC5taW55KVxyXG4gICk7XHJcbiAgaWYgKHNjYWxlZmFjdG9yIDwgMC4xKSB7XHJcbiAgICBzY2FsZWZhY3RvciA9IDE7XHJcbiAgfVxyXG4gIGNhbnZhc2RpY3QudHJhbnNmb3JtLnMgPSBzY2FsZWZhY3RvcjtcclxuICB2YXIgZmxpcCA9IChjYW52YXNkaWN0LmxheWVyICE9IFwiQlwiKTtcclxuICBpZiAoZmxpcCkge1xyXG4gICAgY2FudmFzZGljdC50cmFuc2Zvcm0ueCA9IC0oKGJib3gubWF4eCArIGJib3gubWlueCkgKiBzY2FsZWZhY3RvciArIHdpZHRoKSAqIDAuNTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2FudmFzZGljdC50cmFuc2Zvcm0ueCA9IC0oKGJib3gubWF4eCArIGJib3gubWlueCkgKiBzY2FsZWZhY3RvciAtIHdpZHRoKSAqIDAuNTtcclxuICB9XHJcbiAgY2FudmFzZGljdC50cmFuc2Zvcm0ueSA9IC0oKGJib3gubWF4eSArIGJib3gubWlueSkgKiBzY2FsZWZhY3RvciAtIGhlaWdodCkgKiAwLjU7XHJcbiAgZm9yICh2YXIgYyBvZiBbXCJiZ1wiLCBcInNpbGtcIiwgXCJoaWdobGlnaHRcIl0pIHtcclxuICAgIGNhbnZhcyA9IGNhbnZhc2RpY3RbY107XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSAod2lkdGggLyAyKSArIFwicHhcIjtcclxuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0IC8gMikgKyBcInB4XCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWRyYXdDYW52YXMobGF5ZXJkaWN0KSB7XHJcbiAgcHJlcGFyZUxheWVyKGxheWVyZGljdCk7XHJcbiAgZHJhd0JhY2tncm91bmQobGF5ZXJkaWN0KTtcclxuICBkcmF3SGlnaGxpZ2h0c09uTGF5ZXIobGF5ZXJkaWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzaXplQ2FudmFzKGxheWVyZGljdCkge1xyXG4gIHJlY2FsY0xheWVyU2NhbGUobGF5ZXJkaWN0KTtcclxuICByZWRyYXdDYW52YXMobGF5ZXJkaWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzaXplQWxsKCkge1xyXG4gIHJlc2l6ZUNhbnZhcyhhbGxjYW52YXMuZnJvbnQpO1xyXG4gIHJlc2l6ZUNhbnZhcyhhbGxjYW52YXMuYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJib3hTY2FuKGxheWVyLCB4LCB5LCB0cmFuc2Zvcm0pIHtcclxuICB2YXIgcmVzdWx0ID0gW107XHJcbiAgZm9yICh2YXIgaSBpbiBwY2JkYXRhLm1vZHVsZXMpIHtcclxuICAgIHZhciBtb2R1bGUgPSBwY2JkYXRhLm1vZHVsZXNbaV07XHJcbiAgICBpZiAobW9kdWxlLmxheWVyID09IGxheWVyKSB7XHJcbiAgICAgIHZhciBiID0gbW9kdWxlLmJib3g7XHJcbiAgICAgIGlmIChiLnBvc1swXSA8PSB4ICYmIGIucG9zWzBdICsgYi5zaXplWzBdID49IHggJiZcclxuICAgICAgICAgIGIucG9zWzFdIDw9IHkgJiYgYi5wb3NbMV0gKyBiLnNpemVbMV0gPj0geSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKG1vZHVsZS5yZWYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihlLCBsYXllcmRpY3QpIHtcclxuICBpZiAoZS53aGljaCAhPSAxKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGxheWVyZGljdC50cmFuc2Zvcm0ubW91c2VzdGFydHggPSBlLm9mZnNldFg7XHJcbiAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZXN0YXJ0eSA9IGUub2Zmc2V0WTtcclxuICBsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlZG93bnggPSBlLm9mZnNldFg7XHJcbiAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZWRvd255ID0gZS5vZmZzZXRZO1xyXG4gIGxheWVyZGljdC50cmFuc2Zvcm0ubW91c2Vkb3duID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc21vb3RoU2Nyb2xsVG9Sb3cocm93aWQpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb3dpZCkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgIGlubGluZTogXCJuZWFyZXN0XCJcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc0NsaWNrZWQocmVmZXJlbmNlcykge1xyXG4gIHZhciBsYXN0Q2xpY2tlZEluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGdsb2JhbERhdGEuZ2V0TGFzdENsaWNrZWRSZWYoKSk7XHJcbiAgdmFyIHJlZiA9IHJlZmVyZW5jZXNbKGxhc3RDbGlja2VkSW5kZXggKyAxKSAlIHJlZmVyZW5jZXMubGVuZ3RoXTtcclxuICBmb3IgKHZhciBoYW5kbGVyIG9mIGdsb2JhbERhdGEuZ2V0SGlnaGxpZ2h0SGFuZGxlcnMoKSkge1xyXG4gICAgaWYgKGhhbmRsZXIucmVmcy5pbmRleE9mKHJlZikgPj0gMCkge1xyXG4gICAgICBnbG9iYWxEYXRhLnNldExhc3RDbGlja2VkUmVmKHJlZik7XHJcbiAgICAgIGhhbmRsZXIuaGFuZGxlcigpO1xyXG4gICAgICBzbW9vdGhTY3JvbGxUb1JvdyhnbG9iYWxEYXRhLmdldEN1cnJlbnRIaWdobGlnaHRlZFJvd0lkKCkpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb3VzZUNsaWNrKGUsIGxheWVyZGljdCkge1xyXG4gIHZhciB4ID0gZS5vZmZzZXRYO1xyXG4gIHZhciB5ID0gZS5vZmZzZXRZO1xyXG4gIHZhciB0ID0gbGF5ZXJkaWN0LnRyYW5zZm9ybTtcclxuICBpZiAobGF5ZXJkaWN0LmxheWVyICE9IFwiQlwiKSB7XHJcbiAgICB4ID0gKDIgKiB4IC8gdC56b29tIC0gdC5wYW54ICsgdC54KSAvIC10LnM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHggPSAoMiAqIHggLyB0Lnpvb20gLSB0LnBhbnggLSB0LngpIC8gdC5zO1xyXG4gIH1cclxuICB5ID0gKDIgKiB5IC8gdC56b29tIC0gdC55IC0gdC5wYW55KSAvIHQucztcclxuICB2YXIgdiA9IHJvdGF0ZVZlY3RvcihbeCwgeV0sIC1ib2FyZFJvdGF0aW9uKTtcclxuICB2YXIgcmVmbGlzdCA9IGJib3hTY2FuKGxheWVyZGljdC5sYXllciwgdlswXSwgdlsxXSwgdCk7XHJcbiAgaWYgKHJlZmxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgbW9kdWxlc0NsaWNrZWQocmVmbGlzdCk7XHJcbiAgICBkcmF3SGlnaGxpZ2h0cygpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTW91c2VVcChlLCBsYXllcmRpY3QpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBpZiAoZS53aGljaCA9PSAxICYmXHJcbiAgICBsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlZG93biAmJlxyXG4gICAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZWRvd254ID09IGUub2Zmc2V0WCAmJlxyXG4gICAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZWRvd255ID09IGUub2Zmc2V0WSkge1xyXG4gICAgLy8gVGhpcyBpcyBqdXN0IGEgY2xpY2tcclxuICAgIGhhbmRsZU1vdXNlQ2xpY2soZSwgbGF5ZXJkaWN0KTtcclxuICAgIGxheWVyZGljdC50cmFuc2Zvcm0ubW91c2Vkb3duID0gZmFsc2U7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChlLndoaWNoID09IDMpIHtcclxuICAgIC8vIFJlc2V0IHBhbiBhbmQgem9vbSBvbiByaWdodCBjbGljay5cclxuICAgIGxheWVyZGljdC50cmFuc2Zvcm0ucGFueCA9IDA7XHJcbiAgICBsYXllcmRpY3QudHJhbnNmb3JtLnBhbnkgPSAwO1xyXG4gICAgbGF5ZXJkaWN0LnRyYW5zZm9ybS56b29tID0gMTtcclxuICAgIHJlZHJhd0NhbnZhcyhsYXllcmRpY3QpO1xyXG4gIH0gZWxzZSBpZiAoIWdsb2JhbERhdGEuZ2V0UmVkcmF3T25EcmFnKCkpIHtcclxuICAgIHJlZHJhd0NhbnZhcyhsYXllcmRpY3QpO1xyXG4gIH1cclxuICBsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlZG93biA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZSwgbGF5ZXJkaWN0KSB7XHJcbiAgaWYgKCFsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlZG93bikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB2YXIgZHggPSBlLm9mZnNldFggLSBsYXllcmRpY3QudHJhbnNmb3JtLm1vdXNlc3RhcnR4O1xyXG4gIHZhciBkeSA9IGUub2Zmc2V0WSAtIGxheWVyZGljdC50cmFuc2Zvcm0ubW91c2VzdGFydHk7XHJcbiAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5wYW54ICs9IDIgKiBkeCAvIGxheWVyZGljdC50cmFuc2Zvcm0uem9vbTtcclxuICBsYXllcmRpY3QudHJhbnNmb3JtLnBhbnkgKz0gMiAqIGR5IC8gbGF5ZXJkaWN0LnRyYW5zZm9ybS56b29tO1xyXG4gIGxheWVyZGljdC50cmFuc2Zvcm0ubW91c2VzdGFydHggPSBlLm9mZnNldFg7XHJcbiAgbGF5ZXJkaWN0LnRyYW5zZm9ybS5tb3VzZXN0YXJ0eSA9IGUub2Zmc2V0WTtcclxuICBpZiAoZ2xvYmFsRGF0YS5nZXRSZWRyYXdPbkRyYWcoKSkge1xyXG4gICAgcmVkcmF3Q2FudmFzKGxheWVyZGljdCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKGUsIGxheWVyZGljdCkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIHZhciB0ID0gbGF5ZXJkaWN0LnRyYW5zZm9ybTtcclxuICB2YXIgd2hlZWxkZWx0YSA9IGUuZGVsdGFZO1xyXG4gIGlmIChlLmRlbHRhTW9kZSA9PSAxKSB7XHJcbiAgICAvLyBGRiBvbmx5LCBzY3JvbGwgYnkgbGluZXNcclxuICAgIHdoZWVsZGVsdGEgKj0gMzA7XHJcbiAgfSBlbHNlIGlmIChlLmRlbHRhTW9kZSA9PSAyKSB7XHJcbiAgICB3aGVlbGRlbHRhICo9IDMwMDtcclxuICB9XHJcbiAgdmFyIG0gPSBNYXRoLnBvdygxLjEsIC13aGVlbGRlbHRhIC8gNDApO1xyXG4gIC8vIExpbWl0IGFtb3VudCBvZiB6b29tIHBlciB0aWNrLlxyXG4gIGlmIChtID4gMikge1xyXG4gICAgbSA9IDI7XHJcbiAgfSBlbHNlIGlmIChtIDwgMC41KSB7XHJcbiAgICBtID0gMC41O1xyXG4gIH1cclxuICB0Lnpvb20gKj0gbTtcclxuICB2YXIgem9vbWQgPSAoMSAtIG0pIC8gdC56b29tO1xyXG4gIHQucGFueCArPSAyICogZS5vZmZzZXRYICogem9vbWQ7XHJcbiAgdC5wYW55ICs9IDIgKiBlLm9mZnNldFkgKiB6b29tZDtcclxuICByZWRyYXdDYW52YXMobGF5ZXJkaWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTW91c2VIYW5kbGVycyhkaXYsIGxheWVyZGljdCkge1xyXG4gIGRpdi5vbm1vdXNlY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgIGhhbmRsZU1vdXNlQ2xpY2soZSwgbGF5ZXJkaWN0KTtcclxuICB9XHJcblxyXG4gIGRpdi5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGhhbmRsZU1vdXNlRG93bihlLCBsYXllcmRpY3QpO1xyXG4gIH07XHJcbiAgZGl2Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSkge1xyXG4gICAgaGFuZGxlTW91c2VNb3ZlKGUsIGxheWVyZGljdCk7XHJcbiAgfTtcclxuICBkaXYub25tb3VzZXVwID0gZnVuY3Rpb24oZSkge1xyXG4gICAgaGFuZGxlTW91c2VVcChlLCBsYXllcmRpY3QpO1xyXG4gIH07XHJcbiAgZGl2Lm9ubW91c2VvdXQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBoYW5kbGVNb3VzZVVwKGUsIGxheWVyZGljdCk7XHJcbiAgfVxyXG4gIGRpdi5vbndoZWVsID0gZnVuY3Rpb24oZSkge1xyXG4gICAgaGFuZGxlTW91c2VXaGVlbChlLCBsYXllcmRpY3QpO1xyXG4gIH1cclxuICBmb3IgKHZhciBlbGVtZW50IG9mIFtkaXYsIGxheWVyZGljdC5iZywgbGF5ZXJkaWN0LnNpbGssIGxheWVyZGljdC5oaWdobGlnaHRdKSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0sIGZhbHNlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEJvYXJkUm90YXRpb24odmFsdWUpIHtcclxuICBib2FyZFJvdGF0aW9uID0gdmFsdWUgKiA1O1xyXG4gIGdsb2JhbERhdGEud3JpdGVTdG9yYWdlKFwiYm9hcmRSb3RhdGlvblwiLCBib2FyZFJvdGF0aW9uKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uRGVncmVlXCIpLnRleHRDb250ZW50ID0gYm9hcmRSb3RhdGlvbjtcclxuICByZXNpemVBbGwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFJlbmRlcigpIHtcclxuICBhbGxjYW52YXMgPSB7XHJcbiAgICBmcm9udDoge1xyXG4gICAgICB0cmFuc2Zvcm06IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgczogMSxcclxuICAgICAgICBwYW54OiAwLFxyXG4gICAgICAgIHBhbnk6IDAsXHJcbiAgICAgICAgem9vbTogMSxcclxuICAgICAgICBtb3VzZXN0YXJ0eDogMCxcclxuICAgICAgICBtb3VzZXN0YXJ0eTogMCxcclxuICAgICAgICBtb3VzZWRvd246IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBiZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJGX2JnXCIpLFxyXG4gICAgICBzaWxrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkZfc2xrXCIpLFxyXG4gICAgICBoaWdobGlnaHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRl9obFwiKSxcclxuICAgICAgbGF5ZXI6IFwiRlwiLFxyXG4gICAgfSxcclxuICAgIGJhY2s6IHtcclxuICAgICAgdHJhbnNmb3JtOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHM6IDEsXHJcbiAgICAgICAgcGFueDogMCxcclxuICAgICAgICBwYW55OiAwLFxyXG4gICAgICAgIHpvb206IDEsXHJcbiAgICAgICAgbW91c2VzdGFydHg6IDAsXHJcbiAgICAgICAgbW91c2VzdGFydHk6IDAsXHJcbiAgICAgICAgbW91c2Vkb3duOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgYmc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQl9iZ1wiKSxcclxuICAgICAgc2lsazogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJCX3Nsa1wiKSxcclxuICAgICAgaGlnaGxpZ2h0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkJfaGxcIiksXHJcbiAgICAgIGxheWVyOiBcIkJcIixcclxuICAgIH1cclxuICB9O1xyXG4gIGFkZE1vdXNlSGFuZGxlcnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9udGNhbnZhc1wiKSwgYWxsY2FudmFzLmZyb250KTtcclxuICBhZGRNb3VzZUhhbmRsZXJzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2NhbnZhc1wiKSwgYWxsY2FudmFzLmJhY2spO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICByZXNpemVBbGwsXHJcbiAgaW5pdFJlbmRlcixcclxuICByZWRyYXdDYW52YXMsXHJcbiAgZHJhd0hpZ2hsaWdodHMsXHJcbiAgc2V0Qm9hcmRSb3RhdGlvbixcclxuICBzbW9vdGhTY3JvbGxUb1Jvd1xyXG59OyIsIi8qXG4gIFNwbGl0LmpzIC0gdjEuMy41XG4gIE1JVCBMaWNlbnNlXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9uYXRoYW5jYWhpbGwvU3BsaXQuanNcbiovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLlNwbGl0PXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXdpbmRvdyx0PWUuZG9jdW1lbnQsbj1cImFkZEV2ZW50TGlzdGVuZXJcIixpPVwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiLHI9XCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIixzPWZ1bmN0aW9uKCl7cmV0dXJuITF9LG89ZS5hdHRhY2hFdmVudCYmIWVbbl0sYT1bXCJcIixcIi13ZWJraXQtXCIsXCItbW96LVwiLFwiLW8tXCJdLmZpbHRlcihmdW5jdGlvbihlKXt2YXIgbj10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uc3R5bGUuY3NzVGV4dD1cIndpZHRoOlwiK2UrXCJjYWxjKDlweClcIiwhIW4uc3R5bGUubGVuZ3RofSkuc2hpZnQoKStcImNhbGNcIixsPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfHxlIGluc3RhbmNlb2YgU3RyaW5nP3QucXVlcnlTZWxlY3RvcihlKTplfTtyZXR1cm4gZnVuY3Rpb24odSxjKXtmdW5jdGlvbiB6KGUsdCxuKXt2YXIgaT1BKHksdCxuKTtPYmplY3Qua2V5cyhpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnN0eWxlW3RdPWlbdF19KX1mdW5jdGlvbiBoKGUsdCl7dmFyIG49Qih5LHQpO09iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuc3R5bGVbdF09blt0XX0pfWZ1bmN0aW9uIGYoZSl7dmFyIHQ9RVt0aGlzLmFdLG49RVt0aGlzLmJdLGk9dC5zaXplK24uc2l6ZTt0LnNpemU9ZS90aGlzLnNpemUqaSxuLnNpemU9aS1lL3RoaXMuc2l6ZSppLHoodC5lbGVtZW50LHQuc2l6ZSx0aGlzLmFHdXR0ZXJTaXplKSx6KG4uZWxlbWVudCxuLnNpemUsdGhpcy5iR3V0dGVyU2l6ZSl9ZnVuY3Rpb24gbShlKXt2YXIgdDt0aGlzLmRyYWdnaW5nJiYoKHQ9XCJ0b3VjaGVzXCJpbiBlP2UudG91Y2hlc1swXVtiXS10aGlzLnN0YXJ0OmVbYl0tdGhpcy5zdGFydCk8PUVbdGhpcy5hXS5taW5TaXplK00rdGhpcy5hR3V0dGVyU2l6ZT90PUVbdGhpcy5hXS5taW5TaXplK3RoaXMuYUd1dHRlclNpemU6dD49dGhpcy5zaXplLShFW3RoaXMuYl0ubWluU2l6ZStNK3RoaXMuYkd1dHRlclNpemUpJiYodD10aGlzLnNpemUtKEVbdGhpcy5iXS5taW5TaXplK3RoaXMuYkd1dHRlclNpemUpKSxmLmNhbGwodGhpcyx0KSxjLm9uRHJhZyYmYy5vbkRyYWcoKSl9ZnVuY3Rpb24gZygpe3ZhciBlPUVbdGhpcy5hXS5lbGVtZW50LHQ9RVt0aGlzLmJdLmVsZW1lbnQ7dGhpcy5zaXplPWVbcl0oKVt5XSt0W3JdKClbeV0rdGhpcy5hR3V0dGVyU2l6ZSt0aGlzLmJHdXR0ZXJTaXplLHRoaXMuc3RhcnQ9ZVtyXSgpW0ddfWZ1bmN0aW9uIGQoKXt2YXIgdD10aGlzLG49RVt0LmFdLmVsZW1lbnQscj1FW3QuYl0uZWxlbWVudDt0LmRyYWdnaW5nJiZjLm9uRHJhZ0VuZCYmYy5vbkRyYWdFbmQoKSx0LmRyYWdnaW5nPSExLGVbaV0oXCJtb3VzZXVwXCIsdC5zdG9wKSxlW2ldKFwidG91Y2hlbmRcIix0LnN0b3ApLGVbaV0oXCJ0b3VjaGNhbmNlbFwiLHQuc3RvcCksdC5wYXJlbnRbaV0oXCJtb3VzZW1vdmVcIix0Lm1vdmUpLHQucGFyZW50W2ldKFwidG91Y2htb3ZlXCIsdC5tb3ZlKSxkZWxldGUgdC5zdG9wLGRlbGV0ZSB0Lm1vdmUsbltpXShcInNlbGVjdHN0YXJ0XCIscyksbltpXShcImRyYWdzdGFydFwiLHMpLHJbaV0oXCJzZWxlY3RzdGFydFwiLHMpLHJbaV0oXCJkcmFnc3RhcnRcIixzKSxuLnN0eWxlLnVzZXJTZWxlY3Q9XCJcIixuLnN0eWxlLndlYmtpdFVzZXJTZWxlY3Q9XCJcIixuLnN0eWxlLk1velVzZXJTZWxlY3Q9XCJcIixuLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJcIixyLnN0eWxlLnVzZXJTZWxlY3Q9XCJcIixyLnN0eWxlLndlYmtpdFVzZXJTZWxlY3Q9XCJcIixyLnN0eWxlLk1velVzZXJTZWxlY3Q9XCJcIixyLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJcIix0Lmd1dHRlci5zdHlsZS5jdXJzb3I9XCJcIix0LnBhcmVudC5zdHlsZS5jdXJzb3I9XCJcIn1mdW5jdGlvbiBTKHQpe3ZhciBpPXRoaXMscj1FW2kuYV0uZWxlbWVudCxvPUVbaS5iXS5lbGVtZW50OyFpLmRyYWdnaW5nJiZjLm9uRHJhZ1N0YXJ0JiZjLm9uRHJhZ1N0YXJ0KCksdC5wcmV2ZW50RGVmYXVsdCgpLGkuZHJhZ2dpbmc9ITAsaS5tb3ZlPW0uYmluZChpKSxpLnN0b3A9ZC5iaW5kKGkpLGVbbl0oXCJtb3VzZXVwXCIsaS5zdG9wKSxlW25dKFwidG91Y2hlbmRcIixpLnN0b3ApLGVbbl0oXCJ0b3VjaGNhbmNlbFwiLGkuc3RvcCksaS5wYXJlbnRbbl0oXCJtb3VzZW1vdmVcIixpLm1vdmUpLGkucGFyZW50W25dKFwidG91Y2htb3ZlXCIsaS5tb3ZlKSxyW25dKFwic2VsZWN0c3RhcnRcIixzKSxyW25dKFwiZHJhZ3N0YXJ0XCIscyksb1tuXShcInNlbGVjdHN0YXJ0XCIscyksb1tuXShcImRyYWdzdGFydFwiLHMpLHIuc3R5bGUudXNlclNlbGVjdD1cIm5vbmVcIixyLnN0eWxlLndlYmtpdFVzZXJTZWxlY3Q9XCJub25lXCIsci5zdHlsZS5Nb3pVc2VyU2VsZWN0PVwibm9uZVwiLHIuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixvLnN0eWxlLnVzZXJTZWxlY3Q9XCJub25lXCIsby5zdHlsZS53ZWJraXRVc2VyU2VsZWN0PVwibm9uZVwiLG8uc3R5bGUuTW96VXNlclNlbGVjdD1cIm5vbmVcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsaS5ndXR0ZXIuc3R5bGUuY3Vyc29yPWosaS5wYXJlbnQuc3R5bGUuY3Vyc29yPWosZy5jYWxsKGkpfWZ1bmN0aW9uIHYoZSl7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7aWYobj4wKXt2YXIgaT1GW24tMV0scj1FW2kuYV0scz1FW2kuYl07ci5zaXplPWVbbi0xXSxzLnNpemU9dCx6KHIuZWxlbWVudCxyLnNpemUsaS5hR3V0dGVyU2l6ZSkseihzLmVsZW1lbnQscy5zaXplLGkuYkd1dHRlclNpemUpfX0pfWZ1bmN0aW9uIHAoKXtGLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5wYXJlbnQucmVtb3ZlQ2hpbGQoZS5ndXR0ZXIpLEVbZS5hXS5lbGVtZW50LnN0eWxlW3ldPVwiXCIsRVtlLmJdLmVsZW1lbnQuc3R5bGVbeV09XCJcIn0pfXZvaWQgMD09PWMmJihjPXt9KTt2YXIgeSxiLEcsRSx3PWwodVswXSkucGFyZW50Tm9kZSxEPWUuZ2V0Q29tcHV0ZWRTdHlsZSh3KS5mbGV4RGlyZWN0aW9uLFU9Yy5zaXplc3x8dS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gMTAwL3UubGVuZ3RofSksaz12b2lkIDAhPT1jLm1pblNpemU/Yy5taW5TaXplOjEwMCx4PUFycmF5LmlzQXJyYXkoayk/azp1Lm1hcChmdW5jdGlvbigpe3JldHVybiBrfSksTD12b2lkIDAhPT1jLmd1dHRlclNpemU/Yy5ndXR0ZXJTaXplOjEwLE09dm9pZCAwIT09Yy5zbmFwT2Zmc2V0P2Muc25hcE9mZnNldDozMCxPPWMuZGlyZWN0aW9ufHxcImhvcml6b250YWxcIixqPWMuY3Vyc29yfHwoXCJob3Jpem9udGFsXCI9PT1PP1wiZXctcmVzaXplXCI6XCJucy1yZXNpemVcIiksQz1jLmd1dHRlcnx8ZnVuY3Rpb24oZSxuKXt2YXIgaT10LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGkuY2xhc3NOYW1lPVwiZ3V0dGVyIGd1dHRlci1cIituLGl9LEE9Yy5lbGVtZW50U3R5bGV8fGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT17fTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdHx8dCBpbnN0YW5jZW9mIFN0cmluZz9pW2VdPXQ6aVtlXT1vP3QrXCIlXCI6YStcIihcIit0K1wiJSAtIFwiK24rXCJweClcIixpfSxCPWMuZ3V0dGVyU3R5bGV8fGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG49e30sbltlXT10K1wicHhcIixuO3ZhciBufTtcImhvcml6b250YWxcIj09PU8/KHk9XCJ3aWR0aFwiLFwiY2xpZW50V2lkdGhcIixiPVwiY2xpZW50WFwiLEc9XCJsZWZ0XCIsXCJwYWRkaW5nTGVmdFwiKTpcInZlcnRpY2FsXCI9PT1PJiYoeT1cImhlaWdodFwiLFwiY2xpZW50SGVpZ2h0XCIsYj1cImNsaWVudFlcIixHPVwidG9wXCIsXCJwYWRkaW5nVG9wXCIpO3ZhciBGPVtdO3JldHVybiBFPXUubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIGkscz17ZWxlbWVudDpsKGUpLHNpemU6VVt0XSxtaW5TaXplOnhbdF19O2lmKHQ+MCYmKGk9e2E6dC0xLGI6dCxkcmFnZ2luZzohMSxpc0ZpcnN0OjE9PT10LGlzTGFzdDp0PT09dS5sZW5ndGgtMSxkaXJlY3Rpb246TyxwYXJlbnQ6d30saS5hR3V0dGVyU2l6ZT1MLGkuYkd1dHRlclNpemU9TCxpLmlzRmlyc3QmJihpLmFHdXR0ZXJTaXplPUwvMiksaS5pc0xhc3QmJihpLmJHdXR0ZXJTaXplPUwvMiksXCJyb3ctcmV2ZXJzZVwiPT09RHx8XCJjb2x1bW4tcmV2ZXJzZVwiPT09RCkpe3ZhciBhPWkuYTtpLmE9aS5iLGkuYj1hfWlmKCFvJiZ0PjApe3ZhciBjPUModCxPKTtoKGMsTCksY1tuXShcIm1vdXNlZG93blwiLFMuYmluZChpKSksY1tuXShcInRvdWNoc3RhcnRcIixTLmJpbmQoaSkpLHcuaW5zZXJ0QmVmb3JlKGMscy5lbGVtZW50KSxpLmd1dHRlcj1jfTA9PT10fHx0PT09dS5sZW5ndGgtMT96KHMuZWxlbWVudCxzLnNpemUsTC8yKTp6KHMuZWxlbWVudCxzLnNpemUsTCk7dmFyIGY9cy5lbGVtZW50W3JdKClbeV07cmV0dXJuIGY8cy5taW5TaXplJiYocy5taW5TaXplPWYpLHQ+MCYmRi5wdXNoKGkpLHN9KSxvP3tzZXRTaXplczp2LGRlc3Ryb3k6cH06e3NldFNpemVzOnYsZ2V0U2l6ZXM6ZnVuY3Rpb24oKXtyZXR1cm4gRS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2l6ZX0pfSxjb2xsYXBzZTpmdW5jdGlvbihlKXtpZihlPT09Ri5sZW5ndGgpe3ZhciB0PUZbZS0xXTtnLmNhbGwodCksb3x8Zi5jYWxsKHQsdC5zaXplLXQuYkd1dHRlclNpemUpfWVsc2V7dmFyIG49RltlXTtnLmNhbGwobiksb3x8Zi5jYWxsKG4sbi5hR3V0dGVyU2l6ZSl9fSxkZXN0cm95OnB9fX0pO1xuIl19
