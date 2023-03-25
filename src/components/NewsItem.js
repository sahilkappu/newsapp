import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://static.toiimg.com/thumb/msid-98902388,width-1070,height-580,imgsize-1039799,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger" style={{left: '90% !important', zIndex: '1' }} >
               {source}
              </span>
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{author ? author : "Unknown"}</strong> on {date}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target={"_blank"}
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
