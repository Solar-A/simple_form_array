# lib/simple_form/inputs/array_input.rb

ActiveSupport.on_load(:action_view) do
  if defined?(SimpleForm::Inputs::Base)
    module SimpleForm
      module Inputs
        class ArrayInput < SimpleForm::Inputs::Base
          def input(wrapper_options = nil)
            merged_input_options = merge_wrapper_options(input_html_options, wrapper_options || {})
            values = Array(object.public_send(attribute_name))

            template.render(
              partial: "inputs/array/form",
              locals: {
                f: @builder,
                attribute: attribute_name,
                values: values,
                input_html: merged_input_options
              }
            )
          end
        end
      end
    end
  end
end
