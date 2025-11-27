function mergeSort(array) {
    let n = array.length;

    if(array.length === 0) {
        return array;
    }

    if(array.length === 1) {
        return array;
    }

    let left = array.slice(0, Math.floor(n/2));
    let right = array.slice(Math.floor(n/2));

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    let sorted = [];

    while(sortedLeft.length && sortedRight.length) {
        if(sortedLeft[0] < sortedRight[0]) {
            sorted.push(sortedLeft.shift());
        } else if(sortedLeft[0] > sortedRight[0]) {
            sorted.push(sortedRight.shift());
        } else if(sortedLeft[0] === sortedRight[0]) {
            sorted.push(sortedLeft.shift());
            let erase = sortedRight.shift();
        }
    }

    return sorted.concat(sortedLeft, sortedRight);
}

class Node {
    constructor(data) {
        this.data = data;
        right = null;
        left = null;
    }
}

function balancedTree(array, start, end) {
    if(start > end) {
        return null;
    }

    let mid = Math.floor((start+end)/2);
    let root = new Node(array[mid]);

    root.left = balancedTree(array, start, mid-1);
    root.right = balancedTree(array, mid+1, end);

    return root;
}

class Tree {
    constructor(array) {
        this.array = array;
        // root = this.buildTree(arr);
    }

    buildTree(arr) {
        // sort the given array
        // sort the left half
        // sort the right half
        // merge the sorted halves
        // recursively slice the array in half
        // merge the array
        let sortedArr = mergeSort(array);

        // build the balanced binary search tree
        return balancedTree(sortedArr, 0, sortedArr.length - 1);
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }


    insert(value) {

    }

    deleteItem(value) {

    }

    find(value) {

    }

    levelOrderForEach(callback) {

    }

    inOrderForEach(callback) {

    }

    preOrderForEach(callback) {

    }

    height(value) {

    }

    depth(value) {

    }

    isBalanced() {
       
    }

    rebalance() {

    }
}


console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));