import React, { useEffect, useState } from "react";
import { Artist, Props } from "./artist"
import Description from "./description"
import Title from "./title"

const { GetArtworkDetailsRequest } = require("../../pb/service/service_pb")
const { ServiceClient } = require("../../pb/service/service_grpc_web_pb")

type GetArtworkDetailsResponse = proto.service.GetArtworkDetailsResponse;

const ArtworkView = () => {

    const [artwork, setArtwork] = useState<proto.service.Artwork | null>(null);

    useEffect(() => {
        var client = new ServiceClient('http://localhost:8080', null, null);
        var request = new GetArtworkDetailsRequest();
        request.setArtworkId(1000);
        
        client.getArtworkDetails(request, {}, (err: any, response: GetArtworkDetailsResponse) => {
            if (err) {
                console.log(`Unexpected error for GetArtworkDetails: code = ${err.code}` +
                            `, message = "${err.message}"`);
            } else {
                setArtwork(response.getArtworkDetails());
            }
        });
    }, []);

    return <div>
        <Title text={artwork?.getName()} />
        <Description text={artwork?.getDescription()} />
        <Artist {...artwork?.getArtist()?.toObject() as Props} />
    </div>;

}

export default ArtworkView;




