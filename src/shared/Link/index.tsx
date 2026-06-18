import React, { type FC, type PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { DEFAULT_STYLES, NAV_LINK_STYLES } from "./constants";
import clsx from "clsx";

type Props = {
    isExternal?: boolean;
    url: string;
};

const Link: FC<PropsWithChildren<Props>> = (props) => {
    const { isExternal = false, url, children } = props;

    if (isExternal)
        return (
            <a className={DEFAULT_STYLES} href={url}>
                {children}
            </a>
        );
    return (
        <NavLink className={clsx(DEFAULT_STYLES, NAV_LINK_STYLES)} to={url}>
            {children}
        </NavLink>
    );
};

export default Link;
