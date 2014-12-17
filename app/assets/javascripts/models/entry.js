// for more details see: http://emberjs.com/guides/models/defining-models/

IronBlog.Entry = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  levelOfRage: DS.attr('string')
});
