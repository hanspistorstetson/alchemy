defmodule Alchemy.Guardian.AuthPipeline do
  use Guardian.Plug.Pipeline, otp_app: :alchemy,
  module: Alchemy.Guardian,
  error_handler: Alchemy.AuthErrorHandler

  plug Guardian.Plug.VerifyHeader, realm: "Bearer"
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource
end
