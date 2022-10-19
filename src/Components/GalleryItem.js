const detailView = () => {
    return (
        <div style={detailStyle}>
            <h2>{props.item.trackName}</h2>
            <h3>
                <a href={`/artist/${props.item.artistId}`}>
                    {props.item.artistName}
                </a>
            </h3>
            <h3>
                <a href={`/album/${props.item.collectionId}`}>
                    {props.item.collectionName}
                </a>
            </h3>
            <h4>{props.item.primaryGenreName}</h4>
            <h4>{props.item.releaseDate}</h4>
        </div>
    )
}

export default GalleryItem