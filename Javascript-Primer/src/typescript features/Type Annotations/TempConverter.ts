export class TempConverter {
  static convertFtoC(temp: number) : string {
    return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
  }
}

// Type annotations are expressed using a colon (the : character) followed by the type. There are two
// annotations in the example. The first specifies that the parameter to the convertFtoC method should be a
// number

// The other annotation specifies that the result of the method is a string.
