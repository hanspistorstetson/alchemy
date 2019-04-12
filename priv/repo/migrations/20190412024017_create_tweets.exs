defmodule Alchemy.Repo.Migrations.CreateTweets do
  use Ecto.Migration

  def change do
    create table(:tweets) do
      add :title, :string
      add :text, :string
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:tweets, [:user_id])
  end
end
