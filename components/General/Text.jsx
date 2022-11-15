import { Typography } from '@mui/material';
import COLORS from 'constants/Colors';
import FONT_FAMILY from 'constants/FontFamily';
import { useTranslation } from 'next-i18next';

const Text = ({
  mBottom,
  style,
  className,
  variant = 'h5',
  dontWrap = false,
  onClickAction = () => {},
  children,
  fontFamily = FONT_FAMILY.regular,
  fontSize = 12,
  color = COLORS.primary,
  isTranslated = true,
}) => {
  const { t } = useTranslation(['common']);

  return (
    <Typography
      color={color}
      fontSize={`'var(--fs-${fontSize})'`}
      fontFamily={fontFamily}
      onClick={onClickAction}
      gutterBottom={mBottom}
      noWrap={dontWrap}
      variant={variant}
      component="div"
      style={style}
      className={className}
    >
      {isTranslated ? t(String(children)) : children}
    </Typography>
  );
};

export default Text;
