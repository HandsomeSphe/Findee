// DEVELOPER SIDE
var batteryTopper = 200;
var namee = document.querySelector(".namee");
var year = document.querySelector(".year");
var price = document.querySelector(".price");
var batteryModel = document.querySelector(".batteryModel");

//create a new id for every new battery 
var counter = 0;

//create a prototype for batteries
var myBattery = function(laptopBrand,yearOfRelease,id,batteryModel){
    this.laptopBrand = laptopBrand,
    this.yearOfRelease = yearOfRelease,
    this.id = id,
    this.batteryModel = batteryModel
};

//create a calculator prototype for all the instances
myBattery.prototype.calculator = function(){
    return 350 + batteryTopper;
}

var devPic = document.querySelector(".img");
var subb = document.querySelector(".subb");
var img = document.querySelector(".border");



subb.addEventListener("click", function(){
    console.log(devPic.value);
    var dom = '<img src="%image%">'
    var newDom = dom.replace("%image", devPic.value);
    img.insertAdjacentHTML("beforeend", newDom);
});
var battery;

document.addEventListener("keypress", fire);

//this function will take input from the dev and put it as a new battery
function fire(){
    if(event.key === 13 || event.which === 13){
        if(namee.value.length > 0 && year.value.length > 0 && batteryModel.value.length > 0){
            counter += 1;
            //new battery with filled info from the developer
            battery = new myBattery(namee.value, year.value,counter,batteryModel.value);

            //push the new battery into the array
            H.push(battery);
            console.log(H);


            //clear and focus the fields 
            namee.value = "";
            year.value = "";
            batteryModel.value = ""
            var arr = document.querySelectorAll(".namee" + "," + ".year" + "," + ".batteryModel");
            var myArr = Array.prototype.slice.call(arr);
             myArr[0].focus();
        }
    }
};


























//USER SIDE
  // take the input from user

  let laptopName = document.getElementById("Gee");
  let laptopYearOfRelease = document.getElementById("Aee");
  let button = document.querySelector(".styler__button");
  let back =  document.querySelector(".back");
  let contaneir = document.querySelector(".contaneir");
  let sliderScroll = document.querySelector(".nav__contaneir");
  let burger = document.querySelector(".burger__icon");



//Data base for stored batteries
var H = [];


//This are the batteries I have put manually into the Data base
var hp17 = {
    laptopBrand: "hp",
    yearOfRelease: 2017,
    laptopFit: "Hp 2017",
    batteryModel: "HS04",
    calculator: function(){
        return 350 + batteryTopper;
    } 
};
var hp18 = {
    laptopBrand: "hp",
    yearOfRelease: 2018,
    laptopFit: "Hp 2018",
    batteryModel: "JC04",
    calculator: function(){
        return 350 + batteryTopper;
    } 
};
var dell17 = {
    laptopBrand: "dell",
    yearOfRelease: 2017,
    laptopFit: "dell 2017",
    batteryModel: "J340G" ,
    calculator: function(){
        return 440 + batteryTopper;
    } 
};
var dell16 = {
    laptopBrand: "dell",
    yearOfRelease: 2016,
    laptopFit: "dell latitude, E5420, E5520 SERIES",
    batteryModel: "E5420",
    calculator: function(){
        return 480 + batteryTopper;
    }
}

//Manually push this objects( technically batteries ) into an array
H.push(hp17);
H.push(dell17);
H.push(hp18);
H.push(dell16);
var fields, fieldsArr;


