const server_grab= "https://api.battlemetrics.com/servers?filter[game]=rust&filter[countries][]=US&page[size]=100";
let server_name = "";
  let output= '';
fetch(server_grab)
.then(response => {
  return response.json();

})
.then(data => {
  console.log(data.data);
  for(i =0;i < data.data.length;i++){
 let tag_search = data.data[i].attributes.details.rust_description;
 let tags =[];
  wipe = data.data[i].attributes.details.rust_last_wipe;
  date = new Date(wipe);
  date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
  
if(data.data[i].attributes.details.rust_modded === false){
  tags.push("Vanilla")
}else{
  tags.push("Modded")
}
  if(tag_search.split(" ").includes("2x") ) {
tags.push("2X")

  }

  output += `
         <div class="col-md-3">
           <div class="well text-center">

             <h5>${data.data[i].attributes.name}</h5>
             <img src="${data.data[i].attributes.details.rust_headerimage}">
             <ul class="list-group">
              <li class="list-group-item"><strong>Current Player Count:</strong> ${data.data[i].attributes.players}</li>
              <li class="list-group-item"><strong> Last Wipe: </strong>${date} </li>
              <li class="list-group-item"><strong>Description:</strong> ${data.data[i].attributes.details.rust_description}</li>
              <li class="list-group-item"><strong>Tags:</strong> ${tags}</li>
              <li class="list-group-item"><strong></strong> </li>
              <li class="list-group-item"><strong></strong> </li>
              <li class="list-group-item"><strong></strong> </li>
            </ul>

           </div>
         </div>
       `;

}
document.getElementById('server').innerHTML = output;


})
