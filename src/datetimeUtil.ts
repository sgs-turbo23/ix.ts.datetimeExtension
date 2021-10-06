class datetimeUtil {
    static getYesterday(date: any): any {
      date.setDate(date.getDate() - 1);
      return date;
    }
  
    static addDay(date: any, diff: any): any {
      date.setDate(date.getDate() + diff);
      return date;
    }
  
    static makeDateString(date: any): any {
      this.validTypeDate(date); 
  
      // yyyy/M/d
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
  
    static makeShortDateString(date: any): any {
      this.validTypeDate(date);
  
      // yyyyMMdd
      return `${date.getFullYear()}${datetimeUtil.PadLeftZero(date.getMonth() + 1)}${datetimeUtil.PadLeftZero(date.getDate())}`;
    }
  
    static validTypeDate(date: any): any {
      // Date型の判定
      var toString = Object.prototype.toString
      const typeName = '[object Date]';
      if (toString.call(new Date()) !== typeName) {
        throw new TypeError(`${date} is not a date`);
      }
      return;
    }
  
    static PadLeftZero(arg: any): any {
      if (arg.length > 2) {
        throw new RangeError(`arg over 2 length arg:${arg}`);
      }
      return ("0" + arg).slice(-2);
    }
  }

  export = datetimeUtil;