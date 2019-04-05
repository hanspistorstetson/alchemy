defmodule Alchemy.SessionTest do
  use Alchemy.DataCase

  alias Alchemy.Accounts

  @user_attrs %{email: "test@test.com", password: "password"}
  @valid_attrs %{user_id: 1}
  @invalid_attrs %{}

  test "changeset with valid attrs" do
    changeset = Accounts.change_session(@valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attrs" do
    changeset = Accounts.change_session(@invalid_attrs)
    refute changeset.valid?
  end

  test "create_changeset with valid attrs" do
    {:ok, user} = Accounts.register_user(@user_attrs)
    {_status, changeset} = Accounts.create_session(%{user_id: user.id})
    assert changeset
    assert changeset.token
  end

  test "create_changeset with invalid attrs" do
    {_status, changeset} = Accounts.create_session(@invalid_attrs)
    refute changeset.valid?
  end
end
