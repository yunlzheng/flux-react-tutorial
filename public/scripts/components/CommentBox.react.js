var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: CommentStore.getAll()};
  },
  componentDidMount: function() {
    CommentStore.bind('change', this.listChanged );
    CommentStore.loadCommentsFromServer();
  },
  listChanged: function(){
      this.setState({data:CommentStore.getAll()})
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});
