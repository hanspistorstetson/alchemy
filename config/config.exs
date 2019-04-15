# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :alchemy,
  ecto_repos: [Alchemy.Repo]

# Configures the endpoint
config :alchemy, AlchemyWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "5Ce1nfk4nXIePAou8nNRsNBcV3jiFd4oCQnepzVryOfTrMqYiCp8XAqMvRBgQFK3",
  render_errors: [view: AlchemyWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Alchemy.PubSub, adapter: Phoenix.PubSub.PG2]

config :alchemy, Alchemy.Guardian, issuer: "alchemy", secret_key: "Z1YEG7aqOpNMrH0D3c9LOpf+lVpTqMUBOlkMSzLjHSl0Q9yujxhOxHubC84EWt3K"

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
