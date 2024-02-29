import {api} from "@services/api";
import {getCityByNameService} from "@services/getCityByNameService";
import {mockCityAPIResponse} from "@__tests__/mocks/mockCityAPIResponse";


describe('SERVICE: getCityByNameService', () => {
    it("should return city details", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })

        const response = await getCityByNameService('São Paulo')

        expect(response.length).toBeGreaterThan(0)
    })
});