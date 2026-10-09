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
      "Exploratory Data Analysis (EDA) with Python",
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

  it("labels illustrative datasets and links to project-specific demos and case studies",()=>{
    render(<Projects/>);
    expect(screen.getAllByText(/Synthetic demonstration data/)).toHaveLength(4);
    expect(screen.getByText(/not actual company sales/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link",{name:/view demo code/i}).map((link)=>link.getAttribute("href"))).toEqual([
      "https://github.com/marianodags/My-Portfolio/blob/main/src/components/Projects.jsx#L5",
      "https://github.com/marianodags/My-Portfolio/blob/main/src/components/Projects.jsx#L17",
      "https://github.com/marianodags/My-Portfolio/blob/main/src/components/Projects.jsx#L29",
      "https://github.com/marianodags/My-Portfolio/blob/main/src/components/Projects.jsx#L41",
      "https://github.com/marianodags/My-Portfolio/blob/main/src/components/Projects.jsx#L53",
    ]);
    expect(screen.getAllByRole("link",{name:/read case study/i}).map((link)=>link.getAttribute("href"))).toEqual([
      "provincial-gdp.html",
      "sql-sales.html",
      "python-eda.html",
    ]);
  });
});
