import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App component integration", () => {
  it("renders full page layout with all sections", () => {
    render(<App />);
    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Case Studies & Projects")).toBeInTheDocument();
    expect(screen.getByText("What I do")).toBeInTheDocument();
    expect(screen.getByText("About Mariano")).toBeInTheDocument();
    expect(screen.getByText("Have data that needs to be understood?")).toBeInTheDocument();
  });
});
