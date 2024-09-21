
class ListNode {
    constructor(val=0, next=null){
        this.val = val;
        this.next = next;
    }
}

function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Example lists: [1, 2, 4] and [1, 3, 4]
let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);

function mergeTwoLists(l1, l2) {
    // Create a dummy node to act as the starting point of the merged list
    let dummy = new ListNode();
    let current = dummy;

    // Pointers for l1 and l2
    let p1 = l1;
    let p2 = l2;

    // Iterate while both lists are not empty
    while (p1 !== null && p2 !== null) {
        console.log('in while loop')
        console.log({p1})
        console.log({p2})

        if (p1.val <= p2.val) {
            console.log('in if statement1')

            console.log({p1})
            console.log({p2})

            current.next = p1;
            p1 = p1.next;
        } else {
            console.log('in eklse statement1')

            console.log({p1})
            console.log({p2})
            current.next = p2;
            p2 = p2.next;
        }
        current = current.next;
    }

    // If there are remaining nodes in l1 or l2, append them
    if (p1 !== null) {
        console.log('in if statement')

        console.log({p1})
        console.log({p2})
        console.log(current)
        current.next = p1;
    } else if (p2 !== null) {
        console.log('in eklse statement2')

        console.log({p1})
        console.log({p2})
        console.log(current)
        current.next = p2;
    }

    // Return the merged list starting from the next node of dummy
    return dummy.next;
}

//Input: 
const list1 = [1,2,4]
const list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

const m = mergeTwoLists(list1, list2)
console.log({m})