// Generics 
interface Response<T>{
    data: T;
    status:number;
}
const transection: Response<string>={
    data:"Successfuly transferd",
    status:200
}

// Function with Generic

function getvalue<t>(value:t):t {
 return value;
}

const name = getvalue("john");
const age = getvalue(25);
const id = getvalue(true);


//how use different types of fixd data type in generic

function getLength<item>(array: item[]):number{
    return array.length;
}

getLength<string>(['a', 'b', 'c','d']);
getLength<number>([1,2,3,4,5,6]);