{
  ///Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.


  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(){
        const cYear = new Date().getFullYear();
        return cYear - this.year
    }
  }

  const car = new Car('BMW','X',2022)
  console.log(car.getCarAge());
 


}