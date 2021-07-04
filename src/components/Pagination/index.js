import React from "react";
import Button from "../Button";

function Pagination() {
  return (
    <div className="paginate-layout">
      <Button className="paginate-btn" name={"< Previous"}/>
      {[1, 2, 3, 4, 5, 6, 7].map((page) => (
        <Button className="paginate-btn" key={page} name={page}/>
      ))}
      <Button className="paginate-btn" name={"Next >"}/>
    </div>
  );
}

export default Pagination;
