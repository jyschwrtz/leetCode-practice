# //
# // You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
# //
# // You may assume the two numbers do not contain any leading zero, except the number 0 itself.
# //
# // Example
# //
# // Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# // Output: 7 -> 0 -> 8
# // Explanation: 342 + 465 = 807.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}

# // def add_two_numbers(l1, l2)
# //   first = []
# //   second = []
# //   while true
# //     first.unshift(l1.val)
# //     break if l1.next == nil
# //     l1 = l1.next
# //   end
# //   while true
# //     second.unshift(l2.val)
# //     break if l2.next == nil
# //     l2 = l2.next
# //   end
# //   total = first.join("").to_i + second.join("").to_i
# //   total.to_s.split("").reverse.map(&:to_i)
# // end

def add_two_numbers(l1, l2)
  result = []
  carry = 0
  while true
    if l1.nil? || l1.val == nil
      p = 0
    else
      p = l1.val
    end
    if l2.nil? || l2.val == nil
      q = 0
    else
      q = l2.val
    end
    total = p + q + carry
    num = total % 10
    carry = total / 10
    result.push(num)
    break if (l1.nil? || l1.next == nil) && (l2.nil? || l2.next == nil)
    l1 = l1.next unless l1.nil?
    l2 = l2.next unless l2.nil?
  end
  if carry > 0
    result.push(carry)
  end
  result
end
