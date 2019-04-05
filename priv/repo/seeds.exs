# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Alchemy.Repo.insert!(%Alchemy.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Alchemy.Example.Language

Alchemy.Repo.insert!(%Language{proverb: "A penny saved is a penny earned", name: "English"})

Alchemy.Repo.insert!(%Language{
  proverb: "Dimana ada kemauan, di situ ada jalan",
  name: "Indonesian"
})

Alchemy.Repo.insert!(%Language{proverb: "Die goed doet, goed ontmoet", name: "Dutch"})
