# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Entry.create(title: "Title 1", body: "Really useful blog post written here.", level_of_rage: "low")
Entry.create(title: "Title 2", body: "Really useful blog post written here and there.", level_of_rage: "medium")
Entry.create(title: "Title 3", body: "Really useful blog post written here and there and everywhere.", level_of_rage: "critical")