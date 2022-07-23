class BaseSerializer < ActiveModel::Serializer
  def display_phone
    Phonelib.parse(object.phone, :jp).national
  end
end
