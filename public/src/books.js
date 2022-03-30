
function findAuthorById(authors, id) {
  return authors.find((author)=> author.id === id)}

  function findBookById(books, id) {

    //return the book that matches the input id
    return books.find((book) => id === book.id);
    
  } 

// //It returns the book object that has the matching ID.
// function partitionBooksByBorrowedStatus(books) {
//   //create two arrays of filtered books: those that are returned and those that are not
//   const returnedbook = books.filters((book)=> book.borrows[0].returned)
//   const notreturnedbook = books.filters((book)=>!book.borrows[0].returned)
//   //return the arrays in the order that the test checks for them 
// // return [returnedbook, notreturnedbook]
// }

function partitionBooksByBorrowedStatus(books) {
  //create two arrays of filtered books: those that are returned and those that are not
  let isReturned = books.filter((book) => book.borrows[0].returned);
  let notReturned = books.filter((book) => !book.borrows[0].returned);
  //return the arrays in the order that the test checks for them 
  return [ notReturned, isReturned ];
}
 //It returns an array with two arrays inside of it

// don't need to loop through all of the borrow .. no that's what teacher said. that's why book.borrow[0]
// The first array contains book objects that represent the books _that are currently checked out_, while the second array contains book objects that represent the books _that have been returned._ You can check for the return status by looking at the first transaction object in the `borrows` array.

// //.slice(0, 10);
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 


// function getBorrowersForBook(book, accounts) {
//   return book.borrows
//   //map through the borrows
//   // {
//   //   id: "5f446f2e2cfa3e1d234679b9", returned: false,
//   // }
//   // why book.borrows.map? //47 48ㅇㅣ 1ㄱㅐ
//   .map(
//      borrow => {
//       let account = accounts
//   .find(
//      acc => acc.id === borrow.id)
//      return { ...borrow, ...account}
//  })
// }
//Book ㅇㅣ ㅎㅏㄴㅏㄴㅣㄲㅏ

// function getBorrowersForBook(book, accounts) {
//   return book.borrows.map(borrow => {
//     let account = accounts.find(acc => acc.id === borrow.id)
//     return { ...borrow, ...account}
//   }).slice(0, 10)
// }






// return book.borrows.map((borrow)=> )
//얘네가 겹치는 애들하나로 합치고 안겹치는 애들 하나로 묶어줌 {안에서}
// {
//  {
//       id: "5f446f2e2cfa3e1d234679b9", returned: false,
//     },
//     {
//       id: "5f446f2ecfaf0310387c9603",
//       picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
//       age: 25,
//       name: {
//         first: "Esther",
//         last: "Tucker",
//       },
//       company: "ZILLACON",
//       email: "esther.tucker@zillacon.me",
//       registered: "Thursday, May 28, 2015 2:51 PM",
//     },



// }
// }
      //look for each account -
          //if that account id matches
              //and if the account and borrow value match 
			
              //push the account to the borrow list


	//return the borrow list, and slice to just the top ten borrowers. not ordered, only first to show. 

  
  function getBorrowersForBook(book, accounts) {
    const {borrows} = book
    let output = []
    let returnlist = []
    for(let borrow in borrows){ 
      for(let account in accounts){
        if(borrows[borrow].id===accounts[account].id){
          accounts[account].returned = borrows[borrow].returned
          output.push(accounts[account])
        }
      }
    }
    for(let i=0;i<10;i++){
      if(output[i]){returnlist.push(output[i])}
    }
    return returnlist
  }










module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
}




