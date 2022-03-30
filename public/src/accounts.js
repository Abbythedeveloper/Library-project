
function findAccountById(accounts, id) {
 //native array method .find() to stop when exact ID is found
  const IDfinder = accounts.find((account)=> account.id ===id)
//return the .find() array with information needed
  return IDfinder;
}



function sortAccountsByLastName(accounts){
  //classic sort statement, just return for consolidation 합병
  //nameA = let account in accounts. account 한개 한개 
  return accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last) ? 1 : -1);
  // you can do 

  // nameA.name.last.toLowerCase()>nameB.name.last.toLowerCase() I think the reason is 
  // it is already sorted by one Case.
}
















//얘는 나중에 주석처리 하고 밑에 있는애로 하자 !
  //parameter의 account는 accounts의 한개.
  //1. account.id 가  book.borrow.id 에서 몇번언급되는가? //
  // books 한개씩 추가 
  //return 1. the number of times the account's ID appears in any book's `borrows/
//---------------------------------------------------------------
   //establish counter, to rack up a point every time an ID matches
 
 //native array methods and forEach to loop through and check IDs


  // borrowID = {
  //   id: "5f446f2e2cfa3e1d234679b9", returned: false,
  // }
//---너를 살리자-------

function getTotalNumberOfBorrows(account, books) {

  //establish counter, to rack up a point every time an ID matches
  let counter = 0;
  
  //shorten account.id for quicker access
  const accountInfo = account.id; 
  
  //native array methods and forEach to loop through and check IDs
  books.forEach(book => book.borrows.forEach(isBorrowed =>
   {
     if(accountInfo === isBorrowed.id) 
    counter++ 
  }));  
  //return my counter to see how many times account was used under borrows
  return counter; 
}







//이방법도 있음
// getTotalNumberOfBorrows(account, books){
//   let total = 0
//   books.forEach((count) => {
//     const{borrows} = count
//     borrows.forEach((count2) =>{
//       if(count2.id === acount.id){
//         total ++
//       }

//     })
//   })
//   return total
// }



//   이방법도  있음
//   function getTotalNumberOfBorrows(account, books) {

//   establish counter, to rack up a point every time an ID matches
//   let counter = 0;
  
//   shorten account.id for quicker access
//   const accountInfo = account.id; 
  
//   native array methods and forEach to loop through and check IDs
//   books.forEach((book) => book.borrows.forEach((isBorrowed) => { if (accountInfo === isBorrowed.id) 
//   counter++}));

//   return my counter to see how many times account was used under borrows
//   return counter; }
  

//////////////////////////////////4번째 
////   It returns an array of book objects, including author information, that represents all books _1.currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.

// An account object.
// - An array of all book objects.
// - An array of all author objects.
//Goal : return array of books with author's detail(borrowed by given account and not returned yet : return




// function getBooksPossessedByAccount(account, books, authors) {
//   //filter through each book in books
//   return (
//     books
//       //checking to see if the most recent transaction matches our account and that it hasn't been returned
//       .filter(
//         (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
//       )
//       //map through all the filtered books to add the author object to it
//       .map((book) => { 
        
//         book ["author"] = authors.find((author) => author.id === book.authorId);
//         //이말은 즉슨 오른쪽애의 조건이 충족되면 걔를 찾아서 왼쪽애를 console.한다.book [author]이게 밀어넣은거 의미
//         //authors.find((author) => author.id === book.authorId); 이름이 같은걸 찾아서 []에 담아서 준다.
//         return book;
//       })
//   );
// }
function getBooksPossessedByAccount(account, books, authors) {
  //filter through each book in books
  return (
    books
      //checking to see if the most recent transaction matches our account and that it hasn't been returned
      .filter(
        (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
      )
      //map through all the filtered books to add the author object to it
      .map((book) => {
        book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
      })
  );
}
























//   ///1way shared by team member;
// function getBooksPossessedByAccount(account, books, authors) {
//   // return an array of books with authors detail that have been borrowed by given account and not yet returned
//   let userID = account.id 
//   let currentlyBorrowed = []

//   for (let book in books){
//     if (userID === books[book].borrows[0].id && books[book].borrows[0].returned === false)
//     currentlyBorrowed.push(books[book])
//   }
//   // console.log(currentlyBorrowed)
//   for (let borrowed in currentlyBorrowed){
//     thisBorrow = currentlyBorrowed[borrowed]
//     for (let author in authors){
//       if (thisBorrow.authorId === authors[author].id){
//         thisBorrow.author = authors[author]
//       }
//     }
//   }
//   return currentlyBorrowed
// }



  

























module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};


