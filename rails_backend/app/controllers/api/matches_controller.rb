class Api::MatchesController < ApplicationController

  def index
    @matches = Match.order(score: :asc)

    render json: @matches
  end
end
