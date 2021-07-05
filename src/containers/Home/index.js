import React, { useEffect } from "react";
import { connect } from "react-redux";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";

import { shouldFetchRepo } from "../../actions/repoActions";
import Spinner from "../../components/Spinner";

function Home({ repos, shouldFetchRepo }) {
  useEffect(() => {
    shouldFetchRepo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ["fetchRepo"]);
  return (
    <>
      <Header />
      <section>
      {repos.isFetching ? <Spinner /> : <Table />}            
      </section>
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
