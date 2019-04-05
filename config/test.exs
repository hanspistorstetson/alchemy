use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :alchemy, AlchemyWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

config :comeonin, :bcrypt_log_rounds, 4

# Configure your database
config :alchemy, Alchemy.Repo,
  username: "postgres",
  password: "postgres",
  database: "alchemy_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
