import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "../components/Projects";

describe("Projects component", () => {
  it("renders section heading", () => {
    render(<Projects />);
    expect(screen.getByText("Case Studies & Projects")).toBeInTheDocument();
    expect(screen.getByText("Statistical analysis and data projects.")).toBeInTheDocument();
  });

  it("renders project case study cards and repository links", () => {
    render(<Projects />);
    expect(screen.getByText("Provincial Product Accounts")).toBeInTheDocument();
    expect(screen.getByText("Statistical Data Processing")).toBeInTheDocument();
    expect(screen.getByText("Economic Data Visualization")).toBeInTheDocument();
    expect(screen.getByText("Statistical Reporting")).toBeInTheDocument();

    const viewProjectLinks = screen.getAllByRole("link", { name: /view project/i });
    expect(viewProjectLinks.length).toBe(4);
    expect(viewProjectLinks[0]).toHaveAttribute("href", "https://github.com/marianodags/My-Portfolio");
  });
});
