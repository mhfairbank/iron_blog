class EntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :level_of_rage
end
