class ApplicationController < ActionController::Base
  before_action :authenticate_user!, :set_locale
  # before_action :configure_permitted_parameters, if: :devise_controller?

  private

  def set_locale
    I18n.locale = :fr
  end
end
