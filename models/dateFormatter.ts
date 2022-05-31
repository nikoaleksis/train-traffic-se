import format from "date-fns-tz/format";

const dateFormatter = {
  formatDateStr: function formatDateStr(dateStr: string): string {
    const date = new Date(dateStr);
    const timeZoneDiff = 2; // +2 timezone in stockholm
    date.setUTCHours(date.getUTCHours() + timeZoneDiff);
    
    return format(date, "yyy-MM-dd HH:mm");
  }
}

export default dateFormatter;