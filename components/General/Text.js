import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const Text = ({
    mBottom,
    style,
    className,
    variant = 'h5',
    dontWrap = false,
    onClickAction = () => { },
    children
}) => {
    const { t } = useTranslation(["common"]);

    return (
        <Typography
            onClick={onClickAction}
            gutterBottom={mBottom}
            noWrap={dontWrap}
            variant={variant}
            component="div"
            style={style}
            className={className}
        >
            {t(String(children))}
        </Typography>
    );
}

export default Text

