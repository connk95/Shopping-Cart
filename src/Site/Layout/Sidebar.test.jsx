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
      <Sidebar department={mockDepartment} departmentList={departmentList} />
    );

    const sidebarElement = screen.getByText("mock list item");

    expect(sidebarElement).toBeInTheDocument();
  });

  test("renders className correctly to activeSidebar", () => {});

  test("renders className correctly to sidebarItem", () => {});
});