//Main action to show batteries
function showBtry(){
    if(laptopName.value.length > 0 && laptopYearOfRelease.value.length > 0){

        // loop throught the H array
        for(const cur of H){

           //create a funcion which will execute only true
          //check if we do have this laptop in our data base
            if(cur.laptopBrand !== laptopName.value && cur.yearOfRelease !== laptopYearOfRelease.value){
                 if(H.indexOf(cur)  < H.length -1){
                          continue;
                  
                 }else{
                        //throw a popup saying we dond recognise this battery model please browse your model
                        let browse = document.querySelector(".popUp2");
                        browse.style.display = "block";      
                        laptopName.style.display = "none";
                        laptopYearOfRelease.style.display = "none";
                        button.style.display = "none";
                        const remover2 = document.querySelector(".popUp2__remove");
                    
                        //remove the popUp
                        remover2.addEventListener("click", function(){
                        browse.style.display = "none"; 
                        laptopName.style.display = "block";
                        laptopYearOfRelease.style.display = "block";
                        button.style.display = "block";
                        laptopName.value = "";
                        laptopYearOfRelease.value = "";
                        });
                 }
            }else if(cur.laptopBrand == laptopName.value && cur.yearOfRelease == laptopYearOfRelease.value){
                
                // clear the fields
                fields = document.querySelectorAll("#Gee" + "," + "#Aee");
                fieldsArr = Array.prototype.slice.call(fields);
                fieldsArr.forEach(function(cur){
                    cur.value = "";
                });
                fieldsArr[0].focus();
    
                // moveup animation for the input and button
                laptopName.style.animation = "MoveUp 1s";
                laptopName.style.opacity = "0";
                laptopYearOfRelease.style.animation = "MoveUp 2s";
                laptopYearOfRelease.style.opacity = "0";
                button.style.animation = "moveUp 2s";
                button.style.opacity = "0";
                
                // Asynchro for displaying none all the input and buttons
                setTimeout(() =>{
                    laptopName.style.display = "none";
                    laptopYearOfRelease.style.display = "none";
                    button.style.display = "none";
                }, 2000);
               
                //display this info to the UI
                var element,html2,newHtml2, element2;
    
    
                 //Insert text to the UI
                 element = document.querySelector(".element");
                 html2 = '<div class="laptop__name">%laptopName%</div><div class="laptop__yearOfRelease">%yearOfRelease%</div><div class="laptop__batteryModel">%batteryModel%</div><div class="laptop__batteryPrice">%batteryprice%</div>'
                 newHtml2 = html2.replace("%laptopName%", "Laptop Name: " +  " " + cur.laptopBrand),
                 newHtml2 = newHtml2.replace("%yearOfRelease%","year of release: " + " " + cur.yearOfRelease),
                 newHtml2 = newHtml2.replace("%batteryModel%", "Battery Model: " +  " " + cur.batteryModel),
                 newHtml2 = newHtml2.replace("%batteryprice%", "Price: " + " " + "R" + cur.calculator()),
                 element.insertAdjacentHTML("beforeend", newHtml2);
    
    
                 //Insert the corresponding image
                 if(cur.laptopBrand == "hp" && cur.yearOfRelease  ==   2017){
                    element2 = document.querySelector(".image__contaneir");
                    html3 = '<img class="image"src= ./img/IMG-20201006-WA0005.jpg><img class="image"src= ./img/IMG-20201006-WA0005.jpg><div class="all__sider"><img class="imageB"src= ./img/IMG-20201006-WA0005.jpg><img class="imageB"src= ./img/IMG-20201006-WA0005.jpg><img class="imageB"src= ./img/IMG-20201006-WA0005.jpg><img class="imageB"src= ./img/IMG-20201006-WA0005.jpg></div>'
                    element2.insertAdjacentHTML("beforeend", html3);
                  
                 }else if(cur.laptopBrand == "hp" && cur.yearOfRelease  ==   2018){
                    element2 = document.querySelector(".image__contaneir");
                    html3 = '<img class="image"src= ./img/IMG-20201006-WA0006.jpg><img class="image"src= ./img/IMG-20201006-WA0006.jpg><div class="all__sider"><img class="imageB"src= ./img/IMG-20201006-WA0006.jpg><img class="imageB"src= ./img/IMG-20201006-WA0006.jpg><img class="imageB"src= ./img/IMG-20201006-WA0006.jpg><img class="imageB"src= ./img/IMG-20201006-WA0006.jpg></div>'
                    element2.insertAdjacentHTML("beforeend", html3);
                     
                 }
                 else if(cur.laptopBrand == "dell" && cur.yearOfRelease  ==   2017){
                    element2 = document.querySelector(".image__contaneir");
                    html3 = '<img class="image"src= ./img/IMG-20201015-WA0024.jpeg><img class="image"src= ./img/IMG-20201015-WA0024.jpeg><div class="all__sider"><img class="imageB"src= ./img/IMG-20201015-WA0024.jpeg><img class="imageB"src= ./img/IMG-20201015-WA0024.jpeg><img class="imageB"src= ./img/IMG-20201015-WA0024.jpeg><img class="imageB"src= ./img/IMG-20201015-WA0024.jpeg></div>'
                    element2.insertAdjacentHTML("beforeend", html3);
                     
                 }else if(cur.laptopBrand == "dell" && cur.yearOfRelease  ==   2016){
                    element2 = document.querySelector(".image__contaneir");
                    html3 = '<img class="image"src= ./img/IMG-20201015-WA0004.jpg><img class="image"src= ./img/IMG-20201015-WA0004.jpg><div class="all__sider"><img class="imageB"src= ./img/IMG-20201015-WA0004.jpg><img class="imageB"src= ./img/IMG-20201015-WA0004.jpg><img class="imageB"src= ./img/IMG-20201015-WA0004.jpg><img class="imageB"src= ./img/IMG-20201015-WA0004.jpg></div>'
                    element2.insertAdjacentHTML("beforeend", html3);
                     
                 }
    
                 //Animation for text
                 element.style.animation = "move 3s";
                 element.style.position = "absolute";
                 element.style.top = "40%";
                 element.style.left = "25%";
                 element.style.transform = "translate(-50%,-50%)"
    
                 //Animation for images
                 element2.style.animation = "slideIn 2s";
                 document.querySelector(".contaneir__left").style.backgroundImage = "none";
                 document.querySelector(".burger__icon").style.display = "none";
    
                 // display the back button
                 back.style.display = "block";
                 break;
        
            }
        };
    
        }else{
                //throw the nput something popUp
                const popUp = document.querySelector(".popUp");
                const remover = document.querySelector(".popUp__remove");
                laptopName.style.display = "none";
                laptopYearOfRelease.style.display = "none";
                button.style.display = "none";
                popUp.style.display = "block";
    
                //remove the popUp
                remover.addEventListener("click", function(){
                    popUp.style.display = "none"; 
                    laptopName.style.display = "block";
                    laptopYearOfRelease.style.display = "block";
                    button.style.display = "block";
                    laptopName.value = "";
                    laptopYearOfRelease.value = "";
                });
            }     
    
}

