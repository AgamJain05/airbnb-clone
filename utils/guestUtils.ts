import { FormatGuestOptions } from "../components/interfaces/interfaces";
interface Guests {
    adults: number;
    children: number;
    infants?: number;
  }
  
  export const formatGuests = (guests: Guests, options?: FormatGuestOptions): string | boolean | number => {
    if (!guests) return false;
  
    const { noInfants } = options || {};
    const { children, adults, infants = 0 } = guests; // Default infants to 0 if undefined
    const total = adults + children;
  
    if (!total) {
      return 0;
    }
  
    let template = `${total} guest${total >= 2 ? "s" : ""}`;
    if (infants && !noInfants) {
      template += `, ${infants} infant${infants >= 2 ? "s" : ""}`;
    }
  
    return template;
  };
  