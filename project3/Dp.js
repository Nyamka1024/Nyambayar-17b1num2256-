"use strict";
function DatePicker(id, callBackFunc) {
this.id=id;
// call callBackFunc on click
this.callBackFunc=callBackFunc;
// create container
var containerClassName="container";
var containerDiv=document.createElement("DIV");
containerDiv.classList.add(containerClassName);
document.getElementById(id).appendChild(containerDiv);
this.containerDiv=containerDiv;
}
DatePicker.prototype.render=function(date) {
var i,j;
// metadata for names of weeks and months
var num2weekday=["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var num2month=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// a class
function MyDate(date) {
this.year=date.getFullYear();
this.month=date.getMonth()+1;
this.day=date.getDate();
this.weekday=date.getDay()%7;
this.isCurrentMonth=true;
}
MyDate.prototype.toString= function() {
return this.month+"/"+this.day+"/"+this.year;
};