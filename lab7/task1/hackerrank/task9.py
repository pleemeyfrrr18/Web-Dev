T = int(input())

for _ in range(T):
    n = int(input())
    blocks = list(map(int, input().split()))
    
    left = 0
    right = n - 1
    last = float('inf')
    ans = "Yes"
    
    while left <= right:
        if blocks[left] >= blocks[right]:
            pick = blocks[left]
            left += 1
        else:
            pick = blocks[right]
            right -= 1
        
        if pick > last:
            ans = "No"
            break
        
        last = pick
    
    print(ans)