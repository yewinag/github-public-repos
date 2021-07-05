import React from "react";
import { connect } from "react-redux";
import Button from "../Button";
import { getPaginatedNumber } from "../../utils";
import { shouldFetchRepo, shouldPaginate } from "../../actions/repoActions";

import "../../styles/pagination.scss";

function Pagination({ repos, shouldFetchRepo, shouldPaginate }) {
  const handleNextPageFetch = () => {   
    if(Math.floor(repos.total / (repos.page + 1)) < 10){
      shouldFetchRepo(repos.data[repos.data.length - 1].id)
    }else{
      shouldPaginate(repos.page + 1)
    }
  }
  return (
    <div className="paginate-layout">
      <Button
        className="paginate-btn"
        name={"< Previous"}
        onClick={()=> shouldPaginate(repos.page - 1)}
        disabled={repos.page === 1}
      />
      {getPaginatedNumber(repos.total).map((page) => (
        <Button
          onClick={()=> shouldPaginate(page)}
          className={
            repos.page === page ? "paginate-btn active" : "paginate-btn"
          }
          key={page}
          name={page}
        />
      ))}
      <Button onClick={()=> handleNextPageFetch()} className="paginate-btn" name={"Next >"} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    shouldFetchRepo: (page) => dispatch(shouldFetchRepo(page)),
    shouldPaginate: (start, end) => dispatch(shouldPaginate(start, end))
  };
};
const mapStateToProps = (state) => {
  return {
    repos: state.repos,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
