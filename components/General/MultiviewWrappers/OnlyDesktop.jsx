const OnlyDesktop = ({ children, ...defaultProps }) => (
  <div className="d-none d-md-block" {...defaultProps}>
    {children}
  </div>
);

export default OnlyDesktop;
