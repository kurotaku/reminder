class PhoneNumberValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    return if value.blank?

    # 半角数字10〜11桁（ハイフンなし）
    record.errors.add(attribute, options[:message] || 'はハイフン無しの半角数字10〜11桁で入力してください') unless value&.match(/\A\d{10,11}\z/i)
  end
end
