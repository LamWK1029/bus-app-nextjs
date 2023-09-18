// import styles
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div className="app">
          <nav>
            <h1>Bus App</h1>
          </nav>
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
