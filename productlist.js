const url="https://louisiana-8dbe.restdb.io/rest/louisiana"

const options={
    headers:{
        "x-apikey":"6152e0afdfa7346e2f9690f0"
    },
};
fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    //console.log(data);
    handleData(data);
  });
function handleData(showart){
    showart.forEach((art)=>{
        console.log(art);
        const template= document.querySelector("template").content;
        const copy=template.cloneNode (true);
        copy.querySelector("a").href = "productpage.html?id=" + art._id;

copy.querySelector("img").src=art.Image;
        copy.querySelector("img").alt=art.Name;

        const parent=document.querySelector("main");
        parent.appendChild(copy);
    });

}