def print_full_name(first, last):
    print(f"Hello {first} {last}! You just delved into python.")

if __name__ == '__main__':
    firstName = input().strip()
    lastName = input().strip()
    print_full_name(firstName, lastName)