import { spheres } from "../../utils/spheres";
import "./Pagination.css";

import React from 'react'

const Pagination = ({ page, setPage, limit }) => {
    return (
        <div id="pagination">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>{"<"}</button>
            <img src={spheres[page-1]} alt="sphere" className="sphere" />
            <button disabled={page === limit} onClick={() => setPage(page + 1)}>{">"}</button>
        </div>
    )
}

export default Pagination