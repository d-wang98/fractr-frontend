import React from "react";

export interface Props {
    id: number;
    name: string;
    handle: string;
    description?: string;
    image?: string;
}

export const Artist = (props: Props): React.ReactElement => {
    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {props.handle}
            </div>
        </div>
    )
}
