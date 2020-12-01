function TableTemplate() {

}

TableTemplate.fillIn = function(id, dict, columnName) {
  var tableElement = document.getElementById(id);
  var headerElement = tableElement.rows.item(0);


  var match = false;
  var colNum;
  var numCols = headerElement.cells.length;
  for (var j = 0; j < numCols; j++) {
    var currColName = headerElement.cells.item(j).innerHTML;
    var template = new Cs142TemplateProcessor(currColName);
    var filledCurrColName = template.fillIn(dict);
    if (filledCurrColName === columnName) {
      match = true;
      colNum = j;
    }
    headerElement.cells.item(j).innerHTML = filledCurrColName;
  }

  var numRows = tableElement.rows.length;

  if (!columnName) {
    for (var i = 1; i < numRows; i++) {
      for (var j = 0; j < numCols; j++) {
        var currCell = tableElement.rows.item(i).cells.item(j);
        var template = new Cs142TemplateProcessor(currCell.innerHTML);
        var filledCurrCell = template.fillIn(dict);
        currCell.innerHTML = filledCurrCell;
      }
    }
    return;
  }

  if (match === false) {
    return;
  }

  if (columnName) {
    for (var i = 1; i < numRows; i++) {
      var currCell = tableElement.rows.item(i).cells.item(colNum);
      var template = new Cs142TemplateProcessor(currCell.innerHTML);
      var filledCurrCell = template.fillIn(dict);
      currCell.innerHTML = filledCurrCell;
    }
    return;
  }

}