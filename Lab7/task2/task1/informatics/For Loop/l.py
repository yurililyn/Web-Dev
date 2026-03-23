<<<<<<< HEAD
bin = int(input())
dec = deg = 0

while (bin > 0):
    x = bin % 10
    bin //= 10
    dec += x * pow(2, deg)
    deg += 1

=======
bin = int(input())
dec = deg = 0

while (bin > 0):
    x = bin % 10
    bin //= 10
    dec += x * pow(2, deg)
    deg += 1

>>>>>>> fbc7ea1ae068359c34b9a8bc361e97f8e39603a6
print(dec)