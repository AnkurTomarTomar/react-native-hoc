import {BaseCommentsHOC} from "../base-commets";
import SearchHoc from "./SearchHoc";

// for now we have only comments search feature enabled
// in future we can use this component to enable search feature all over the application
const BaseCommentsSearchHoc = SearchHoc(BaseCommentsHOC);


// we can export more base search components as per our need
export  {BaseCommentsSearchHoc};