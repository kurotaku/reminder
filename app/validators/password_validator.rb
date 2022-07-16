class PasswordValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    return if value.blank?

    # 半角英数字6文字以上100文字以下
    record.errors.add(attribute, options[:message] || 'は半角英数字6文字以上100文字以下にしてください') unless value&.match(/\A[a-z\d]{6,100}+\z/i)
  end
end
