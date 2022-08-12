let div1 = document.createElement("div");
div1.setAttribute("class","head");
let head = document.createElement("header");
head.innerHTML='Brewery Company List';
div1.append(head)
document.body.append(div1);


let div2 = document.createElement("div");
div2.setAttribute("class","img");
let img1 = document.createElement("img");
img1.setAttribute("class","img1");
img1.setAttribute("src","photos/brew.jpg");
img1.setAttribute("alt","No Image");

div2.append(img1)
document.body.append(div2);

let div3 = document.createElement("div");
div3.setAttribute("class","is");

let input = document.createElement("input");
input.setAttribute("type","search");
input.setAttribute("id","search");
input.setAttribute("placeholder","Search box");
input.addEventListener("keyup",foo2);



div3.append(input);
document.body.append(div3);


let div4 = document.createElement("table");
div4.setAttribute("class","table table-hover table-dark");
div4.setAttribute("id","mytable");
let thead=document.createElement("thead");
let tr1=document.createElement("tr");
tr1.innerHTML=`
<th scope="col">SL.NO</th>
  <th scope="col">Name</th>
  <th scope="col">Type</th>
  <th scope="col">Address</th>
  <th scope="col">Phone No</th>
  <th scope="col">Website</th>`

let tbody =document.createElement("tbody")

foo1();
  async function foo1(){
    try{let api = await fetch("https://api.openbrewerydb.org/breweries");
    let res = await api.json();
    for(let i=0; i<=res.length-1; i++){
      
      let tr2 =document.createElement("tr")
      let sum = 1;
      tr2.innerHTML=`

   <td>${sum + i}</td>
  <td>${res[i].name}</td>
  <td>${res[i].brewery_type}</td>
  <td>${res[i].address_2}</td>
  <td>${res[i].phone}</td>
  <td>${res[i].website_url}</td>`
    
  tbody.append(tr2);
    }
  
    thead.append(tr1);
    div4.append(thead,tbody);
    document.body.append(div4)
  }catch(error1){console.log(error1);}
  };

  function foo2(){
let filter =  document.getElementById("search").ariaValueMax.toUpperCase();
let mytable =document.getElementsByTagName("tr")

    
  }
  




   


