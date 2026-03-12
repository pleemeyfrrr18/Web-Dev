s = input()

counts = {}

for ch in s:
    if ch in counts:
        counts[ch] += 1
    else:
        counts[ch] = 1

sorted_items = sorted(counts.items(), key=lambda x: (-x[1], x[0]))

for ch, cnt in sorted_items[:3]:
    print(ch, cnt)