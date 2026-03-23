bin = int(input())
dec = deg = 0

while (bin > 0):
    x = bin % 10
    bin //= 10
    dec += x * pow(2, deg)
    deg += 1

print(dec)