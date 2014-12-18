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

IronBlog.EntryController = Ember.ObjectController.extend({
  editing: false,
  actions: {
    startEdit: function(){
      this.set('editing', true)
    },
    saveEntry: function(){
      var entry = this.get('model');
      var controller = this;
      entry.save().then(function(){
        controller.set('editing', false)
      })
    },
    deleteEntry: function(){
      var entry = this.get('model');
      var controller = this;
      entry.destroyRecord().then(function(){
        controller.transitionToRoute('entries')
      })
    }
  }
})

IronBlog.EntriesController = Ember.ArrayController.extend({
  entriesCount: function(){
    return this.get('model.length');
  }.property('model.length'),
  recentEntry: function(){
    return this.get('model').sortBy(['updatedAt']).get('lastObject')  
  }.property('model.@each.updatedAt')
})

IronBlog.EntriesIndexController = Ember.ArrayController.extend({
  newTitle: '',
  newBody: '',
  levelOfRage: '',

  actions: {
    createEntry: function(){
      var title = this.get('newTitle');
      var body = this.get('newBody');
      var rage = this.get('levelOfRage');

      var entry = this.store.createRecord('entry', {
        title: title,
        body: body,
        levelOfRage: rage
      });

      var controller = this;
      entry.save().then(function(model){
        controller.set('newTitle', '');
        controller.set('newBody', '');
        controller.set('levelOfRage', '');
        controller.transitionToRoute('entry', model)
      });
    }
  }
})

// IronBlog.EntriesController = Ember.ArrayController.extend({
//   recentEntry: function(){
//     return this.get('model').sortBy(['updatedAt']).get('lastObject')  
//   }.property('model.@each.updatedAt')
// })

// IronBlog.RecentEntryController = Ember.ObjectController.extend

























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