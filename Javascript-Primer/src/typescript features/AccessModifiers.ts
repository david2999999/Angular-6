// public This keyword is used to denote a property or method that can be accessed anywhere.
    // This is the default access protection if no keyword is used.

// private This keyword is used to denote a property or method that can be accessed only within
    // the class that defines it.

// protected This keyword is used to denote a property or method that can be accessed only within
    // the class that defines it or by classes that extend that class

export class TempConverter {
  static convertFtoC(temp: any): string {
    let value: number;
    if ((temp as number).toPrecision) {
      value = temp;
    } else if ((temp as string).indexOf) {
      value = parseFloat(<string>temp);
    } else {
      value = 0;
    }
    return TempConverter.performCalculation(value).toFixed(1);
  }

  private static performCalculation(value: number): number {
    return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
  }
}
