// import styles
import "../styles/global.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div className="app">
          <nav>
            <a href="/">
              <h1>Bus App</h1>
            </a>
          </nav>
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
