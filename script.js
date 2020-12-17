
let birthYear= null;
let age= null;
let name = null;
let currentYear = null;


$("button").click(function() {
  console.log('year', birthYear)
  console.log('age', age)
  birthYear =$(".year").val();
  console.log('year', birthYear)
  currentYear = $(".current-year").val();
  age = (currentYear - birthYear)
  console.log('age:', age)
  name = $(".name").val();
  $(".message").html(`${name} is ${age} cool`); });