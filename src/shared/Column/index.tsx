import { type FC, type PropsWithChildren } from "react";

type Props = {
    gap?: number;
};

const Column: FC<PropsWithChildren<Props>> = ({ gap = 0, children }) => {
    return <div className={`flex flex-col gap-${gap}`}>{children}</div>;
};

export default Column;
