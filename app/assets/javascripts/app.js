var IronBlog = Ember.Application.create();

IronBlog.ApplicationAdapter = DS.ActiveModelAdapter.extend()


IronBlog.Router.map(function(){
  this.resource('entries', function(){
    this.resource('entry', {path: "/:entry_id"})
  });
})

IronBlog.EntriesRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('entry');
  }
})

// IronBlog.EntriesRoute = Ember.Route.extend({
//   model: function(){
//     return [{
//       id: "1",
//       title: "First Post",
//       body: "If only I could tell people how much I love sharing my feelings on the internet.",
//       levelOfRage: "1"
//     },{
//       id: "2",
//       title: "Another Day",
//       body: "Another entry. How do people keep up with daily blogging?",
//       levelOfRage: "5"
//     }]
//   }
// })

// IronNotes.NotesRoute = Ember.Route.extend({
//   model: function(){
//     return this.store.find('note');
//   }
// })