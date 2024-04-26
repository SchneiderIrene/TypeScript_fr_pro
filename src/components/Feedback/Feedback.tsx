import { useState } from "react";

import Button from "components/Button/Button";
import { FeedbackProps } from "./types";
import {FeedbackContainer, FeedbackResultContainer, LikeDislikeContainer, Result} from './styles'

function Feedback({like, addLike, dislike, addDislike, resetResults}: FeedbackProps) {


  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Button name="Like" onButtonClick={addLike} />
          <Result>{like}</Result>
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Button name="Dislike" onButtonClick={addDislike} />
          <Result>{dislike}</Result>
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="Reset Results" onButtonClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;