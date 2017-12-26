# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


a = Bench.create!(description: 'A nice bench', lat: 37.8, lng:-122.44)
b = Bench.create!(description: 'A alright bench', lat: 37.5, lng:-122.42)
c = Bench.create!(description: 'A meh bench', lat: 37.9, lng:-122.44)
