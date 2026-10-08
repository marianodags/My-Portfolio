import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Services from "../components/Services";

describe("Services component", () => {
  it("renders services header and cards", () => {
    render(<Services />);
    expect(screen.getByText("What I do")).toBeInTheDocument();
    expect(screen.getByText("Statistical Analysis")).toBeInTheDocument();
    expect(screen.getByText("Data Analysis")).toBeInTheDocument();
    expect(screen.getByText("Data Visualization")).toBeInTheDocument();
    expect(screen.getByText("Statistical Reports")).toBeInTheDocument();
  });
});
