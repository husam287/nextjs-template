import _axios from "../AxiosConfig";

export class ProductServices {
  /**
   *
   * @param {Object} values
   * @param {string} values.brand brand slugs separated by commas
   * @param {string} values.color
   * @param {Boolean} values.top_rated
   * @param {Boolean} values.most_popular
   * @param {string} values.category_slug sub_category slugs separated by commas
   * @param {string} values.sub_category_slug brand slugs separated by commas
   * @param {string} values.search
   * @param {number} values.page
   * @param {string} values.ordering
   *
   * @returns {Promise<{count:Number, results:any[]}>}
   */
  static getProducts(
    locale,
    {
      brand = "",
      color = "",
      top_rated = "",
      most_popular = "",
      category_slug = "",
      sub_category_slug = "",
      search = "",
      page = 1,
      fragrance_family = "",
      ordering = "",
      page_size = 6,
      ...otherProps
    } = {}
  ) {
    // console.log('????',ordering,fragrance_family,category_slug);
    return _axios.get(`${locale}/api/products/`, {
      params: {
        brand,
        color,
        top_rated,
        most_popular,
        category_slug,
        sub_category_slug,
        fragrance_family,
        ordering,
        search,
        page,
        page_size,
        new: otherProps?.new
      },
    });
  }

  /**
   *
   * @param {string} slug
   * @returns {Promise<>}
   */
  static getProductDetails(locale, slug) {
    return _axios.get(`${locale}/api/products/${slug}`);
  }

  static getCategories(locale) {
    return _axios.get(`${locale}/api/categories/`);
  }
  static getfavorite(locale) {
    return _axios.get(`${locale}/api/user_wish_lists/`);
  }

  static getCategory(locale, slug) {
    return _axios.get(`${locale}/api/categories/${slug}`);
  }
  static getofferDetails(locale, slug) {
    return _axios.get(`${locale}/api/offers/${slug}/`);
  }
  // static FilterProducts(locale,params) {
  //   return _axios.get(`${locale}/api/products/`,{params:params});
  // }
  /**
   *
   * @param {Object} data
   * @param {string} data.review comment
   * @param {(1|2|3|4|5)} data.rating rating out of 5
   * @param {number} data.product product id
   * @returns
   */
  static makeReview(locale, { review, rating, product }) {
    return _axios.post(`${locale}/api/product_reviews/`, {
      review,
      rating,
      product,
    });
  }
}
