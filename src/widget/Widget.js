import React from 'react';
import './widget.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

const Widget = () => {
  return (
    <>
      <div className="widgets">
        <div className="widgets_input">
          <SearchIcon className="widgets_searchIcon" />
          <input type="text" placeholder="Search Twitter" />
        </div>
        <div className="widgets_widgetContainer">
          <h2>what's happening</h2>
          <TwitterTweetEmbed tweetId={'1519235400811769856'} />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="arsenal"
            options={{ height: 400 }}
          />

          <TwitterShareButton
            url={'https://www.facebook.com/Arsenal'}
            options={{ text: '#I m awesome', via: 'gyamzo' }}
          />
        </div>
      </div>
    </>
  );
};

export default Widget;
