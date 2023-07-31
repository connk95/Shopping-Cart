import Sidebar from "./Sidebar";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Sidebar", () => {
  const mockDepartment = "mock department";
  const mockSetDepartment = vi.fn();
  const mockDepartmentList = ["mock list item"];

  test("calls setDepartment correctly when list item is clicked", async () => {
    render(
      <Sidebar
        department={mockDepartment}
        setDepartment={mockSetDepartment}
        departmentList={mockDepartmentList}
      />
    );

    await userEvent.click(
      screen.getByTestId(`list-item-${mockDepartmentList[0]}`)
    );

    expect(mockSetDepartment).toHaveBeenCalledWith(mockDepartmentList[0]);
  });

  test("renders list correctly", () => {
    render(
      <Sidebar
        department={mockDepartment}
        departmentList={mockDepartmentList}
      />
    );

    const sidebarElement = screen.getByText("mock list item");

    expect(sidebarElement).toBeInTheDocument();
  });

  test("renders className correctly to activeSidebar", () => {
    const mockDepartmentListMatching = ["mock department"];

    render(
      <Sidebar
        department={mockDepartment}
        departmentList={mockDepartmentListMatching}
      />
    );

    const listItemElement = screen.getByTestId(
      `list-item-${mockDepartmentListMatching[0]}`
    );

    expect(listItemElement).toHaveClass("activeSidebar");
  });

  test("renders className correctly to sidebarItem", () => {
    render(
      <Sidebar
        department={mockDepartment}
        departmentList={mockDepartmentList}
      />
    );

    const listItemElement = screen.getByTestId(
      `list-item-${mockDepartmentList[0]}`
    );

    expect(listItemElement).toHaveClass("sidebarItem");
  });
});
