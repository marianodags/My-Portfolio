import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../components/About";

describe("About component", () => {
  it("renders bio and background details", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 1, name: "Statistics, technology, and data working together." })).toBeInTheDocument();
    expect(screen.getByText("About Mariano")).toBeInTheDocument();
    expect(screen.getByText(/Philippine Statistics Authority/i)).toBeInTheDocument();
    expect(screen.getByText(/Provincial Product Accounts/i)).toBeInTheDocument();
  });
});
