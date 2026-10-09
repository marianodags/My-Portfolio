import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "../components/Projects";

describe("Projects component", () => {
  it("renders the updated section heading", () => {
    render(<Projects />);
    expect(screen.getByText("Selected work / 01—04")).toBeInTheDocument();
    expect(screen.getByText("Analysis with a clear purpose.")).toBeInTheDocument();
  });

  it("renders all project case-study cards", () => {
    render(<Projects />);
    ["Provincial Product Accounts", "Statistical Data Processing", "Economic Data Visualization", "Statistical Reporting"].forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("provides a contact link from each project", () => {
    render(<Projects />);
    expect(screen.getAllByRole("link", { name: /discuss similar work/i })).toHaveLength(4);
  });
});
