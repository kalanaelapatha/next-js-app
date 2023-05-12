import "@styles/globals.css";

export const metadata = {
  title: "next-js-app",
  description: "discover and pratice next-js",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradiant" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
