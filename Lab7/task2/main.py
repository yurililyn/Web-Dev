from models import Vehicle, Car, eBike
from a import Instrument, eGuitar, Violin

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
    
    g1 = eGuitar("Dean", "G10", 2020, "Dime Lightning Guitar", 6)
    g2 = eGuitar("Jackson", "A9", 2024, "JS Wings Guitar", 7)
    v1 = Violin("Stentor", "B2", 2017, "Student Series Violin", 4)

    instruments = [g1, g2, v1]

    for instrument in instruments:
        print(instrument)
        
        if isinstance(instrument, eGuitar):
            print(instrument.play())
        elif isinstance(instrument, Violin):
            print(instrument.play())


if __name__ == "__main__":
    main()