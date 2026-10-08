import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../components/About";

describe("About component", () => {
  it("renders bio and background details", () => {
    render(<About />);
    expect(screen.getByText("About Mariano")).toBeInTheDocument();
    expect(screen.getByText(/Philippine Statistics Authority/i)).toBeInTheDocument();
    expect(screen.getByText(/Provincial Product Accounts/i)).toBeInTheDocument();
  });
});
