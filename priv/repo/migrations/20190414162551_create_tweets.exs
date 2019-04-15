defmodule Alchemy.Repo.Migrations.CreateTweets do
  use Ecto.Migration

  def change do
    create table(:tweets) do
      add :content, :string
      add :username, :string
      add :likes, :integer

      timestamps()
    end

  end
end
