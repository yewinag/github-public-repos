import React from "react";
import { connect } from 'react-redux';
import Card from "../Card";
import Pagination from "../Pagination";
import SectionHeader from "../SectionHeader";
import '../../styles/table.scss';

function Table({repos:{paginated}}) {  
  return (
    <article>
      <SectionHeader />
      <div className="table-container">
        {
          paginated && paginated.map((item,index)=> (
            <Card key={index} item={item}/>
          ))
        }
      </div>
      <Pagination />
    </article>
  );
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
  };
};
export default connect(mapStateToProps)(Table);