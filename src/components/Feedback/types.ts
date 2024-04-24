export interface FeedbackProps {
    like: number, 
    addLike: () => void, 
    dislike: number, 
    addDislike: () => void, 
    resetResults: () => void
  }