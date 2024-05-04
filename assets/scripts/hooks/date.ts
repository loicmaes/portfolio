import {DateFormat, type DateHookOptions} from "assets/types/dateHook.types";

const weekDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

export function useDateFormat (date: Date, options: DateHookOptions) {
  const days = date.getDate();
  const dayIndex  = date.getDay();
  const day = weekDays[dayIndex];
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const year = date.getFullYear();

  switch (options.format) {
    case DateFormat.HUGE_TEXT:
      return `${day} ${days} ${month} ${year}`;
    case DateFormat.FULL_NUMBER:
      return `${days < 10 ? '0' : ''}${days}-${monthIndex < 9 ? '0' : ''}${monthIndex + 1}-${year}`;
    case DateFormat.SHORT_NUMBER:
      return `${days}-${monthIndex + 1}-${year}`;
    case DateFormat.SHORT_TEXT:
      return `${days} ${month} ${year}`;
    case DateFormat.TINY_TEXT:
      return `${days} ${month.substring(0, 3)}. ${year}`
    default:
      return `${days < 10 ? '0' : ''}${days} ${month} ${year}`;
  }
}
