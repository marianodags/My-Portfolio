import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../components/Navbar";

describe("Navbar component", () => {
  it("renders the portfolio identity", () => {
    render(<Navbar />);
    expect(screen.getByText(/Mariano/i)).toBeInTheDocument();
    expect(screen.getByText(/Statistical Analyst/i)).toBeInTheDocument();
  });

  it("renders all primary navigation links", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation", { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
    ["Home", "Projects", "Services", "About", "Contact"].forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders secure external social links", () => {
    render(<Navbar />);
    const linkedin = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/mariano-q-daga-ang-jr-566185286/");
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");
  });
});
