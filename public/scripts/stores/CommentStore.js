var CommentStore = {
  
  items: [],
  getAll: function(){
    return this.items
  },
  createComment: function(payload){
    $.ajax({
      url: "comments.json",
      dataType: 'json',
      type: 'POST',
      data: payload.newComment,
      success: function(data) {
        this.items = data
        this.trigger( 'change' );
      }.bind(this)
    });
  },
  loadCommentsFromServer: function(){
    $.ajax({
      url: "comments.json",
      dataType: 'json',
      cache: false,
      success: function(data) {
        //CommentStore.items = data
        this.items = data
        this.trigger( 'change' );
      }.bind(this)
    });

  }
}

MicroEvent.mixin( CommentStore );
