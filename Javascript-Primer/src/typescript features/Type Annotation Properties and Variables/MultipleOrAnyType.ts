export class TempConverter {
  static convertFtoC(temp: number | string): string {
    let value: number = (<number>temp).toPrecision
      ? <number>temp : parseFloat(<string>temp);
    return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
  }
}

// The type declaration for the temp parameter has changes to number | string, which means that the
// method can accept either value. This is called a union type. Within the method, a type assertion is used to
// work out which type has been received. This is a slightly awkward process, but the parameter value is cast to
// a number value to check whether there is a toPrecision method defined on the result

export class TempConverter2 {
  static convertFtoC(temp: any): string {
    let value: number;
    if ((temp as number).toPrecision) {
      value = temp;
    } else if ((temp as string).indexOf) {
      value = parseFloat(<string>temp);
    } else {
      value = 0;
    }
    return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
  }
}
