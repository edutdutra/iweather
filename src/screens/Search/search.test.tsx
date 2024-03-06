import {api} from "@services/api";
import {Search} from "@screens/Search";
import {mockCityAPIResponse} from "@__tests__/mocks/api/mockCityAPIResponse";
import {render, screen, fireEvent, waitFor} from "@__tests__/utils/customRender";

describe("Screen: Search", () => {
    it('should be show city option', async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })

        render(<Search />)

        const searchInput = screen.getByTestId('search-input')
        fireEvent.changeText(searchInput, "São Paulo")

        const option = await waitFor(() => screen.findByText(/são paulo/i))

        expect(option).toBeTruthy()
    })
})