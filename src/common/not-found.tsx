import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-foreground text-primary">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <img
        src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
        alt="Page not found"
        className="mt-4"
      />
      <Link to="/" className="mt-2">
        <Button variant="ghost"> Go back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;