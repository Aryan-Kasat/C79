var student_array=[];
function submit(){
    var name1=document.getElementById("name_1").value;
    student_array.push(name1);
    var name2=document.getElementById("name_2").value;
    student_array.push(name2);
    var name3=document.getElementById("name_3").value;
    student_array.push(name3);
    var name4=document.getElementById("name_4").value;
    student_array.push(name4);
    var name5=document.getElementById("name_5").value;
    student_array.push(name5);
    document.getElementById("display_name").innerHTML=student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    document.getElementById("display_name").innerHTML=student_array;
}