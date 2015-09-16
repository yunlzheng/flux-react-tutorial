var CommentActions = {

  createComment: function(comment){
    AppDispatcher.dispatch({
      eventName: "new-comment",
      newComment: comment
    });
  }

}
