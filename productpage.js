const urlParams = new URLSearchParams(window.location.search);
const id= urlParams.get("id");
const url ="https://louisiana-8dbe.restdb.io/rest/louisiana/"+ id;
const options={
    headers:{
        "x-apikey":"6152e0afdfa7346e2f9690f0"
    },
};

fetch( url, options)
.then (function(res){
    return res.json();
})
.then(function(data){
    artlist(data);
});
function artlist(art){
    console.log(art);




document.querySelector(".image-fetched").src=art.Image;

document.querySelector("h3").textContent=art.Name
document.querySelector(".artist-name").textContent=art.Artist
document.querySelector(".year").textContent=art.Year
// document.querySelector(".photographer").textContent=`${art.Photographer}`
// document.querySelector(".copyright").textContent=`${art.CCopyright}`
}