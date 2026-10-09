import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "../components/Contact";

describe("Contact component", () => {
  it("renders contact CTA and email link", () => {
    render(<Contact />);
    expect(screen.getByText("Have data that needs to be understood?")).toBeInTheDocument();
    const emailLinks = screen.getAllByRole("link", { name: /mqdagaang@gmail.com/i });
    expect(emailLinks.length).toBeGreaterThan(0);
    expect(emailLinks[0]).toHaveAttribute("href", "mailto:mqdagaang@gmail.com");
  });
});
