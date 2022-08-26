import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artist, Props as ArtistProps } from "./artist";
import { Market, Props as MarketProps } from "./market";
import Description from "./description";
import Header from "./header";
const { GetArtworkDetailsRequest, GetArtworkLiveDataRequest } = require("../../pb/service/service_pb");

type GetArtworkDetailsResponse = proto.service.GetArtworkDetailsResponse;
type GetArtworkLiveDataResponse = proto.service.GetArtworkLiveDataResponse;

interface Props {
    client: any,
}

const ArtworkView: React.FC<Props> = (props: Props) => {
    const [artwork, setArtwork] = useState<proto.service.Artwork | null>(null);
    const [liveData, setLiveData] = useState<proto.service.ArtworkLiveData | null>(null);
    const { artworkId } = useParams()
    const client = props.client
    
    useEffect(() => {
        console.log("call artwork details effect hook")
        const request = new GetArtworkDetailsRequest();
        request.setArtworkId(artworkId);
        
        client.getArtworkDetails(request, {}, (err: any, response: GetArtworkDetailsResponse) => {
            if (err) {
                console.log(`Unexpected error for GetArtworkDetails: code = ${err.code}` +
                            `, message = "${err.message}"`);
            } else {
                setArtwork(response.getArtworkDetails());
            }
        });
    }, [client, artworkId]);

    useEffect(() => {
        console.log("call live data effect hook")
        const request = new GetArtworkLiveDataRequest();
        request.setArtworkId(artworkId);

        var liveDataStream = client.getArtworkLiveData(request, {});

        liveDataStream.on("data", (response: GetArtworkLiveDataResponse) => {
            console.log(`received live data update at ${response.getTimeUpdated()}`);
            setLiveData(response.getLiveData());
        });

        liveDataStream.on("end", () => {
            console.log(`server stopped streaming live market data`);
        });

        return () => {
            // close stream when we are done retrieving live data for this artwork
            liveDataStream.cancel();
        }

    }, [client, artworkId]);

    return <div>
        <div>id = {artwork?.getId()}</div>
        <Header title={artwork?.getName()} />
        <Description text={artwork?.getDescription()} />
        <Artist {...artwork?.getArtist()?.toObject() as ArtistProps} />
        <Market {...liveData?.toObject() as MarketProps} />
    </div>;

}

export default ArtworkView;




