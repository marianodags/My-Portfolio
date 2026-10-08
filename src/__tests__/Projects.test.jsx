import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "../components/Projects";

describe("Projects component", () => {
  it("renders section heading", () => {
    render(<Projects />);
    expect(screen.getByText("Selected work")).toBeInTheDocument();
    expect(screen.getByText("Statistical analysis and data projects.")).toBeInTheDocument();
  });

  it("renders project cards", () => {
    render(<Projects />);
    expect(screen.getByText("Provincial Product Accounts")).toBeInTheDocument();
    expect(screen.getByText("Statistical Data Processing")).toBeInTheDocument();
    expect(screen.getByText("Economic Data Visualization")).toBeInTheDocument();
    expect(screen.getByText("Statistical Reporting")).toBeInTheDocument();
  });
});
