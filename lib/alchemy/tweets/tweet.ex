defmodule Alchemy.Tweets.Tweet do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tweets" do
    field :text, :string
    field :title, :string
    belongs_to :user, Alchemy.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(tweet, attrs) do
    tweet
    |> cast(attrs, [:title, :text, :user_id])
    |> validate_required([:title, :text, :user_id])
  end
end
