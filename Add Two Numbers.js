class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while(l1 !== null || l2 !== null){
        let sum = carry ;
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    if(carry > 0){
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};

//function to create a linked list from an array
function createLinkedListFromArray(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

//function to convert a linked list to an array
function linkedListToArray(head){
    let result = [];
    while(head !== null){
        result.push(head.val);
        head = head.next;
    }
    return result;
}


//Example usage:
let l1 = createLinkedListFromArray([2,4,3]);
let l2 = createLinkedListFromArray([5,6,4]);
let result = addTwoNumbers(l1,l2);
console.log(linkedListToArray(result));