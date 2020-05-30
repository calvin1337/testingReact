import React, { Component } from 'react'
import "./fullPost.css";

export class FullContent extends Component {
    render() {
        return (
            <div className="newsPost">
            <div className="Post-img-box">
              <a href="/">
                <img src="https://picsum.photos/200/300" alt="sample img" />
              </a>
            </div>
            <div className="news-post-info bg-white pt-30">
              <div className="news-post-meta">
                <ul>
                  <li className="post-category">
                    <span>Engineering</span>
                  </li>
                  <li className="post-date">
                    May 30, 2020
                  </li>
                </ul>
              </div>
              <div className="news-post-title">
                <h2 className="post-title">News Post One</h2>
              </div>
              <div className="post-text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae reprehenderit sint assumenda quibusdam nobis nihil fuga hic quas eligendi corporis cupiditate perspiciatis non sequi dolorum, ipsam placeat! Exercitationem, officia qui.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi illo repellat amet architecto sequi vero, molestias dicta maxime, qui, quia veniam assumenda aliquid harum tempore distinctio beatae maiores eum ipsum?</p>
                <p>                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita voluptate commodi. Perferendis fuga exercitationem atque quas libero corrupti quae.
</p>
              </div>
            </div>
          </div>
        )
    }
}

export default FullContent
