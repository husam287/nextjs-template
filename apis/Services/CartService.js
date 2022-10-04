import _axios from "../AxiosConfig";

export class CartServices {
  static addToCart(locale, values = {}) {
    return _axios.post(`${locale}/api/cart-products/`, values);
  }
  
  static add_offer_ToCart(locale, values = {}) {
    return _axios.post(`${locale}/api/cart-offers/`,values);
  }
  static remove_offer_FromCart(locale, id) {
    return _axios.delete(`${locale}/api/cart-offers/${id}`);
  }
  /**
   *
   * @param {Object} values
   * @param {string} values.email
   * @param {string} values.firstName
   * @param {string} values.lastName
   * @param {string} values.phoneNumber
   * @param {string} values.password
   * @returns {Promise<TokenObj>}
   */

  static EditProfile(locale, values) {
    // console.log("userdata_here",values)
    return _axios.put(`${locale}/api/users/me/`, values);
  }
  static getCartProducts(locale) {
    return _axios.get(`${locale}/api/cart-products/`);
  }
  static getCartoffers(locale) {
    return _axios.get(`${locale}/api/cart-offers/`);
  }

  static ActivePromocode(locale,code) {
    return _axios.get(`${locale}/api/promotions/${code}`);
  }
  
  static getUserProducts(locale) {
    return _axios.get(`${locale}/api/users/me/`);
  }

  static getmeCartProducts(locale) {
    return _axios.get(`${locale}/api/carts/me/`);
  }
  static getUserProducts(locale) {
    return _axios.get(`${locale}/api/users/me/`);
  }

  static removeFromCart(locale, id) {
    return _axios.delete(`${locale}/api/cart-products/${id}`);
  }
  
  
 
  static createorder(locale, values) {
    // return _axios.post(`${locale}/api​/orders​/`, values);
    return _axios.post(`${locale}/api/orders/`,values);
  }
  static addtofav(locale, values) {
    return _axios.post(`${locale}/api/user_wish_lists/`, values);
  }
 
  

}
