def count_evens(nums):
    return len([i for i in nums if i % 2 == 1])

def big_diff(nums):
    return nums[max(nums)] - nums[min(nums)]

def centered_average(nums):
    nums.sort()
    total_sum = sum(nums[1:-1])
    count = len(nums) - 2
    centered_avg = total_sum // count
    
    return centered_avg

def sum13(nums):
    sum = 0
    i = 0
    while nums[i] != 13 and i < len(nums):
        sum += nums[i]
        i+=1

    return sum

print(sum13([1, 2, 2, 1, 13]))