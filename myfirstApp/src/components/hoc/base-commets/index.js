import CommentsList from "../../comments/comments-list";
import baseComments from "./base-comments";

// for now we have only one components to enable this feature card
// in future we can reuse this
const BaseCommentsHOC = baseComments(CommentsList);

// we can export more if we want a components enable this feature in list
export  {BaseCommentsHOC};