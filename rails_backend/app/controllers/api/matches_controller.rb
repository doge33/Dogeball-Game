class Api::MatchesController < ApplicationController

  def index
    @matches = Match.order(score: :desc)

    render json: @matches
  end

  # def create()
  #   #  Time.new (from JSON from front_end)

  #   match = Match.new()
  # end

  # private
  # def match_params
  #   params.require(:match).permit(:, :email, :password, :password_confirmation)
  # end
end
