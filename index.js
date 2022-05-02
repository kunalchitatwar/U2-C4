// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",data)
var arr=[ ];
   
   function data()
  {
    event.preventDefault();
    var number=document.querySelector("#matchNum").value; 
    var teamA=document.querySelector("#teamA").value; 
   var teamB= document.querySelector("#teamB").value;  
   var date = document.querySelector("#date").value;
   var venue= document.querySelector("#venue").value;  

   obj={
       Number:number,
       TeamA:teamA,
       TeamB:teamB,
       Date:date,
       Venue:venue,
   }
   arr.push(obj)
   localStorage.setItem("schedule",JSON.stringify(arr))
   window.location.href="matches.html"
}