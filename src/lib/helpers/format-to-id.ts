import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

/**
 * A helper function to format UTC date to ID format
 * @param {string} str utc date
 * @returns {string} formatted date
 */
export const formatToID = (str: string): string =>
  format(parseISO(str), "dd MMMM yyyy", { locale: id });
