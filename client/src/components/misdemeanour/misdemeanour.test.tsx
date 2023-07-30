import { customRender as render } from "../../utils/testUtils";
import { screen, within } from "@testing-library/react";
import Misdemeanour from "./misdemeanour";

test("requests data from server when rendered", async () => {
  // Arrange
  render(<Misdemeanour amount={1} />);

  // Act
  const misdemeanourList = await screen.findByRole("list");
  const { getAllByRole } = within(misdemeanourList);
  const misdemeanors = getAllByRole("listitem");

  // Assert
  expect(misdemeanors).toHaveLength(1);
  expect(misdemeanors[0]).toMatchInlineSnapshot(`
    <li>
      <p>
        15568
      </p>
      <p>
        29/07/2023
      </p>
      <p>
        vegetables
      </p>
    </li>
  `);
});
