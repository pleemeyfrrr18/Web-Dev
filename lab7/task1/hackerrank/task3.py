from datetime import datetime

t = int(input())

for _ in range(t):
    t1 = input()
    t2 = input()

    format = "%a %d %b %Y %H:%M:%S %z"

    time1 = datetime.strptime(t1, format)
    time2 = datetime.strptime(t2, format)

    diff = abs(int((time1 - time2).total_seconds()))

    print(diff)