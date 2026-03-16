from models import Vehicle, Car, eBike

def main():
    c1 = Car("Toyota", "Camry", 2022, "бензине")
    c2 = Car("Tesla", "Model S", 2023, "электричестве")
    b1 = eBike("Super73", "S2", 2021, 90)

    garage = [c1, c2, b1]

    for vehicle in garage:
        print(vehicle)
        
        print(vehicle.start_engine())
        
        print(vehicle.drive())
        
        if isinstance(vehicle, Car):
            print(vehicle.open_trunk())
        elif isinstance(vehicle, eBike):
            print(vehicle.check_battery())

if __name__ == "__main__":
    main()