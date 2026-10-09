import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../components/About";

describe("About component", () => {
  it("renders bio and background details", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 1, name: "Data Analyst & Statistical Analyst | Official Economic Statistics" })).toBeInTheDocument();
    expect(screen.getByText("About Mariano")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: /Data Analyst & Statistical Analyst/ })).toBeInTheDocument();
    expect(screen.getByText(/Business Intelligence Analyst, Reporting Analyst, Data Visualization Analyst/)).toBeInTheDocument();
    expect(screen.getByText(/Philippine Statistics Authority/i)).toBeInTheDocument();
    expect(screen.getByText(/Provincial Product Accounts/i)).toBeInTheDocument();
  });
});
