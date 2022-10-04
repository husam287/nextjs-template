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
  static getProducts({
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
  } = {}) {
    return _axios.get(`/products/`, {
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
    })
  }

  static getCategories() {
    return _axios.get(`/categories/`);
  }
}
