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

Alchemy.Tweets.create_tweet(%{content: "Test Content", likes: 15, username: "hanspistor"})
Alchemy.Tweets.create_tweet(%{content: "I like Pie", likes: 15, username: "babygirl"})
Alchemy.Tweets.create_tweet(%{content: "Daddy", likes: 15, username: "hanspistor"})
Alchemy.Tweets.create_tweet(%{content: "DFLKJ", likes: 15, username: "hanspistor"})
Alchemy.Tweets.create_tweet(%{content: "retardjf", likes: 15, username: "daddy"})
Alchemy.Tweets.create_tweet(%{content: "DRUMPD BAD", likes: 15, username: "libfadsk"})
