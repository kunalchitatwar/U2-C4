// write js code here corresponding to favourites.html
var tr=document.createElement("tr")
var number=document.createElement("td");
var teamA=document.createElement("td");
var teamB=document.createElement("td");
var date=document.createElement("td");
var venue=document.createElement("td");
var arr=JSON.parse(localStorage.getItem("schedule"));
console.log(arr);
arr.map(function(ele){
    

number.append(ele.Number);

teamA.append(ele.TeamA);

teamB.append(ele.TeamB);

date.append(ele.Date);

venue.append(ele.Venue);
var fav=document.createElement("td");
var btn=document.createElement("button");
btn.innerText="Remove"
btn.style.color="red";
btn.style.fontWeight="bold";
 btn.addEventListener("click",log)
 function log()
 {
    tr.remove();

 }
fav.append(btn);

tr.append(number,teamA,teamB,date,venue,fav);
document.querySelector("tbody").append(tr);

})