class datetimeUtil {
  // 前日を取得します
  static getYesterday(date: Date): Date {
    date.setDate(date.getDate() - 1);
    return date;
  }

  // 指定した日付にdiffを加えた日付を取得します
  static addDay(date: Date, diff: number): Date {
    date.setDate(date.getDate() + diff);
    return date;
  }

  // 日付をyyyy/M/d形式で返します
  static makeDateString(date: Date): string {
    // yyyy/M/d
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }

  // 日付をyyyyMMdd形式で返します
  static makeShortDateString(date: Date): string {
    // yyyyMMdd
    return `${date.getFullYear()}${datetimeUtil.PadLeftZero(
      (date.getMonth() + 1).toString()
    )}${datetimeUtil.PadLeftZero(date.getDate().toString())}`;
  }

  // 渡された文字をゼロを左づけし2桁で返します
  static PadLeftZero(arg: string): string {
    if (arg.length > 2) {
      throw new RangeError(`arg over 2 length arg:${arg}`);
    }
    return ("0" + arg).slice(-2);
  }
}

/*@build-ignore*/export = datetimeUtil;
