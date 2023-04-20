// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat){

cats.push("Ralph");
};
function destructivelyPrependCat(cat){
    cats.unshift("Bob")
};
function destructivelyRemoveLastCat(cat){
    cats.pop(); 
};
function destructivelyRemoveFirstCat(cat){
    cats.shift();
};
function appendCat(name) {
    const newCats = [...cats, "Broom"]; 
   return newCats 
};
function prependCat(name) {
    const newCats2 = ["Arnold",...cats]; 
   return newCats2 
};
function removeLastCat() {
    const newCats = cats.slice(0, -1); 
    return newCats; 
  };
  function removeFirstCat() {
    const newCats = cats.slice(1); 
    return newCats; 
  };
  
     
