import React from "react";



interface DescriptionProps {
    text: string;
};

const Description: React.FC<DescriptionProps> = (props: DescriptionProps): React.ReactElement => {
    return <div>
        {props.text}
    </div>
}

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = (props: TitleProps): React.ReactElement => {
    return <div>
        {props.text}
    </div>
}

interface ArtistProps {
    name: string;
    handle: string;
    home_link: string;
    image: string;
}

const Artist: React.FC<ArtistProps> = (props: ArtistProps): React.ReactElement => {
    return (
        <div>
            <div>

            </div>

            <div>

            </div>

            <div>

            </div>
        </div>
    )
}