import _axios from "../AxiosConfig";

/**
 * Token Object Type.
 * @typedef {{access:string, refresh:string}} TokenObj
 */

const nonUserHeader = {
  headers: {
    Authorization: undefined,
  },
}
export class AuthServices {
  /**
   *
   * @param {Object} values
   * @param {string} values.email
   * @param {string} values.password
   * @returns {Promise<TokenObj>}
   */
  static login(values) {
    return _axios.post(`/users/login/`, values);
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
  static EditProfile(values) {
    return _axios.put(`/users/me/`, values);
  }

  /**
   *
   * @param {Object} values
   * @param {string} values.email
   * @param {string} values.username
   * @param {string} values.first_name
   * @param {string} values.last_name
   * @param {string=} values.phone
   * @param {NumberLike} values.password
   *
   * @returns {Promise<TokenObj>}
   */
  static signup(values) {
    return _axios.post(`/users/me/`, values, nonUserHeader);
  }

}
