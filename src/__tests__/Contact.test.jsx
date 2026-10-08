import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "../components/Contact";

describe("Contact component", () => {
  it("renders contact CTA and email link", () => {
    render(<Contact />);
    expect(screen.getByText("Have data that needs to be understood?")).toBeInTheDocument();
    const emailLinks = screen.getAllByRole("link", { name: /mailto:hello@mariano.dev|Send email to Mariano|Start a Conversation/i });
    expect(emailLinks.length).toBeGreaterThan(0);
    expect(emailLinks[0]).toHaveAttribute("href", "mailto:hello@mariano.dev");
  });

  it("renders back to top button and footer navigation links", () => {
    render(<Contact />);
    const backToTopLink = screen.getByRole("link", { name: /back to top of page/i });
    expect(backToTopLink).toHaveAttribute("href", "#home");

    expect(screen.getByRole("link", { name: /^about$/i })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: /^projects$/i })).toHaveAttribute("href", "#projects");
  });
});
