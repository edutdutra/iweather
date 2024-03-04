import {api} from "@services/api";
import {getWeatherByCityService} from "@services/getWeatherByCityService";
import {mockWeatherAPIResponse} from "@__tests__/mocks/api/mockWeatherAPIResponse";


describe('SERVICE: getWeatherByCityService', () => {
    it("should be return weather api data formatted", async () => {
        jest.spyOn(api, "get").mockResolvedValue({data: mockWeatherAPIResponse})
        const response = await getWeatherByCityService({latitude: 123, longitude: 456})

        expect(response).toHaveProperty("today")
    })
});