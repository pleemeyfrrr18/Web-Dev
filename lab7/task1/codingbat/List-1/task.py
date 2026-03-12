def reverse3(nums):
    nums.reverse()
    return nums

def max_end3(nums):
    max_val = max(nums[0], nums[2])

    return [max_val, max_val, max_val]

def sum_first_two(nums):
    if len(nums) >= 2:
        return nums[0] + nums[1]
    elif len(nums) == 1:
        return nums[0]
    else:
        return 0
    
def middle_way(a, b):
    return [a[1], b[1]]

def make_ends(nums):
  return [nums[0], nums[-1]]