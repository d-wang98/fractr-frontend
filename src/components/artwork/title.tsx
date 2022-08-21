import React from "react";

interface Props {
    text: string | undefined;
}

const Title: React.FC<Props> = (props: Props): React.ReactElement => {
    return <div>
        {props.text}
    </div>
}

export default Title;