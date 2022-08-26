import React from "react";

interface Props {
    title: string | undefined;
}

const Header: React.FC<Props> = (props: Props): React.ReactElement => {
    return <div>
        {props.title}
    </div>
}

export default Header;