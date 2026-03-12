n = int(input())

words = []
counts = {}

for _ in range(n):
    w = input()
    words.append(w)
    
    if w in counts:
        counts[w] += 1
    else:
        counts[w] = 1

print(len(counts))
print(' '.join(str(counts[w]) for w in dict.fromkeys(words)))