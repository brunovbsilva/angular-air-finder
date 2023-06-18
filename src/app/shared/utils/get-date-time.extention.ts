export class CustomDateExtention {
  public static getDateTime(date: Date, time?: string) {
    const dateString: string = date.toISOString().split('T')[0];
    const combinedDateTimeString: string = `${dateString}T${time ? time : '00:00'}:00.000Z`;
    const combinedDateTime: Date = new Date(combinedDateTimeString);
    return combinedDateTime.getTime();
  }
}