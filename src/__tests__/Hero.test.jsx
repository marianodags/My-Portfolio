import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "../components/Hero";

describe("Hero component", () => {
  it("renders dashboard headline and bio", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Build insights.*Make data useful/i);
    expect(screen.getByText(/I'm Mariano — a Statistical Analyst and Data Analyst/i)).toBeInTheDocument();
  });

  it("renders call-to-action links", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute("href", "#contact");
    expect(screen.getByRole("link", { name: /explore work/i })).toHaveAttribute("href", "#projects");
  });

  it("renders the tools marquee", () => {
    render(<Hero />);
    expect(screen.getByLabelText(/tools mariano works with/i)).toBeInTheDocument();
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Power BI").length).toBeGreaterThan(0);
  });

  it("renders dashboard overview cards", () => {
    render(<Hero />);
    expect(screen.getByText("Data at a glance")).toBeInTheDocument();
    expect(screen.getByText(/Provincial Product Accounts/)).toBeInTheDocument();
  });
});
