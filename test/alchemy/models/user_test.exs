defmodule Alchemy.UserTest do
  use Alchemy.DataCase

  alias Alchemy.Accounts.User
  alias Alchemy.Accounts

  @valid_attrs %{email: "test@test.com", password: "password"}

  test "changeset with valid attrs" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset, email too short" do
    changeset =
      User.changeset(
        %User{},
        Map.put(@valid_attrs, :email, "")
      )

    refute changeset.valid?
  end

  test "changeset, email invalid format" do
    changeset =
      User.changeset(
        %User{},
        Map.put(@valid_attrs, :email, "test.com")
      )

    refute changeset.valid?
  end

  test "registration_changeset with valid attrs" do
    changeset = User.registration_changeset(%User{}, @valid_attrs)
    assert changeset.changes.password_hash
    assert changeset.valid?
  end

  test "registration_changeset, password too short" do
    changeset = User.registration_changeset(%User{}, Map.put(@valid_attrs, :password, "12345"))

    refute changeset.valid?
  end
end
