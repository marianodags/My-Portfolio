import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../components/Navbar";

describe("Navbar component", () => {
  it("renders user name and title", () => {
    render(<Navbar />);
    expect(screen.getByText(/Mariano/i)).toBeInTheDocument();
    expect(screen.getByText(/Statistical Analyst \/ Data Analyst/i)).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation", { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Project")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders social links with target _blank and rel noopener noreferrer", () => {
    render(<Navbar />);
    const facebookLink = screen.getByRole("link", { name: "Facebook" });
    expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/mardags04/");
    expect(facebookLink).toHaveAttribute("target", "_blank");
    expect(facebookLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
