#https://1337code.xyz/medium/3sum-closest

from math import *

def sum_closest(nums, target):
    x, y, z = 0, 1, 2
    closest = nums[x] + nums[y] + nums[z]
    while x < len(nums)-2:
        temp_sum = nums[x] + nums[y] + nums[z]
        if abs(temp_sum-target) < closest:
            closest = temp_sum
        if z == len(nums)-1:
            if y == len(nums)-2:
                x += 1
                y = x+1
                z = y+1
            else:
                y += 1
                z = y+1
        else:
            z += 1
    print("Output:",closest)

sum_closest([-1,2,1,-4], 1)