import * as React from 'react'

const Header: React.FC = () => (
    <header>
        <section className="container">
            <nav role="navigation">
                <ul>
                    <li>
                        <a href="https://hexdocs.pm/phoenix/overview.html">Get Started</a>
                    </li>
                </ul>
            </nav>
            <a href="https://phoenixframework.org/" className="phx-logo">
                <img src="/images/phoenix.png" alt="Phoenix Framework Logo" />
            </a>
        </section>
    </header>
)

export default Header;
