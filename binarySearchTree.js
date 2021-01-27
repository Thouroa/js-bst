function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() { //Default, null tree
    this.root = null
}

BinarySearchTree.prototype.push = function (value) {
    let root = this.root //get root value
    if (!root) { //root undefined
        this.root = new Node(value) //create a new root
        return
    }

    let currentNode = root
    const newNode = new Node(value)

    while (currentNode) { //tree traversals
        if (value < currentNode.value) { //value < currentNode, go left
            if (!currentNode.left) { // left node not exist
                currentNode.left = newNode
                break
            } else { //already existed, go next node
                currentNode = currentNode.left
            }
        } else { //value >= currentNode, go right
            if (!currentNode.right) { //right node not exist
                currentNode.right = newNode
                break
            } else { //already existed, go next node
                currentNode = currentNode.right
            }
        }
    }
}

//Inorder: Left, Root, Right
function Inorder(node) {
    if(!node)return
    Inorder(node.left)
    console.log(node.value)
    Inorder(node.right)
}

//Preorder: Root, Left, Right
function Preorder(node) {
    if(!node)return
    console.log(node.value)
    Preorder(node.left)
    Preorder(node.right)
}

//Postorder: Left, Right, Root
function Postorder(node){
    if(!node)return
    Postorder(node.left)
    Postorder(node.right)
    console.log(node.value)
}

//Create a new tree
/*---------
    4
  2   6
 1 3 5 7

// Param: 4 2 6 1 3 5 7

// Inorder: 1, 2, 3, 4, 5, 6, 7
// Preorder: 4, 2, 1, 3, 6, 5, 7
// Postorder: 1, 3, 2, 5, 7, 6, 4
---------*/
let tree = new BinarySearchTree()

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
for(arg of myArgs){
    tree.push(arg)
}

console.log("Inorder:")
Inorder(tree.root)
console.log("Preorder:")
Preorder(tree.root)
console.log("Postorder:")
Postorder(tree.root)

