import { useReducer } from "react";
import { Like, MediaItemWithOwner } from "../types/DBTypes";

type LikeState = {
  count: number;
  userLike: Like | null;
};

type LikeAction = {
  type: 'setLikecount' | 'like';
  count?: number | Like;
  like?: Like;
};

const initialState: LikeState = {
  count: 0,
  userLike: null,
};

const likeReducer = (state: LikeState, action: LikeAction) => {
  switch (action.type) {
    case 'setLikecount':
      return {...state, count: action.count ?? 0};
    case 'like':
      if (action.like !== undefined) {
        return {...state, userLike: action.like};
      }
      return state;
  }
  return state;
}

// get user like
const getLikes = async () => {
  const token = localStorage.getItem('token');
  if (!item || !token) {
    return;
  }
  try {
    const userLike = await getUserLike(item.media_id, token);
    likeDispatch({type: 'like', like: userLike});
  } catch (e) {
    likeDispatch({type: 'like', like: null});
    console.log('get user like error', (e as Error).message);
  }
};

// get like count
const getLikeCount = async () => {
  // TODO: get like count and dispatch it to the state
};


const handleLike = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!item || !token) {
      return;
    }
    // If user has liked the media, delete the like. Otherwise, post the like.
    if (likeState.userLike) {
      // TODO: delete the like and dispatch the new like count to the state. Dispatching is already done in the getLikes and getLikeCount functions.
    } else {
      // TODO: post the like and dispatch the new like count to the state. Dispatching is already done in the getLikes and getLikeCount functions.
    }
  } catch (e) {
    console.log('like error', (e as Error).message);
  }
};

const Likes = ({item}: {item: MediaItemWithOwner}) => {
 const[LikeState, likeDispatch]= useReducer(likeReducer, initialState);
  return (
    <>
    Likes count: x
      <button onClick={()=>{
        console.log('like button clicked');
        likeDispatch
      }}>Like</button>
    </>
  );
}

export default Likes;
