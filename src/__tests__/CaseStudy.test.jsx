import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudy from "../components/CaseStudy";

describe("CaseStudy", () => {
  it.each([
    ["provincial-gdp", "Reading provincial economic performance"],
    ["python-eda", "Profiling a synthetic customer dataset"],
    ["sql-sales", "Summarizing monthly sales performance"],
  ])("renders the %s case study with demo code", (study, title) => {
    render(<CaseStudy study={study} />);
    expect(screen.getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view case study code/i }).getAttribute("href")).toContain(
      "src/components/CaseStudy.jsx#L",
    );
    expect(screen.getAllByRole("link", { name: /all projects/i }).every((link) =>
      link.getAttribute("href") === "./projects.html",
    )).toBe(true);
  });

  it("shows the SQL sample and guards average order value against division by zero", () => {
    render(<CaseStudy study="sql-sales" />);
    expect(screen.getByText(/NULLIF\(SUM\(orders\), 0\)/)).toBeInTheDocument();
    expect(screen.getByText(/₱100 average order value/)).toBeInTheDocument();
    expect(screen.getByText(/synthetic data only/i)).toBeInTheDocument();
  });
});
