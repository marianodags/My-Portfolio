import {render,screen} from "@testing-library/react";
import {describe,it,expect} from "vitest";
import Projects from "../components/Projects";

describe("Projects component",()=>{
  it("renders the projects heading and explains the static-data approach",()=>{
    render(<Projects/>);
    expect(screen.getByText("Selected work & portfolio demos")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: "Analysis with a clear purpose." })).toBeInTheDocument();
    expect(screen.getByText(/static charts and tables for now/i)).toBeInTheDocument();
  });

  it("renders all five requested project previews",()=>{
    render(<Projects/>);
    [
      "Provincial Economic Performance Dashboard",
      "Sales Performance Analysis",
      "Exploratory Data Analysis (Python)",
      "Population & Demographic Analysis",
      "Interactive Data Application"
    ].forEach(title=>expect(screen.getByRole("heading",{name:title})).toBeInTheDocument());
  });

  it("includes a static graph and data table for every project",()=>{
    render(<Projects/>);
    expect(screen.getAllByRole("img")).toHaveLength(5);
    expect(screen.getAllByRole("table")).toHaveLength(5);
    expect(screen.getAllByText("Sample data table")).toHaveLength(5);
  });

  it("labels illustrative datasets and keeps GitHub links available",()=>{
    render(<Projects/>);
    expect(screen.getAllByText(/Synthetic demonstration data/)).toHaveLength(4);
    expect(screen.getByText(/not actual company sales/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link",{name:/browse github projects/i})).toHaveLength(5);
  });
});
