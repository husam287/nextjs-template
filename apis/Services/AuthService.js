import _axios from "../AxiosConfig";

/**
 * Token Object Type.
 * @typedef {{access:string, refresh:string}} TokenObj
 */

const nonUserHeader = {
  headers: {
    Authorization: undefined,
  },
};
export class AuthServices {
  /**
   *
   * @param {Object} values
   * @param {string} values.email
   * @param {string} values.password
   * @returns {Promise<TokenObj>}
   */
  static login(values, locale) {
    return _axios.post(`${locale}/api/users/login/`, values);
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
  static EditProfile(values, locale) {
    // console.log("userdata_here",values)
    return _axios.put(`${locale}/api/users/me/`, values);
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
  static signup(values, locale) {
    return _axios.post(`${locale}/api/users/me/`, values, nonUserHeader);
  }

  /**
   *
   * @param {Object} values
   * @param {string} values.email
   * @param {string} values.code verification Code sent to user email
   * @returns {Promise}
   */
  static verifyEmail(values, locale) {
    return _axios.post(`${locale}/api/users/email/verify_email/`, values);
  }

  /**
   *
   * @param {Object} values
   * @param {string} values.email
   * @param {string} values.code verification Code sent to user email
   * @returns {Promise}
   */
  static resendVerificationCode(values, locale) {
    return _axios.post(
      `${locale}/api/users/email/resend_verification_code/`,
      values
    );
  }

  static faceLogin(values, locale) {
    return _axios.post(`${locale}/api/auth/facebook/`, values);
  }
  static GoogleLogin(values, locale) {
    return _axios.post(`${locale}/api/auth/google/`, values);
  }
  
}
