class Category < ActiveRecord::Base

  has_many :clues

  def as_json(options={})
     options = options.dup # fixes frozen hash error
     options[:except] ||= [:updated_at, :created_at]
     super(options)
  end
end
