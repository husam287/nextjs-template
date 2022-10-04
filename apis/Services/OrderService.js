/**
 * @typedef {'placed'|'confirmed'|'shipped'|'delivered'} STATUS
 **/

import _axios from "../AxiosConfig";
export class OrderServices {
  /**
   *
   * @param {Object} data
   * @param {STATUS} data.status filter attr. to return orders which has only this status
   * @param {STATUS} data.status_not filter attr. to return orders which has any status except this
   *
   * @returns
   */
  static getOrders(locale, { status, status_not }) {
    return _axios.get(`${locale}/api/orders/`, {
      params: {
        status,
        status_not,
      },
    });
  }
  static getAddresses(locale) {
    return _axios.get(`${locale}/api/addresses/`);
  }
  static EditAddresses(locale, id, values) {
    return _axios.patch(`${locale}/api/addresses/${id}/`, values);
  }
  static AddAddresses(locale, values) {
    return _axios.post(`${locale}/api/addresses/`, values);
  }
  static GetUser(locale) {
    return _axios.get(`${locale}/api/users/me/`);
  }
  static GetUserPoints(locale) {
    return _axios.get(`${locale}/api/users/points/`);
  }
  static GetOffers(locale) {
    return _axios.get(`${locale}/api/offers/`);
  }
  static Reorder(locale, id) {
    return _axios.get(`${locale}/api/orders/${id}/reorder/`);
  }
  static Getconfig(locale) {
    return _axios.get(`${locale}/api/config/`);
  }
  static Getfragrance(locale) {
    return _axios.get(`${locale}/api/fragrance/`);
  }
  // static getofferDetails(locale,slug) {
  //   return _axios.get(`${locale}/api/offers/${slug}/`);
  // }
  static GetHomeslider(locale) {
    return _axios.get(`${locale}/api/sliders/`);
  }
 
}
