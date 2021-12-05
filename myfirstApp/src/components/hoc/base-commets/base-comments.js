import React, { useMemo } from "react";
import { View, Text } from 'react-native';
import CommentsDetailsCard from '../cards/Cards';

export default function baseComments(WrappedCompnent) {

    return function showMainCardDetails(props) {

        const CARD_DETAILS_DUMMY_ID = 'CARD_DETAILS_DUMMY_ID';

        const largestComment = useMemo(()=>{
          return largestCommentFound();
        }, [props.data])

        const totalNoOfComments = useMemo(() =>{
          return calculateNoOfComments();
        }, [props.data]);


        function calculateNoOfComments() {
            return `Total no. of Comments: ${props.data && props.data.length}`;
        }


        // heavy computations function (use it with memo hook to speed up the component)
        function largestCommentFound() {
            console.log("calling the heavy computions functions");
            function lengthOfLargestComment(largestComment){
                  return largestComment && largestComment.length ? largestComment.length : 0
            }

            return `largest comments : ${props.data && props.data.reduce((largestComment, item) => {
                largestComment = lengthOfLargestComment(largestComment) > item.name.length ? largestComment : item.name;
                return largestComment;
            }, undefined)}`
        }

        function Card() {
            return <View>
                <CommentsDetailsCard 
                    id={CARD_DETAILS_DUMMY_ID}
                    backgroundColor='red'
                    commentsLength={totalNoOfComments}
                    largestCommentsText={ largestComment } />
            </View>
        }

        return (
            <View>
                <Card />
                <WrappedCompnent {...props} />
            </View>
        )
    }
}