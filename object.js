const objectBook =
{
    price: 100 + "tk",
    author: "by me",
    bookName: "Travel the World",
    category: "Adventure"
}

console.log(objectBook.bookName, objectBook.category, objectBook.price, objectBook.author);





// * Object keys
console.log(Object.keys(objectBook))



// * Object Single value changing.

objectBook.price = 200;
console.log(objectBook.price);
console.log(objectBook);



// *object output another system

console.log(objectBook["author"]);