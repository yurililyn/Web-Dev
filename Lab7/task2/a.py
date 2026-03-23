class Instrument:
    def __init__(self, brand, type, year):
        self.brand = brand
        self.type = type
        self.year = year

    def play(self):
        return "Instrument makes sound"
    
    def __str__(self):
        return f"Brand: {self.brand}, type: {self.type}, year: {self.year}"

class eGuitar(Instrument):
    def __init__(self, brand, type, year, name, strings):
        super().__init__(brand, type, year)
        self.name = name
        self.strings = strings

    def play(self):
        return f"{self.name} makes distorted sound"
    
    def __str__(self):
        return f"Name: {self.name}, brand: {self.brand}, type: {self.type}, year: {self.year}, amount of strings: {self.strings}"
    
class Violin(Instrument):
    def __init__(self, brand, type, year, name, strings):
        super().__init__(brand, type, year)
        self.name = name
        self.strings = strings

    def getAmountOfStrings(self):
        return f"Amount of Strings: {self.strings}"
    
    def play(self):
        return f"{self.name} makes violin sounds"
    
    def __str__(self):
        return f"Name: {self.name}, brand: {self.brand}, type: {self.type}, year: {self.year}, amount of strings: {self.strings}"
