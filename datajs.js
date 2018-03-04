 function getfile(file,callback) {
  var obj=new XMLHttpRequest();
  obj.overrideMimeType("application/json");
  obj.open("GET", file, true);
  obj.onreadystatechange=function() {
    if (obj.readyState === 4 && obj.status == "200") {
      callback(obj.responseText);
    }
  };
  obj.send();
}

getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
  eduinfo(data.education);
  skills(data.skills);
});

var main=document.querySelector('.flex-parent');

function basicinfo(basic){
 var profile=document.getElementById("basic");
 var name=document.createElement("h2");
 name.innerHTML=basic.name;
 profile.appendChild(name);
 var phone=document.createElement("h3");
 phone.innerHTML=basic.phone;
 profile.appendChild(phone);
 var email=document.createElement("h3");
 email.innerHTML=basic.email;
 profile.appendChild(email);
}
var right=document.createElement("div");
right.classList.add("fz-child");
//append
main.appendChild(right);
//education div
var e1=document.createElement("div");
e1.classList.add("edu");
//append
right.appendChild(e1);

var h1=document.createElement("h1");
h1.setAttribute("id","heading");
h1.textContent=("Education Details");

//append
e1.appendChild(h1);
// console.log(right);
function eduinfo(education) {
  for(i in education){
    //course creation
    var h2=document.createElement("h2");
    //h2.classList.add("edu1");
    h2.textContent=education[i].course;
    //append
    h1.appendChild(h2);

    //college creation
    var h3=document.createElement("h3");
    h3.classList.add("edu2");
    h3.textContent=education[i].college;
    //append
    h2.appendChild(h3);


    //for getting data
    var ul=document.createElement("ul");
    ul.classList.add("edu3");
    h3.appendChild(ul);


    for(j in education.data){
      var li=document.createElement("li");
      li.textContent=education[i].data[j];
      ul.appendChild(li);
    }

}
}
function skills(food){
  var table=document.createElement("table");
  var row="";
  for(var k=0;k<food.length;k++){
    row+="<tr><td><strong>"+food[k].name+"</strong></td><td>"+food[k].info+"</td></tr>";
  }
  table.innerHTML=row;
  right.appendChild(table);
}
