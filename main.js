function mergeSort(array) {
    let lastIndex = array.length - 1;

    if(array.length !== 1 && lastIndex % 2 !== 0) {
        let left = array.slice(0, (lastIndex/2).toFixed(0));
        left = mergeSort(left);
        let right = mergeSort(array);
    } else if(array.length !== 1 && lastIndex % 2 === 0) {
        let left = array.slice(0, (lastIndex/2));
        left = mergeSort(left);
        let right = mergeSort(array);
    } 

    // merge
    if(array.length = 1) {
        return array;
    }

    let sorted = [];
    while(left.length !== 0) {
        let tempL = left.shift();
        let tempR = right.shift();
        if(tempL < tempR) {
            sorted.push(tempL);
            tempL = left.shift();
        } else if(tempL > tempR) {
            sorted.push(tempR);
            tempR = right.shift();
        } else if(tempL === tempR) {
            sorted.push(tempL);
            tempL = left.shift();
            tempR = right.shift();
        }
    }
    
    return sorted;
}

class Node {
    constructor() {
        right = null;
        left = null;
    }
}

function balancedTree(array, start, end) {
    if(start > end) {
        return null;
    }

    let mid = Math.floor((start + end)/2);
    let root = new Node(array[mid]);

    root.left = balancedTree(array, start, mid-1);
    root.right = balancedTree(array, mid+1, end);

    return root;
}

class Tree {
    constructor() {
        root = null;
    }

    buildTree(array) {
        // sort the given array
        // sort the left half
        // sort the right half
        // merge the sorted halves
        // recursively slice the array in half
        // merge the array
        let sortedArr = mergeSort(array);

        // build the balanced binary search tree
        return balancedTree(array, 0, array.length - 1);

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