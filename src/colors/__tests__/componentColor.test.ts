import { useSelector } from 'react-redux';
import { componentColor } from '@/colors';
import { Colors } from '@/colors';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

describe('componentColor', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('returns correct color for light theme', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue('light');

        Object.keys(Colors.light).forEach(component => {
            const color = componentColor(component as keyof typeof Colors.light);
            expect(color).toBe(Colors.light[component as keyof typeof Colors.light]);
        });
    });

    it('returns correct color for dark theme', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue('dark');

        Object.keys(Colors.dark).forEach(component => {
            const color = componentColor(component as keyof typeof Colors.dark);
            expect(color).toBe(Colors.dark[component as keyof typeof Colors.dark]);
        });
    });

    it('defaults to dark theme if theme is null', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(null);

        Object.keys(Colors.dark).forEach(component => {
            const color = componentColor(component as keyof typeof Colors.dark);
            expect(color).toBe(Colors.dark[component as keyof typeof Colors.dark]);
        });
    });
});
