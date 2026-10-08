import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "../components/Hero";

describe("Hero component", () => {
  it("renders main headline and bio", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/I turn data into insights that support better decisions/i);
    expect(screen.getByText(/I'm Mariano — a Statistical Analyst and Data Analyst/i)).toBeInTheDocument();
  });

  it("renders avatar image with alt text", () => {
    render(<Hero />);
    const avatarImg = screen.getByAltText(/Mariano - Statistical Analyst & Data Analyst/i);
    expect(avatarImg).toBeInTheDocument();
    expect(avatarImg).toHaveAttribute("src", "/profile-avatar.svg");
  });

  it("renders call-to-action buttons", () => {
    render(<Hero />);
    const viewProjectsLink = screen.getByRole("link", { name: /view projects/i });
    const workTogetherLink = screen.getByRole("link", { name: /let's work together/i });

    expect(viewProjectsLink).toHaveAttribute("href", "#projects");
    expect(workTogetherLink).toHaveAttribute("href", "#contact");
  });

  it("renders tools ticker marquee", () => {
    render(<Hero />);
    const marqueeSection = screen.getByLabelText(/tools mariano works with/i);
    expect(marqueeSection).toBeInTheDocument();
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Power BI").length).toBeGreaterThan(0);
  });
});
