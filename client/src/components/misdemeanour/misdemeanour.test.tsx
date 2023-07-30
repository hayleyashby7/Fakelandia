import { customRender as render } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Misdemeanour from "./misdemeanour";

test("requests data from server when rendered", async () => {
  // Arrange
  render(<Misdemeanour amount={1} />);

  // Act
  const misdemeanours = await screen.findByRole("table");

  // Assert
  expect(misdemeanours).toMatchInlineSnapshot(`
    <table>
      <thead>
        <tr>
          <th>
            Citizen ID
          </th>
          <th>
            Date
          </th>
          <th>
            Misdemeanour
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            15568
          </td>
          <td>
            29/07/2023
          </td>
          <td>
            vegetables
          </td>
        </tr>
      </tbody>
    </table>
  `);
});
