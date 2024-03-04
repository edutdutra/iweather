import {render, screen} from "@testing-library/react-native";
import {NextDays} from "@components/NextDays";
import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
    it("should be render day.", () => {
        render(
            <NextDays
                data={[
                    {day: '18/07', min: '30ºc', max: '32ºc', icon: clearDay, weather: 'Céu limpo'},
                    {day: '19/07', min: '34ºc', max: '36ºc', icon: clearDay, weather: 'Céu limpo'},
                    {day: '20/07', min: '32ºc', max: '34ºc', icon: clearDay, weather: 'Céu limpo'},
                    {day: '21/07', min: '38ºc', max: '40ºc', icon: clearDay, weather: 'Céu limpo'},
                    {day: '22/07', min: '23ºc', max: '29ºc', icon: clearDay, weather: 'Céu limpo'},
                ]}
            />
        )

        expect(screen.getByText('21/07')).toBeTruthy()
    })
})