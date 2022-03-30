
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
 return accounts.length;

}

// It returns a _number_ that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction object in the `borrows` array of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.

function getBooksBorrowedCount(books) {
  let borrowedCount = 0
  for(let book in books){
    let {borrows} = books[book]
    // let borrow = books[book].borrows로 바꿔도괜찮음.//
    borrows.forEach(item => {
      if(item.returned===false){borrowedCount+=1}
    });
  }
  return borrowedCount
}

////////////////////////////////////////////////////////////////////////////////////////////////

// //expected output is...
// [
//   { name: 'Science': count: 3 },
//   { name: 'SomeOtherGenre', count: 2 },
//   ...
// ]




function getMostCommonGenres(books) {
  let genres = {}
  // Gather genres and counts
  books.forEach(book => {
    // let genreExists = genres.find(genre => genre.name === book.genre)
    // Genre didn't exist, make one
    if (!genres[book.genre]) {
     genres[book.genre] = 1
    // Genre existed, update its count
    } else {
      genres[book.genre] ++
    }
  })

  let ordered = []
  for (let genre in genres) {
      ordered.push([genre, genres[genre]]);
  }
  //Sort all of the genres in descending order by their count property
 ordered.sort((x,y)=>x[1]<y[1] ? 1:-1);
 console.log(ordered)
  //slice:  past index 4 in the array (0,1,2,3,4 are left)
  let result = ordered.slice(0,5)

  // Result should be good. Return it
  //Object ordered array -> 

  let output = []
  for(let i=0;i<5;i++){
    output.push({name:ordered[i][0],count:ordered[i][1]})
  }

  return output;
}



// single parameter:
// - An array of books.
// It returns a _number_ that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction object in the `borrows` array of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.
// getBooksBorrowedCount(accounts); // 65





// function getMostCommonGenres(books) {
//   let ordered = [];
//   let genres = {}
//   let output = []
//   for(let book in books){
//     genre = books[book].genre
//     if(genres[genre]){
//       genres[genre] += 1
//     }else{
//       genres[genre] = 1
//     }
//   }
//   for (let genre in genres) {
//       ordered.push([genre, genres[genre]]);
//   }
//   ordered.sort((x,y)=>x[1]<y[1] ? 1:-1);
//   for(let i=0;i<5;i++){
//     output.push({name:ordered[i][0],count:ordered[i][1]})
//   }
//   return output;
// }


  //we'll loop through the BOOKS , not the genres. You can also use a forEach for this one
  //We KNOW it has all of the genres that the books array has, since we just went through and got all of the unique identifiers for it

// function getBorrowersForBook(book, accounts) {
//   return book.borrows.map(borrow => {
//     let account = accounts.find(acc => acc.id === borrow.id)
//     return { ...borrow, ...account}
//   }).slice(0, 10)
// }

// function sortAccountsByLastName(accounts){
//   //classic sort statement, just return for consolidation 합병
//   //nameA = let account in accounts. account 한개 한개 
//   return accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last) ? 1 : -1);
//   // you can do 

//   // nameA.name.last.toLowerCase()>nameB.name.last.toLowerCase() I think the reason is 
//   // it is already sorted by one Case.
// }



function getMostPopularBooks(books) {
  //Use _sortNSlice helper function to sort by highest and truncate to just top 5
  return _sortNSlice(
    //map through each book in books
    books.map(({ title, borrows }) => ({
      name: title, //name is the title of the book we deconstructed
      count: arrayItemCount(borrows),
    }))
  );
}

function getMostPopularAuthors(books, authors) {
  //Use _sortNSlice helper function to sort by highest and truncate to just top 5
  return _sortNSlice(
    //map through each author in authors
    authors.map(({ name: { first, last }, id }) => ({
      name: `${first} ${last}`, //name is just our current author's name
      count: _authorBorrows(books, id), //uses helper function to determine the number of times this authorId is found in each book's borrows arrays
    }))
  );
}


//helper function to sort and truncate to just first 5 items
function _sortNSlice(arr, slicer = 5) {
  const newArr = [...arr];
  return newArr
    .sort(({ count: count1 }, { count: count2 }) => count2 - count1)
    .slice(0, slicer);
}

function _authorBorrows(books, id) {
  return books.reduce((totalBorrows, { authorId, borrows }) => {
    if (authorId === id) totalBorrows += arrayItemCount(borrows);
    return totalBorrows;
  }, 0);
}


function arrayItemCount(item) {
  return item.length;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////















module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
