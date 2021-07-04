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
    {/* <a href={detail && detail.html_url} target="_blank" className="link"> */}
        <div className="repo-card-header">
          <h5>{name}</h5>
          <a href={detail && detail.html_url} target="_blank">
            {full_name}
          </a>
          <p>Last updated {getUpdatedDate()}</p>
        </div>
        <div className="repo-card-body">
          <p>{description}</p>
        </div>
        <div className="repo-card-footer">
          <p>{getLanguage()}</p>
          <p>{getStars()}</p>
          <p>{getLicence()}</p>
        </div>
    {/* </a> */}
      </article>
  );
}

export default Card;
