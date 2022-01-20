/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head) {
    if (head === null || head === undefined) {
        return null;
    }
    let nodes = [];
    let dfs = node => {
        if (node === null || node === undefined) {
            return null;
        }
        nodes.push(node);
        if (node.child) {
            dfs(node.child);
        }
        if (node.next) {
            dfs(node.next);
        }
    }
    dfs(head);
    head = nodes[0];
    head.child = null;
    head.prev = null;
    for (let i = 1; i < nodes.length; i++) {
        let node = nodes[i];
        let prev = nodes[i-1];
        node.child = null;
        node.prev = prev;
        prev.next = node;
    }
    return head;
};