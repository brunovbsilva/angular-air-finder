export class QueryStringArray {
  public static toString(obj: any[]): string {
      let result: string = '';
      obj.forEach((key, index) => {
        result = result + (index == 0 ? '' : ',') + key
      })
      return result;
  }
}