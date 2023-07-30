#https://1337code.xyz/hard/binary-tree-maximum-path-sum

class Node():
    def __init__(self, value):
        self.value = value
        self.left_child = None
        self.right_child = None
        
def binTree(binList, i=0):
    if i < len(binList):
        value = binList[i]
        if value == None:
            return
        node = Node(value)
        node.left_child = binTree(binList, i * 2 + 1)
        node.right_child = binTree(binList, i * 2 + 2)
        return node
    return

def pathFinder(root):
    try:
        left_sum = max(0, pathFinder(root.left_child))
        right_sum = max(0, pathFinder(root.right_child))
        current_path_sum = root.value + left_sum + right_sum
        return max(current_path_sum, max(left_sum, right_sum))
    except:
        return 0

print(pathFinder(binTree([1,2,3])))
print(pathFinder(binTree([-10,9,20,None,None,15,7])))
print(pathFinder(binTree([-10,-9,20,None,None,15,-7])))
print(pathFinder(binTree([-10,-9,-20,None,None,15,-7,None,None,None,None,5])))