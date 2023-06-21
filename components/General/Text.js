import { Typography } from "@mui/material";
import { Colors } from "constants/Colors";
import { useTranslation } from "next-i18next";

/**
 * @type {"regular"|"black"|"medium"|"regular2"|"semi-bold"|"bold"}
 */
let DEFAULT_FONT_FAMILY = 'regular'

const Text = ({
  mBottom,
  style,
  className,
  variant = "h5",
  dontWrap = false,
  onClickAction = () => {},
  children,
  fontFamily = DEFAULT_FONT_FAMILY,
  fontSize = 12,
  color = Colors.primary,
  isTranslated = true,
}) => {
  const { t } = useTranslation(["common"]);

  return (
    <Typography
      color={color}
      fontSize={`var(--fs-${fontSize})`}
      fontFamily={`var(--ff-${fontFamily})`}
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
