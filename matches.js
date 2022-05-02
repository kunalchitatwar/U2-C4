// write js code here corresponding to matches.html

    var arr=JSON.parse(localStorage.getItem("schedule"));
    console.log(arr);
arr.map(function(ele){
    
    var tr=document.createElement("tr")
    var number=document.createElement("td");
    number.append(ele.Number);
    var teamA=document.createElement("td");
    teamA.append(ele.TeamA);
    var teamB=document.createElement("td");
    teamB.append(ele.TeamB);
    var date=document.createElement("td");
    date.append(ele.Date);
    var venue=document.createElement("td");
    venue.append(ele.Venue);
    var fav=document.createElement("td");
    var btn=document.createElement("button");
    btn.innerText="Add to favourites"
    btn.style.color="green";
    btn.style.fontWeight="bold";
     btn.addEventListener("click",log)
     function log()
     {
        localStorage.setItem("schedule",JSON.stringify(arr))
        window.location.href="favourites.html"
     }
    fav.append(btn);

    tr.append(number,teamA,teamB,date,venue,fav);
    document.querySelector("tbody").append(tr);

})
