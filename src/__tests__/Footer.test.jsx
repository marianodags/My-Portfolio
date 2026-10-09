import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("renders the current year and portfolio copyright", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      `© ${new Date().getFullYear()} Mariano Daga-ang. Statistical Analyst · Data Analyst.`,
    );
  });
});
