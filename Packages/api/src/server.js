import app from "./app.js";

const PORT = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log("Press Ctrl+C to stop");
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

start();