//when you push enter button
document.addEventListener("keypress",event =>{
    if(event.key === 13 || event.which === 13){
        showBtry();
      }
   });

// the send button
button.addEventListener("click", showBtry);


// click on the burger icon
burger.addEventListener("click", function(){
    contaneir.style.display = "none";
    sliderScroll.style.display = "block";
     
});


// click on the remove(cross) nav page icon
let removeNav = document.querySelector(".nav__contaneirRemover--icon");
removeNav.addEventListener("click", ()=>{
    contaneir.style.display = "block";
    sliderScroll.style.display = "none";
    
    setTimeout(() =>{
        location.reload();

    }, 1);
  
 
  
});


// when you click the back button
back.addEventListener("click", function(){
    location.reload();
});





















/* 
var  Dell3551 = new Battery("DELL", "Dell 3541", "Dell 3551, battery for 3541 3551 3458 3558");
var DellLatitude = new Battery("DELL","Dell E5420", "Latitude E5420 E5520 SERIES");
var DellE6420 = new Battery("DELL","Dell E6420/E533",  "Dell");

var  Dell3551 = new Battery("DELL", "Dell 3541", "Dell 3551, battery for 3541 3551 3458 3558");
var DellLatitude = new Battery("DELL","Dell E5420", "Latitude E5420 E5520 SERIES");
var DellE6420 = new Battery("DELL","Dell E6420/E533",  "Dell");
*/

