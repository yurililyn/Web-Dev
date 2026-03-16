class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"Двигатель {self.brand} {self.model} заведен"

    def drive(self):
        return f"{self.model} едет"

    def __str__(self):
        return f"Транспорт: {self.brand} {self.model} ({self.year} года)"


class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def open_trunk(self):
        return f"Багажник {self.brand} открыт"

    def drive(self):
        return f"Автомобиль {self.model} едет на {self.fuel_type}"


class eBike(Vehicle):
    def __init__(self, brand, model, year, battery_capacity):
        super().__init__(brand, model, year)
        self.battery_capacity = battery_capacity

    def check_battery(self):
        return f"Заряд батареи: {self.battery_capacity} %"

    def drive(self):
        return f"Электробайк {self.model} едет"