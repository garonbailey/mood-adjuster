class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def index
  	render 'application/angular', layout: 'application'
  end

  def search
  	render 'application/angular', layout: 'application'
  end

  def result
  	render 'application/angular', layout: 'application'
  end

  def notfound
    render 'application/angular', layout: 'application'
  end
end
