import add from '@monodemo/common'

const addAndMultiply = (a: number, b:number, c:number) => {
    return add(a, b) * c ;
} 

console.log(addAndMultiply(1, 2, 3));

export default addAndMultiply;
