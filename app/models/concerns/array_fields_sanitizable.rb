module ArrayFieldsSanitizable
  extend ActiveSupport::Concern

  class_methods do
    def sanitize_array_fields(*fields)
      before_validation do
        fields.each do |field|
          if self.respond_to?(field) && self[field].is_a?(Array)
            self[field] = self[field].reject(&:blank?)
          end
        end
      end
    end
  end
end
