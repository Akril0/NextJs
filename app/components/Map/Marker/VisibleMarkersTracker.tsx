import React, {useEffect} from "react";
import {Marker, Popup, useMap} from "react-leaflet";
import {useDispatch, useSelector} from "react-redux";
import {setVisiblePosts, visiblePosts} from "@/app/redux/slices/visiblePostsSlice";
import {AppDispatch} from "@/app/redux/store";
import L from "leaflet";
import {selectedPost, togglePost} from "@/app/redux/slices/selectedPostSlice";
import {postsArr} from "@/app/redux/slices/postSlice";


const defaultIcon = new L.Icon({
    iconUrl: "/defaultMarker.svg",
    iconSize: [20, 36],
    iconAnchor: [10.5, 33.5],
    popupAnchor: [1, -34],
});

const activeIcon = new L.Icon({
    iconUrl: '/activeMarker.svg',
    iconSize: [20, 36],
    iconAnchor: [10.5, 33.5],
    popupAnchor: [1, -34],
});


const VisibleMarkersTracker: React.FC = () => {
    const posts = useSelector(postsArr)
    const activeMarker = useSelector(selectedPost);
    const visiblePostsArr = useSelector(visiblePosts);

    const dispatch: AppDispatch = useDispatch()

    const map = useMap();

    useEffect(() => {
        const checkVisibleMarkers = () => {
            const mapBounds = map.getBounds();
            const visible = posts.filter(post =>
                mapBounds.contains([post.coordinates.latitude, post.coordinates.longitude] as L.LatLngTuple)
            );
            dispatch(setVisiblePosts(visible));
        };

        map.on('moveend', checkVisibleMarkers);
        checkVisibleMarkers();

        return () => {
            map.off('moveend', checkVisibleMarkers);
        };
    }, [map, dispatch, posts]);


    const handleMouseOver = (e: L.LeafletMouseEvent) => {
        e.target.openPopup();
    };

    const handleMouseOut = (e: L.LeafletMouseEvent) => {
        e.target.closePopup();
    };
    const toggleActive = (id:number) => {
        dispatch(togglePost(id));
    };

    return (
        <>
            {visiblePostsArr.map(post => (
                <Marker key={post.id} position={[post.coordinates.latitude, post.coordinates.longitude]}
                        icon={activeMarker === post.id? activeIcon : defaultIcon}
                        eventHandlers={{
                            mouseover: handleMouseOver,
                            mouseout: handleMouseOut,
                            click:() => toggleActive(post.id),
                        }}
                >
                    <Popup>{post.description}</Popup>
                </Marker>
            ))}
        </>
    );
};
export default VisibleMarkersTracker;
