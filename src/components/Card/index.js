import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUTCTime } from "../../utils";
import "../../styles/card.scss";

function Card({ item: { name, full_name, description, url } }) {
  const [isFetchDetail, isFetchDetailUrl] = useState(false);
  const [detail, setDetailRes] = useState(null);
  useEffect(() => {
    const getDetailInfo = async () => {
      isFetchDetailUrl(true);
      const res = await axios.get(url);
      setDetailRes(res.data);
      isFetchDetailUrl(false);
    };
    getDetailInfo();
  }, [url]);

  const getUpdatedDate = () =>
    isFetchDetail ? (
      <span>loading...</span>
    ) : (
      getUTCTime(detail && detail.updated_at)
    );
  const getLanguage = () =>
    isFetchDetail ? <span>loading...</span> : detail && detail.language;
  const getStars = () =>
    isFetchDetail ? <span>loading...</span> : detail && detail.stargazers_count;
  const getLicence = () =>
    isFetchDetail ? (
      <span>loading...</span>
    ) : detail && detail.license ? (
      detail.license.name
    ) : (
      "-"
    );

  return (
    <article className="repo-card">
      <a href={detail && detail.html_url} target="_blank" className="link" rel="noreferrer">
        <div className="repo-card-header">
          <h5>{name}</h5>
          <p>{full_name}</p>                    
        </div>
        <div className="repo-card-body">
          <p className="desc">{description}</p>
          <div className="updated-date">
          <p className="label">Last updated </p>
          <p>{getUpdatedDate()}</p>
          </div>
        </div>
        <div className="repo-card-footer">
          <button className="tag-btn">{getLanguage()}</button>
          <button className="tag-btn">{getStars()}</button>
          <button className="tag-btn">{getLicence()}</button>
        </div>
      </a>
    </article>
  );
}

export default Card;
