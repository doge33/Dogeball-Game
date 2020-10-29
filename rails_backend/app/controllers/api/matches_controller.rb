class Api::MatchesController < ApplicationController

  def index
    @matches = Match.order(score: :desc)

    render json: @matches
  end

  # def create()
  #   Time.new (from JSON from front_end)
  # end
end
