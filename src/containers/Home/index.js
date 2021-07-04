import React, { useEffect } from "react";
import { connect } from "react-redux";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";

import { shouldFetchRepo } from "../../actions/repoActions";

function Home(props) {
  useEffect(() => {
    props.shouldFetchRepo(0);
  }, ["fetchRepo"]);
  return (
    <>
      <Header />
      {props.repos.isFetching ? <div>loading....</div> : <Table />}
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
