# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.delete_all

count = 1 
100.times do
  
  p=Post.create( 
  title: "#{Faker::HarryPotter.spell} #{count}",
  body: "#{Faker::HarryPotter.quote} "
  )  
  count = count + 1
end

posts = Post.all
  


puts "the  posts have been seeded #{Post.count}"
