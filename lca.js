// lca(root, p, q)
// if, 2 recursive calls, if, return

// runtime: O(n)




















































class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    lowestCommonAncestor(root, p, q) {
        if (!root || root === p || root === q) {
            return root;
        }

        const leftLCA = this.lowestCommonAncestor(root.left, p, q);
        const rightLCA = this.lowestCommonAncestor(root.right, p, q);

        if (leftLCA && rightLCA) {
            return root;
        }

        return leftLCA || rightLCA;
    }
}

// Driver Code
/*
Input Tree:
        5
    / \
    4   6
    \    \
    3    7
            \
            8
*/
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.right = new TreeNode(3);
root.right = new TreeNode(6);
root.right.right = new TreeNode(7);
root.right.right.right = new TreeNode(8);

const binaryTree = new BinaryTree();

const p = root.left;
const q = root.left.right;

const lca1 = binaryTree.lowestCommonAncestor(root, p, q);
console.log(`LCA of ${p.val} and ${q.val} is ${lca1.val}`);

const x = root.right.right;
const y = root.left.right;

const lca2 = binaryTree.lowestCommonAncestor(root, x, y);
console.log(`LCA of ${x.val} and ${y.val} is ${lca2.val}`);