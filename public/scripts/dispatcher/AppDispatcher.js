var AppDispatcher = new Dispatcher()

AppDispatcher.register(function(payload){
  switch( payload.eventName ) {
        case 'new-comment':
          // We get to mutate data!
          CommentStore.createComment(payload)
          break;
    }
    return true;
});
