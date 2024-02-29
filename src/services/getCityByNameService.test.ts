import {api} from "@services/api";
import {getCityByNameService} from "@services/getCityByNameService";
import {mockCityAPIResponse} from "@__tests__/mocks/mockCityAPIResponse";


describe('API: getCityByNameService', () => {
    it("should return city details", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ mockCityAPIResponse })

        const response = await getCityByNameService('São Paulo')

        console.log(response)

        expect(response.length).toBeGreaterThan(0)
    })
});