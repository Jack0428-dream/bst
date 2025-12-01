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
        root = this.buildTree(array);
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


    insert(root, value) {
        //start from L-0 root
        //traverse by comparing the value with roots
        //insert the value

        if(root === null) {
            return new Node(value);
        }

        if(value < root.data) {
            root.left = this.insert(root.left, value);
        } else {
            root.right = this.insert(root.right, value);
        }

        return root;
    }

    deleteItem(root, value) {
        if(root === null) return root;

        if(root.data < value) {
            root.right = this.deleteItem(root.right, value);
        } else if(root.data > value) {
            root.left = this.deleteItem(root.left, value);
        }

        if(root.data === value && root.left === null && root.right === null) {
            root = null;
        } else if(root.data === value && root.left !== null && root.right !== null) {
            root = root.right;
        } else {
            if(root.left !== null) {
                root = root.left;
            } else {
                root = root.right;
            }
        }

        return root;
    }

    find(root, value) {
        if(root === null) return null;

        if(root.data === value) {
            return root;
        }

        if(root.data < value) {
            root.right = find(root.right, value);
            return root.right;
        } else if(root.data > value) {
            root.left = find(root.left, value);
            return root.left
        }
    }

    levelOrderForEach(callback) {
        if(typeof callback !== "function") {
            throw new Error("It needs to be a function.");
        }

        let addAdr = [];
        if(this.root === null) return;

        addAdr.push(this.root);

        while(addAdr.length > 0) {
            let current = addAdr.shift();

            if(current.left !== null) {
                addAdr.push(current.left);
            }

            if(current.right !== null) {
                addAdr.push(current.right);
            }

            callback(current);
        } 
    }

    inOrderForEach(root, callback) {
        if(typeof callback !== "function") {
            throw new Error("It needs to be a function.");
        }

        if(root === null) return; 
        this.inOrderForEach(root.left, callback);
        callback(root);
        this.inOrderForEach(root.right, callback);
    }

    preOrderForEach(root, callback) {
        if(typeof callback !== "function") {
            throw new Error("It needs to be a function.");
        }

        if(root === null) return;
        callback(root);
        this.preOrderForEach(root.left, callback);
        this.preOrderForEach(root.right, callback);
    }

    postOrderForEach(root, callback) {
        if(typeof callback !== "function") {
            throw new Error("It needs to be a function.");
        }

        if(root === null) return;
        this.postOrderForEach(root.left, callback);
        this.postOrderForEach(root.right, callback);
        callback(root);
    }

    height(value) {
        // implement traverse with iteration 
        // then return height
        let current = this.root;
        while(current !== null) {
            if(current.data === value) {
                break;
            }

            if(current.data < value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        if(current === null) return null;

        function heightsubtree(node) {
            if(child === null) {
                return 0;
            }

            let leftH = heightsubtree(node.left);
            let rightH = heightsubtree(node.right);
            return  1 + Math.max(leftH, rightH);
        }
        
        return heightsubtree(current);
    }

    depth(value) {
        let depth = 0;

        let current = this.root;
        while(current !== null) {

            if(current.data === value) {
                return depth;
            }

            if(current.data > value) {
                current = current.left;
                depth += 1;
            } else if(current.data < value) {
                current = current.right;
                depth += 1;
            }
        }

        return null;
    }

    isBalanced() {
       
    }

    rebalance() {

    }
}

