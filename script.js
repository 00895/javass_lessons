console.log("Merhaba from script")

//alert("Sayfada uyarı mesajı")

document.write("<p>merhaba</p>")

//window.alert("Sayfa")




var firstname="Mehmet";
let lastname="türk";
const age=48;

console.log(firstname,lastname,age,"yaşında")
//console.log("mehmet 46 yaşında")
//console.log("memet 46 yaşında")

//PascalCase
let FirstName = "Mehmet";
//CamelCase
let firstName="Mehmet"; //kulanımı tavsiye
//Snake Case
let first_name="Mehmet"
//Kebap Case
//let first-name= "Mehmet" //CSS 'de kullanılır

console.log(FirstName,firstName,first_name)



let team1="Şahin",team2="Doğan",team3="Kartal",team4="Atmaca"

console.log(team1+team2+team3,team4)

//String

console.log("Merhaba" + "ba")

console.log( age +5)

console.log(age +"5" )

let dataString1 ="Merhaba"
let dataString2='Merhaba'+" "+age+" "+"yaşındaki"+" "+firstName;
let dataString3=`Merhaba ${age} yaşındaki ${firstName}`
console.log(dataString3)
console.log(dataString2)

 //Number
 let numberValue1=5;
 let numberValue2=5.5;
console.log(numberValue1+numberValue2)
  //Boolean
  let isMaried=true;//false;
  let ageıIsOver18=true;
   
  //underfined
  let telefon;
   console.log(telefon)
  //Null
   let nullValue=" ";
   console.log(nullValue)

   function nameFunc(params){
    let test="fonksiyon içi";
    console.log(test);
    console.log(firstName) //local scope ,global scope erişebilir
   }
   nameFunc()
   console.log(test);//test local scope olduğu için çalışmaz

   

