const OnlyMobile = ({ children, ...defaultProps }) => (
  <div className="d-md-none d-block" {...defaultProps}>
    {children}
  </div>
);

export default OnlyMobile;
