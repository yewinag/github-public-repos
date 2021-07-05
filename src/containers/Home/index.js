import React, { useEffect } from "react";
import { connect } from "react-redux";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";

import { shouldFetchRepo } from "../../actions/repoActions";

function Home({repos, shouldFetchRepo}) {
  useEffect(() => {
    shouldFetchRepo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ["fetchRepo"]);
  return (
    <>
      <Header />
      {repos.isFetching ? <div>loading....</div> : <Table />}
      <Footer />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    shouldFetchRepo: (page) => dispatch(shouldFetchRepo(page)),
  };
};
const mapStateToProps = (state) => {
  return {
    repos: state.repos,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
