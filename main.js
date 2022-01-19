var name_of_student_array=[];
function submit(){
   var display_student_array=[];
   for(i=1; i<=4; i++){
   var name_of_the_student=document.getElementById("name_of_the_student_"+i).value;
   console.log(name_of_the_student);
   name_of_student_array.push(name_of_the_student);

}
console.log(name_of_student_array);
var lenght_student_array=name_of_student_array.length;
console.log(lenght_student_array);

for(j=0; j<lenght_student_array; j++){
  display_student_array.push("<h4> Name : "+name_of_student_array[j]+"</h4>")
  console.log(display_student_array);


}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove=display_student_array.join(" ");
console.log(remove);
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";


}
function sorting(){
  name_of_student_array.sort();
  console.log(name_of_student_array);
  var display_student_array_sorting=[];
  var lenght_student_array=name_of_student_array.length;
  console.log(lenght_student_array);

  for(k=0; k<lenght_student_array; k++){
  display_student_array_sorting.push("<h4> Name : "+name_of_student_array[k]+"</h4>")
  console.log(display_student_array_sorting);


}
var remove_sorting=display_student_array_sorting.join(" ");
console.log(remove_sorting);
document.getElementById("display_name_without_commas").innerHTML=remove_sorting;

}






























