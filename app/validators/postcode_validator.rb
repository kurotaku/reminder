class PostcodeValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    return if value.blank?

    # 半角数字7桁（ハイフンなし）
    record.errors.add(attribute, options[:message] || 'はハイフン無しの半角数字7桁で入力してください') unless value&.match(/\A\d{7}\z/i)
  end
end
