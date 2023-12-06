import format from "date-fns/format";
import id from "date-fns/locale/id";
import parseISO from "date-fns/parseISO";

/**
 * A helper function to format UTC date to ID format
 * @param {string} str utc date
 * @returns {string} formatted date
 */
export const formatToID = (str: string): string =>
  format(parseISO(str), "dd MMMM yyyy", { locale: id });
