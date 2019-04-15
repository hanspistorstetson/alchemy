defmodule Alchemy.Tweets.Tweet do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tweets" do
    field :content, :string
    field :likes, :integer
    field :username, :string

    timestamps()
  end

  @doc false
  def changeset(tweet, attrs) do
    tweet
    |> cast(attrs, [:content, :username, :likes])
    |> validate_required([:content, :username])
  end
end
