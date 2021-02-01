//les fonctions
//----------------------------------
// présentation
/* 
let direBonjour = (prenom, nom) => {
    console.log(`Bonjour ${prenom} ${nom}!`);
  };
  direBonjour("Nathan", "Van Dyck");
 */  
//-----------------------------------
//01
/* 
let addition = ( a , b ) =>{
    return a + b 
} 
let resultat = parseInt (addition ("5" , "2"))
console.log(resultat)
 */
//-----------------------------------
//02
/* 
let soust = ( a , b ) =>{
    return a - b 
} 
let resultat = soust ("5" , "2")
console.log(resultat)
 */
//------------------------------------
//03
/* 
let mult = ( a , b ) =>{
    return a * b 
} 
let resultat = mult ("5" , "2")
console.log(resultat)
 */
//-------------------------------------
//04
/* 
let divi = ( a , b ) =>{
    return a / b 
} 
let resultat = divi ("5" , "2")
console.log(resultat)
 */
//------------------------------------
//05
/* 
let mod = ( a , b ) =>{
    return a % b 
} 
let resultat = mod ("5" , "2")
console.log(resultat)
 */
//------------------------------------
//06
/* 
let car = ( a ) =>{
    return a * a
} 
let resultat = car ("5")
console.log(resultat)
 */
//------------------------------------
//07
/* 
let expo = ( a , b ) =>{
    return a ** b 
} 
let resultat = expo ("5" , "2")
console.log(resultat)
 */
//------------------------------------
//08
/* 
let capitalize = ( a ) =>{
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() 
} 
console.log (capitalize (prompt (" donne moi un mot ")))
 */
//-------------------------------------
//09
/* 
let calcul = ( nbr1, nbr2, operator ) =>{
    switch (operator){
        case "+" :
            return ( nbr1 + nbr2 ) 
            break
        case "*" :
            return ( nbr1 * nbr2 )   
            break 
        case "-" :
            return ( nbr1 - nbr2 )   
            break 
        case "/" :
            return ( nbr1 / nbr2 )   
            break 
        default :
            return ("valeur erronée") 
            break 
    } 

}
let a = parseInt (prompt ("donne moi un nombre "))
let b = parseInt (prompt ("donne moi un second nombre"))
let c = prompt ("donne moi un operation") 

console.log (calcul(a , b , c))
 */
//------------------------------------------
//exo_middle_fonctions
//01
/* 
let reverseNumber = (nombre) =>{
    nombre = nombre + ""
	return nombre.split("").reverse().join("")
}
console.log(reverseNumber(324))
 */
//------------------------------------------
//02         
/* 
let estPair = (a) => {
    switch (a%2){
        case (a < 0):
            return (`le chiffre ${a} est pair`)
        case (a > 5):
            return (`le chiffre ${a} est impair`)
        default :
            return (`donnée invalide`)
    }
}
console.log (estPair())
 */
//-------------------------------------------
//03
/* 
let logIn = (a) => {
    let result;
  if (a === "mdp") {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}
a = prompt ("mot de passe ?")
alert (logIn(a))
*/
//----------------------------------------
//challenge_fonction
//01

let codingSchool17 =[]
let add = (student) =>{
    codingSchool17.push (student)
    console.log (student + "rentre en classe")
}
let remove = (student) => {
    codingSchool17.splice (codingSchool17.indexOf(student))
    console.log(student + "sort de la classe")
}

add ("Antoine")
add ("Said")
add ("Abdel")
add ("Nathan")
add ("Yasmina")
remove ("Abdel")
add ("Gauthier")
remove ("Said")
remove ("Yasmina")

console.log(codingSchool17)

//----------------------------------------
//02
/* 
function estPremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
console.log(estPremier(2))
 */
//-----------------------------------------
//exo supp
/* 
let fonction = ( a, b , c ) => {
    return (`Voici la ${a}, ${b} coller en dessous de ${c}. Mais oui c'est clair`)
} 
let motA = prompt ("donne un mot")
let motB = prompt ("donne un mot")
let motC = prompt ("donne un mot")

let resultat = fonction (a,b,c)
alert (resultat)
 */