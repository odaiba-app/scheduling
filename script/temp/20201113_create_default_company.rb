puts 'starting'
company = Company.create!
puts "Created company #{company.id}"

User.all.each { |user| UserCompany.create!(user: user, company: company) }
puts "Assigned #{UserCompany.all.size} users"
