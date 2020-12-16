// https://app.codility.com/demo/results/training2MAJDA-ZJP/
function solution1(A) {
    
    let len = A.length

    if(len === 0) return 0

    const hash = {}
    for(const value of A) {
        if(hash[value] === undefined) {
            hash[value] = 1
        } else {
            hash[value]++
        }
    }

    let distincts = 0
    for(const prop in hash) {
        distincts++
    }

    return distincts
}

// alternatively you can use the sort() method to solve the problem
// https://app.codility.com/demo/results/training9HZMFT-KZP/
function solution2(A) {
    const len = A.length
    if(len === 0) return 0

    A.sort( (a,b) => a-b )
    let distinct = 1
    for(let x = 1; x<len; x++) {
        if( A[x] !== A[x-1]) {
            distinct++
        }
    }

    return distinct
}