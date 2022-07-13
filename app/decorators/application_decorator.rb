class ApplicationDecorator < Draper::Decorator
  def display_phone
    Phonelib.parse(phone, :jp).national
  end

  def display_postcode
    "〒 #{postcode.to_s.insert(3, '-')}" if postcode.present?
  end
end
