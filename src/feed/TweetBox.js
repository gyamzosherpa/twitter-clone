import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import db from '../firebase';
import './tweetBox.css';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    //e.preventDEfault => stops refresh
    e.preventDefault();
    db.collection('posts').add({
      displayName: 'gyamzo sherpa',
      username: 'gyamzo',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIYAWQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xAA3EAABAwMCBAEKBQQDAAAAAAABAAIDBAURBiEHEjFBExQiI1FhcYGRobEVFlJywTJVYpMIM0L/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APdHawGjzeyysFu2HmrLU1GABt2V9HTADoqjERW8bbK4NG2NvM/AA3JOyxes9Tx6fa2CLlM5iMrz1MbAQ0YHdznOAHbqeyjrUvEC53XT8rPQU0VY4xCGMnxAwYJcT6j0wgkL8y6aZOYH3ijDxnPpMgY679Fp964pUsRdHZ6B8jmv/wCyp81rmjuADnf24UUFfFFSZR8VnurR5fbI20ZG4hJdIPmQD9Fe0HFC3TVbmV1BLTU+fMka4SEfuG2NsdMqJkQdK0jqevpWVNHIyaCQZY9hyCqdRSAjooJ09qm7WFzWUFSWwc/O6FwBa49/cps0ff49S2aKpk8GOr3bLCx/cHGQOoBVRjq+gBB2WI/Dh+lbvV04I6LHeTexBu0VPgdFWEQ9SvXwgDZUuXdBz/xlY38ZbL4jBVBro5omg55A8ljs4x/SWjr19+VG53U36o0ZdL9d57xba+Hxx6Ke3uYctaNuUhxw4kAdcB2xHrURXay3O2ekuNunpGPkcxviRlo5hgkD5hRWMREQEREBbVw3rYaTU9KJ3iNsjwPEdIGhvXr689PitVWz8OrRBetV0tLUyFjAHSDBwS5oyAgn2oaHNyNwehVj4YWXnjACseRVG4l+eq8EhfN18KC0uNwpLbGyWrfy87hHG1rC98ruzWtAJceuwHrUC8Z9Qz3m+U1M2KaKhpYz4QkGC9xPnOxk+rl+BUr6ltMtdqy1VNPcJqCanoKqRlQ1rXNa4OhGHNcMYIc7PTp12UA6yu5ud6qHx1ZqIecnnDeVj3ZJLmN6hpJOAcndRWAREQEREBblwjhll11QuiGRGyR0nsbyEfchaapX4EWqR9bcbs+MiJkYp439i4kFw+AA+aCXZW5CtPDV/INlb4VRsGF5IXsrw5BZ3Cgpq+MR1LC4DOC17mOGRg4IIO4OFzZxM0rSaSvzaKiqZJY5Y/Fa2THMwE7bjr3+S6eAyoO/5CWwR3W23NjHemhMUj+2WnI+jvooqI0REBERBc26hqLlX09FRxmWoqHiONg7krqbTVig09YqS102CIWee/8AW87ud8T/AAufOHOpqLS17FbWW4VT34ibMZOU07ScPcBg5OPaNsjuul5NkFCQbK3wqz3KhlVGwchXktVZeXFBSwtF4yW11w0TUPgo31VRTva9gYwuc0E4ccD2fZb2dysNqrU1s0pbHV10mAOD4MLT58zvU0fc9kHJXhSchf4b+QDJdy7DfH3XhbRqHWFXf4rh5eQZaudkoMezWNaCAz3DK1dRRERBWpGxPqoW1LzHCZGiR4GeVudzjvsutbfcKO8UENwts7Z6Wcc0cje/vHY52wVyIpB4c8R/ylRT2+tpJKuke/xIvDfh0bjsRvtg4+fvQT29io8is9N6ntGp6Pyi1VLXPDcyU7yBLF+5v8jZZPlVRmCV5xle8epRbr3izarW+vstBSzVtUGugllbKI42Egg4cMkkfDfug3u73ujtkDi6aOScg+HC14LnH3dly9rW91l91HV1ddIXOa8xsHZrWnAAWGE0jJHPie6MuP8A5cVTJJ6qK+IiICIiAiIgq09RNSzMnpppIZmHLJI3Frmn2EdFnPzxqn+/3D/cVryIOo+LmoZNPaNqJKSR0dZVEU8LmnBbn+pw9wz8SFy6SSck5KlvjxfvKrr+ExuBZRti5vY94c4/QRqI0BERAREQEREBERAREQZjWFe656putY53N4tVJyn/ABBw36ALDr6ST1K+ICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//2Q==',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <>
      <div className="tweetBox">
        <form>
          <div className="tweetBox_input">
            <Avatar src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Awesome-Profile-Pic.jpg" />
            <input
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="What's happening"
              type="text"
            />
          </div>
          <input
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            className="tweetBox_imageInput"
            placeholder="Enter Image URL"
            type="text"
          />

          <Button
            type="submit"
            onClick={sendTweet}
            className="tweetBox_tweetButton"
          >
            Tweet
          </Button>
        </form>
      </div>
    </>
  );
};

export default TweetBox;
