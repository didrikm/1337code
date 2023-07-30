#https://1337code.xyz/hard/binary-tree-maximum-path-sum

class Node():

    def __init__(self, value, binList):
        self.value = value
        self.left_child = None
        self.right_child = None
        self.binList = binList
        
def binTree(binList, i=0):
    
    if i < len(binList):
        value = binList[i]
        if value == None:
            return
        node = Node(value, binList)
        node.left_child = binTree(binList, i * 2 + 1)
        node.right_child = binTree(binList, i * 2 + 2)
        return node

def pathFinder(root):

    """edge case where all nodes are less than zero"""
    try:
        neg_max = float("-inf")
        for x in root.binList:
            if x != None:
                neg_max = max(neg_max, x)
        if neg_max < 0 and neg_max != float("-inf"):
            return neg_max
    except:
        pass

    """main algorithm"""
    try:
        left_sum = max(0, pathFinder(root.left_child))
        right_sum = max(0, pathFinder(root.right_child))
        current_path_sum = root.value + left_sum + right_sum
        return max(current_path_sum, max(left_sum, right_sum))
    except:
        return 0

print("expected 6, output:",pathFinder(binTree([1,2,3])))
print("expected 42, output:",pathFinder(binTree([-10,9,20,None,None,15,7])))
print("expected 35, output:",pathFinder(binTree([-10,-9,20,None,None,15,-7])))
print("expected 20, output:",pathFinder(binTree([-10,-9,-20,None,None,15,-7,None,None,None,None,5])))
print("expected -1, output:",pathFinder(binTree([-1,-2,-3])))