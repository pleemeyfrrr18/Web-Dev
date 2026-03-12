from itertools import groupby

s = input()

result = []

for k, g in groupby(s):
    print(len(list(g)), k)

print(*result)