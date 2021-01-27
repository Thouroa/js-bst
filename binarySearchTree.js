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
function Inorder(node, search) {
    if (!node) return
    Inorder(node.left, search)
    console.log(node.value)
    if (node.value == search) return
    Inorder(node.right, search)
}

//Preorder: Root, Left, Right
function Preorder(node, search) {
    if (!node) return
    console.log(node.value)
    if (node.value == search) return
    Preorder(node.left, search)
    Preorder(node.right, search)
}

//Postorder: Left, Right, Root
function Postorder(node, search) {
    if (!node) return
    Postorder(node.left, search)
    Postorder(node.right, search)
    console.log(node.value)
    if (node.value == search) return
}

function ReadFile(path) {
    let reader = require('fs')
    let data = ""
    try {
        data = reader.readFileSync(path, 'utf8')
    } catch (err) {
        console.error(err)
        return ""
    }
    return data
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
if (myArgs.length != 2) {
    const path = require('path');
    const basename = path.basename(process.argv[1]);
    console.error(`Usage: node ${basename} <tree_file_path> <search_value>`);
    process.exit(1);
}

const searchNode = myArgs[1]

let treestr = ReadFile(myArgs[0])
let treenodes = treestr.split(' ')

for (node of treenodes) {
    tree.push(node)
}

console.log("Inorder:")
Inorder(tree.root, searchNode)
console.log("Preorder:")
Preorder(tree.root, searchNode)
console.log("Postorder:")
Postorder(tree.root, searchNode)
